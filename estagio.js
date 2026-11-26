// Informações de "Estágio: orientações para os discentes" (Coordenação de Estágio do curso, 2027).
// Carregado depois de regimento.js.
const EST_SOURCE = 'Fonte: Estágio – orientações para os discentes (Coordenação de Estágio de Administração, 2027)';
const EST_EMAIL = 'cleverson.nobrega@ufpi.edu.br';
const EST_ICON = 'M4 8h16v11H4z M9 8V5h6v3 M4 13h16';

TOPICS.push(
  {
    label: 'Estágio: onde e como posso estagiar',
    desc: 'Empresas conveniadas, seu trabalho, troca de setor.',
    icon: EST_ICON,
    keys: [],
    text: 'Onde estagiar: a Coordenadoria Geral de Estágio (CGE) publica a lista de empresas conveniadas para o estágio obrigatório: https://ufpi.br/lista-de-convenios-de-estagio-estagio-super-cge\nVocê pode escolher uma empresa com convênio vigente ou indicar outra. Nesse caso, o convênio é feito antes do compromisso de estágio\nA lista do estágio não obrigatório é outra: https://ufpi.br/lista-de-convenios-de-estagio-estagio-nao-supervisionado-cge\nMora fora de Picos? Pode estagiar na sua cidade\nNo seu trabalho (onde presta serviço)? Pode\nNo seu próprio negócio? Não, porque o estagiário precisa de um supervisor que o avalie\nObrigatório e não obrigatório ao mesmo tempo? Sim, com 30 h semanais em um Termo de Compromisso e 20 h no outro\nTrocar de setor durante o estágio? Sim, com um novo Termo de Compromisso\nEstágio II em outra empresa? Pode, mas o processo feito no Relatório de Estágio I deve ser refeito na elaboração do relatório',
    source: `${EST_SOURCE}, itens 1.1, 1.2 e 1.6 a 1.10`
  },
  {
    label: 'Estágio: carga horária e dias',
    desc: 'Horas totais, jornada e quantos dias são necessários.',
    icon: EST_ICON,
    keys: [],
    text: 'Carga horária total: Estágio I = 180 h; Estágio II = 120 h\nDias: de segunda a sexta-feira, em turno combinado com a organização\nJornada: 4 h ou 6 h por dia (20 h ou 30 h por semana)\nEstágio I: 45 dias úteis com 20 h semanais, ou 30 dias úteis com 30 h semanais\nEstágio II: 30 dias úteis com 20 h semanais, ou 20 dias úteis com 30 h semanais\nNa Ficha de Dados do Aluno, informe a carga horária SEMANAL e as datas de início e fim contando só os dias de segunda a sexta',
    source: `${EST_SOURCE}, itens 1.3 a 1.5 e 4.4`
  },
  {
    label: 'Estágio: cadastro passo a passo',
    desc: 'Convênio, cadastro e Termo de Compromisso no SIGAA.',
    icon: EST_ICON,
    keys: [],
    text: `1) Consulte as empresas conveniadas. Se já houver convênio, vá para o passo 3\n2) Sem convênio: envie a Ficha de Cadastro da Empresa para a concedente preencher, assinar e carimbar (ou assinar digitalmente). Preencha e assine a Ficha de Dados do Aluno. Envie os dois documentos para ${EST_EMAIL} com o assunto "Convênio". Aguarde o Termo de Convênio, colha as assinaturas (concedente e duas testemunhas) e devolva respondendo ao e-mail\n3) Solicite o cadastro: envie a Ficha de Dados do Aluno preenchida e assinada para ${EST_EMAIL} com o assunto "Cadastro de Estágio I" ou "Cadastro de Estágio II"\n4) Aguarde o e-mail avisando que o Termo de Compromisso está no portal do discente (SIGAA). Colha a assinatura e o carimbo da organização, assine, digitalize e envie pelo Portal do Discente\nO e-mail de envio é o do Coordenador de Estágio do curso, Prof. Dr. Cléverson Vasconcelos da Nóbrega`,
    source: `${EST_SOURCE}, item 2`
  },
  {
    label: 'Estágio: documentos e envio',
    desc: 'Como enviar, quem assina e o que fazer depois.',
    icon: EST_ICON,
    keys: [],
    text: `A documentação deve ser preenchida digitalmente, depois assinada e carimbada (ou assinada digitalmente), digitalizada com boa qualidade e enviada em um único PDF\nEnvie para ${EST_EMAIL} (Coordenador de Estágio do curso, Prof. Dr. Cléverson Vasconcelos da Nóbrega), com o assunto indicado no passo a passo\nTermo de Convênio e Termo de Compromisso devem ir completos, não só as páginas assinadas\nRepresentante legal: proprietário ou gestor responsável pela organização\nResponsável do estágio: sua chefia imediata no setor\nSupervisor de campo: quem conduz, distribui as atividades e avalia você na empresa\nProfessor orientador: o professor da disciplina de Estágio I ou II (confira no SIGAA)\nDepois que o estágio aparecer como aprovado no SIGAA, entregue o "Plano de Estágio" ao supervisor para definir as atividades\nDúvidas: https://ufpi.br/cge`,
    source: `${EST_SOURCE}, itens 3 a 6`
  }
);

// Acrescenta os dados do semestre ao assunto principal de estágio.
const mainInternship = TOPICS.find((t) => t.label === 'Estágio supervisionado');
mainInternship.text = 'Em 2027.1:\nCoordenador de Estágio do curso: Prof. Dr. Cléverson Vasconcelos da Nóbrega (cleverson.nobrega@ufpi.edu.br)\nOrientador de Estágio I: Prof. Dr. Cléverson Vasconcelos da Nóbrega\nOrientadora de Estágio II: Profª. Dra. Janayna Arruda Barroso\nCarga horária: Estágio I = 180 h; Estágio II = 120 h\nRegras gerais:\n'
  + mainInternship.text.replace('Carga horária e documentos do curso: [A CONFIRMAR]', 'Para o passo a passo e os documentos, veja os assuntos "Estágio" ou baixe as orientações em "Modelos e manuais"');
mainInternship.source += '; Estágio – orientações para os discentes (2027)';

/* ---------- respostas do assistente sobre estágio ---------- */
// Recebe a pergunta já sem acentos e em minúsculas. Devolve null se não for sobre estágio.
function answerInternship(n) {
  if (!/estagi|\bcge\b|conveni|supervisor|termo de compromisso|ficha de (dados|cadastro)|representante legal|responsavel do estagio/.test(n)) return null;
  const topic = (label) => TOPICS.find((t) => t.label === label);
  // Cronograma: as datas vêm do calendário acadêmico.
  if (/cronograma/.test(n)) {
    const text = Object.entries(CALENDAR).map(([sem, events]) => `${sem}:\n${events.filter(([type]) => type === 'estagio').map(line).join('\n')}`).join('\n');
    return { text, source: CAL_SOURCE };
  }
  if (/\bcge\b|coordenadoria geral/.test(n) && !/empresa|conveni|cadastr|document|enviar/.test(n)) {
    return { text: 'Site da Coordenadoria Geral de Estágio (CGE) da UFPI: https://ufpi.br/cge', source: 'Fonte: endereço informado pela Coordenação do curso' };
  }
  if (/coordenador|quem (e|sao) (o |a )?(meu |minha )?(professor|orientador)/.test(n)) return topic('Estágio supervisionado');
  if (/horas?\b|carga|jornada|quantos dias|dias da semana|quais dias|sabado|periodo de estagio/.test(n)) return topic('Estágio: carga horária e dias');
  if (/enviar|envio|e-?mail|assina|carimbo|documenta|representante|responsavel|supervisor|orientador|plano de estagio|depois do cadastro/.test(n)) return topic('Estágio: documentos e envio');
  if (/cadastr|passo|etapa|como (faco|fazer|comec|inici|solicit)|termo de compromisso|ficha|sigaa|fazer (o )?convenio/.test(n)) return topic('Estágio: cadastro passo a passo');
  if (/onde|empresa|cidade|fora de picos|meu trabalho|trabalho|negocio|proprietario|simultane|ao mesmo tempo|nao obrigatorio|trocar|mudar|setor|conveniad/.test(n)) return topic('Estágio: onde e como posso estagiar');
  return topic('Estágio supervisionado');
}
