const questionBank = [
    // OTOLOGIA
    { banca: 'FUNDATEC', question: 'Estão entre as causas de Paralisia Facial Periférica, EXCETO:', options: ['Infecção pelo vírus Herpes Zoster (Síndrome de Ramsay Hunt)', 'Doença de Lyme', 'Schwannoma Vestibular', 'Esclerose Múltipla', 'Otite Média Aguda'], answer: 'Esclerose Múltipla', explanation: 'A Esclerose Múltipla é uma causa clássica de paralisia facial de origem CENTRAL. As outras opções são causas conhecidas de paralisia facial periférica.' },
    { banca: 'VUNESP', question: 'Paciente de 4 anos é trazido à emergência com febre alta, otalgia intensa à direita e abaulamento da membrana timpânica. Qual a conduta mais apropriada?', options: ['Observação e analgesia por 48-72h', 'Amoxicilina em dose alta', 'Miringotomia de urgência', 'Ciprofloxacino otológico', 'Corticoterapia sistêmica'], answer: 'Amoxicilina em dose alta', explanation: 'O quadro é típico de Otite Média Aguda (OMA). Em crianças menores de 2 anos ou com quadro severo (otalgia intensa/febre alta), a antibioticoterapia sistêmica com amoxicilina é a primeira linha.' },
    { banca: 'IBFC', question: 'Paciente diabético, idoso, apresenta otalgia intensa, otorreia purulenta e paralisia facial. A otoscopia revela tecido de granulação no meato acústico externo. Qual o diagnóstico mais provável?', options: ['Otite Média Crônica Colesteatomatosa', 'Otite Externa Necrotizante', 'Carcinoma de Células Escamosas do CAE', 'Otite Média Aguda com mastoidite', 'Pólipo inflamatório'], answer: 'Otite Externa Necrotizante', explanation: 'A tríade de paciente diabético/imunocomprometido, otalgia severa e granulação no canal auditivo externo é patognomônica da Otite Externa Necrotizante (ou maligna).' },
    { banca: 'VUNESP', question: 'Qual o tratamento de primeira linha para a Vertigem Posicional Paroxística Benigna (VPPB) do canal semicircular posterior?', options: ['Manobra de Epley', 'Manobra de Semont', 'Medicamentos labirinto-supressores', 'Reabilitação vestibular', 'Manobra de Barbecue'], answer: 'Manobra de Epley', explanation: 'A Manobra de Epley é o tratamento de escolha para a VPPB do canal posterior, que é a forma mais comum, visando o reposicionamento dos otólitos. A manobra de Barbecue é para o canal horizontal.' },
    { banca: 'VUNESP', question: 'Paciente refere perda auditiva súbita no ouvido direito há 24 horas, acompanhada de zumbido. A audiometria confirma perda neurossensorial de grau severo. Qual a conduta terapêutica inicial padrão?', options: ['Observação e reavaliação em 7 dias', 'Antibioticoterapia de amplo espectro', 'Corticoterapia sistêmica em altas doses', 'Cirurgia exploratória da orelha média', 'Uso de vasodilatadores'], answer: 'Corticoterapia sistêmica em altas doses', explanation: 'A surdez súbita idiopática é uma emergência otorrinolaringológica. O tratamento padrão-ouro é o início imediato de corticoides sistêmicos (ex: prednisona) em altas doses.' },
    { banca: 'FUNDATEC', question: 'A tríade clássica da Doença de Ménière é composta por:', options: ['Vertigem, perda auditiva flutuante e plenitude aural', 'Vertigem, zumbido e otalgia', 'Perda auditiva, zumbido e otorreia', 'Plenitude aural, cefaleia e vertigem', 'Zumbido pulsátil, vertigem e perda auditiva condutiva'], answer: 'Vertigem, perda auditiva flutuante e plenitude aural', explanation: 'A tríade clássica da Doença de Ménière consiste em episódios de vertigem rotatória, perda auditiva neurossensorial flutuante (geralmente em baixas frequências) e sensação de pressão ou plenitude no ouvido afetado. O zumbido também é comum.' },
    { banca: 'IBFC', question: 'Sobre a otosclerose, é INCORRETO afirmar:', options: ['É uma osteodistrofia da cápsula ótica.', 'Causa primariamente uma perda auditiva condutiva progressiva.', 'O sinal de Schwartze (mancha avermelhada na otoscopia) é um achado comum.', 'O tratamento pode ser feito com estapedotomia ou uso de aparelhos auditivos.', 'Afeta mais comumente homens na quinta década de vida.'], answer: 'Afeta mais comumente homens na quinta década de vida.', explanation: 'A otosclerose é mais prevalente em mulheres, geralmente se manifestando entre a segunda e a quarta décadas de vida. O sinal de Schwartze, embora patognomônico, é raro.' },
    { banca: 'FUNDATEC', question: 'Na otite média crônica colesteatomatosa, o principal objetivo do tratamento cirúrgico é:', options: ['Melhorar a audição do paciente.', 'Erradicar a doença e criar uma orelha seca e segura.', 'Fechar a perfuração timpânica.', 'Reduzir o zumbido.', 'Prevenir a extrusão do tubo de ventilação.'], answer: 'Erradicar a doença e criar uma orelha seca e segura.', explanation: 'O objetivo primário da cirurgia para colesteatoma é a remoção completa da doença para prevenir complicações graves (como meningite, abscesso cerebral). A melhora da audição é um objetivo secundário.' },
    { banca: 'VUNESP', question: 'Qual o agente etiológico mais comum da otite externa difusa aguda ("ouvido de nadador")?', options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Pseudomonas aeruginosa', 'Moraxella catarrhalis', 'Aspergillus niger'], answer: 'Pseudomonas aeruginosa', explanation: 'Pseudomonas aeruginosa é o patógeno mais frequentemente isolado em casos de otite externa difusa, seguido pelo Staphylococcus aureus.' },
    { banca: 'IBFC', question: 'Um audiograma com gap aéreo-ósseo significativo, especialmente em 2000 Hz (entalhe de Carhart), é sugestivo de qual patologia?', options: ['Surdez súbita', 'Presbiacusia', 'Doença de Ménière', 'Otosclerose', 'Schwannoma vestibular'], answer: 'Otosclerose', explanation: 'O entalhe de Carhart, uma queda na condução óssea em 2000 Hz, é um achado audiométrico clássico associado à fixação da platina do estribo na otosclerose.' },

    // RINOLOGIA
    { banca: 'FUNDATEC', question: 'Criança de 3 anos apresenta rinorreia unilateral, fétida e purulenta há uma semana, sem outros sintomas. Qual a principal hipótese diagnóstica?', options: ['Rinossinusite bacteriana aguda', 'Corpo estranho nasal', 'Rinite alérgica', 'Adenoidite', 'Pólipo antrocoanal'], answer: 'Corpo estranho nasal', explanation: 'Rinorreia unilateral e fétida em uma criança é considerada corpo estranho nasal até que se prove o contrário. É um quadro clássico e muito cobrado.' },
    { banca: 'FUNDATEC', question: 'No manejo da epistaxe anterior, qual estrutura anatômica é mais comumente a fonte do sangramento?', options: ['Artéria etmoidal posterior', 'Plexo de Kiesselbach', 'Artéria esfenopalatina', 'Artéria etmoidal anterior', 'Plexo de Woodruff'], answer: 'Plexo de Kiesselbach', explanation: 'O Plexo de Kiesselbach, localizado na porção anteroinferior do septo nasal, é responsável por mais de 90% das epistaxes, especialmente as anteriores.' },
    { banca: 'VUNESP', question: 'Qual dos seguintes é um critério maior para o diagnóstico de Rinossinusite Bacteriana Aguda em adultos?', options: ['Tosse', 'Cefaleia', 'Halitose', 'Obstrução nasal', 'Otalgia'], answer: 'Obstrução nasal', explanation: 'Os critérios maiores incluem dor/pressão facial, obstrução/congestão nasal, secreção nasal purulenta (anterior/posterior) e hiposmia/anosmia. Cefaleia e tosse são critérios menores.' },
    { banca: 'IBFC', question: 'A tríade de Samter (ou Doença Respiratória Exacerbada por Aspirina - DREA) é caracterizada por:', options: ['Asma, polipose nasal e intolerância a AINEs', 'Rinite, conjuntivite e asma', 'Sinusite, otite e bronquite', 'Pólipos, anosmia e cefaleia', 'Dermatite, asma e rinite'], answer: 'Asma, polipose nasal e intolerância a AINEs', explanation: 'A tríade de Samter é uma condição clínica específica definida pela presença de asma, polipose nasossinusal e reações de hipersensibilidade a anti-inflamatórios não esteroides (AINEs).' },
    { banca: 'FUNDATEC', question: 'O tratamento de primeira linha para a rinite alérgica persistente moderada a grave é:', options: ['Anti-histamínico oral de primeira geração', 'Descongestionante tópico', 'Corticosteroide intranasal', 'Antagonista de leucotrienos', 'Cromoglicato de sódio'], answer: 'Corticosteroide intranasal', explanation: 'Os corticosteroides intranasais são os medicamentos mais eficazes para o controle dos sintomas da rinite alérgica moderada a grave, atuando em todos os sintomas (espirros, rinorreia, prurido e congestão).' },
    { banca: 'VUNESP', question: 'Paciente com rinossinusite fúngica invasiva aguda geralmente apresenta qual condição de base?', options: ['Asma brônquica', 'Hipertensão arterial', 'Diabetes mellitus descompensado ou imunossupressão', 'Desvio de septo', 'Rinite medicamentosa'], answer: 'Diabetes mellitus descompensado ou imunossunpressão', explanation: 'A rinossinusite fúngica invasiva aguda é uma emergência médica que ocorre quase exclusivamente em pacientes imunocomprometidos, como diabéticos em cetoacidose ou pacientes neutropênicos.' },
    { banca: 'IBFC', question: 'Qual estrutura anatômica é o principal ponto de drenagem dos seios frontal, maxilar e etmoidal anterior?', options: ['Hiato semilunar', 'Recesso esfenoetmoidal', 'Meato nasal inferior', 'Bula etmoidal', 'Agger nasi'], answer: 'Hiato semilunar', explanation: 'O hiato semilunar, localizado no meato médio, é a via de drenagem final para os seios maxilar, frontal e etmoidal anterior, formando o complexo ostiomeatal.' },
    { banca: 'FUNDATEC', question: 'A cirurgia endoscópica funcional dos seios paranasais (FESS) tem como princípio fundamental:', options: ['A remoção completa de toda a mucosa dos seios paranasais.', 'A criação de grandes aberturas de drenagem artificial.', 'A restauração da ventilação e drenagem fisiológica dos seios.', 'O uso de antibióticos de longa duração no pós-operatório.', 'A correção exclusiva do desvio de septo.'], answer: 'A restauração da ventilação e drenagem fisiológica dos seios.', explanation: 'O conceito da FESS é remover obstruções nos óstios de drenagem naturais dos seios, restaurando a via mucociliar fisiológica, em vez de criar aberturas não anatômicas.' },
    { banca: 'VUNESP', question: 'O que caracteriza a rinite gustativa?', options: ['Coriza aquosa após ingestão de alimentos, especialmente os picantes.', 'Obstrução nasal ao sentir o cheiro de certos alimentos.', 'Espirros em salvas ao entrar em restaurantes.', 'Prurido nasal causado por alergia alimentar.', 'Rinorreia induzida pelo consumo de álcool.'], answer: 'Coriza aquosa após ingestão de alimentos, especialmente os picantes.', explanation: 'A rinite gustativa é uma rinite não alérgica caracterizada por rinorreia aquosa proeminente desencadeada pela ingestão de alimentos, tipicamente quentes ou condimentados.' },
    { banca: 'IBFC', question: 'Qual o tratamento para um hematoma septal não tratado?', options: ['Drenagem e tamponamento nasal', 'Antibioticoterapia isolada', 'Observação, pois a resolução é espontânea', 'Uso de vasoconstritores tópicos', 'Cauterização química'], answer: 'Drenagem e tamponamento nasal', explanation: 'Um hematoma septal deve ser drenado com urgência para evitar complicações como abscesso septal e necrose da cartilagem, que pode levar a uma deformidade em sela. A drenagem é seguida de tamponamento para evitar a recorrência.' },

    // LARINGOLOGIA E BUCOFARINGE
    { banca: 'IBFC', question: 'Professora de 35 anos, não fumante, refere rouquidão que piora ao final do dia, sem outros sintomas. A videolaringoscopia revela lesões nodulares, bilaterais e simétricas no terço médio das pregas vocais. Qual a conduta inicial mais adequada?', options: ['Exérese cirúrgica das lesões', 'Repouso vocal absoluto por 30 dias', 'Terapia fonoaudiológica', 'Injeção de toxina botulínica', 'Uso de anti-inflamatórios'], answer: 'Terapia fonoaudiológica', explanation: 'O quadro é típico de nódulos vocais ("calos"), causados por abuso ou mau uso vocal. O tratamento de primeira linha é sempre a fonoterapia para reeducação vocal.' },
    { banca: 'IBFC', question: 'Qual das seguintes condições é a principal indicação para amigdalectomia em crianças, segundo os critérios de Paradise?', options: ['Um episódio de abscesso periamigdaliano', 'Halitose crônica', 'Amigdalite de repetição', 'Roncos primários', 'Disfagia leve'], answer: 'Amigdalite de repetição', explanation: 'Os critérios de Paradise estabelecem a frequência de infecções (ex: 7 ou mais episódios em 1 ano) como a principal indicação cirúrgica para amigdalite de repetição.' },
    { banca: 'FUNDATEC', question: 'A lesão laríngea caracterizada por um sulco ou invaginação do epitélio ao longo da borda livre da prega vocal, causando rouquidão importante, é denominada:', options: ['Pólipo vocal', 'Cisto epidermoide', 'Granuloma de contato', 'Sulco vocal', 'Edema de Reinke'], answer: 'Sulco vocal', explanation: 'O sulco vocal é uma depressão na prega vocal que altera a vibração da mucosa, resultando em disfonia significativa, muitas vezes com soprosidade e qualidade vocal áspera.' },
    { banca: 'VUNESP', question: 'Paciente com abscesso periamigdaliano apresenta trismo, odinofagia intensa e desvio da úvula. Qual a conduta terapêutica imediata e essencial?', options: ['Amigdalectomia de urgência', 'Apenas antibioticoterapia intravenosa', 'Punção aspirativa ou drenagem cirúrgica do abscesso', 'Gargarejos com antissépticos', 'Corticoterapia em altas doses'], answer: 'Punção aspirativa ou drenagem cirúrgica do abscesso', explanation: 'O tratamento mandatório para um abscesso periamigdaliano é a drenagem do pus, seja por punção com agulha ou por incisão, associada à antibioticoterapia.' },
    { banca: 'FUNDATEC', question: 'O Edema de Reinke está mais fortemente associado a qual fator de risco?', options: ['Refluxo laringofaríngeo', 'Infecção por HPV', 'Tabagismo crônico', 'Uso excessivo da voz', 'Trauma laríngeo'], answer: 'Tabagismo crônico', explanation: 'O Edema de Reinke é uma lesão gelatinosa e difusa do espaço de Reinke, quase que exclusivamente encontrada em pacientes tabagistas, especialmente mulheres.' },
    { banca: 'IBFC', question: 'Qual o principal agente etiológico da faringoamigdalite bacteriana?', options: ['Staphylococcus aureus', 'Haemophilus influenzae', 'Streptococcus pyogenes (Beta-hemolítico do grupo A)', 'Moraxella catarrhalis', 'Mycoplasma pneumoniae'], answer: 'Streptococcus pyogenes (Beta-hemolítico do grupo A)', explanation: 'O Streptococcus pyogenes é a causa bacteriana mais comum e clinicamente importante de faringite, sendo o alvo principal da antibioticoterapia para prevenir complicações como a febre reumática.' },
    { banca: 'VUNESP', question: 'A paralisia de prega vocal em abdução (posição lateral) resulta em qual sintoma predominante?', options: ['Disfonia e risco de aspiração', 'Dispneia e estridor', 'Tosse crônica', 'Disfagia para sólidos', 'Globus faríngeo'], answer: 'Dispneia e estridor', explanation: 'Se ambas as pregas vocais estão paralisadas em abdução, a glote fica aberta, o que não causa disfonia, mas sim uma via aérea inadequada, levando a dificuldade respiratória (dispneia) e estridor.' },
    { banca: 'FUNDATEC', question: 'A laringomalácia, causa mais comum de estridor na infância, é diagnosticada principalmente por:', options: ['Radiografia cervical', 'Tomografia computadorizada de pescoço', 'Nasofibrolaringoscopia flexível', 'Broncoscopia rígida', 'Ultrassonografia laríngea'], answer: 'Nasofibrolaringoscopia flexível', explanation: 'O diagnóstico da laringomalácia é feito pela visualização direta da laringe com o paciente acordado, observando o colapso das estruturas supraglóticas durante a inspiração.' },
    { banca: 'IBFC', question: 'Qual o tratamento de escolha para a papilomatose respiratória recorrente causada pelo HPV?', options: ['Radioterapia', 'Quimioterapia sistêmica', 'Exérese cirúrgica ou ablação a laser das lesões', 'Terapia fonoaudiológica', 'Vacinação com a vacina HPV após o diagnóstico'], answer: 'Exérese cirúrgica ou ablação a laser das lesões', explanation: 'O manejo da papilomatose laríngea visa a remoção das lesões papilomatosas para manter a via aérea pérvia e melhorar a qualidade vocal, sendo a cirurgia (a frio ou com laser) o pilar do tratamento.' },
    { banca: 'VUNESP', question: 'Um paciente apresenta rouquidão após intubação orotraqueal prolongada. A laringoscopia revela uma lesão ulcerada na região posterior da glote, sobre o processo vocal da aritenoide. Qual o diagnóstico mais provável?', options: ['Nódulo vocal', 'Cisto de prega vocal', 'Pólipo hemorrágico', 'Granuloma de contato (pós-intubação)', 'Carcinoma in situ'], answer: 'Granuloma de contato (pós-intubação)', explanation: 'O granuloma de contato ou de intubação é uma lesão inflamatória que ocorre tipicamente no processo vocal da cartilagem aritenoide, como resultado do trauma do tubo endotraqueal.' },

    // URGÊNCIAS E MISCELÂNEA
    { banca: 'FUNDATEC', question: 'Criança de 2 anos, previamente hígida, apresenta início súbito de tosse, engasgo e estridor enquanto brincava com peças pequenas. A radiografia de tórax pode ser normal. Qual a conduta mais apropriada?', options: ['Manobra de Heimlich e alta se houver melhora', 'Observação hospitalar com oximetria', 'Iniciar antibioticoterapia para pneumonia aspirativa', 'Broncoscopia rígida para diagnóstico e remoção', 'Solicitar tomografia de tórax de urgência'], answer: 'Broncoscopia rígida para diagnóstico e remoção', explanation: 'A suspeita de aspiração de corpo estranho em via aérea, mesmo com radiografia normal, é uma indicação formal de broncoscopia rígida, que é tanto diagnóstica quanto terapêutica.' },
    { banca: 'VUNESP', question: 'No manejo da epistaxe posterior, qual a artéria mais frequentemente responsável pelo sangramento?', options: ['Artéria etmoidal anterior', 'Artéria labial superior', 'Artéria facial', 'Artéria esfenopalatina', 'Artéria palatina maior'], answer: 'Artéria esfenopalatina', explanation: 'A artéria esfenopalatina, um ramo terminal da artéria maxilar interna, é a principal fonte de sangramento nas epistaxes posteriores, que são geralmente mais volumosas e de difícil controle.' },
    { banca: 'IBFC', question: 'Qual das seguintes fraturas faciais está classicamente associada a risco de lesão do ducto nasolacrimal?', options: ['Fratura de mandíbula', 'Fratura do arco zigomático', 'Fratura Le Fort I', 'Fratura naso-órbito-etmoidal (NOE)', 'Fratura de côndilo mandibular'], answer: 'Fratura naso-órbito-etmoidal (NOE)', explanation: 'As fraturas NOE envolvem a junção dos ossos nasais, maxila e etmoide, região onde se localiza o saco lacrimal e o ducto nasolacrimal, que podem ser lacerados ou aprisionados.' },
    { banca: 'FUNDATEC', question: 'Uma fratura facial que causa mobilidade de todo o terço médio da face, separando-o da base do crânio, é classificada como:', options: ['Fratura Le Fort I', 'Fratura Le Fort II', 'Fratura Le Fort III', 'Fratura de Blow-out', 'Fratura zigomático-maxilar'], answer: 'Fratura Le Fort III', explanation: 'A fratura Le Fort III, ou disjunção craniofacial, é a mais grave, envolvendo a separação completa dos ossos faciais da base do crânio, passando pelos arcos zigomáticos e pela órbita.' },
    { banca: 'VUNESP', question: 'Angioedema hereditário é uma causa de obstrução de via aérea alta. Qual a sua fisiopatologia?', options: ['Reação alérgica mediada por IgE', 'Acúmulo de bradicinina por deficiência do inibidor de C1 esterase', 'Infecção bacteriana da epiglote', 'Reação anafilática a medicamentos', 'Formação de abscesso retrofaríngeo'], answer: 'Acúmulo de bradicinina por deficiência do inibidor de C1 esterase', explanation: 'O angioedema hereditário é uma doença genética causada pela deficiência ou disfunção do inibidor de C1 esterase, levando ao acúmulo de bradicinina, que causa o edema. Não responde a adrenalina, anti-histamínicos ou corticoides.' },

    // LEGISLAÇÃO DO SUS
    { banca: 'FUNDATEC', question: 'De acordo com a Lei 8.080/90, a "universalidade de acesso aos serviços de saúde em todos os níveis de assistência" é um(a):', options: ['Diretriz do SUS', 'Princípio do SUS', 'Objetivo do SUS', 'Atribuição do SUS', 'Norma operacional do SUS'], answer: 'Princípio do SUS', explanation: 'A Universalidade, a Integralidade e a Equidade são os princípios doutrinários (ou éticos) fundamentais do Sistema Único de Saúde (SUS), garantindo que a saúde é um direito de todos.' },
    { banca: 'IBFC', question: 'A Lei nº 8.142/91 dispõe sobre a participação da comunidade na gestão do SUS e sobre as transferências intergovernamentais de recursos financeiros. Quais são as duas instâncias colegiadas de participação social que ela institui?', options: ['Conselho Nacional de Secretários de Saúde (CONASS) e Conselhos de Saúde', 'Comissões Intergestores e Conselhos de Saúde', 'Conselhos de Saúde e Conferências de Saúde', 'Mesas de Negociação e Conferências de Saúde', 'Ouvidorias e Conselhos de Saúde'], answer: 'Conselhos de Saúde e Conferências de Saúde', explanation: 'A Lei 8.142/91 estabelece as Conferências de Saúde (que se reúnem a cada 4 anos para avaliar e propor diretrizes) e os Conselhos de Saúde (instâncias permanentes e deliberativas) como os principais canais de controle social.' },
    { banca: 'VUNESP', question: 'Segundo a Lei 8.080/90, a direção do SUS é única em cada esfera de governo. A direção nacional do SUS compete a(o):', options: ['Agência Nacional de Saúde Suplementar (ANS)', 'Conselho Nacional de Saúde (CNS)', 'Ministério da Saúde', 'Fundação Oswaldo Cruz (Fiocruz)', 'Comissão Intergestores Tripartite (CIT)'], answer: 'Ministério da Saúde', explanation: 'A lei estabelece que a direção é única, sendo exercida no âmbito da União pelo Ministério da Saúde, nos Estados pelo Secretário Estadual de Saúde e nos Municípios pelo Secretário Municipal de Saúde.' },
    { banca: 'FUNDATEC', question: 'O princípio da Integralidade no SUS pode ser entendido como, EXCETO:', options: ['Um conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos.', 'A garantia de acesso a todos os níveis de complexidade do sistema de saúde.', 'A consideração do ser humano como um todo, atendendo a todas as suas necessidades.', 'O acesso gratuito e irrestrito a qualquer medicamento solicitado pelo usuário.', 'A articulação da promoção da saúde, prevenção de doenças, tratamento e reabilitação.'], answer: 'O acesso gratuito e irrestrito a qualquer medicamento solicitado pelo usuário.', explanation: 'A integralidade não significa acesso irrestrito a tudo, mas sim o acesso ao que é necessário, de forma articulada e contínua. A dispensação de medicamentos segue as listas do RENAME e os protocolos clínicos do SUS.' },
    { banca: 'IBFC', question: 'Qual dos seguintes NÃO é um objetivo do Sistema Único de Saúde (SUS) conforme a Lei 8.080/90?', options: ['A identificação e divulgação dos fatores condicionantes e determinantes da saúde.', 'A formulação de política de saúde destinada a promover, nos campos econômico e social, a redução de riscos de doenças.', 'A assistência às pessoas por intermédio de ações de promoção, proteção e recuperação da saúde.', 'A garantia de participação do setor privado na elaboração de políticas públicas de saúde.', 'A execução de ações de vigilância sanitária e epidemiológica.'], answer: 'A garantia de participação do setor privado na elaboração de políticas públicas de saúde.', explanation: 'A participação do setor privado é complementar. A formulação de políticas é uma atribuição do Estado, com participação da sociedade através do controle social, e não uma garantia de participação do setor privado na sua elaboração.' },
    { banca: 'VUNESP', question: 'A Política Nacional de Humanização (PNH), ou HumanizaSUS, busca pôr em prática os princípios do SUS no cotidiano dos serviços de saúde. Um de seus dispositivos é:', options: ['O Programa de Agentes Comunitários de Saúde (PACS).', 'O Acolhimento com Classificação de Risco.', 'O Programa Farmácia Popular.', 'O Serviço de Atendimento Móvel de Urgência (SAMU).', 'O Programa Nacional de Imunizações (PNI).'], answer: 'O Acolhimento com Classificação de Risco.', explanation: 'O Acolhimento com Classificação de Risco é uma diretriz e um dispositivo da PNH que visa reorganizar o processo de trabalho para garantir o atendimento a todos, priorizando os casos mais graves, com base em critérios clínicos.' },
    { banca: 'FUNDATEC', question: 'A responsabilidade pela gestão e execução dos serviços de atenção básica à saúde é, prioritariamente, da esfera de governo:', options: ['Federal', 'Estadual', 'Municipal', 'Distrital', 'Regional'], answer: 'Municipal', explanation: 'A descentralização do SUS, com "municipalização" das ações, atribui ao município a principal responsabilidade pela gestão e execução dos serviços de atenção primária, a porta de entrada do sistema.' },
    { banca: 'IBFC', question: 'O Pacto pela Saúde (2006) foi um marco na gestão do SUS, estabelecendo três componentes: Pacto pela Vida, Pacto em Defesa do SUS e Pacto de Gestão. O Pacto pela Vida definia:', options: ['As responsabilidades de cada ente federado.', 'Mecanismos de financiamento do sistema.', 'Prioridades sanitárias para o país, com metas a serem alcançadas.', 'As regras para a participação popular.', 'A criação das Redes de Atenção à Saúde.'], answer: 'Prioridades sanitárias para o país, com metas a serem alcançadas.', explanation: 'O Pacto pela Vida estabelecia um conjunto de prioridades (ex: saúde do idoso, controle do câncer, redução da mortalidade infantil) e metas para melhorar a situação de saúde da população brasileira.' },
    { banca: 'VUNESP', question: 'De acordo com a Constituição Federal de 1988, as ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado de acordo com a seguinte diretriz, EXCETO:', options: ['Descentralização, com direção única em cada esfera de governo.', 'Atendimento integral, com prioridade para as atividades preventivas.', 'Participação da comunidade.', 'Financiamento exclusivo pela esfera federal.', 'Universalidade de acesso.'], answer: 'Financiamento exclusivo pela esfera federal.', explanation: 'O financiamento do SUS é tripartite, ou seja, de responsabilidade da União, dos Estados e dos Municípios, e não exclusivo da esfera federal. A universalidade não está listada como diretriz na CF/88, mas como princípio.' },
    { banca: 'FUNDATEC', question: 'A Norma Operacional Básica (NOB-SUS 01/96) teve como principal foco:', options: ['A criação do Cartão Nacional de Saúde.', 'A implementação da Política Nacional de Humanização.', 'O aprofundamento da municipalização da gestão da saúde.', 'A regionalização e a organização das Redes de Atenção.', 'A regulação do setor de saúde suplementar.'], answer: 'O aprofundamento da municipalização da gestão da saúde.', explanation: 'A NOB 96 foi fundamental para operacionalizar a descentralização, criando diferentes níveis de habilitação para os municípios (gestão incipiente, parcial e plena) e transferindo a eles responsabilidades e recursos.' },
    { banca: 'IBFC', question: 'O que são as Comissões Intergestores Bipartite (CIB) e Tripartite (CIT)?', options: ['Órgãos de controle social formados por usuários e trabalhadores.', 'Instâncias de pactuação e negociação entre os gestores do SUS.', 'Conselhos de classe que regulam as profissões da saúde.', 'Agências reguladoras do sistema de saúde.', 'Grupos de trabalho para elaboração de protocolos clínicos.'], answer: 'Instâncias de pactuação e negociação entre os gestores do SUS.', explanation: 'A CIB (Bipartite) é um espaço de negociação no âmbito estadual, entre o estado e os municípios. A CIT (Tripartite) é o espaço nacional, entre o Ministério da Saúde, os estados (CONASS) e os municípios (CONASEMS).' },
    { banca: 'VUNESP', question: 'A Política Nacional de Atenção Básica (PNAB) define a Atenção Básica como:', options: ['O conjunto de ações de saúde no âmbito individual e coletivo, que abrangem a promoção e a proteção da saúde.', 'A principal porta de entrada e centro de comunicação da Rede de Atenção à Saúde.', 'Um atendimento focado exclusivamente em doenças de baixa complexidade.', 'Um serviço de emergência para casos não-críticos.', 'O nível de atenção responsável apenas por campanhas de vacinação.'], answer: 'A principal porta de entrada e centro de comunicação da Rede de Atenção à Saúde.', explanation: 'A PNAB caracteriza a Atenção Básica (ou Primária) como a ordenadora do cuidado e a base do sistema, sendo a porta de entrada preferencial do usuário na rede de saúde.' },
    { banca: 'FUNDATEC', question: 'O princípio da Equidade no SUS significa:', options: ['Tratar todos os cidadãos de forma absolutamente igual.', 'Oferecer mais a quem mais precisa, para diminuir as desigualdades.', 'Garantir que todos tenham acesso aos mesmos serviços, independentemente da localização.', 'Permitir que cada pessoa escolha o tratamento que deseja receber.', 'Distribuir os recursos financeiros igualmente entre todos os municípios.'], answer: 'Oferecer mais a quem mais precisa, para diminuir as desigualdades.', explanation: 'Equidade é tratar os desiguais de forma desigual na medida de suas desigualdades. É um princípio de justiça social que busca reduzir as disparidades em saúde.' },
    { banca: 'IBFC', question: 'A Relação Nacional de Medicamentos Essenciais (RENAME) é:', options: ['Uma lista de medicamentos que devem ser comprados diretamente pelo paciente.', 'Uma lista de medicamentos de alto custo fornecidos apenas por via judicial.', 'Uma lista que orienta a oferta, prescrição e dispensação de medicamentos no SUS.', 'Um guia de preços para a indústria farmacêutica.', 'Uma lista de medicamentos que não podem ser usados no Brasil.'], answer: 'Uma lista que orienta a oferta, prescrição e dispensação de medicamentos no SUS.', explanation: 'A RENAME é o instrumento que norteia a Assistência Farmacêutica no SUS, sendo atualizada periodicamente para definir quais medicamentos devem estar disponíveis no sistema para o tratamento das doenças prevalentes.' },
];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const progressBar = document.getElementById('progress-bar');
const questionCounterEl = document.getElementById('question-counter');
const scoreCounterEl = document.getElementById('score-counter');
const questionTextEl = document.getElementById('question-text');
const questionBancaEl = document.getElementById('question-banca');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackTextEl = document.getElementById('feedback-text');
const finalScoreEl = document.getElementById('final-score');
const scoreMessageEl = document.getElementById('score-message');

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestions = [...questionBank].sort(() => 0.5 - Math.random());
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizScreen.style.opacity = 1;
    showQuestion();
}

function showQuestion() {
    resetState();
    updateProgressBar();
    const question = currentQuestions[currentQuestionIndex];
    questionCounterEl.innerText = `Questão ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    scoreCounterEl.innerText = `Pontos: ${score}`;
    questionTextEl.innerText = question.question;
    questionBancaEl.innerText = `Banca: ${question.banca}`;

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn', 'w-full', 'text-left', 'p-4', 'border-2', 'rounded-lg', 'bg-gray-50', 'hover:bg-gray-100', 'border-gray-200');
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function resetState() {
    nextBtn.classList.add('hidden');
    feedbackContainer.classList.add('hidden');
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.innerText === currentQuestions[currentQuestionIndex].answer;

    if (correct) {
        score++;
        scoreCounterEl.innerText = `Pontos: ${score}`;
    }

    setStatusClass(selectedBtn, correct);
    Array.from(optionsContainer.children).forEach(button => {
        setStatusClass(button, button.innerText === currentQuestions[currentQuestionIndex].answer);
        button.disabled = true;
    });
    
    feedbackTextEl.innerText = currentQuestions[currentQuestionIndex].explanation;
    feedbackContainer.classList.remove('hidden');

    if (currentQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hidden');
    } else {
        progressBar.style.width = '100%';
        setTimeout(showResults, 2000);
    }
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else if (element.classList.contains('option-btn') && element.disabled) {
         element.classList.add('incorrect');
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    finalScoreEl.innerText = `${score} / ${total} (${percentage}%)`;
    
    let message = '';
    if (percentage >= 80) {
        message = 'Desempenho excelente! Você está muito bem preparado(a) para o estilo dessas bancas.';
    } else if (percentage >= 60) {
        message = 'Ótimo resultado! Continue revisando os temas para garantir um desempenho ainda melhor.';
    } else if (percentage >= 40) {
        message = 'Bom esforço! Identifique os temas que teve mais dificuldade e foque neles.';
    } else {
        message = 'Não desanime! Cada simulado é um passo no aprendizado. Revise as explicações e tente novamente.';
    }
    scoreMessageEl.innerText = message;
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});
restartBtn.addEventListener('click', startQuiz);

