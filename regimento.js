// Informações do Regimento Interno do CSHNB (Resolução CONSUN/UFPI nº 94/2022).
// Carregado depois de calendario.js: acrescenta assuntos que o assistente usa para responder.
const REG_SOURCE = 'Fonte: Regimento Interno do CSHNB (Resolução CONSUN/UFPI nº 94/2022)';

TOPICS.push(
  {
    label: 'Recursos e reconsideração',
    desc: 'Como contestar decisões da coordenação ou do colegiado.',
    icon: 'M12 3v18 M5 7h14 M5 7l-3 7h6z M19 7l-3 7h6z',
    keys: ['recurso', 'recorrer', 'reconsideracao', 'contestar', 'discordo', 'decisao', 'indeferido', 'indeferimento'],
    text: 'Contra atos e decisões do Coordenador, do Colegiado ou da Assembleia de Curso cabe pedido de reconsideração ao próprio órgão e/ou recurso ao Conselho do Campus\nDecisões do Diretor ou do Conselho do Campus: recurso ao CAD ou ao CEPEX, conforme a matéria, e em última instância ao CONSUN\nPrazo da reconsideração: até 10 dias corridos a partir da decisão\nEm regra o pedido não suspende a decisão enquanto é analisado, salvo se a execução imediata puder causar lesão irreparável de direitos\nCasos omissos no Regimento vão à Diretoria do Campus\nAlguns assuntos têm prazo próprio em outra norma (revisão de nota, aproveitamento de estudos, assistência estudantil). Confira o assunto específico',
    source: `${REG_SOURCE}, Art. 21 e 116`
  },
  {
    label: 'Representação estudantil',
    desc: 'CA, DCE, vagas de estudantes nos conselhos e Empresa Júnior.',
    icon: 'M9 11a3 3 0 100-6 3 3 0 000 6z M3 20v-2a5 5 0 0112 0v2 M16 5a3 3 0 010 6 M18 14a5 5 0 013 4v2',
    keys: ['representacao', 'representante', 'centro academico', ' ca ', 'dce', 'empresa junior', 'movimento estudantil'],
    text: 'Entidades estudantis: Diretório Central dos Estudantes (DCE 20 de junho), do campus, e Centro Acadêmico (CA), de cada curso. Têm autonomia e normas próprias\nA Diretoria do Campus deve buscar espaço físico e apoio administrativo para essas entidades\nEstudantes têm vaga na Assembleia de Curso e no Colegiado de Curso (1 representante em cada, com suplente, mandato de 1 ano)\nNo Conselho do Campus são 2 representantes estudantis titulares, com suplentes, mandato de 1 ano\nNa Comissão Setorial de Avaliação há 2 discentes, com suplentes\nA falta sem justificativa aceita a 3 reuniões seguidas ou 6 alternadas causa perda do mandato\nEmpresa Júnior: associação sem fins lucrativos, gerida só por alunos regularmente matriculados, com orientação de professores. A proposta de criação é aprovada pelo Colegiado do curso e homologada pelo Conselho do Campus',
    source: `${REG_SOURCE}, Art. 7, 9, 10, 15, 76 a 80, 101 e 111 a 114`
  },
  {
    label: 'Coordenação e órgãos do curso',
    desc: 'Coordenador, Colegiado, Assembleia, NDE e coordenações.',
    icon: 'M12 4v5 M5 15v-3h14v3 M12 9v6 M3 15h4v4H3z M10 15h4v4h-4z M17 15h4v4h-4z',
    keys: ['coordenador', 'subcoordenador', 'colegiado', 'assembleia', 'nde', 'nucleo docente', 'eleicao', 'coordenacao de estagio', 'coordenacao de tcc', 'coordenador de extensao', 'quem decide', 'reuniao'],
    text: 'Coordenador e Subcoordenador são escolhidos por eleição direta, com voto de alunos, professores e técnicos do curso. O voto docente tem peso de 70%\nAssembleia de Curso: primeira instância de decisão. Reúne coordenador, subcoordenador, professores efetivos do curso, 1 técnico-administrativo e 1 estudante\nColegiado de Curso: coordenador, subcoordenador, 2 docentes e 1 estudante\nA coordenação conta ainda com o Núcleo Docente Estruturante (NDE), que acompanha e atualiza o Projeto Pedagógico, e com as coordenações de Estágios, de TCC e de Extensão\nApoio técnico-administrativo da coordenação: atende a comunidade, acompanha editais, cuida de processos e documentos e opera o SIGAA e o SIPAC\nAs reuniões ordinárias são convocadas com pelo menos 48 horas de antecedência, com a pauta publicada',
    source: `${REG_SOURCE}, Art. 9, 10, 12, 25 a 28 e 74`
  },
  {
    label: 'Serviços do NAE',
    desc: 'Psicólogo, dentista, apoio pedagógico, brinquedoteca e amamentação.',
    icon: 'M12 3a9 9 0 100 18 9 9 0 000-18z M12 8v8 M8 12h8',
    keys: ['nae', 'psicolog', 'dentista', 'odontolog', 'brinquedoteca', 'amamentacao', 'amamentar', 'fraldario', 'filho', 'servico social', 'pedagogico', 'saude mental', 'acessibilidade', 'deficiencia'],
    text: 'O Núcleo de Assistência Estudantil (NAE) é o órgão multiprofissional de apoio ao estudante no campus\nServiço Social: análise socioeconômica, orientação sobre a seleção de benefícios e acompanhamento dos beneficiados\nServiço Pedagógico: orientação individual ou coletiva. Prioriza quem recebe benefício, mas atende os demais estudantes por procura espontânea\nServiço de Apoio Psicológico: aconselhamento para dificuldades emocionais ligadas à vida acadêmica e ações de saúde mental\nServiço Odontológico: diagnóstico, limpeza, restauração, extração simples e urgências, conforme as possibilidades do serviço\nBrinquedoteca: espaço para filhos de estudantes de graduação presencial regularmente matriculados\nSala de Apoio à Amamentação, com fraldário, para mães estudantes e trabalhadoras do campus\nEstudantes público da Educação Especial são acompanhados em conjunto com o Núcleo de Acessibilidade (NAU)\nHorários e agendamento: procure o NAE no campus. Se não souber como falar com o núcleo, escreva para a Coordenação do Curso: coordenacaoadmpicos@ufpi.edu.br',
    source: `${REG_SOURCE}, Art. 35 a 46`
  },
  {
    label: 'Biblioteca e Restaurante Universitário',
    desc: 'Ficha catalográfica, apoio à pesquisa e acesso ao RU.',
    icon: 'M4 19V5h4v14z M10 19V5h4v14z M16 6l4-1 2 13-4 1z',
    keys: ['biblioteca', 'ficha catalografica', 'catalografica', 'livro', 'acervo', 'restaurante', ' ru ', 'refeicao', 'refeitorio', 'cardapio', 'ficha do ru'],
    text: 'Biblioteca José Albano de Macêdo (setorial do campus):\nConfecciona a ficha catalográfica dos Trabalhos de Conclusão de Curso e de outras produções\nOrienta o uso das ferramentas de pesquisa, presencialmente ou on-line\nPromove cursos, palestras e eventos. O funcionamento segue regimento próprio (Res. CEPEX/UFPI nº 073/2018)\nRestaurante Universitário (RU):\nOferece alimentação à comunidade acadêmica, com acesso por fichas\nBolsistas com Isenção da Taxa de Alimentação têm acesso controlado pelo próprio RU\nHorários, valores e cardápio: procure o Restaurante Universitário (Divisão de Produção de Alimentos do RU de Picos). Dúvidas sobre a biblioteca: procure a própria Biblioteca José Albano de Macêdo',
    source: `${REG_SOURCE}, Art. 30 a 34`
  },
  {
    label: 'Extensão, pesquisa e laboratórios',
    desc: 'Atividades curriculares de extensão, núcleos e laboratórios.',
    icon: 'M9 3h6 M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3 M8 15h8',
    keys: ['extensao', ' ace ', 'pesquisa', 'laboratorio', 'nucleo de pesquisa', 'iniciacao cientifica', 'comite de etica', 'etica em pesquisa'],
    text: 'Cada curso tem um Coordenador de Extensão, que acompanha e orienta a inscrição dos alunos nas Atividades Curriculares de Extensão (ACEs), conforme o calendário e a oferta no SIGAA\nEle também levanta a cada semestre a demanda dos alunos por ACEs\nO campus tem Núcleos de Pesquisa e de Extensão, que envolvem docentes, técnicos e estudantes\nLaboratórios multidisciplinares: Ciências da Natureza e Saúde, Ciências Humanas e Sociais e Tecnologias de Informação e Comunicação\nPesquisas com seres humanos passam pelo Comitê de Ética em Pesquisa (CEP-UFPI/CSHNB)',
    source: `${REG_SOURCE}, Art. 54, 57 a 60, 68, 69, 108 e 109`
  }
);
