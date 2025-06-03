
const fluxo_tecnico = {
    "Tecnico": {
        index: 0,
        tooltip: "Saiba Mais sobre o nosso fluxo de conhecimento tecnico",
        content: {
            "Visão Geral": {
                desc: "Estrutura de aprendizagem técnica com progressão do básico ao avançado em programação.",
                examples: [
                    {
                        name: "Progressão Hierárquica",
                        desc: "Conteúdo estruturado do básico (variáveis, operadores) até estruturas mais complexas (controle de fluxo, algoritmos)."
                    },
                    {
                        name: "Aplicações Práticas",
                        desc: "Exemplos reais e exercícios interativos em cada etapa do processo de aprendizagem."
                    }
                ]
            }
        },
        children: {
            "Lógica de Programação": {
                index: 0,
                tooltip: "ferramenta",
                content: {
                    "Fundamentos de Lógica": {
                        desc: "Bloco introdutório que ensina os pilares do raciocínio computacional.",
                        examples: [
                            {
                                name: "Pensamento Computacional",
                                desc: "Decomposição, reconhecimento de padrões, abstração e algoritmos como ferramentas mentais."
                            },
                            {
                                name: "Exercícios com Fluxogramas",
                                desc: "Construção visual de algoritmos para fixar o raciocínio passo-a-passo."
                            }
                        ]
                    }
                },
                children: {
                    "Algoritmos": {
                        index: 0,
                        tooltip: "Algoritmos são sequências de passos bem definidos",
                        content: {
                            "Conceito de Algoritmo": {
                                desc: "Definição de algoritmos e importância no desenvolvimento de software.",
                                examples: [
                                    {
                                        name: "Receita de Bolo",
                                        desc: "Analogia clássica usada para ilustrar algoritmos como sequência finita de instruções."
                                    },
                                    {
                                        name: "Pseudocódigo",
                                        desc: "Uso de linguagem intermediária entre linguagem natural e linguagem de programação para escrever algoritmos."
                                    }
                                ]
                            }
                        },
                        children: {
                            "Linguagem De Programação": {
                                index: 0,
                                tooltip: "Linguagem de Programação é um conjunto de regras e sintaxes usadas para escrever programas de computador.",
                                content: {
                                    "Abstração de Linguagens": {
                                        desc: "Exploração de diferentes linguagens e suas características fundamentais.",
                                        examples: [
                                            {
                                                name: "Tipagem Forte vs Fraca",
                                                desc: "Diferenciação entre linguagens com forte controle de tipos (como Java) e mais permissivas (como Python)."
                                            },
                                            {
                                                name: "Paradigmas",
                                                desc: "Introdução aos paradigmas imperativo, funcional e orientado a objetos."
                                            }
                                        ]
                                    }
                                },
                                children: {
                                    "Variáveis": {
                                        index: 0,
                                        tooltip: "Variáveis são como caixas onde você guarda informações que o computador vai usar.",
                                        content: {
                                            "Uso de Variáveis": {
                                                desc: "Manipulação de valores em memória através de identificadores.",
                                                examples: [
                                                    {
                                                        name: "Declaração de variáveis",
                                                        desc: "Exemplos em diferentes linguagens como Python, JavaScript e C."
                                                    },
                                                    {
                                                        name: "Tipos Primitivos",
                                                        desc: "Inteiros, floats, strings e booleanos em contexto de uso real."
                                                    }
                                                ]
                                            }
                                        },
                                        children: {}
                                    },
                                    "Operadores": {
                                        index: 0,
                                        tooltip: "Operadores são símbolos ou palavras que fazem operações com valores.",
                                        content: {
                                            "Classes de Operadores": {
                                                desc: "Exploração de operadores aritméticos, lógicos e relacionais.",
                                                examples: [
                                                    {
                                                        name: "Aritméticos",
                                                        desc: "Soma, subtração, multiplicação, divisão, módulo etc."
                                                    },
                                                    {
                                                        name: "Lógicos",
                                                        desc: "AND, OR, NOT e sua aplicação em expressões condicionais."
                                                    }
                                                ]
                                            }
                                        },
                                        children: {
                                            "Estruturas de decisão": {
                                                index: 0,
                                                tooltip: "Permitem ao programa escolher caminhos de execução baseados em condições.",
                                                content: {
                                                    "Condicionais": {
                                                        desc: "Comandos que controlam o fluxo do programa com base em decisões.",
                                                        examples: [
                                                            {
                                                                name: "if-else",
                                                                desc: "Bloco condicional básico com exemplos em JavaScript e Python."
                                                            },
                                                            {
                                                                name: "switch-case",
                                                                desc: "Alternativa para múltiplas condições em linguagens como C e JavaScript."
                                                            }
                                                        ]
                                                    }
                                                },
                                                children: {
                                                    "Fundamentos de Linguagem": {
                                                        tooltip: "Agora você precisa escolher uma linguagem para Aprender",
                                                        content: {
                                                            "Escolha de Linguagem": {
                                                                desc: "Critérios técnicos e estratégicos para selecionar uma linguagem.",
                                                                examples: [
                                                                    {
                                                                        name: "Python para Iniciantes",
                                                                        desc: "Sintaxe limpa e rica comunidade fazem de Python a escolha ideal para iniciantes."
                                                                    },
                                                                    {
                                                                        name: "JavaScript para Web",
                                                                        desc: "Linguagem essencial para desenvolvimento front-end e aplicações web interativas."
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                },
                                                styleGridColumn: "1 / -1"
                                            },
                                            "Estruturas de repetição": {
                                                index: 0,
                                                tooltip: "Executam blocos de código várias vezes com base em uma condição.",
                                                content: {
                                                    "Laços de Repetição": {
                                                        desc: "Comandos que iteram instruções com controle condicional ou contagem.",
                                                        examples: [
                                                            {
                                                                name: "while e do-while",
                                                                desc: "Repetição com teste antes ou depois da execução do bloco."
                                                            },
                                                            {
                                                                name: "for loop",
                                                                desc: "Ideal para iteração sobre intervalos, listas e arrays."
                                                            }
                                                        ]
                                                    }
                                                },
                                                children: {
                                                    "Fundamentos de Linguagem": {
                                                        content: {
                                                            "Complemento Prático": {
                                                                desc: "Consolidação dos laços de repetição dentro da linguagem escolhida.",
                                                                examples: [
                                                                    {
                                                                        name: "Iteração com range() em Python",
                                                                        desc: "Exemplo de uso prático com controle de índice."
                                                                    },
                                                                    {
                                                                        name: "forEach em JavaScript",
                                                                        desc: "Laço funcional aplicado sobre arrays."
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        styleGridColumn: "1 / -1"
                                    },
                                    "Entrada/saída (E/S)": {
                                        index: 0,
                                        tooltip: "Entrada/Saída (E/S) é a forma como um programa recebe dados (entrada) e mostra resultados (saída).",
                                        content: {
                                            "Operações E/S": {
                                                desc: "Técnicas de captura e exibição de dados para interação com o usuário.",
                                                examples: [
                                                    {
                                                        name: "input/output em Python",
                                                        desc: "Uso de `input()` e `print()` com exemplos aplicados."
                                                    },
                                                    {
                                                        name: "prompt e console.log",
                                                        desc: "Interação com o usuário em JavaScript para aplicações web básicas."
                                                    }
                                                ]
                                            }
                                        },
                                        children: {}
                                    }
                                }
                            }
                        },
                        styleGridColumn: "1 / -1"
                    },
                    "Fluxogramas": {
                        index: 0,
                        tooltip: "Fluxogramas são diagramas que representam visualmente a sequência de passos de um processo ou algoritmo.",
                        content: {
                            "Modelagem Visual": {
                                desc: "Uso de fluxogramas como ferramenta de planejamento lógico antes da codificação.",
                                examples: [
                                    {
                                        name: "Simbolismo Padrão",
                                        desc: "Início/fim, decisões, processos e conectores conforme notação tradicional."
                                    },
                                    {
                                        name: "Ferramentas Gráficas",
                                        desc: "Lucidchart, Draw.io e Pencil Project para criação digital de fluxos."
                                    }
                                ]
                            }
                        },
                        children: {
                            "Linguagem De Programação": {
                                content: {
                                    "Conexão com Código": {
                                        desc: "Transição do raciocínio visual para sintaxe de código real.",
                                        examples: [
                                            {
                                                name: "Conversão direta",
                                                desc: "Mapeamento de cada símbolo do fluxograma para estruturas em pseudocódigo e depois linguagem real."
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

const fluxo_socio = {
    "Psicologia Positiva": {
        tooltip: "Psicologia Positiva é o estudo científico do que funciona bem na experiência humana — emoções positivas, forças pessoais, propósito e relacionamentos saudáveis — com foco no florescimento individual e coletivo. Propõe-se a ir além do tratamento de doenças mentais, buscando promover bem-estar mensurável e sustentável. Seu modelo central é o PERMA (emoções positivas, engajamento, relações, sentido e realização).",
        descricao: "Psicologia Positiva é o estudo científico do que funciona bem na experiência humana — emoções positivas, forças pessoais, propósito e relacionamentos saudáveis — com foco no florescimento individual e coletivo. Propõe-se a ir além do tratamento de doenças mentais, buscando promover bem-estar mensurável e sustentável. Seu modelo central é o PERMA (emoções positivas, engajamento, relações, sentido e realização).",
        "content": {
            "Modelo Perma": {
                "desc": "Desdobramento dos cinco pilares do modelo PERMA, com foco em aplicações práticas e exemplos em contextos individuais e organizacionais.",
                "examples": [
                    { "name": "Emoções Positivas (Positive Emotions)", "desc": "Práticas como o 'Three Good Things', em que o indivíduo lista diariamente três coisas boas que aconteceram. Isso fortalece a gratidão e reestrutura o foco atencional para o positivo." },
                    { "name": "Engajamento (Engagement)", "desc": "Aplicação do conceito de 'Flow' em ambientes de trabalho ou estudo, onde as tarefas estão no limiar ideal entre desafio e habilidade, promovendo imersão total." },
                    { "name": "Relacionamentos (Relationships)", "desc": "Criação de programas de escuta ativa em empresas ou escolas, promovendo vínculos mais empáticos e colaborativos." },
                    { "name": "Sentido (Meaning)", "desc": "Definição clara de valores pessoais e alinhamento com metas de vida ou missão organizacional. Ex: journaling com foco em propósito." },
                    { "name": "Realização (Accomplishment)", "desc": "Estabelecimento de metas SMART e práticas de celebração de conquistas (mesmo que pequenas), com reforço de autoeficácia." }
                ]
            },
            "Intervencoes baseadas em evidencia": {
                "desc": "Técnicas validadas empiricamente para aumentar o bem-estar subjetivo e psicológico.",
                "examples": [
                    { "name": "Diário de Gratidão", "desc": "Escrever diariamente 3 coisas pelas quais você é grato. Melhora o humor e reduz sintomas depressivos." },
                    { "name": "Carta de Perdão", "desc": "Exercício terapêutico onde a pessoa escreve uma carta (não necessariamente enviada) perdoando alguém. Reduz raiva e melhora o bem-estar psicológico." },
                    { "name": "Atos Aleatórios de Bondade", "desc": "Incentiva ações altruístas espontâneas. Aumenta sensação de conexão e felicidade." }
                ]
            },
            "Psicologia positiva nas organizações": {
                "desc": "Aplicações da Psicologia Positiva em ambientes corporativos para aumentar engajamento, clima e produtividade.",
                "examples": [
                    { "name": "Pesquisa de Clima PERMA", "desc": "Ferramenta diagnóstica baseada no modelo PERMA para avaliar bem-estar no ambiente de trabalho." },
                    { "name": "Programas de Reconhecimento Positivo", "desc": "Iniciativas que valorizam contribuições individuais e em grupo, reforçando senso de valor e pertencimento." },
                    { "name": "Coaching de Forças", "desc": "Foco no desenvolvimento e aplicação das forças de caráter dos colaboradores com base no VIA Inventory." }
                ]
            },
            "Avaliacao e metricas": {
                "desc": "Ferramentas e metodologias para medir os efeitos das intervenções positivas de forma objetiva.",
                "examples": [
                    { "name": "Escala PERMA Profiler", "desc": "Instrumento psicométrico validado para mensurar os cinco pilares do modelo PERMA." },
                    { "name": "VIA Character Strengths", "desc": "Inventário psicológico para identificação de forças de caráter. Fundamenta planos de desenvolvimento individual." },
                    { "name": "SWLS (Satisfaction with Life Scale)", "desc": "Escala de 5 itens para avaliar satisfação com a vida como componente cognitivo do bem-estar subjetivo." }
                ]
            }
        },
        children: {
            "Sabedoria e Conhecimento": {
                tooltip: "Virtudes cognitivas que envolvem a aquisição e uso do conhecimento de forma eficaz. Refletem competências mentais e criativas para enfrentar desafios.",
                descricao: "Virtudes cognitivas que envolvem a aquisição e uso do conhecimento de forma eficaz. Refletem competências mentais e criativas para enfrentar desafios.",
                content: {
                    "Desenvolvimento Cognitivo Aplicado": {
                        desc: "Estratégias para estimular virtudes cognitivas em ambientes educacionais, organizacionais e terapêuticos.",
                        examples: [
                            {
                                name: "Mapeamento de Forças Cognitivas",
                                desc: "Aplicação do VIA Inventory para identificar e aplicar forças como curiosidade e julgamento crítico em contextos práticos."
                            },
                            {
                                name: "Clubes de Leitura Temáticos",
                                desc: "Grupos que discutem temas complexos e estimulam julgamento, perspectiva e amor pelo aprendizado."
                            }
                        ]
                    }
                },
                children: {
                    "Criatividade": {
                        tooltip: "Pensar de forma original e produtiva, gerar ideias novas e úteis, encontrar soluções inovadoras para problemas complexos.",
                        descricao: "Capacidade de produzir soluções novas, úteis e inesperadas diante de problemas complexos. Fortemente relacionada à flexibilidade cognitiva.",
                        content: {
                            "Estímulo à Criatividade": {
                                desc: "Técnicas para desbloquear pensamento original e superar bloqueios criativos.",
                                examples: [
                                    {
                                        name: "Brainstorm Divergente",
                                        desc: "Sessões de geração livre de ideias sem julgamentos iniciais para estimular fluência criativa."
                                    },
                                    {
                                        name: "Método SCAMPER",
                                        desc: "Técnica de inovação baseada em transformação sistemática de ideias existentes."
                                    }
                                ]
                            }
                        }
                    },
                    "Curiosidade": {
                        tooltip: "Interesse ativo por experiências novas, desejo de explorar e aprender constantemente, abertura ao desconhecido.",
                        descricao: "Disposição para buscar novidades, investigar fenômenos e manter interesse contínuo pelo funcionamento do mundo.",
                        content: {
                            "Exploração Dirigida": {
                                desc: "Intervenções para expandir o interesse e a investigação ativa do mundo.",
                                examples: [
                                    {
                                        name: "Experimentos Pessoais",
                                        desc: "Criação de pequenos testes pessoais para explorar hipóteses e desenvolver novos interesses."
                                    },
                                    {
                                        name: "Mapas de Perguntas",
                                        desc: "Ferramenta visual para organizar questionamentos e direcionar investigações autônomas."
                                    }
                                ]
                            }
                        }
                    },
                    "Julgamento/crítico": {
                        tooltip: "Capacidade de pensar de forma lógica, avaliar informações objetivamente, tomar decisões embasadas em evidências.",
                        descricao: "Habilidade de ponderar, deliberar e avaliar informações e argumentos antes de decidir. Relaciona-se com racionalidade prática e epistemologia pessoal.",
                        content: {
                            "Pensamento Crítico em Ação": {
                                desc: "Aplicação prática de habilidades críticas para resolver problemas complexos.",
                                examples: [
                                    {
                                        name: "Debates Baseados em Evidência",
                                        desc: "Exercícios estruturados de argumentação lógica com análise de premissas e conclusões."
                                    },
                                    {
                                        name: "Tomada de Decisão Ética",
                                        desc: "Casos simulados para treinar avaliação racional com múltiplas variáveis éticas e lógicas."
                                    }
                                ]
                            }
                        }
                    },
                    "Amor pelo aprendizado": {
                        tooltip: "Motivação intrínseca para adquirir novos conhecimentos e desenvolver habilidades, buscando crescimento intelectual contínuo.",
                        descricao: "Apreço pelo processo de aprendizagem em si; desejo duradouro por se aprimorar cognitivamente.",
                        content: {
                            "Educação Contínua Significativa": {
                                desc: "Fomentar o desejo autônomo de aprender por meio de metas autodirigidas.",
                                examples: [
                                    {
                                        name: "Plano de Aprendizagem Pessoal",
                                        desc: "Criação de rota personalizada de aprendizado com feedback contínuo."
                                    },
                                    {
                                        name: "Ensinar para Aprender",
                                        desc: "Aplicar a técnica de ensinar o que se aprendeu para consolidar conhecimento."
                                    }
                                ]
                            }
                        }
                    },
                    "Perspectiva": {
                        tooltip: "Capacidade de ver o panorama completo, oferecer conselhos sábios e ter uma visão equilibrada das situações da vida.",
                        descricao: "Integração de experiência, conhecimento e empatia para formar julgamentos equilibrados e socialmente úteis.",
                        content: {
                            "Sabedoria Aplicada": {
                                desc: "Integração entre experiência e empatia para aconselhamento sábio e orientado ao bem comum.",
                                examples: [
                                    {
                                        name: "Diálogo Intergeracional",
                                        desc: "Trocas estruturadas entre gerações para expansão de perspectiva e aprendizado mútuo."
                                    },
                                    {
                                        name: "Mentoria com Escuta Ativa",
                                        desc: "Programas de mentoria baseados na troca de experiências e julgamento equilibrado."
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            "Coragem": {
                tooltip: "Virtudes emocionais que envolvem a vontade de alcançar objetivos diante de adversidades. Exigem determinação e superação de medo.",
                descricao: "Conjunto de traços que viabilizam ação persistente, ética e consciente frente a riscos, incertezas ou pressões.",
                content: {
                    "Resiliência e Ação Ética": {
                        desc: "Desenvolvimento da força de vontade frente a adversidades e da disposição para ações moralmente corretas.",
                        examples: [
                            {
                                name: "Diário de Coragem",
                                desc: "Registro reflexivo de ações difíceis tomadas com integridade e resiliência."
                            },
                            {
                                name: "Exposição Graduada a Desafios",
                                desc: "Técnica inspirada em terapia de exposição para enfrentar gradualmente situações temidas com suporte psicológico."
                            }
                        ]
                    }
                },
                children: {
                    "Bravura": {
                        tooltip: "Enfrentar ameaças, desafios e dores com firmeza; agir com coragem física ou moral.",
                        descricao: "Capacidade de agir apesar do medo ou perigo, seja em situações físicas, sociais ou morais.",
                        content: {
                            "Ativação da Coragem Moral": {
                                desc: "Exercícios para fortalecer atitudes de enfrentamento moral diante de injustiças.",
                                examples: [
                                    {
                                        name: "Simulações Éticas",
                                        desc: "Roleplays para treinar posicionamentos assertivos diante de situações moralmente ambíguas."
                                    }
                                ]
                            }
                        }
                    },
                    "Persistência": {
                        tooltip: "Manter o esforço e o comprometimento mesmo diante de obstáculos, sem desistir facilmente.",
                        descricao: "Tenacidade na busca de metas, mesmo sob frustração ou fadiga prolongada.",
                        content: {
                            "Treino de Tenacidade": {
                                desc: "Técnicas comportamentais para manter esforços consistentes apesar de obstáculos.",
                                examples: [
                                    {
                                        name: "Plano de Superação de Barreiras",
                                        desc: "Identificação de obstáculos e desenho de estratégias comportamentais de superação."
                                    }
                                ]
                            }
                        }
                    },
                    "Integridade": {
                        tooltip: "Agir com honestidade, autenticidade e coerência com os próprios valores, mesmo sob pressão.",
                        descricao: "Adesão consistente a princípios éticos e transparência nas ações.",
                        content: {
                            "Cultivo da Autenticidade": {
                                desc: "Intervenções para alinhar comportamento com valores pessoais.",
                                examples: [
                                    {
                                        name: "Declaração de Valores",
                                        desc: "Escrita estruturada sobre os valores centrais e compromissos de vida."
                                    }
                                ]
                            }
                        }
                    },
                    "Vitalidade": {
                        tooltip: "Viver com entusiasmo, energia e vigor; envolver-se plenamente nas atividades da vida.",
                        descricao: "Estilo ativo e animado de viver. Ausência de apatia, procrastinação e indiferença.",
                        content: {
                            "Promoção de Energia Existencial": {
                                desc: "Práticas de engajamento e entusiasmo no dia a dia.",
                                examples: [
                                    {
                                        name: "Design de Rotina com Flow",
                                        desc: "Organização de atividades diárias com base em estados de flow para aumentar vitalidade."
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            "Humanidade": {
                tooltip: "Virtudes interpessoais centradas no cuidado e nas relações humanas. Representam conexões empáticas e prosociais.",
                descricao: "Capacidades relacionais que promovem vínculos significativos baseados em empatia, afeto e cuidado.",
                content: {
                    "Cultivo de Relações Prosociais": {
                        desc: "Promoção ativa de vínculos humanos baseados em empatia, cuidado e afeto.",
                        examples: [
                            {
                                name: "Janelas de Conexão",
                                desc: "Momentos estruturados de atenção plena e empática em interações sociais significativas."
                            }
                        ]
                    }
                },
                children: {
                    "Amor": {
                        tooltip: "Capacidade de valorizar e cultivar laços afetivos íntimos, com reciprocidade emocional.",
                        descricao: "Manifesta-se por vínculos profundos, calorosos e duradouros entre indivíduos que se importam mutuamente.",
                        content: {
                            "Engenharia de Vínculos Afetivos": {
                                desc: "Estratégias para aprofundar relações interpessoais íntimas e significativas.",
                                examples: [
                                    {
                                        name: "Rituais de Conexão",
                                        desc: "Atividades compartilhadas recorrentes que reforçam laços emocionais (ex: jantares semanais, conversas profundas)."
                                    }
                                ]
                            }
                        }
                    },
                    "Inteligência social": {
                        tooltip: "Compreensão de sentimentos, motivos e dinâmicas sociais, com habilidade de agir com sensibilidade.",
                        descricao: "Consciência situacional e aptidão para interações eficazes e harmoniosas em contextos diversos.",
                        content: {
                            "Alfabetização Socioemocional": {
                                desc: "Educação sistemática das competências sociais e emocionais.",
                                examples: [
                                    {
                                        name: "Leitura de Expressões Faciais",
                                        desc: "Treinamento para reconhecer microexpressões e ajustar respostas sociais."
                                    }
                                ]
                            }
                        }
                    },
                    "Bondade": {
                        tooltip: "Disposição para ajudar os outros sem esperar recompensa, agindo com generosidade e compaixão.",
                        descricao: "Ações altruístas motivadas por preocupação genuína com o bem-estar alheio.",
                        content: {
                            "Práticas de Gentileza Intencional": {
                                desc: "Intervenções que promovem ações altruístas e empáticas.",
                                examples: [
                                    {
                                        name: "Desafio de 30 Dias de Bondade",
                                        desc: "Programa diário de pequenas ações generosas para cultivar comportamento prosocial."
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            "Justiça": {
                tooltip: "Virtudes cívicas que promovem uma vida coletiva harmoniosa e ética. Envolvem responsabilidades sociais e institucionais.",
                descricao: "Forças orientadas ao bem comum, equidade social e funcionamento ético de grupos.",
                content: {
                    "Ética Coletiva e Justiça Social": {
                        desc: "Desenvolvimento do senso de responsabilidade cívica e justiça distributiva.",
                        examples: [
                            {
                                name: "Assembleias Participativas",
                                desc: "Dinâmicas de tomada de decisão coletiva para fortalecer equidade e democracia interna."
                            }
                        ]
                    }
                },
                children: {
                    "Trabalho em equipe": {
                        tooltip: "Capacidade de colaborar, lealdade ao grupo, senso de pertencimento e responsabilidade coletiva.",
                        descricao: "Comprometimento com objetivos coletivos, cooperação e confiança mútua.",
                        content: {
                            "Sinergia Grupal": {
                                desc: "Ferramentas para melhorar comunicação, coesão e confiança entre membros de equipes.",
                                examples: [
                                    {
                                        name: "Canvas de Colaboração",
                                        desc: "Estrutura visual para planejar e distribuir responsabilidades em projetos coletivos."
                                    }
                                ]
                            }
                        }
                    },
                    "Equidade": {
                        tooltip: "Tratar todos de forma justa, imparcialidade nas decisões, combate a privilégios indevidos.",
                        descricao: "Busca ativa por justiça, imparcialidade e inclusão, considerando diversidade e contextos.",
                        content: {
                            "Justiça na Prática": {
                                desc: "Atividades que confrontam vieses e promovem decisões equânimes.",
                                examples: [
                                    {
                                        name: "Análise de Caso com Viés",
                                        desc: "Exercícios que ajudam a identificar e corrigir decisões enviesadas."
                                    }
                                ]
                            }
                        }
                    },
                    "Liderança": {
                        tooltip: "Capacidade de organizar, motivar e inspirar pessoas para atingir objetivos comuns com justiça.",
                        descricao: "Influência construtiva sobre grupos, promovendo coesão, propósito e desempenho ético.",
                        content: {
                            "Liderança Positiva": {
                                desc: "Formação de líderes servindo ao desenvolvimento ético e inspirador do grupo.",
                                examples: [
                                    {
                                        name: "Coaching de Liderança Ética",
                                        desc: "Mentoria focada em justiça, inspiração e eficácia colaborativa."
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            "Temperança": {
                tooltip: "Virtudes de moderação que protegem contra excessos. Sustentam o equilíbrio emocional e o controle de impulsos.",
                descricao: "Faculdades reguladoras que viabilizam autorreflexão, estabilidade e resistência a impulsos destrutivos.",
                content: {
                    "Autocontrole e Moderação": {
                        desc: "Treino da capacidade de contenção, equilíbrio e estabilidade emocional.",
                        examples: [
                            {
                                name: "Técnicas de Delay de Gratificação",
                                desc: "Exercícios cognitivos para fortalecer resistência a impulsos imediatistas."
                            }
                        ]
                    }
                },
                children: {
                    "Perdão": {
                        tooltip: "Capacidade de superar ressentimentos e mágoas, oferecendo uma segunda chance a quem errou.",
                        descricao: "Liberação intencional de emoções negativas em relação a quem causou dano, com ou sem reconciliação.",
                        content: {
                            "Processo de Liberação Emocional": {
                                desc: "Intervenções para reduzir rancor e aumentar compaixão ativa.",
                                examples: [
                                    {
                                        name: "Círculo Restaurativo",
                                        desc: "Mediação grupal com foco em escuta empática e reconstrução relacional."
                                    }
                                ]
                            }
                        }
                    },
                    "Humildade/modéstia": {
                        tooltip: "Reconhecimento realista das próprias limitações; evitar autopromoção e arrogância.",
                        descricao: "Autopercepção desinflada, com foco no coletivo e abertura ao aprendizado.",
                        content: {
                            "Autopercepção Realista": {
                                desc: "Práticas de reflexão que reduzem o ego e aumentam a interdependência.",
                                examples: [
                                    {
                                        name: "Feedback 360º",
                                        desc: "Recolhimento estruturado de visões externas para ampliar a autoconsciência."
                                    }
                                ]
                            }
                        }
                    },
                    "Prudência": {
                        tooltip: "Tomar decisões cuidadosas e racionais, evitando riscos desnecessários ou prejudiciais.",
                        descricao: "Capacidade de prever consequências e agir com cautela deliberada.",
                        content: {
                            "Tomada de Decisão Deliberada": {
                                desc: "Métodos estruturados para escolhas conscientes e responsáveis.",
                                examples: [
                                    {
                                        name: "Matriz de Decisão Ética",
                                        desc: "Instrumento para pesar riscos e benefícios de forma racional e ética."
                                    }
                                ]
                            }
                        }
                    },
                    "Autorregulação": {
                        tooltip: "Controle dos impulsos, emoções e comportamentos; agir de forma deliberada, não reativa.",
                        descricao: "Habilidade de gerir reações emocionais e manter comportamentos alinhados a objetivos de longo prazo.",
                        content: {
                            "Mindfulness e Controle Emocional": {
                                desc: "Treinamento em atenção plena e resposta consciente aos impulsos.",
                                examples: [
                                    {
                                        name: "Prática de RAIN",
                                        desc: "Reconhecer, Aceitar, Investigar e Não se Identificar — técnica de mindfulness para emoções difíceis."
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            "Transcendência": {
                tooltip: "Virtudes que proporcionam conexão com algo maior que o eu — espiritualidade, propósito, admiração e esperança.",
                descricao: "Faculdades que conectam o indivíduo a significados superiores, beleza, propósito existencial e interdependência.",
                content: {
                    "Conexão com Propósito Superior": {
                        desc: "Intervenções que ampliam o sentido existencial, espiritualidade e estados de admiração.",
                        examples: [
                            {
                                name: "Carta para o Eu Futuro",
                                desc: "Escrita projetiva para fortalecer propósito e esperança no longo prazo."
                            }
                        ]
                    }
                },
                children: {
                    "Apreciação da beleza": {
                        tooltip: "Capacidade de reconhecer e valorizar a excelência estética, moral ou científica ao redor.",
                        descricao: "Sensibilidade a padrões de excelência e harmonia em arte, natureza, comportamento ou ideias.",
                        content: {
                            "Estética e Excelência": {
                                desc: "Cultivo da percepção sensível e reverência à beleza em diferentes formas.",
                                examples: [
                                    {
                                        name: "Caminhadas Contemplativas",
                                        desc: "Atividade para observar e registrar belezas naturais e urbanas."
                                    }
                                ]
                            }
                        }
                    },
                    "Gratidão": {
                        tooltip: "Reconhecimento e valorização das coisas boas recebidas na vida, com expressão de apreço.",
                        descricao: "Estado emocional e cognitivo de reconhecimento por benefícios externos ou internos recebidos.",
                        content: {
                            "Cultivo de Apreço": {
                                desc: "Práticas para reconhecer, sentir e expressar gratidão de maneira habitual.",
                                examples: [
                                    {
                                        name: "Jornal de Gratidão",
                                        desc: "Registro sistemático de motivos diários para agradecer."
                                    }
                                ]
                            }
                        }
                    },
                    "Esperança": {
                        tooltip: "Expectativa otimista e motivadora de que o futuro trará resultados positivos.",
                        descricao: "Projeção positiva de cenários futuros e confiança na própria agência para realizá-los.",
                        content: {
                            "Futuro Positivo": {
                                desc: "Estratégias para manter otimismo realista diante da incerteza.",
                                examples: [
                                    {
                                        name: "Visualização de Futuros Desejáveis",
                                        desc: "Imaginar de forma vívida o futuro ideal e os passos para alcançá-lo."
                                    }
                                ]
                            }
                        }
                    },
                    "Humor": {
                        tooltip: "Capacidade de ver o lado leve da vida, criar conexões sociais por meio do riso e diversão.",
                        descricao: "Uso construtivo do riso como ferramenta social, cognitiva e emocional.",
                        content: {
                            "Humor Terapêutico": {
                                desc: "Uso intencional do riso para promover bem-estar e vínculo.",
                                examples: [
                                    {
                                        name: "Diário de Situações Engraçadas",
                                        desc: "Registro de momentos de leveza e humor no cotidiano para promover resiliência emocional."
                                    }
                                ]
                            }
                        }
                    },
                    "Espiritualidade": {
                        tooltip: "Vivência de propósito existencial, conexão com o transcendente, valores espirituais ou religiosos.",
                        descricao: "Integração de significados existenciais profundos, rituais e valores que transcendem o eu individual.",
                        content: {
                            "Jornada de Sentido": {
                                desc: "Exploração guiada de propósito, valores e transcendência.",
                                examples: [
                                    {
                                        name: "Mapa da Alma",
                                        desc: "Ferramenta reflexiva para identificar valores centrais, crenças espirituais e legado desejado."
                                    }
                                ]
                            }
                        }
                    }

                }
            }
        }
    }
};

let key_add = []
let key1_add = []
const demandCtx = document.getElementById('demandChart').getContext('2d');
new Chart(demandCtx, {
    type: 'bar',
    data: {
        labels: ['2023', '2024', '2025'],
        datasets: [
            {
                label: 'Demanda (mil)',
                data: [600, 700, 800],
                backgroundColor: 'rgba(0, 245, 255, 0.6)',
                borderColor: '#00f5ff',
                borderWidth: 2
            },
            {
                label: 'Formação (mil)',
                data: [280, 320, 380],
                backgroundColor: 'rgba(255, 71, 87, 0.6)',
                borderColor: '#ff4757',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#ffffff' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            y: {
                ticks: { color: '#ffffff' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                beginAtZero: true
            }
        }
    }
});
const skillsCtx = document.getElementById('skillsChart').getContext('2d');
new Chart(skillsCtx, {
    type: 'doughnut',
    data: {
        labels: ['Raciocínio Analítico', 'Resolução de Problemas', 'Programação', 'Int. Emocional', 'Liderança', 'Comunicação'],
        datasets: [{
            data: [23, 19, 18, 15, 13, 12],
            backgroundColor: [
                '#00f5ff',
                '#00d4aa',
                '#ff6b7d',
                '#ffd700',
                '#9b59b6',
                '#e67e22'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#ffffff',
                    font: { size: 11 }
                }
            }
        }
    }
});

// Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// funcoes para fluxo
function inicializar(data, fluxograma = "fluxograma", linha = "linhaConexao") {
    const container = document.getElementById(fluxograma);
    const svg = document.getElementById(linha);
    if (container.children.length == 0) {
        container.innerHTML = '';
        svg.innerHTML = '';
        container.className = 'fluxogramaGrid';
        criarFluxograma(data, container);
        drawConnections(data, container, linha);
    }
}

function criarFluxograma(data, container, abrir = true) {
    const keys = Object.keys(data);
    const grid = document.createElement('div');
    grid.className = 'fluxogramaGrid';
    grid.style.gridTemplateColumns = `repeat(${keys.length}, 1fr)`;
    grid.style.gridTemplateRows = `auto auto`;
    keys.forEach(key => {
        const node = document.createElement('div');
        node.className = 'fluxogramaItem';
        node.textContent = key;
        // eventos para tooltip
        node.addEventListener('mouseenter', e => mostrarTooltip(e, data[key].tooltip));
        node.addEventListener('mouseleave', esconderTooltip);
        node.addEventListener('mousemove', atualizarTooltip);
        if (abrir == true)
            node.addEventListener('click', () => abrirCard(key, data[key]));
        if (!key_add.includes(key)) {
            key_add.push(key)
            grid.appendChild(node);
        }
    });
    // recursividade na grid
    keys.forEach(key => {
        if (data[key].children && Object.keys(data[key].children).length > 0 && !key1_add.includes(key)) {
            key1_add.push(key)
            const cell = document.createElement('div');
            if (data[key].styleGridColumn)
                cell.style.gridColumn = data[key].styleGridColumn
            criarFluxograma(data[key].children, cell);
            grid.appendChild(cell);
        }
    });

    container.appendChild(grid);
}

function drawConnections(data, container, linha) {
    const svg = document.getElementById(linha);
    Object.keys(data).forEach(key => {
        console.log(key)
        const parentNode = findNodeElement(container, key);
        const children = data[key].children;
        if (children && Object.keys(children).length > 0) {
            Object.keys(children).forEach(childKey => {
                const childNode = findNodeElement(container, childKey);
                if (parentNode && childNode) {
                    const parentRect = parentNode.getBoundingClientRect();
                    const childRect = childNode.getBoundingClientRect();
                    const svgRect = svg.getBoundingClientRect();

                    const startX = parentRect.left + parentRect.width / 2 - svgRect.left;
                    const startY = parentRect.bottom - svgRect.top;
                    const endX = childRect.left + childRect.width / 2 - svgRect.left;
                    const endY = childRect.top - svgRect.top;

                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", startX);
                    line.setAttribute("y1", startY);
                    line.setAttribute("x2", endX);
                    line.setAttribute("y2", endY);
                    line.setAttribute("stroke", "#888");
                    line.setAttribute("stroke-width", "2");

                    svg.appendChild(line);
                }
            });

            drawConnections(children, container, linha);
        }
    });
}

function findNodeElement(container, key) {
    return [...container.querySelectorAll('.fluxogramaItem')].find(el => el.textContent === key);
}

//funcoes da tooltip
function mostrarTooltip(event, text) {
    tooltip.textContent = text;
    tooltip.classList.add('show');
    atualizarTooltip(event);
}

function esconderTooltip() {
    tooltip.classList.remove('show');
}

function atualizarTooltip(event) {
    const rect = tooltip.getBoundingClientRect();
    let x = event.clientX - rect.width / 2;
    let y = event.clientY - rect.height - 15;

    if (x < 10) x = 10;
    if (x + rect.width > window.innerWidth - 10) x = window.innerWidth - rect.width - 10;
    if (y < 10) y = event.clientY + 15;

    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}

// cards
function abrirCard(title, dadosItem) {
    document.getElementById('cardTitle').textContent = title;
    document.getElementById('cardSubtitle').textContent = dadosItem.description || '';
    let contentHTML = '';
    if (dadosItem.tags && dadosItem.tags.length > 0) {
        contentHTML += `
                <div class="tags" style="margin-bottom:10px">
                    ${dadosItem.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                </div>
            `;
    }
    if (dadosItem.duration) {
        contentHTML += `
                    <div style="color: #555; font-size: 14px; margin-top: 5px;">
                        ⏱️ Duração estimada: ${dadosItem.duration}
                    </div>
                `;
    }


    if (dadosItem.metadata) {
        contentHTML += `
                    <div class="card-section">
                        <h3>Metadados</h3>
                        <p><strong>Autor:</strong> ${dadosItem.metadata.author}</p>
                        <p><strong>Nível:</strong> ${dadosItem.metadata.level}</p>
                        <p><strong>Tempo Estimado:</strong> ${dadosItem.metadata.estimatedReadingTime}</p>
                    </div>
                `;
    }
    if (dadosItem.content) {
        Object.keys(dadosItem.content).forEach(key => {
            let exemplos = ""
            if (dadosItem.content[key].examples && dadosItem.content[key].examples.length > 0) {
                exemplos = `<div class="concept-grid">` + dadosItem.content[key].examples.map(ex => `
                            <div class="concept-item">
                                <h4>${ex.name}</h4>
                                <p>${ex.desc}</p>
                            </div>
                        `).join('') + `</div>`;
            }

            contentHTML += `
                        <div class="card-section">
                            <h3>${key}</h3>
                            <p>${dadosItem.content[key].desc}</p>
                            ${exemplos}
                        </div>
                    `;
        });
    }


    if (dadosItem.examples && dadosItem.examples.length > 0) {
        const extraExemplos = dadosItem.examples.map(ex => `
                    <div class="concept-item">
                        <h4>${ex.name}</h4>
                        <p>${ex.desc}</p>
                    </div>
                `).join('');
        contentHTML += `
                    <div class="card-section">
                        <h3>Exemplos Adicionais</h3>
                        <div class="concept-grid">${extraExemplos}</div>
                    </div>
                `;
    }
    if (dadosItem.files) {

        contentHTML += `<div class="card-section"><h3>Materiais</h3>`;

        if (dadosItem.files.audio) {
            contentHTML += `
                <div>
                    <p><strong>Áudio:</strong></p>
                    <audio controls src="${dadosItem.files.audio}"></audio>
                </div>
            `;
        }

        if (dadosItem.files.video) {
            contentHTML += `
                <div style="margin-top:10px">
                    <p><strong>Vídeo:</strong></p>
                    <video controls width="100%" src="${dadosItem.files.video}"></video>
                </div>
            `;
        }

        if (dadosItem.files.quiz) {
            contentHTML += `
                <div style="margin-top:10px">
                    <p><strong>Quiz:</strong></p>
                    <a href="${dadosItem.files.quiz}" target="_blank" style="color:#00f5ff;text-decoration:underline;">Abrir Quiz</a>
                </div>
            `;
        }

        contentHTML += `</div>`;

    }

    if (dadosItem.children) {
        contentHTML += `
                    <div class="card-section">
                        <h3>Conceitos Relacionados</h3>
                        <div class="concept-grid">
                `;
        Object.keys(dadosItem.children).forEach(childKey => {
            const child = dadosItem.children[childKey];
            contentHTML += `
                        <div class="concept-item">
                            <h4>${childKey}</h4>
                            <p>${child.tooltip}</p>
                        </div>
                    `;
        });
        contentHTML += '</div></div>';
    }



    document.getElementById('cardContent').innerHTML = contentHTML;
    document.getElementById('cardOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function fecharCard() {
    document.getElementById('cardOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fecharCard();
});
document.getElementById('cardOverlay').addEventListener('click', function (e) {
    if (e.target === this) fecharCard();
});


// eventos de janela
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const numberOfParticles = 300;

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.filter = "blur(1px)"
        particle.style.animationDelay = (Math.random() * 30) + 's';

        const size = Math.random() * 5 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        particlesContainer.appendChild(particle);
    }
}

window.addEventListener('load', function () {
    createParticles();

    buttonVerMaisTecnico.addEventListener('mouseenter', e => mostrarTooltip(e, "Saiba Mais sobre o nosso fluxo de conhecimento tecnico"));
    buttonVerMaisTecnico.addEventListener('mouseleave', esconderTooltip);
    buttonVerMaisTecnico.addEventListener('mousemove', atualizarTooltip);
    buttonVerMaisTecnico.addEventListener('click', () => {
        const elementoId0 = document.getElementById("fluxo_socio");
        elementoId0.style.display = "none"
        const elementoId = document.getElementById("fluxo_tecnico");
        elementoId.style.display = "flex"
        inicializar(fluxo_tecnico, "fluxograma_tecnico", "linhaConexao_tecnico")
    });


    buttonVerMaisSocio.addEventListener('mouseenter', e => mostrarTooltip(e, "Saiba Mais sobre o nosso fluxo de conhecimento Socio Emocional"));
    buttonVerMaisSocio.addEventListener('mouseleave', esconderTooltip);
    buttonVerMaisSocio.addEventListener('mousemove', atualizarTooltip);
    buttonVerMaisSocio.addEventListener('click', () => {
        const elementoId0 = document.getElementById("fluxo_tecnico");
        elementoId0.style.display = "none"

        const elementoId = document.getElementById("fluxo_socio");
        elementoId.style.display = "flex"
        inicializar(fluxo_socio, "fluxograma_socio", "linhaConexao_socio")
    });

    buttonVerMaisExercicio.addEventListener('mouseenter', e => mostrarTooltip(e, "Saiba Mais sobre como se preparar para Provas"));
    buttonVerMaisExercicio.addEventListener('mouseleave', esconderTooltip);
    buttonVerMaisExercicio.addEventListener('mousemove', atualizarTooltip);
    buttonVerMaisExercicio.addEventListener('click', () => abrirCard(key, data[key]));
});

// login
document.getElementById('login_fundo').addEventListener('click', function (e) {
    if (e.target === this) login_fundo.style.display = 'none';
});
document.getElementById('entrarButton').addEventListener('click', function (e) {
    login_fundo.style.display = 'flex';
});

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('.error-message, .success-message').forEach(msg => {
        msg.style.display = 'none';
    });
}

function showMessage(messageId, show = true) {
    const message = document.getElementById(messageId);
    message.style.display = show ? 'block' : 'none';
}
document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const button = document.getElementById('loginButton');
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    button.classList.add('loading');
    button.textContent = 'Entrando...';

    let res = await fetch("/usuario/auth", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            senha: password
        })
    })
    res = JSON.parse(await res.text())
    if (res.token.login == true) {
        login_fundo.style.display = "none"
        entrarButton.style.display = "none"
        quizButton.style.display = ""
        dashButton.style.display = ""
        sessionStorage.CCN = JSON.stringify(res)
        number_interesse.innerHTML = `${res.token.interesse[0]["count(*)"]}`
        number_acertos.innerHTML = `%${res.token.max[0]["max(pontuacao)"]}`

        const skillsCtx = document.getElementById("quizz_acertividade").getContext('2d');
        new Chart(skillsCtx, {
            type: 'doughnut',
            data: {
                labels: ['ACERTO', "ERRO"],
                datasets: [{
                    data: [Number(res.token.max[0]["max(pontuacao)"]) - (100 % Number(res.token.max[0]["max(pontuacao)"])), 100 % Number(res.token.max[0]["max(pontuacao)"])],
                    backgroundColor: [
                        '#00f5ff',
                        '#00d4aa'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffffff',
                            font: { size: 11 }
                        }
                    }
                }
            }
        });
    } else {
        showMessage("loginErrorMessage")
        loginErrorMessage.style.display = "flex"
    }
    button.classList.remove('loading');
    button.textContent = 'Entrar';
});

// Manipular formulário de recuperação de senha
document.getElementById('forgotForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const button = document.getElementById('forgotButton');
    const email = document.getElementById('forgotEmail').value;

    button.classList.add('loading');
    button.textContent = 'Enviando...';

    let res = await fetch("/usuario", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email
        })
    })
    res = JSON.parse(await res.text())
    if (res.ok == true) {
        showMessage('forgotErrorMessage', false);
        showMessage('forgotSuccessMessage');
        document.getElementById('forgotEmail').value = '';
    } else {
        showMessage('forgotSuccessMessage', false);
        showMessage('forgotErrorMessage');
    }
    await new Promise(r => setTimeout(r, 3000))
    button.classList.remove('loading');
    button.textContent = 'Enviar Instruções';

});

// Manipular formulário de cadastro
document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const button = document.getElementById('registerButton');
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        showMessage('registerErrorMessage');
        document.getElementById('registerErrorMessage').textContent = 'As senhas não coincidem.';
        return;
    }

    if (password.length < 6) {
        showMessage('registerErrorMessage');
        document.getElementById('registerErrorMessage').textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return;
    }

    button.classList.add('loading');
    button.textContent = 'Criando...';

    let res = await fetch("/usuario", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: name,
            email: email,
            senha: password,
            interesse: areaInteresse.value
        })
    })
    res = JSON.parse(await res.text())
    if (res.ok == true) {
        showMessage('registerSuccessMessage');
        document.getElementById('registerForm').reset();
        await new Promise(r => setTimeout(r, 3000))
        showPage('loginPage');
        button.classList.remove('loading');
        button.textContent = 'Criar Conta';
    } else {
        showMessage('registerErrorMessage');
        document.getElementById('registerErrorMessage').textContent = 'Falha ao Cadastrar tente novamente.';
        document.getElementById('registerForm').reset();
        button.classList.remove('loading');
        button.textContent = 'Criar Conta';
    }
});



// Base de perguntas do quiz
const quizData = [
    {
        question: "Qual linguagem é conhecida como a 'linguagem da web'?",
        options: ["Python", "JavaScript", "Java", "C++"],
        correct: 1
    },
    {
        question: "O que significa HTML?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
        correct: 0
    },
    {
        question: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        options: ["append()", "push()", "add()", "insert()"],
        correct: 1
    },
    {
        question: "Em CSS, qual propriedade controla o espaçamento interno de um elemento?",
        options: ["margin", "border", "padding", "spacing"],
        correct: 2
    },
    {
        question: "Qual é o operador de comparação estrita em JavaScript?",
        options: ["==", "===", "!=", "!=="],
        correct: 1
    },
    {
        question: "Qual tag HTML é usada para criar um link?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1
    },
    {
        question: "Em Python, qual função é usada para obter o comprimento de uma lista?",
        options: ["length()", "size()", "len()", "count()"],
        correct: 2
    },
    {
        question: "Qual propriedade CSS é usada para alterar a cor do texto?",
        options: ["text-color", "font-color", "color", "text-style"],
        correct: 2
    },
    {
        question: "Qual é o resultado de 'typeof null' em JavaScript?",
        options: ["null", "undefined", "object", "boolean"],
        correct: 2
    },
    {
        question: "Qual método HTTP é usado para enviar dados para um servidor?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: 1
    }
];

let questaoIndex = 0;
let score = 0;
let respostaSelect = null;
let respostaC = false;

function initQuiz() {
    document.getElementById('total-questions').textContent = quizData.length;
    createParticles();
    loadQuestion();
}


function loadQuestion() {
    const question = quizData[questaoIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = questaoIndex + 1;
    document.getElementById('current-score').textContent = score;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index, optionElement);
        optionsContainer.appendChild(optionElement);
    });

    respostaSelect = null;
    respostaC = false;
    document.getElementById('next-button').disabled = true;
}

function selectOption(index, element) {
    if (respostaC) return;
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
    respostaSelect = index;
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    if (respostaSelect === null) return;

    const question = quizData[questaoIndex];
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === respostaSelect && index !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    if (respostaSelect === question.correct) {
        score++;
        document.getElementById('current-score').textContent = score;
    }
    respostaC = true;
    setTimeout(() => {
        questaoIndex++;

        if (questaoIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
            let user = JSON.parse(sessionStorage.CCN)
            fetch("/quizz", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: user.token.user.id,
                    resultado: (score / quizData.length) * 100
                })
            })
        }
    }, 1500);
    if (questaoIndex === quizData.length - 1) {
        document.getElementById('next-button').textContent = 'Ver Resultado';
    }

    document.getElementById('next-button').disabled = true;
}

function showResults() {
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    const percentage = (score / quizData.length) * 100;
    const finalScoreElement = document.getElementById('final-score');
    const resultTitleElement = document.getElementById('result-title');
    const resultMessageElement = document.getElementById('result-message');

    finalScoreElement.textContent = `${score}/${quizData.length}`;

    if (percentage >= 90) {
        resultTitleElement.textContent = 'Excelente!';
        resultTitleElement.className = 'result-title excellent';
        resultMessageElement.textContent = 'Você é um verdadeiro expert em programação! Parabéns pelo conhecimento excepcional.';
    } else if (percentage >= 70) {
        resultTitleElement.textContent = 'Muito Bom!';
        resultTitleElement.className = 'result-title good';
        resultMessageElement.textContent = 'Você tem um bom conhecimento em programação. Continue estudando para se tornar um expert!';
    } else if (percentage >= 50) {
        resultTitleElement.textContent = 'Razoável';
        resultTitleElement.className = 'result-title average';
        resultMessageElement.textContent = 'Você está no caminho certo! Continue praticando e estudando para melhorar seus conhecimentos.';
    } else {
        resultTitleElement.textContent = 'Precisa Melhorar';
        resultTitleElement.className = 'result-title poor';
        resultMessageElement.textContent = 'Não desanime! Todo programador começou do zero. Continue estudando e praticando.';
    }
}

function restartQuiz() {
    questaoIndex = 0;
    score = 0;
    respostaSelect = null;
    respostaC = false;

    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('next-button').textContent = 'Próxima Pergunta';

    loadQuestion();
}

window.onload = initQuiz;

quizButton.addEventListener("click", async () => {
    pageInicio.style.display = "none"
    pagedash.style.display = "none"
    pageQuiz.style.display = ""
})

inicioButton.addEventListener('click', async () => {
    pageInicio.style.display = ""
    pageQuiz.style.display = "none"
    pagedash.style.display = "none"

})

dashButton.addEventListener("click", async () => {
    pagedash.style.display = ""
    pageInicio.style.display = "none"
    pageQuiz.style.display = "none"
})

const growthCtx = document.getElementById('growthChart').getContext('2d');
new Chart(growthCtx, {
    type: 'line',
    data: {
        labels: ['2021', '2022', '2023', '2024', '2025 (Projeção)'],
        datasets: [{
            label: 'Crescimento (%)',
            data: [8.2, 6.5, -0.4, 6.0, 7.4],
            borderColor: '#00f5ff',
            backgroundColor: 'rgba(0, 245, 255, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            x: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }
    }
});

const salaryCtx = document.getElementById('salaryChart').getContext('2d');
new Chart(salaryCtx, {
    type: 'doughnut',
    data: {
        labels: ['Júnior (R$ 2-6k)', 'Pleno (R$ 6-12k)', 'Sênior (R$ 12-20k)', 'Especialista (R$ 20k+)'],
        datasets: [{
            data: [40, 35, 20, 5],
            backgroundColor: [
                '#00f5ff',
                '#00d4aa',
                '#ffd700',
                '#ff6b7d'
            ],
            borderWidth: 2,
            borderColor: '#1a1a2e'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#ffffff',
                    padding: 20
                }
            }
        }
    }
});

