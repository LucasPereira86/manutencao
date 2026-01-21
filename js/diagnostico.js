// Árvore de diagnóstico para problemas comuns - EXPANDIDO COM MANUAL DE REPARO CH570/670

const DIAGNOSTICOS = {
    sistemas: [
        {
            id: 'motor',
            nome: 'Motor',
            icone: '🔥',
            problemas: [
                {
                    id: 'motor_nao_liga',
                    sintoma: 'Motor não liga',
                    perguntas: [
                        {
                            texto: 'O motor de partida gira?',
                            opcoes: [
                                { texto: 'Sim, gira mas não pega', proximo: 'motor_gira_nao_pega' },
                                { texto: 'Não, não gira', proximo: 'motor_nao_gira' }
                            ]
                        }
                    ],
                    subproblemas: {
                        motor_gira_nao_pega: {
                            perguntas: [
                                {
                                    texto: 'Há combustível no tanque?',
                                    opcoes: [
                                        { texto: 'Sim', proximo: 'checar_filtros' },
                                        { texto: 'Não', solucao: 'abastecer' }
                                    ]
                                }
                            ],
                            subproblemas: {
                                checar_filtros: {
                                    solucao: {
                                        titulo: 'Verificar Sistema de Combustível',
                                        passos: [
                                            'Verificar se há ar no sistema de combustível',
                                            'Sangrar o sistema: abrir sangrador no filtro primário',
                                            'Acionar bomba manual até sair combustível sem bolhas',
                                            'Repetir no filtro secundário',
                                            'Verificar elemento do filtro primário (separador de água)',
                                            'Drenar água do copo do separador',
                                            'Verificar filtro secundário',
                                            'Verificar bomba de transferência',
                                            'Verificar válvula de corte de combustível',
                                            'Se persistir, verificar bicos injetores'
                                        ]
                                    }
                                }
                            },
                            solucoes: {
                                abastecer: {
                                    titulo: 'Abastecer e Sangrar Sistema',
                                    passos: [
                                        'Abastecer o tanque de combustível com diesel limpo',
                                        'Localizar bomba de escorvamento manual',
                                        'Abrir sangrador do filtro primário',
                                        'Acionar bomba manual até sair combustível',
                                        'Fechar sangrador do filtro primário',
                                        'Abrir sangrador do filtro secundário',
                                        'Acionar bomba até sair combustível sem bolhas',
                                        'Fechar sangrador',
                                        'Tentar dar partida (máx. 30 segundos por vez)',
                                        'Aguardar 2 minutos entre tentativas'
                                    ]
                                }
                            }
                        },
                        motor_nao_gira: {
                            perguntas: [
                                {
                                    texto: 'As luzes do painel acendem?',
                                    opcoes: [
                                        { texto: 'Sim', proximo: 'checar_partida' },
                                        { texto: 'Não', solucao: 'bateria' }
                                    ]
                                }
                            ],
                            subproblemas: {
                                checar_partida: {
                                    solucao: {
                                        titulo: 'Verificar Motor de Partida',
                                        passos: [
                                            'Verificar conexões elétricas do motor de partida',
                                            'Verificar relé principal de partida',
                                            'Verificar interruptor de partida neutra',
                                            'Verificar fusível do circuito de partida (60A)',
                                            'Testar solenoide do motor de partida',
                                            'Verificar cabos da bateria (0,5V máx de queda)',
                                            'Se necessário: testar motor de partida na bancada',
                                            'Verificar bendix/impulsor do motor de partida'
                                        ]
                                    }
                                }
                            },
                            solucoes: {
                                bateria: {
                                    titulo: 'Problema na Bateria',
                                    passos: [
                                        'Verificar terminais da bateria (limpar oxidação)',
                                        'Apertar terminais com torque adequado',
                                        'Verificar nível de eletrólito em cada célula',
                                        'Medir tensão em circuito aberto (min 12.4V)',
                                        'Realizar teste de carga na bateria',
                                        'Verificar cabo massa do motor',
                                        'Verificar fusível principal (175A)',
                                        'Carregar ou substituir bateria se necessário'
                                    ]
                                }
                            }
                        }
                    }
                },
                {
                    id: 'motor_aquecendo',
                    sintoma: 'Motor aquecendo demais',
                    solucao: {
                        titulo: 'Verificar Sistema de Arrefecimento',
                        passos: [
                            'Verificar nível do líquido de arrefecimento (motor frio)',
                            'Verificar concentração do aditivo (50%)',
                            'Verificar se há vazamentos externos no sistema',
                            'Limpar radiador e intercooler (ar comprimido de dentro para fora)',
                            'Verificar estado e tensão da correia do ventilador',
                            'Verificar funcionamento do ventilador viscoso',
                            'Verificar termostato (abertura a 82°C)',
                            'Verificar bomba d\'água (vazamento pelo dreno de inspeção)',
                            'Verificar sensor de temperatura do motor',
                            'Verificar tampa do radiador (pressão 103 kPa)',
                            'Verificar se sistema EGR está funcionando (se equipado)'
                        ]
                    }
                },
                {
                    id: 'motor_fumaca_preta',
                    sintoma: 'Fumaça preta no escapamento',
                    solucao: {
                        titulo: 'Excesso de Combustível / Falta de Ar',
                        passos: [
                            'Verificar indicador de restrição do filtro de ar',
                            'Verificar elemento do filtro de ar primário',
                            'Verificar elemento do filtro de ar secundário',
                            'Verificar pré-filtro/ciclone de ar',
                            'Verificar dutos de admissão (rachaduras/furos)',
                            'Verificar pressão de boost do turbo',
                            'Verificar turbo compressor (folga radial e axial)',
                            'Verificar intercooler (obstruções)',
                            'Verificar bicos injetores (padrão de spray)',
                            'Verificar bomba injetora/common rail'
                        ]
                    }
                },
                {
                    id: 'motor_fumaca_branca',
                    sintoma: 'Fumaça branca no escapamento',
                    solucao: {
                        titulo: 'Água na Combustão ou Combustível Não Queimado',
                        passos: [
                            'Se for na partida a frio: aguardar motor aquecer (normal)',
                            'Verificar nível do líquido de arrefecimento',
                            'Verificar se há bolhas no reservatório (motor funcionando)',
                            'Verificar óleo do motor (se leitoso = água no óleo)',
                            'Verificar junta do cabeçote',
                            'Testar pressão do sistema de arrefecimento',
                            'Verificar camisas dos cilindros',
                            'Verificar bicos injetores (gotejamento)',
                            'Verificar tempo de injeção'
                        ]
                    }
                },
                {
                    id: 'motor_perda_potencia',
                    sintoma: 'Motor com perda de potência',
                    solucao: {
                        titulo: 'Diagnóstico de Perda de Potência',
                        passos: [
                            'Verificar filtro de ar (indicador de restrição)',
                            'Verificar filtros de combustível',
                            'Verificar pressão de combustível no rail',
                            'Verificar turbo (pressão de boost)',
                            'Verificar válvula wastegate do turbo',
                            'Verificar intercooler (obstruções/vazamentos)',
                            'Verificar sistema EGR (se equipado)',
                            'Verificar códigos de falha no painel',
                            'Verificar temperatura do combustível',
                            'Verificar escape (obstruções/contrapressão)'
                        ]
                    }
                },
                {
                    id: 'motor_vibracao',
                    sintoma: 'Vibração excessiva do motor',
                    solucao: {
                        titulo: 'Diagnóstico de Vibração',
                        passos: [
                            'Verificar suportes/coxins do motor',
                            'Verificar se todos os cilindros estão funcionando',
                            'Verificar bicos injetores',
                            'Verificar compressão dos cilindros',
                            'Verificar balanceamento do volante',
                            'Verificar damper/amortecedor de vibrações',
                            'Verificar acoplamento do motor/transmissão',
                            'Verificar correias e suas tensões'
                        ]
                    }
                },
                {
                    id: 'motor_consumo_oleo',
                    sintoma: 'Consumo excessivo de óleo',
                    solucao: {
                        titulo: 'Diagnóstico de Consumo de Óleo',
                        passos: [
                            'Verificar se há vazamentos externos visíveis',
                            'Verificar vedador traseiro do virabrequim',
                            'Verificar vedador dianteiro do virabrequim',
                            'Verificar junta do cárter',
                            'Verificar retentor do turbo',
                            'Verificar retentores das válvulas',
                            'Verificar respiro do cárter',
                            'Verificar anéis de segmento (se fumaça azul)',
                            'Verificar nível correto (não abastecer demais)'
                        ]
                    }
                }
            ]
        },
        {
            id: 'hidraulico',
            nome: 'Sistema Hidráulico',
            icone: '💧',
            problemas: [
                {
                    id: 'hidr_lento',
                    sintoma: 'Movimentos hidráulicos lentos',
                    solucao: {
                        titulo: 'Verificar Sistema Hidráulico',
                        passos: [
                            'Verificar nível de óleo hidráulico (visor)',
                            'Verificar indicador dos filtros hidráulicos (verde=OK)',
                            'Verificar temperatura do óleo (máx 100°C)',
                            'Verificar rotação do motor (mínimo 2100 RPM)',
                            'Verificar bomba hidráulica de carga',
                            'Verificar bomba hidráulica principal',
                            'Verificar válvulas de alívio',
                            'Verificar mangueiras (restrições/dobras/esmagamentos)',
                            'Verificar cilindros por drift interno',
                            'Verificar vazamentos internos em válvulas'
                        ]
                    }
                },
                {
                    id: 'hidr_vazamento',
                    sintoma: 'Vazamento de óleo hidráulico',
                    solucao: {
                        titulo: 'Localizar e Reparar Vazamento',
                        passos: [
                            'Limpar área suspeita completamente',
                            'Acionar sistema para identificar ponto exato',
                            'Se mangueira: verificar data de fabricação (máx 6 anos)',
                            'Se mangueira: substituir por peça correta',
                            'Se conexão: reapertar com torque especificado',
                            'Se conexão: trocar O-ring ou vedação',
                            'Se cilindro: verificar haste (riscos/amassados)',
                            'Se cilindro: substituir kit de vedação',
                            'Completar nível após reparo',
                            'Verificar se há ar no sistema'
                        ]
                    }
                },
                {
                    id: 'hidr_barulho',
                    sintoma: 'Barulho/ruído no sistema hidráulico',
                    solucao: {
                        titulo: 'Diagnóstico de Ruído Hidráulico',
                        passos: [
                            'Verificar nível de óleo (baixo = cavitação)',
                            'Verificar se há ar no sistema (óleo espumando)',
                            'Verificar filtro de sucção (obstrução)',
                            'Verificar mangueira de sucção (rachaduras)',
                            'Verificar vedação da tampa do reservatório',
                            'Verificar acoplamento da bomba',
                            'Verificar desgaste da bomba hidráulica',
                            'Verificar válvulas de alívio (ajuste)',
                            'Verificar rolamentos do motor hidráulico'
                        ]
                    }
                },
                {
                    id: 'hidr_aquecendo',
                    sintoma: 'Óleo hidráulico aquecendo demais',
                    solucao: {
                        titulo: 'Superaquecimento do Sistema Hidráulico',
                        passos: [
                            'Verificar nível de óleo (baixo causa aquecimento)',
                            'Limpar trocador de calor/radiador do óleo',
                            'Verificar ventilador do trocador de calor',
                            'Verificar termostato do óleo hidráulico',
                            'Verificar viscosidade do óleo (usar especificado)',
                            'Verificar vazamentos internos (drift em cilindros)',
                            'Verificar válvulas de alívio (bypass contínuo)',
                            'Verificar bomba hidráulica (desgaste interno)',
                            'Verificar se não há restrição no retorno'
                        ]
                    }
                },
                {
                    id: 'hidr_espuma',
                    sintoma: 'Óleo hidráulico com espuma',
                    solucao: {
                        titulo: 'Ar no Sistema Hidráulico',
                        passos: [
                            'Verificar nível de óleo (completar se necessário)',
                            'Verificar vedação da tampa do reservatório',
                            'Verificar mangueira de sucção (rachaduras)',
                            'Verificar conexões de sucção (apertar)',
                            'Verificar retentor do eixo da bomba',
                            'Purgar ar do sistema: acionar cilindros várias vezes',
                            'Verificar filtro de ar do respiro',
                            'Verificar se óleo é o especificado'
                        ]
                    }
                },
                {
                    id: 'hidr_pressao_baixa',
                    sintoma: 'Pressão hidráulica baixa',
                    solucao: {
                        titulo: 'Diagnóstico de Pressão Baixa',
                        passos: [
                            'Conectar manômetro no ponto de teste',
                            'Verificar RPM do motor (mín 2100)',
                            'Verificar válvula de alívio principal',
                            'Verificar bomba de carga',
                            'Verificar bomba principal (vazão e pressão)',
                            'Verificar filtros (indicador)',
                            'Verificar vazamentos internos',
                            'Verificar válvulas de controle',
                            'Verificar especificação do óleo'
                        ]
                    }
                }
            ]
        },
        {
            id: 'corte_base',
            nome: 'Corte de Base',
            icone: '⚔️',
            problemas: [
                {
                    id: 'corte_ruim',
                    sintoma: 'Corte de base irregular/rasgando',
                    solucao: {
                        titulo: 'Ajustar Sistema de Corte de Base',
                        passos: [
                            'Verificar afiação das facas (trocar se necessário)',
                            'Verificar torque de fixação das facas (95 Nm)',
                            'Verificar sincronismo dos discos (facas não devem se tocar)',
                            'Ajustar sincronismo: girar discos manualmente',
                            'Verificar desgaste dos discos de corte',
                            'Verificar rolamentos dos discos',
                            'Verificar altura de corte (ajuste conforme condição)',
                            'Verificar pressão do sistema de flutuação',
                            'Verificar sapatas de deslizamento'
                        ]
                    }
                },
                {
                    id: 'corte_embuchando',
                    sintoma: 'Corte de base embuchando/travando',
                    solucao: {
                        titulo: 'Resolver Embuchamento no Corte',
                        passos: [
                            'Reduzir velocidade de deslocamento',
                            'Verificar rotação do corte (RPM adequado)',
                            'Verificar facas (cegas, quebradas ou faltando)',
                            'Verificar se há material enrolado nos discos',
                            'Verificar rolos alimentadores',
                            'Ajustar pressão dos divisores de linha',
                            'Verificar condição da cana (muito deitada?)',
                            'Verificar sincronismo dos discos',
                            'Limpar área do corte de base'
                        ]
                    }
                },
                {
                    id: 'corte_vibracao',
                    sintoma: 'Vibração excessiva no corte de base',
                    solucao: {
                        titulo: 'Verificar Balanceamento do Corte',
                        passos: [
                            'ATENÇÃO: Desligar máquina antes de verificar',
                            'Verificar se há facas faltando',
                            'Verificar fixação das facas (torque 95 Nm)',
                            'Verificar balanceamento dos discos',
                            'Verificar rolamentos dos discos (folga radial)',
                            'Verificar caixas de engrenagens (óleo e desgaste)',
                            'Verificar cruzetas e cardans',
                            'Verificar acoplamentos',
                            'Verificar suportes e buchas do sistema'
                        ]
                    }
                },
                {
                    id: 'corte_nao_flutua',
                    sintoma: 'Corte de base não flutua corretamente',
                    solucao: {
                        titulo: 'Sistema de Flutuação',
                        passos: [
                            'Verificar pressão do acumulador de flutuação',
                            'Verificar cilindros de flutuação',
                            'Verificar válvula de controle de flutuação',
                            'Verificar ajuste do sensor de pressão',
                            'Verificar mangueiras e conexões',
                            'Verificar se não há ar no sistema',
                            'Verificar calibração no monitor',
                            'Ajustar pressão conforme tipo de solo'
                        ]
                    }
                },
                {
                    id: 'corte_oleo_redutores',
                    sintoma: 'Vazamento nos redutores do corte',
                    solucao: {
                        titulo: 'Verificar Redutores do Corte de Base',
                        passos: [
                            'Identificar redutor com vazamento',
                            'Verificar nível de óleo do redutor',
                            'Verificar retentores do redutor',
                            'Verificar respiro do redutor',
                            'Verificar condição das engrenagens',
                            'Verificar rolamentos internos',
                            'Trocar óleo conforme especificação (cada 500h)',
                            'Torque da tampa: 25 Nm'
                        ]
                    }
                }
            ]
        },
        {
            id: 'divisores',
            nome: 'Divisores de Linha',
            icone: '🌿',
            problemas: [
                {
                    id: 'div_nao_deita',
                    sintoma: 'Divisores não deitam a cana',
                    solucao: {
                        titulo: 'Ajustar Divisores de Linha',
                        passos: [
                            'Verificar rotação dos divisores',
                            'Verificar correntes de acionamento',
                            'Verificar tensão das correntes',
                            'Verificar desgaste das pontas dos divisores',
                            'Verificar cilindros de levantamento',
                            'Verificar ajuste de altura',
                            'Verificar velocidade em relação ao deslocamento',
                            'Ajustar ângulo de ataque'
                        ]
                    }
                },
                {
                    id: 'div_quebra_corrente',
                    sintoma: 'Corrente dos divisores quebrando',
                    solucao: {
                        titulo: 'Problema nas Correntes',
                        passos: [
                            'Verificar tensão da corrente (ajustar)',
                            'Verificar alinhamento das engrenagens',
                            'Verificar lubrificação da corrente',
                            'Verificar desgaste da corrente',
                            'Verificar desgaste das engrenagens',
                            'Verificar se há objeto estranho travando',
                            'Substituir corrente se esticada demais',
                            'Usar corrente com especificação correta'
                        ]
                    }
                },
                {
                    id: 'div_pirulito',
                    sintoma: 'Pirulitos (rolos levantadores) não funcionam',
                    solucao: {
                        titulo: 'Verificar Pirulitos',
                        passos: [
                            'Verificar motor hidráulico dos pirulitos',
                            'Verificar mangueiras de alimentação',
                            'Verificar válvula de controle',
                            'Verificar correntes de acionamento',
                            'Verificar rolamentos dos rolos',
                            'Verificar desgaste das aletas',
                            'Limpar eixo e mancais',
                            'Verificar se há material enrolado'
                        ]
                    }
                },
                {
                    id: 'div_tombador',
                    sintoma: 'Tombadores não funcionam corretamente',
                    solucao: {
                        titulo: 'Verificar Tombadores',
                        passos: [
                            'Verificar cilindro do tombador',
                            'Verificar válvula de controle',
                            'Verificar articulações e pinos',
                            'Verificar ajuste de posição',
                            'Verificar sensores de posição (se equipado)',
                            'Verificar mangueiras',
                            'Lubrificar articulações'
                        ]
                    }
                }
            ]
        },
        {
            id: 'rolos',
            nome: 'Rolos Alimentadores',
            icone: '🔄',
            problemas: [
                {
                    id: 'rolo_nao_puxa',
                    sintoma: 'Rolos não puxam a cana',
                    solucao: {
                        titulo: 'Verificar Rolos Alimentadores',
                        passos: [
                            'Verificar rotação dos rolos (motor hidráulico)',
                            'Verificar pressão hidráulica do sistema',
                            'Verificar desgaste das facas/aletas dos rolos',
                            'Verificar ajuste de pressão dos rolos flutuantes',
                            'Verificar molas de pressão',
                            'Verificar se há material enrolado nos eixos',
                            'Verificar correntes de sincronismo',
                            'Verificar folga entre rolos'
                        ]
                    }
                },
                {
                    id: 'rolo_reversao',
                    sintoma: 'Sistema de reversão não funciona',
                    solucao: {
                        titulo: 'Verificar Reversão dos Rolos',
                        passos: [
                            'Verificar válvula de reversão',
                            'Verificar sinal elétrico do botão de reversão',
                            'Verificar solenoide da válvula',
                            'Verificar pressão de pilotagem',
                            'Verificar mangueiras do circuito',
                            'Testar reversão no diagnóstico do monitor',
                            'Verificar fusível do circuito'
                        ]
                    }
                },
                {
                    id: 'rolo_vibracao',
                    sintoma: 'Vibração nos rolos alimentadores',
                    solucao: {
                        titulo: 'Diagnóstico de Vibração nos Rolos',
                        passos: [
                            'Verificar balanceamento dos rolos',
                            'Verificar rolamentos dos eixos',
                            'Verificar se há facas/aletas faltando',
                            'Verificar fixação das facas',
                            'Verificar correntes (tensão e desgaste)',
                            'Verificar engrenagens de sincronismo',
                            'Verificar acoplamentos',
                            'Verificar mancais de apoio'
                        ]
                    }
                }
            ]
        },
        {
            id: 'picador',
            nome: 'Sistema Picador',
            icone: '🔪',
            problemas: [
                {
                    id: 'pic_tolete_grande',
                    sintoma: 'Toletes muito grandes',
                    solucao: {
                        titulo: 'Ajuste do Picador - Toletes Grandes',
                        passos: [
                            'Verificar afiação das facas do picador',
                            'Verificar distância das contra-facas (1-2 mm)',
                            'Ajustar contra-facas: afrouxar e aproximar',
                            'Verificar se facas estão bem fixadas',
                            'Verificar rotação do picador',
                            'Verificar velocidade dos rolos alimentadores',
                            'Verificar desgaste do suporte das facas',
                            'Torque das facas: 135 Nm'
                        ]
                    }
                },
                {
                    id: 'pic_esmagando',
                    sintoma: 'Toletes esmagados/dilacerados',
                    solucao: {
                        titulo: 'Facas e Contra-facas Desgastadas',
                        passos: [
                            'Verificar afiação das facas (substituir se cegas)',
                            'Verificar contra-facas (substituir se gastas)',
                            'Ajustar folga facas/contra-facas',
                            'Verificar se facas estão tortas',
                            'Verificar desbalanceamento do tambor',
                            'Verificar velocidade de alimentação',
                            'Afiar facas: ângulo de 22°',
                            'Trocar facas em pares opostos'
                        ]
                    }
                },
                {
                    id: 'pic_vibracao',
                    sintoma: 'Vibração excessiva no picador',
                    solucao: {
                        titulo: 'Balanceamento do Picador',
                        passos: [
                            'ATENÇÃO: Desligar antes de verificar',
                            'Verificar se todas as facas estão presentes',
                            'Verificar torque de fixação das facas (135 Nm)',
                            'Verificar balanceamento do tambor',
                            'Verificar rolamentos do eixo do picador',
                            'Verificar engrenagens da caixa do picador',
                            'Verificar volante do picador',
                            'Verificar mancais de apoio',
                            'Verificar fixação da caixa de engrenagens'
                        ]
                    }
                },
                {
                    id: 'pic_engrenagens',
                    sintoma: 'Barulho na caixa de engrenagens do picador',
                    solucao: {
                        titulo: 'Verificar Caixa de Engrenagens',
                        passos: [
                            'ATENÇÃO: Desligar antes de verificar',
                            'Verificar nível de óleo da caixa',
                            'Verificar qualidade do óleo (contaminação/limalha)',
                            'Verificar desgaste das engrenagens',
                            'Verificar rolamentos internos',
                            'Verificar folga entre dentes',
                            'Usar óleo especificado',
                            'Trocar óleo a cada 500 horas'
                        ]
                    }
                },
                {
                    id: 'pic_vazamento',
                    sintoma: 'Vazamento de óleo na caixa do picador',
                    solucao: {
                        titulo: 'Reparar Vazamento na Caixa',
                        passos: [
                            'Identificar ponto exato do vazamento',
                            'Verificar retentores do eixo',
                            'Verificar junta da tampa',
                            'Verificar respiro (entupido causa pressão)',
                            'Verificar aperto dos parafusos da tampa',
                            'Verificar nível de óleo',
                            'Usar óleo especificado (80W-90)'
                        ]
                    }
                }
            ]
        },
        {
            id: 'extratores',
            nome: 'Extratores (Limpeza)',
            icone: '🌬️',
            problemas: [
                {
                    id: 'ext_nao_limpa',
                    sintoma: 'Extratores não limpam bem',
                    solucao: {
                        titulo: 'Ajustar Sistema de Limpeza',
                        passos: [
                            'Verificar rotação dos extratores',
                            'Verificar desgaste das pás',
                            'Verificar ajuste dos capuzes',
                            'Ajustar abertura dos capuzes conforme vento',
                            'Verificar grelhas de limpeza',
                            'Ajustar abertura das grelhas',
                            'Verificar velocidade do ventilador',
                            'Verificar direção do capuz (favor do vento)'
                        ]
                    }
                },
                {
                    id: 'ext_vibracao',
                    sintoma: 'Vibração nos extratores',
                    solucao: {
                        titulo: 'Balanceamento dos Extratores',
                        passos: [
                            'ATENÇÃO: Desligar antes de verificar',
                            'Verificar se há pás faltando ou quebradas',
                            'Verificar fixação das pás',
                            'Verificar rolamentos do eixo',
                            'Verificar balanceamento do rotor',
                            'Verificar correias de acionamento',
                            'Verificar polias',
                            'Verificar mancais de apoio'
                        ]
                    }
                },
                {
                    id: 'ext_correia',
                    sintoma: 'Correia do extrator quebrando',
                    solucao: {
                        titulo: 'Verificar Correias do Extrator',
                        passos: [
                            'Verificar tensão da correia',
                            'Verificar alinhamento das polias',
                            'Verificar desgaste da polia',
                            'Verificar se há material travando',
                            'Verificar tensionador',
                            'Substituir correia desgastada',
                            'Verificar se especificação está correta'
                        ]
                    }
                },
                {
                    id: 'ext_capuz',
                    sintoma: 'Capuz do extrator não gira',
                    solucao: {
                        titulo: 'Verificar Giro do Capuz',
                        passos: [
                            'Verificar motor hidráulico do giro',
                            'Verificar válvula de controle',
                            'Verificar engrenagem de giro',
                            'Verificar rolamento de giro',
                            'Verificar se há material travando',
                            'Lubrificar sistema de giro',
                            'Verificar controle no joystick/alavanca'
                        ]
                    }
                }
            ]
        },
        {
            id: 'elevador',
            nome: 'Elevador',
            icone: '⬆️',
            problemas: [
                {
                    id: 'elev_nao_gira',
                    sintoma: 'Elevador não gira',
                    solucao: {
                        titulo: 'Verificar Sistema do Elevador',
                        passos: [
                            'Verificar motor hidráulico do elevador',
                            'Verificar válvula de controle',
                            'Verificar se corrente está travada',
                            'Verificar tensão da corrente',
                            'Verificar eixo e rolamentos',
                            'Verificar engrenagem de acionamento',
                            'Verificar fusível do controle',
                            'Verificar comando no painel'
                        ]
                    }
                },
                {
                    id: 'elev_perdendo',
                    sintoma: 'Perdendo cana no elevador',
                    solucao: {
                        titulo: 'Ajustar Elevador para Menos Perdas',
                        passos: [
                            'Verificar taliscas (faltando ou quebradas)',
                            'Substituir taliscas danificadas',
                            'Verificar vedações laterais',
                            'Verificar chapa de fundo (furos)',
                            'Ajustar velocidade do elevador',
                            'Ajustar flap de saída',
                            'Verificar posição do transbordo',
                            'Ajustar altura do extensor',
                            'Verificar tensão da corrente'
                        ]
                    }
                },
                {
                    id: 'elev_corrente',
                    sintoma: 'Corrente do elevador quebrando',
                    solucao: {
                        titulo: 'Problema na Corrente do Elevador',
                        passos: [
                            'Verificar tensão da corrente (ajustar)',
                            'Verificar desgaste da corrente',
                            'Verificar desgaste dos pinos e rolos',
                            'Verificar lubrificação da corrente',
                            'Verificar engrenagens de acionamento',
                            'Verificar alinhamento da corrente',
                            'Verificar se há material travando',
                            'Verificar taliscas (se travando na saída)'
                        ]
                    }
                },
                {
                    id: 'elev_giro',
                    sintoma: 'Giro do elevador não funciona',
                    solucao: {
                        titulo: 'Verificar Giro do Elevador',
                        passos: [
                            'Verificar cilindro de giro',
                            'Verificar válvula de controle do giro',
                            'Verificar mangueiras',
                            'Verificar pino de articulação',
                            'Verificar sensor de posição (se equipado)',
                            'Verificar comando no joystick',
                            'Verificar limites de giro'
                        ]
                    }
                }
            ]
        },
        {
            id: 'esteiras',
            nome: 'Esteiras',
            icone: '🛤️',
            problemas: [
                {
                    id: 'est_saindo',
                    sintoma: 'Esteira saindo/descarrilhando',
                    solucao: {
                        titulo: 'Ajustar Tensão e Alinhamento',
                        passos: [
                            'Verificar tensão da esteira (folga 20-30mm)',
                            'Tensionar pelo cilindro tensionador',
                            'Verificar alinhamento do chassi',
                            'Verificar desgaste dos roletes',
                            'Verificar roda guia (desgaste)',
                            'Verificar roda motriz (dentes)',
                            'Verificar se elos estão gastos',
                            'Verificar sapatas soltas',
                            'Verificar se material entre roda e esteira'
                        ]
                    }
                },
                {
                    id: 'est_vazamento_rolete',
                    sintoma: 'Vazamento de óleo nos roletes',
                    solucao: {
                        titulo: 'Substituir Rolete com Vazamento',
                        passos: [
                            'Identificar rolete(s) com vazamento',
                            'Posicionar máquina em local plano',
                            'Levantar chassi com macaco hidráulico',
                            'Calçar com segurança',
                            'Aliviar tensão da esteira',
                            'Remover esteira do lado afetado',
                            'Substituir rolete danificado',
                            'Reinstalar esteira',
                            'Tensionar corretamente',
                            'Testar'
                        ]
                    }
                },
                {
                    id: 'est_tensionador',
                    sintoma: 'Tensionador da esteira não funciona',
                    solucao: {
                        titulo: 'Verificar Tensionador',
                        passos: [
                            'Verificar cilindro tensionador',
                            'Verificar vedações do cilindro',
                            'Verificar válvula de carga',
                            'Verificar pressão do acumulador',
                            'Verificar mangueira de alimentação',
                            'Verificar se há vazamento',
                            'Purgar ar do sistema'
                        ]
                    }
                },
                {
                    id: 'est_redutor',
                    sintoma: 'Vazamento no redutor do eixo',
                    solucao: {
                        titulo: 'Verificar Redutor de Eixo',
                        passos: [
                            'Verificar nível de óleo do redutor',
                            'Verificar retentores do redutor',
                            'Verificar respiro do redutor',
                            'Verificar se não há trincas',
                            'Trocar óleo conforme intervalo (cada 500h)',
                            'Usar óleo especificado',
                            'Verificar aperto das tampas'
                        ]
                    }
                }
            ]
        },
        {
            id: 'eletrico',
            nome: 'Sistema Elétrico',
            icone: '⚡',
            problemas: [
                {
                    id: 'elet_bateria',
                    sintoma: 'Bateria descarregando rapidamente',
                    solucao: {
                        titulo: 'Diagnóstico do Sistema de Carga',
                        passos: [
                            'Medir tensão da bateria (motor parado): min 12.4V',
                            'Medir tensão com motor em 2000 RPM: 13.5-14.5V',
                            'Verificar correia do alternador (tensão e desgaste)',
                            'Verificar conexões do alternador',
                            'Testar alternador com equipamento',
                            'Verificar se há consumo parasita',
                            'Verificar idade da bateria (máx 3 anos)',
                            'Verificar cabos da bateria (queda máx 0.5V)',
                            'Verificar fusível principal'
                        ]
                    }
                },
                {
                    id: 'elet_luzes',
                    sintoma: 'Luzes não funcionam',
                    solucao: {
                        titulo: 'Verificar Circuito de Iluminação',
                        passos: [
                            'Verificar fusíveis no painel',
                            'Verificar relés de iluminação',
                            'Verificar interruptores',
                            'Testar lâmpadas individualmente',
                            'Verificar conectores (corrosão)',
                            'Verificar aterramento',
                            'Verificar fiação (rompimento)',
                            'Usar lâmpadas com potência correta'
                        ]
                    }
                },
                {
                    id: 'elet_painel',
                    sintoma: 'Painel/monitor não liga',
                    solucao: {
                        titulo: 'Verificar Sistema do Monitor',
                        passos: [
                            'Verificar fusível do monitor',
                            'Verificar relé de alimentação',
                            'Verificar tensão de alimentação (12V)',
                            'Verificar conexão CAN bus',
                            'Verificar aterramento do monitor',
                            'Reiniciar sistema (desligar chave 30s)',
                            'Verificar software/atualização',
                            'Testar com monitor reserva'
                        ]
                    }
                },
                {
                    id: 'elet_codigo_falha',
                    sintoma: 'Códigos de falha no painel',
                    solucao: {
                        titulo: 'Diagnóstico de Códigos de Falha',
                        passos: [
                            'Anotar código de falha exibido',
                            'Consultar manual para significado',
                            'Verificar se é falha ativa ou armazenada',
                            'Para códigos de sensor: verificar sensor e fiação',
                            'Para códigos de CAN: verificar comunicação',
                            'Limpar código e verificar se retorna',
                            'Se persistir: usar ferramenta de diagnóstico',
                            'Documentar falhas frequentes'
                        ]
                    }
                },
                {
                    id: 'elet_sensor',
                    sintoma: 'Sensores não funcionam',
                    solucao: {
                        titulo: 'Verificar Sensores e Fiação',
                        passos: [
                            'Identificar sensor com problema',
                            'Verificar conector do sensor (corrosão)',
                            'Verificar fiação até o controlador',
                            'Medir alimentação do sensor',
                            'Medir sinal de saída do sensor',
                            'Comparar valor no monitor',
                            'Verificar aterramento do sensor',
                            'Substituir sensor se defeituoso'
                        ]
                    }
                }
            ]
        },
        {
            id: 'cabine',
            nome: 'Cabine e Ar Condicionado',
            icone: '❄️',
            problemas: [
                {
                    id: 'cab_ar_nao_gela',
                    sintoma: 'Ar condicionado não gela',
                    solucao: {
                        titulo: 'Verificar Sistema de A/C',
                        passos: [
                            'Verificar se compressor aciona (embreagem)',
                            'Verificar tensão da correia do compressor',
                            'Verificar nível de gás refrigerante',
                            'Verificar pressões do sistema (alta e baixa)',
                            'Verificar condensador (limpeza)',
                            'Verificar evaporador (gelo/obstrução)',
                            'Verificar válvula de expansão',
                            'Verificar filtro secador',
                            'Verificar ventilador do evaporador'
                        ]
                    }
                },
                {
                    id: 'cab_filtro',
                    sintoma: 'Poeira entrando na cabine',
                    solucao: {
                        titulo: 'Verificar Filtros e Vedação',
                        passos: [
                            'Substituir filtro de ar da cabine',
                            'Verificar vedação das portas',
                            'Verificar vedação das janelas',
                            'Verificar pressurização da cabine',
                            'Verificar entrada de ar do sistema',
                            'Verificar se há furos/trincas na cabine',
                            'Verificar vedação dos cabos/mangueiras'
                        ]
                    }
                },
                {
                    id: 'cab_vidro',
                    sintoma: 'Vidro trincado',
                    solucao: {
                        titulo: 'Substituição de Vidro',
                        passos: [
                            'Avaliar tamanho e posição da trinca',
                            'Se pequena: possível reparo provisório',
                            'Para substituir: remover guarnições',
                            'Remover vidro antigo com cuidado',
                            'Limpar área de assentamento',
                            'Instalar novo vidro com vedação',
                            'Reinstalar guarnições',
                            'Testar vedação'
                        ]
                    }
                },
                {
                    id: 'cab_assento',
                    sintoma: 'Banco com problema de ajuste',
                    solucao: {
                        titulo: 'Verificar Banco do Operador',
                        passos: [
                            'Verificar trilhos de deslizamento',
                            'Verificar travas de posição',
                            'Verificar compressor do pneumático (se equipado)',
                            'Verificar válvulas de ajuste',
                            'Verificar altura máxima/mínima',
                            'Lubrificar trilhos e mecanismos',
                            'Verificar cinto de segurança'
                        ]
                    }
                }
            ]
        },
        {
            id: 'transmissao',
            nome: 'Transmissão e Deslocamento',
            icone: '⚙️',
            problemas: [
                {
                    id: 'trans_nao_anda',
                    sintoma: 'Máquina não anda/desloca',
                    solucao: {
                        titulo: 'Diagnóstico de Deslocamento',
                        passos: [
                            'Verificar se freio de estacionamento está desaplicado',
                            'Verificar pressão de carga hidrostática',
                            'Verificar alavanca/joystick de deslocamento',
                            'Verificar válvula de controle',
                            'Verificar bomba hidrostática',
                            'Verificar motor hidrostático',
                            'Verificar nível de óleo',
                            'Verificar códigos de falha no painel'
                        ]
                    }
                },
                {
                    id: 'trans_lenta',
                    sintoma: 'Velocidade reduzida',
                    solucao: {
                        titulo: 'Verificar Sistema de Deslocamento',
                        passos: [
                            'Verificar RPM do motor (adequado)',
                            'Verificar pressão de carga',
                            'Verificar filtros hidráulicos',
                            'Verificar temperatura do óleo',
                            'Verificar desgaste da bomba hidrostática',
                            'Verificar motor de deslocamento',
                            'Verificar redutores de eixo',
                            'Verificar tensão das esteiras'
                        ]
                    }
                },
                {
                    id: 'trans_barulho',
                    sintoma: 'Barulho na transmissão',
                    solucao: {
                        titulo: 'Diagnóstico de Ruído na Transmissão',
                        passos: [
                            'Identificar localização do ruído',
                            'Verificar nível de óleo da transmissão',
                            'Verificar bomba hidrostática',
                            'Verificar motor hidrostático',
                            'Verificar redutores de eixo',
                            'Verificar engrenagens',
                            'Verificar rolamentos',
                            'Verificar acoplamentos'
                        ]
                    }
                },
                {
                    id: 'trans_freio',
                    sintoma: 'Freio não segura',
                    solucao: {
                        titulo: 'Verificar Sistema de Freio',
                        passos: [
                            'Verificar freio de estacionamento',
                            'Verificar pressão do freio de serviço',
                            'Verificar discos/pastilhas de freio',
                            'Verificar atuador do freio',
                            'Verificar molas de retorno',
                            'Verificar válvula de freio',
                            'Verificar se há vazamento',
                            'Ajustar freio conforme necessário'
                        ]
                    }
                }
            ]
        }
    ]
};

window.DIAGNOSTICOS = DIAGNOSTICOS;
