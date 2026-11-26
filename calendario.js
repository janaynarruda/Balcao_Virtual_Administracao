// Calendário acadêmico: Resolução CEPEX/UFPI nº 1.086, de 12/11/2026. Edite aqui as datas.
// Carregado depois de data.js: cria os prazos, os assuntos de calendário e as respostas por data.
const CAL_SOURCE = 'Fonte: Resolução CEPEX/UFPI nº 1.086/2026 (Calendário Acadêmico)';
const CAL_PDF = 'Calendario_Academico_Res_CEPEX_1086_2026.pdf';

// Tipos de evento: nome exibido, palavras que o aluno pode usar e se entra na linha do tempo.
const EVENT_TYPES = {
  proposta:      { name: 'Proposta de matrícula on-line (Portal do Discente)', keys: ['matricula', 'proposta'], timeline: true },
  ajuste:        { name: 'Ajuste de matrícula (cancelamento e acréscimo de disciplina)', keys: ['matricula', 'ajuste', 'acrescimo', 'acrescentar', 'cancelar disciplina'], timeline: true },
  extra:         { name: 'Matrícula extraordinária em vagas remanescentes', keys: ['matricula', 'extraordinaria', 'remanescente'], timeline: false },
  trancCurso:    { name: 'Trancamento de matrícula no curso', keys: ['tranc', 'trancar o curso', 'trancar curso', 'trancamento de curso', 'trancamento do curso', 'trancar matricula', 'trancar a matricula', 'trancamento de matricula'], timeline: true },
  trancDisc:     { name: 'Trancamento de disciplina', keys: ['tranc', 'disciplina', 'materia'], requires: ['tranc'], timeline: true },
  aproveitamento:{ name: 'Solicitação de aproveitamento de estudos (dispensa)', keys: ['aproveit', 'dispensa'], timeline: true },
  inicio:        { name: 'Início das aulas', keys: ['inicio', 'comeca', 'volta as aulas', 'aulas'], timeline: true },
  fim:           { name: 'Conclusão das aulas', keys: ['fim das aulas', 'final das aulas', 'termin', 'conclusao', 'encerra', 'acaba', 'aulas'], timeline: true },
  exame:         { name: 'Último dia do exame final', keys: ['exame', 'prova final'], timeline: true },
  bimestre2:     { name: 'Início do 2º bimestre', keys: ['bimestre'], timeline: false },
  ac:            { name: 'Registro de atividades complementares pelos discentes', keys: ['complementar', 'horas'], timeline: true },
  ace:           { name: 'Registro de atividades curriculares de extensão (ACE)', keys: ['extensao', ' ace '], timeline: false },
  estagio:       { name: 'Publicação do cronograma de cadastro de estágio obrigatório (CGE/PREG)', keys: ['estagio'], timeline: false },
  monitoria:     { name: 'Inscrição de candidatos à monitoria (SIGAA)', keys: ['monitor'], timeline: false },
  formandos:     { name: 'Disciplina em caráter especial (só possíveis formandos)', keys: ['formando', 'carater especial'], timeline: false },
  acolhida:      { name: 'Acolhida Acadêmico-Cultural', keys: ['acolhida'], timeline: false },
  turno:         { name: 'Solicitação de mudança ou permuta de turno', keys: ['turno', 'permuta'], timeline: false },
  especial:      { name: 'Ingresso como aluno especial ou em Mobilidade Estudantil', keys: ['aluno especial', 'mobilidade'], timeline: false },
  editalMob:     { name: 'Publicação do edital de Mobilidade Estudantil Nacional (ANDIFES)', keys: ['mobilidade', 'andifes', 'intercambio'], timeline: false },
  avaliacao:     { name: 'Avaliação docente', keys: ['avaliacao docente', 'avaliar professor', 'avaliar o professor'], timeline: false },
  jufpi:         { name: 'Jogos Universitários (JUFPI) e Festival Paradesportivo', keys: ['jufpi', 'jogos'], timeline: false },
  siufpi:        { name: 'Seminários Integrados da UFPI (SiUFPI), sem aulas convencionais nem avaliações', keys: ['siufpi', 'seminarios integrados'], timeline: false }
};

// [tipo, início, fim, observação]
const CALENDAR = {
  '2027.1': [
    ['proposta', '2027-02-22', '2027-02-26'],
    ['trancCurso', '2027-02-22', '2027-04-23'],
    ['ajuste', '2027-03-04', '2027-03-05'],
    ['inicio', '2027-03-09', '2027-03-09'],
    ['estagio', '2027-03-09', '2027-03-09', 'mesmo dia do início das aulas; os prazos para cadastrar o estágio vêm nesse cronograma: https://ufpi.br/cge'],
    ['acolhida', '2027-03-09', '2027-03-10'],
    ['formandos', '2027-03-09', '2027-03-11'],
    ['monitoria', '2027-03-09', '2027-03-12'],
    ['trancDisc', '2027-03-09', '2027-04-23'],
    ['aproveitamento', '2027-03-09', '2027-04-23'],
    ['extra', '2027-03-17', '2027-03-19'],
    ['editalMob', '2027-04-09', '2027-04-09', 'para 2027.2'],
    ['ac', '2027-05-03', '2027-06-11', 'validação pela coordenação até 18/06/2027'],
    ['ace', '2027-05-03', '2027-06-11', 'análise até 18/06/2027'],
    ['bimestre2', '2027-05-12', '2027-05-12'],
    ['especial', '2027-06-10', '2027-06-11', 'para 2027.2'],
    ['turno', '2027-06-10', '2027-06-11', 'para 2027.2'],
    ['fim', '2027-07-12', '2027-07-12'],
    ['exame', '2027-07-14', '2027-07-14'],
    ['avaliacao', '2027-07-19', '2027-07-23']
  ],
  '2027.2': [
    ['proposta', '2027-07-26', '2027-07-30'],
    ['trancCurso', '2027-07-26', '2027-09-17'],
    ['ajuste', '2027-08-05', '2027-08-06'],
    ['inicio', '2027-08-10', '2027-08-10'],
    ['estagio', '2027-08-10', '2027-08-10', 'mesmo dia do início das aulas; os prazos para cadastrar o estágio vêm nesse cronograma: https://ufpi.br/cge'],
    ['acolhida', '2027-08-10', '2027-08-11'],
    ['formandos', '2027-08-10', '2027-08-12'],
    ['monitoria', '2027-08-10', '2027-08-13'],
    ['trancDisc', '2027-08-10', '2027-09-17'],
    ['aproveitamento', '2027-08-10', '2027-09-17'],
    ['extra', '2027-08-19', '2027-08-20'],
    ['jufpi', '2027-09-12', '2027-09-30', 'datas específicas em edital'],
    ['editalMob', '2027-09-13', '2027-09-13', 'para 2028.1'],
    ['ac', '2027-09-27', '2027-10-29', 'validação pela coordenação até 05/11/2027'],
    ['ace', '2027-09-27', '2027-10-29', 'análise até 05/11/2027'],
    ['especial', '2027-10-13', '2027-10-14', 'para 2028.1'],
    ['bimestre2', '2027-10-18', '2027-10-18'],
    ['siufpi', '2027-11-08', '2027-11-12'],
    ['turno', '2027-11-16', '2027-11-17', 'para 2028.1'],
    ['fim', '2027-12-18', '2027-12-18'],
    ['exame', '2027-12-21', '2027-12-21'],
    ['avaliacao', '2027-12-23', '2027-12-28']
  ]
};

// Feriados e dias sem aula que valem para o campus de Picos (CSHNB).
const HOLIDAYS = {
  '2027.1': 'Dia do Bem Viver (sem aula): 25/03 e 28/05\nFeriados: 26/03 (Sexta-feira Santa), 21/04 (Tiradentes), 01/05 (Dia do Trabalho) e 27/05 (Corpus Christi)',
  '2027.2': 'Dia do Bem Viver (sem aula): 11, 13 e 14/10\nRecesso acadêmico: 15/10\nFeriados nacionais e estadual: 07/09, 12/10, 19/10 (Dia do Piauí), 02/11, 15/11 e 20/11\nFeriados municipais de Picos: 15/08, 04/10 e 12/12\nPonto facultativo: 28/10 (Dia do Servidor Público)\nRecesso acadêmico: 24/12/2027 a 01/01/2028'
};

const br = (iso) => iso.split('-').reverse().join('/');
const period = (start, end) => {
  if (start === end) return br(start);
  const nextDay = new Date(start + 'T12:00:00');
  nextDay.setDate(nextDay.getDate() + 1);
  const joint = nextDay.toISOString().slice(0, 10) === end ? ' e ' : ' a ';
  const first = start.slice(0, 7) === end.slice(0, 7) ? start.slice(8) : br(start).slice(0, 5);
  return first + joint + br(end);
};
const line = ([type, start, end, note]) => `${EVENT_TYPES[type].name}: ${period(start, end)}${note ? ` (${note})` : ''}`;

/* ---------- prazos da linha do tempo ---------- */
const OLD = [
  ['Conclusão das aulas de 2026.2', '2026-12-14', '2026-12-14'],
  ['Último dia do exame final de 2026.2', '2026-12-16', '2026-12-16'],
  ['Atividades complementares: registro pelos discentes (validação até 29/01)', '2027-01-18', '2027-01-22']
];
const DEADLINES = OLD.map(([name, start, end]) => ({ name, start, end }))
  .concat(Object.entries(CALENDAR).flatMap(([sem, events]) => events
    .filter(([type]) => EVENT_TYPES[type].timeline)
    .map(([type, start, end, note]) => ({ name: `${EVENT_TYPES[type].name}, ${sem}`, start, end, note }))))
  .map((d) => ({ ...d, label: period(d.start, d.end), source: d.note || 'Resolução CEPEX/UFPI nº 1.086/2026' }))
  .sort((a, b) => a.start.localeCompare(b.start));

/* ---------- assuntos de calendário ---------- */
const CAL_ICON = 'M4 6h16v14H4z M4 10h16 M8 3v4 M16 3v4';
Object.keys(CALENDAR).forEach((sem) => TOPICS.push({
  label: `Calendário ${sem}`,
  desc: `Todas as datas do semestre ${sem} para o estudante.`,
  icon: CAL_ICON,
  text: `Datas de ${sem}:\n` + CALENDAR[sem].map(line).join('\n'),
  source: CAL_SOURCE
}));
TOPICS.push({
  label: 'Feriados e dias não letivos',
  desc: 'Feriados, recessos e Dias do Bem Viver em Picos.',
  icon: CAL_ICON,
  text: Object.entries(HOLIDAYS).map(([sem, text]) => `Período ${sem}:\n${text}`).join('\n') + '\nOs sábados dentro do período letivo são dias letivos, exceto feriados e recessos',
  source: CAL_SOURCE
});

/* ---------- respostas do assistente sobre datas ---------- */
// Recebe a pergunta já sem acentos e em minúsculas. Devolve null se não for uma pergunta de data.
function answerCalendar(question) {
  const n = ' ' + question.replace(/[?!,;:]/g, ' ') + ' ';
  const code = n.match(/(?:2027|\b27)\s*[./-]\s*([12])\b/);
  let sem = code ? `2027.${code[1]}` : null;
  if (!sem && /(primeiro|1o|1º) semestre/.test(n)) sem = '2027.1';
  if (!sem && /(segundo|2o|2º) semestre/.test(n)) sem = '2027.2';

  const topic = (label) => TOPICS.find((t) => t.label === label);
  if (/feriado|bem viver|recesso|carnaval|ponto facultativo|dia(s)? (nao )?letivo|tem aula/.test(n)) return topic('Feriados e dias não letivos');

  const asksDate = sem || /quando|\bdata|prazo|que dia|ate que|calendario|periodo de|comeca|termin|inicio|acaba/.test(n);
  if (!asksDate) return null;
  // Os anos de 2026 ficam fora desta busca.
  if (/2026/.test(n)) return null;

  const scores = Object.entries(EVENT_TYPES).map(([type, e]) => {
    if (e.requires && !e.requires.some((k) => n.includes(k))) return [type, 0];
    return [type, e.keys.filter((k) => n.includes(k)).length];
  });
  const best = Math.max(...scores.map(([, s]) => s));
  const types = scores.filter(([, s]) => s === best && s > 0).map(([type]) => type);

  if (!types.length) {
    if (sem) return /calendario|datas|prazos|semestre|2027/.test(n) ? topic(`Calendário ${sem}`) : null;
    return /calendario/.test(n) ? topic('Calendário e prazos') : null;
  }
  const blocks = (sem ? [sem] : Object.keys(CALENDAR)).map((s) => {
    const lines = CALENDAR[s].filter(([type]) => types.includes(type)).map(line);
    return lines.length ? `${s}:\n${lines.join('\n')}` : '';
  }).filter(Boolean);
  return blocks.length ? { text: blocks.join('\n'), source: CAL_SOURCE } : null;
}
