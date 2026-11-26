(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  /* ---------- tema ---------- */
  const root = document.documentElement;
  const saved = (() => { try { return localStorage.getItem('balcao-tema'); } catch { return null; } })();
  root.dataset.theme = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  $('#theme').onclick = () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('balcao-tema', root.dataset.theme); } catch {}
  };

  /* ---------- toast ---------- */
  let tt;
  const toast = (m) => { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2200); };
  const copy = async (text, msg = 'Copiado') => {
    try { await navigator.clipboard.writeText(text); toast(msg); } catch { toast('Não foi possível copiar'); }
  };

  /* ---------- menu mobile ---------- */
  $('#burger').onclick = () => { const o = $('#nav').classList.toggle('open'); $('#burger').setAttribute('aria-expanded', o); };
  $$('#nav a').forEach((a) => a.addEventListener('click', () => $('#nav').classList.remove('open')));

  /* ---------- números do topo ---------- */
  const totals = $$('#stats b');
  totals[0].dataset.count = TOPICS.length;
  totals[1].dataset.count = DEADLINES.length;

  /* ---------- cartões de assuntos ---------- */
  const grid = $('#grid');
  grid.innerHTML = TOPICS.map((t, i) => `
    <button class="card reveal" type="button" data-i="${i}">
      <span class="ic"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${t.icon}"/></svg></span>
      <strong>${esc(t.label)}</strong>
      <span class="d">${esc(t.desc)}</span>
      <span class="go">Ver resposta →</span>
    </button>`).join('');

  const dlg = $('#dlg');
  let current = null;
  const fmt = (t) => esc(t)
    .replace(/([\w.-]+@ufpi\.edu\.br)/g, '<a href="mailto:$1">$1</a>')
    .replace(/https:\/\/ufpi\.br\/[\w\/-]+|www\.ufpi\.br\/praec/g, (url) => `<a href="${url.startsWith('http') ? url : 'https://' + url}" target="_blank" rel="noopener">${url}</a>`);
  const openTopic = (i) => {
    const t = TOPICS[i]; current = i;
    $('#dlg-t').textContent = t.label;
    $('#dlg-b').innerHTML = fmt(t.text) + `<span class="src">${esc(t.source)}</span>`;
    dlg.showModal ? dlg.showModal() : dlg.setAttribute('open', '');
  };
  grid.addEventListener('click', (e) => { const c = e.target.closest('.card'); if (c) openTopic(+c.dataset.i); });
  $('#dlg-x').onclick = () => dlg.close();
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  $('#dlg-copy').onclick = () => copy(`${TOPICS[current].label}\n\n${TOPICS[current].text}\n\n${TOPICS[current].source}`, 'Resposta copiada');
  $('#dlg-ask').onclick = () => { dlg.close(); ask(TOPICS[current].label); $('#chat').scrollIntoView({ behavior: 'smooth', block: 'center' }); };

  /* filtro */
  $('#filter').addEventListener('input', (e) => {
    const q = norm(e.target.value.trim());
    let n = 0;
    $$('.card', grid).forEach((c) => {
      const t = TOPICS[+c.dataset.i];
      const ok = !q || norm(t.label + ' ' + t.desc + ' ' + t.text).includes(q);
      c.hidden = !ok; if (ok) n++;
    });
    $('#empty').hidden = n > 0;
  });

  /* ---------- chat ---------- */
  const msgs = $('#msgs');
  const SYN = {
    'Matrícula e trancamento': ['matricula', 'matricular', 'ajuste', 'trancar disciplina', 'proposta de matricula', 'vaga'],
    'Aproveitamento de disciplinas': ['aproveitamento', 'aproveitar', 'equivalencia', 'dispensa', 'convalidar'],
    'Estágio supervisionado': ['estagio', 'estagiar', 'convenio', 'supervisor'],
    'TCC': ['tcc', 'coordenador de tcc', 'coordenador do tcc', 'coordenacao de tcc', 'monografia', 'artigo', 'orientador', 'orientacao', 'banca', 'defesa', 'formatacao', 'margem', 'abnt', 'termo de aceite'],
    'Atividades complementares': ['atividade complementar', 'atividades complementares', 'horas complementares', 'complementares', 'ac '],
    'Notas, frequência e aprovação': ['nota', 'media', 'aprovado', 'reprovado', 'reprovacao', 'frequencia', 'exame final', 'revisao de nota', 'recurso de nota', 'recurso da nota', 'recurso da prova', 'segunda chamada', 'prova'],
    'Faltas e exercícios domiciliares': ['falta', 'faltas', 'domiciliar', 'atestado', 'gestante', 'licenca'],
    'Trancamento de curso': ['trancamento de curso', 'trancar o curso', 'trancar curso', 'cancelamento', 'abandono'],
    'Colação de grau e documentos': ['colacao', 'formatura', 'diploma', 'historico', 'colar grau', 'laurea', 'declaracao'],
    'Mudança de turno e mobilidade': ['turno', 'permuta', 'mobilidade', 'intercambio', 'transferencia'],
    'Calendário e prazos': ['calendario', 'prazo', 'prazos', 'quando', 'data', 'inicio das aulas', 'feriado'],
    'Semestres e disciplinas': ['semestre', 'bloco', 'disciplina', 'grade', 'curriculo', 'pre-requisito', 'prerrequisito', 'optativa', 'ementa', 'matriz'],
    'Setores e serviços do campus': ['setor', 'secretaria', ' scg ', 'onde fica', 'servico'],
    'Assistência estudantil': ['bolsa', 'auxilio', 'assistencia estudantil', 'praec', 'moradia', 'residencia', 'creche', 'alimentacao']
  };
  const FALLBACK = 'Não encontrei essa informação na base de documentos. Posso encaminhar sua dúvida à coordenação: escreva para ' + CONTACT_EMAIL + '.';
  const find = (q) => {
    const n = ' ' + norm(q).replace(/[?!.,;:]/g, ' ') + ' ';
    const exact = TOPICS.find((t) => norm(t.label) === norm(q));
    if (exact) return exact;
    let best = null, score = 0;
    TOPICS.forEach((t) => {
      let s = 0;
      (SYN[t.label] || t.keys || []).forEach((k) => { if (n.includes(k)) s += k.length > 5 ? 3 : 2; });
      norm(t.label).split(/\W+/).filter((w) => w.length > 3).forEach((w) => { if (n.includes(w)) s += 2; });
      if (s > score) { score = s; best = t; }
    });
    return score >= 2 ? best : null;
  };
  const add = (cls, html) => { const d = document.createElement('div'); d.className = 'm ' + cls; d.innerHTML = html; msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; return d; };
  const greet = () => add('bot', 'Olá! Eu respondo dúvidas sobre o curso de Administração com base nos documentos oficiais. Escolha um tema abaixo ou escreva sua pergunta.');
  function ask(q) {
    add('me', esc(q));
    const typing = add('bot', '<span class="typing"><i></i><i></i><i></i></span>');
    setTimeout(() => {
      const t = TOPICS.find((x) => norm(x.label) === norm(q)) || answerCalendar(norm(q)) || answerInternship(norm(q)) || find(q);
      if (!t) { typing.innerHTML = fmt(FALLBACK); }
      else {
        typing.innerHTML = fmt(t.text) + `<small>${esc(t.source)}</small><div class="acts"><button type="button" data-copy>Copiar</button>${TOPICS.includes(t) ? `<button type="button" data-open="${TOPICS.indexOf(t)}">Abrir em tela cheia</button>` : ''}</div>`;
      }
      msgs.scrollTop = msgs.scrollHeight;
    }, 550);
  }
  window.ask = ask;
  msgs.addEventListener('click', (e) => {
    const c = e.target.closest('[data-copy]'); const o = e.target.closest('[data-open]');
    if (c) copy(c.closest('.m').innerText.replace(/Copiar\s*(Abrir em tela cheia)?\s*$/, '').trim(), 'Resposta copiada');
    if (o) openTopic(+o.dataset.open);
  });
  ['Matrícula e trancamento', 'Estágio supervisionado', 'TCC', 'Calendário e prazos', 'Assistência estudantil'].forEach((l) => {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = l; b.onclick = () => ask(l); $('#chips').appendChild(b);
  });
  $('#form').addEventListener('submit', (e) => { e.preventDefault(); const i = $('#q'); const v = i.value.trim(); if (!v) return; i.value = ''; ask(v); });
  $('#clear').onclick = () => { msgs.innerHTML = ''; greet(); };
  greet();

  /* ---------- prazos ---------- */
  const parse = (s) => new Date(s + 'T00:00:00');
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const days = (a, b) => Math.round((a - b) / 864e5);
  const tl = $('#timeline');
  let nextIdx = DEADLINES.findIndex((d) => parse(d.end) >= today);
  tl.innerHTML = DEADLINES.map((d, i) => {
    const s = parse(d.start), e = parse(d.end);
    const cls = e < today ? 'past' : (s <= today ? 'now' : (days(s, today) <= 14 ? 'soon' : ''));
    const tag = cls === 'now' ? '<span class="tag">em andamento</span>' : (cls === 'soon' ? `<span class="tag">em ${days(s, today)} dias</span>` : '');
    return `<li class="tl reveal ${cls}"><div><b>${esc(d.name)}${tag}</b><small>${esc(d.source)}</small></div><span class="dt">${esc(d.label)}</span></li>`;
  }).join('');
  const nx = $('#next');
  if (nextIdx >= 0) {
    const d = DEADLINES[nextIdx], s = parse(d.start), n = days(s, today);
    const running = s <= today;
    nx.innerHTML = `<span class="big" data-count="${running ? 0 : n}">${running ? 'Agora' : n}</span><div><small>${running ? 'Em andamento' : (n === 1 ? 'dia para o próximo prazo' : 'dias para o próximo prazo')}</small><strong>${esc(d.name)}</strong><small>${esc(d.label)}</small></div>`;
  } else { nx.hidden = true; }

  /* ---------- e-mail ---------- */
  $('#copy').onclick = () => copy(CONTACT_EMAIL, 'E-mail copiado');

  /* ---------- rolagem: progresso, topo, menu ativo ---------- */
  const bar = $('#progress'), up = $('#toTop'), head = $('#top');
  const links = $$('#nav a:not(.nav-cta)');
  const secs = links.map((a) => $(a.getAttribute('href')));
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    up.classList.toggle('show', h.scrollTop > 700);
    head.classList.toggle('scrolled', h.scrollTop > 8);
    let on = -1; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 140) on = i; });
    links.forEach((a, i) => a.classList.toggle('on', i === on));
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  up.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

  /* ---------- revelar ao rolar + contadores ---------- */
  const count = (el) => {
    const to = +el.dataset.count; if (!to) return; let v = 0;
    const step = () => { v += Math.max(1, Math.ceil(to / 24)); if (v >= to) { el.textContent = to; return; } el.textContent = v; requestAnimationFrame(step); };
    step();
  };
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); $$('[data-count]', e.target).forEach(count); if (e.target.matches('[data-count]')) count(e.target); io.unobserve(e.target); }
  }), { threshold: .12 });
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms'; io.observe(el); });
  $$('#stats b').forEach(count);
})();
