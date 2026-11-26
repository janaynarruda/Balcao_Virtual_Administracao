// Dentro do artefato os links de download comuns nao funcionam: usa a funcao de download do visualizador.
(() => {
  const FILES = {'Calendario_Academico_Res_CEPEX_1086_2026.pdf':'docs/d0.js','Manual_de_TCC_II_artigo.docx':'docs/d1.js','Orientacoes_de_Estagio_Administracao.pdf':'docs/d2.js','Regimento_Interno_CSHNB.pdf':'docs/d3.js','Termo_de_Aceite_TCC_II.docx':'docs/d4.js','Regulamento_Geral_Graduacao_UFPI.pdf':'docs/d5.js'};
  const say = (m) => { const t = document.getElementById('toast'); t.textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3500); };
  const load = (name) => new Promise((ok, fail) => {
    if (window.__DOCS && window.__DOCS[name]) return ok(window.__DOCS[name]);
    const s = document.createElement('script'); s.src = FILES[name];
    s.onload = () => ok(window.__DOCS[name]); s.onerror = fail; document.head.appendChild(s);
  });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest('a[href]'); if (!a) return;
    const name = a.getAttribute('href'); if (!FILES[name]) return;
    e.preventDefault();
    try {
      // cópia no computador: o próprio navegador salva o arquivo
      if (location.protocol === 'file:' || !window.claude) {
        const bytes = Uint8Array.from(atob(await load(name)), (c) => c.charCodeAt(0));
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([bytes], { type: 'application/octet-stream' }));
        link.download = name;
        document.body.appendChild(link); link.click(); link.remove();
        setTimeout(() => URL.revokeObjectURL(link.href), 10000);
        return say('Download iniciado');
      }
      const downloads = await window.claude.use('downloads');
      if (!downloads) return say('O download não está disponível nesta visualização');
      say('Preparando o arquivo...');
      const bytes = Uint8Array.from(atob(await load(name)), (c) => c.charCodeAt(0));
      await downloads.save({ filename: name, data: new Blob([bytes]) });
    } catch (err) {
      if (!err || err.code !== 'declined') say('Não foi possível baixar o arquivo');
    }
  });
})();