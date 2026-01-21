// Dados dos checklists por tipo de máquina - EXPANDIDO

const CHECKLIST_ITEMS = {
    colhedora: {
        titulo: 'Checklist Colhedora CH570',
        categorias: [
            {
                nome: 'Motor e Sistema de Arrefecimento',
                icone: '🔥',
                itens: [
                    { id: 'motor_oleo', nome: 'Nível de óleo do motor', descricao: 'Verificar com a máquina nivelada e motor frio' },
                    { id: 'motor_agua', nome: 'Nível do líquido de arrefecimento', descricao: 'Verificar reservatório e radiador' },
                    { id: 'motor_filtro_ar', nome: 'Filtro de ar primário', descricao: 'Verificar indicador de restrição' },
                    { id: 'motor_filtro_ar_sec', nome: 'Filtro de ar secundário', descricao: 'Verificar condição do elemento' },
                    { id: 'motor_correias', nome: 'Correias do motor', descricao: 'Verificar tensão, trincas e desgaste' },
                    { id: 'motor_vazamentos', nome: 'Vazamentos no motor', descricao: 'Inspecionar área sob o motor' },
                    { id: 'motor_radiador', nome: 'Radiador', descricao: 'Verificar limpeza das colmeias' },
                    { id: 'motor_intercooler', nome: 'Intercooler', descricao: 'Verificar limpeza e conexões' },
                    { id: 'motor_turbo', nome: 'Turbo compressor', descricao: 'Verificar ruídos e vazamentos' },
                    { id: 'motor_escape', nome: 'Sistema de escape', descricao: 'Verificar vazamentos e fixação' },
                    { id: 'motor_pre_filtro', nome: 'Pré-filtro de ar', descricao: 'Limpar aspirador e verificar vedação' },
                    { id: 'motor_respiro', nome: 'Respiro do motor', descricao: 'Verificar se não está entupido' }
                ]
            },
            {
                nome: 'Sistema de Combustível',
                icone: '⛽',
                itens: [
                    { id: 'comb_nivel', nome: 'Nível de combustível', descricao: 'Verificar quantidade no tanque' },
                    { id: 'comb_filtro_prim', nome: 'Filtro primário (separador)', descricao: 'Drenar água acumulada' },
                    { id: 'comb_filtro_sec', nome: 'Filtro secundário', descricao: 'Verificar indicador de restrição' },
                    { id: 'comb_tanque', nome: 'Tampa do tanque', descricao: 'Verificar vedação e respiro' },
                    { id: 'comb_mangueiras', nome: 'Mangueiras de combustível', descricao: 'Verificar vazamentos e ressecamento' },
                    { id: 'comb_bomba', nome: 'Bomba de transferência', descricao: 'Verificar funcionamento' }
                ]
            },
            {
                nome: 'Sistema Hidráulico',
                icone: '💧',
                itens: [
                    { id: 'hidr_oleo', nome: 'Nível de óleo hidráulico', descricao: 'Verificar no visor do reservatório' },
                    { id: 'hidr_filtros', nome: 'Indicador dos filtros hidráulicos', descricao: 'Verificar se está no verde' },
                    { id: 'hidr_mangueiras', nome: 'Mangueiras hidráulicas', descricao: 'Verificar vazamentos e desgaste' },
                    { id: 'hidr_cilindros', nome: 'Cilindros hidráulicos', descricao: 'Verificar hastes e vedações' },
                    { id: 'hidr_bombas', nome: 'Bombas hidráulicas', descricao: 'Verificar ruídos anormais' },
                    { id: 'hidr_valvulas', nome: 'Válvulas de controle', descricao: 'Verificar vazamentos externos' },
                    { id: 'hidr_reservatorio', nome: 'Reservatório hidráulico', descricao: 'Verificar respiro e tampa' },
                    { id: 'hidr_temperatura', nome: 'Temperatura do óleo', descricao: 'Verificar se está normal em operação' },
                    { id: 'hidr_conexoes', nome: 'Conexões e engates rápidos', descricao: 'Verificar vazamentos e travamento' }
                ]
            },
            {
                nome: 'Sistema de Corte de Base',
                icone: '⚔️',
                itens: [
                    { id: 'corte_facas', nome: 'Facas do corte de base', descricao: 'Verificar afiação e fixação dos parafusos' },
                    { id: 'corte_disco', nome: 'Discos de corte', descricao: 'Verificar desgaste, trincas e balanceamento' },
                    { id: 'corte_sincronismo', nome: 'Sincronismo do corte de base', descricao: 'Verificar alinhamento entre discos' },
                    { id: 'corte_rolamentos', nome: 'Rolamentos dos discos', descricao: 'Verificar folgas e ruídos' },
                    { id: 'corte_caixa_red', nome: 'Caixa de redução do corte', descricao: 'Verificar nível de óleo e vazamentos' },
                    { id: 'corte_flutuacao', nome: 'Sistema de flutuação', descricao: 'Verificar pressão e funcionamento' },
                    { id: 'corte_sapatas', nome: 'Sapatas de proteção', descricao: 'Verificar desgaste' },
                    { id: 'corte_suspensao', nome: 'Suspensão do corte de base', descricao: 'Verificar articulações e buchas' }
                ]
            },
            {
                nome: 'Cortador de Pontas e Divisores',
                icone: '🌿',
                itens: [
                    { id: 'ponta_facas', nome: 'Facas do corte de pontas', descricao: 'Verificar afiação e fixação' },
                    { id: 'ponta_rotacao', nome: 'Rotação do corte de pontas', descricao: 'Verificar funcionamento' },
                    { id: 'ponta_altura', nome: 'Ajuste de altura', descricao: 'Verificar cilindros e travas' },
                    { id: 'div_linha', nome: 'Divisores de linha', descricao: 'Verificar pontas e fixação' },
                    { id: 'div_correntes', nome: 'Correntes dos divisores', descricao: 'Verificar tensão e lubrificação' },
                    { id: 'div_pirulito', nome: 'Pirulitos (rolos levantadores)', descricao: 'Verificar rotação e desgaste' },
                    { id: 'div_tombador', nome: 'Tombadores', descricao: 'Verificar funcionamento e ajuste' },
                    { id: 'div_sapatas', nome: 'Sapatas dos divisores', descricao: 'Verificar desgaste e altura' }
                ]
            },
            {
                nome: 'Rolos Alimentadores',
                icone: '🔄',
                itens: [
                    { id: 'rolo_superior', nome: 'Rolos superiores', descricao: 'Verificar rotação e facas' },
                    { id: 'rolo_inferior', nome: 'Rolos inferiores', descricao: 'Verificar rotação e facas' },
                    { id: 'rolo_pressao', nome: 'Pressão dos rolos flutuantes', descricao: 'Verificar ajuste hidráulico' },
                    { id: 'rolo_reversao', nome: 'Sistema de reversão', descricao: 'Testar funcionamento' },
                    { id: 'rolo_correntes', nome: 'Correntes de acionamento', descricao: 'Verificar tensão e lubrificação' },
                    { id: 'rolo_rolamentos', nome: 'Rolamentos dos rolos', descricao: 'Verificar ruídos e folgas' }
                ]
            },
            {
                nome: 'Sistema de Limpeza',
                icone: '🌬️',
                itens: [
                    { id: 'limp_ext_prim', nome: 'Extrator primário', descricao: 'Verificar pás, fixação e balanceamento' },
                    { id: 'limp_ext_sec', nome: 'Extrator secundário', descricao: 'Verificar pás, fixação e rotação' },
                    { id: 'limp_capuz_prim', nome: 'Capuz do extrator primário', descricao: 'Verificar posição e ajuste' },
                    { id: 'limp_capuz_sec', nome: 'Capuz do extrator secundário', descricao: 'Verificar posição e ajuste' },
                    { id: 'limp_grelhas', nome: 'Grelhas de limpeza', descricao: 'Verificar abertura e desgaste' },
                    { id: 'limp_rolamentos', nome: 'Rolamentos dos extratores', descricao: 'Verificar ruídos e folgas' },
                    { id: 'limp_correias', nome: 'Correias dos extratores', descricao: 'Verificar tensão e desgaste' }
                ]
            },
            {
                nome: 'Sistema de Picador',
                icone: '🔪',
                itens: [
                    { id: 'pic_facas', nome: 'Facas do picador', descricao: 'Verificar afiação, fixação e desgaste' },
                    { id: 'pic_contrafacas', nome: 'Contra-facas', descricao: 'Verificar distância (1-2mm) e desgaste' },
                    { id: 'pic_tambor', nome: 'Tambor do picador', descricao: 'Verificar balanceamento e trincas' },
                    { id: 'pic_volante', nome: 'Volante do picador', descricao: 'Verificar fixação dos parafusos' },
                    { id: 'pic_rolamentos', nome: 'Rolamentos do picador', descricao: 'Verificar temperatura e ruídos' },
                    { id: 'pic_correias', nome: 'Correias do picador', descricao: 'Verificar tensão e alinhamento' },
                    { id: 'pic_caixa', nome: 'Caixa do picador', descricao: 'Verificar desgaste interno' }
                ]
            },
            {
                nome: 'Elevador e Descarga',
                icone: '⬆️',
                itens: [
                    { id: 'elev_corrente', nome: 'Corrente do elevador', descricao: 'Verificar tensão, pinos e lubrificação' },
                    { id: 'elev_taliscas', nome: 'Taliscas', descricao: 'Verificar fixação, desgaste e falta' },
                    { id: 'elev_fundo', nome: 'Fundo do elevador', descricao: 'Verificar desgaste e furos' },
                    { id: 'elev_motor', nome: 'Motor hidráulico', descricao: 'Verificar rotação e vazamentos' },
                    { id: 'elev_giro', nome: 'Sistema de giro', descricao: 'Verificar funcionamento e limites' },
                    { id: 'elev_flap', nome: 'Flap de saída', descricao: 'Verificar abertura, vedação e atuador' },
                    { id: 'elev_extensor', nome: 'Extensor do elevador', descricao: 'Verificar funcionamento' },
                    { id: 'elev_rolamentos', nome: 'Rolamentos das polias', descricao: 'Verificar ruídos e folgas' }
                ]
            },
            {
                nome: 'Esteiras e Sistema de Deslocamento',
                icone: '🛤️',
                itens: [
                    { id: 'est_tensao', nome: 'Tensão das esteiras', descricao: 'Verificar conforme manual (folga de 20-30mm)' },
                    { id: 'est_sapatas', nome: 'Sapatas das esteiras', descricao: 'Verificar desgaste e fixação' },
                    { id: 'est_roletes_sup', nome: 'Roletes superiores', descricao: 'Verificar vazamentos e giro' },
                    { id: 'est_roletes_inf', nome: 'Roletes inferiores', descricao: 'Verificar vazamentos e giro' },
                    { id: 'est_roda_guia', nome: 'Roda guia dianteira', descricao: 'Verificar desgaste e folgas' },
                    { id: 'est_roda_motriz', nome: 'Roda motriz', descricao: 'Verificar desgaste dos dentes' },
                    { id: 'est_reducao', nome: 'Redutores de eixo', descricao: 'Verificar nível de óleo' },
                    { id: 'est_tensionador', nome: 'Cilindro tensionador', descricao: 'Verificar pressão e vazamentos' },
                    { id: 'est_elos', nome: 'Elos e pinos', descricao: 'Verificar desgaste e folgas' }
                ]
            },
            {
                nome: 'Sistema Elétrico',
                icone: '⚡',
                itens: [
                    { id: 'elet_bateria', nome: 'Baterias', descricao: 'Verificar terminais e nível de eletrólito' },
                    { id: 'elet_alternador', nome: 'Alternador', descricao: 'Verificar carga (13.5-14.5V)' },
                    { id: 'elet_motor_part', nome: 'Motor de partida', descricao: 'Testar funcionamento' },
                    { id: 'elet_farois', nome: 'Faróis de trabalho', descricao: 'Verificar funcionamento de todos' },
                    { id: 'elet_lanternas', nome: 'Lanternas e sinalização', descricao: 'Verificar funcionamento' },
                    { id: 'elet_chicotes', nome: 'Chicotes elétricos', descricao: 'Verificar isolamento e conexões' },
                    { id: 'elet_fusíveis', nome: 'Fusíveis e relés', descricao: 'Verificar condição' },
                    { id: 'elet_sensores', nome: 'Sensores em geral', descricao: 'Verificar alertas no painel' }
                ]
            },
            {
                nome: 'Cabine e Segurança',
                icone: '🪖',
                itens: [
                    { id: 'cab_ar_cond', nome: 'Ar condicionado', descricao: 'Verificar funcionamento e temperatura' },
                    { id: 'cab_filtros', nome: 'Filtros da cabine', descricao: 'Verificar limpeza ou substituir' },
                    { id: 'cab_vidros', nome: 'Vidros e espelhos', descricao: 'Verificar trincas e visibilidade' },
                    { id: 'cab_limpador', nome: 'Limpador de para-brisa', descricao: 'Verificar palhetas e funcionamento' },
                    { id: 'cab_assento', nome: 'Assento do operador', descricao: 'Verificar ajustes e travas' },
                    { id: 'cab_cinto', nome: 'Cinto de segurança', descricao: 'Verificar funcionamento' },
                    { id: 'cab_extintor', nome: 'Extintor de incêndio', descricao: 'Verificar validade, pressão e acesso' },
                    { id: 'cab_alarmes', nome: 'Alarmes sonoros', descricao: 'Verificar buzina e alarme de ré' },
                    { id: 'cab_portas', nome: 'Portas e fechaduras', descricao: 'Verificar funcionamento' },
                    { id: 'cab_escadas', nome: 'Escadas e corrimãos', descricao: 'Verificar fixação e condição' },
                    { id: 'cab_adesivos', nome: 'Adesivos de segurança', descricao: 'Verificar legibilidade' }
                ]
            },
            {
                nome: 'Transmissão e Comandos',
                icone: '⚙️',
                itens: [
                    { id: 'trans_oleo', nome: 'Óleo da transmissão', descricao: 'Verificar nível' },
                    { id: 'trans_vazamentos', nome: 'Vazamentos na transmissão', descricao: 'Verificar vedações' },
                    { id: 'trans_joystick', nome: 'Joysticks de comando', descricao: 'Verificar funcionamento e resposta' },
                    { id: 'trans_pedais', nome: 'Pedais', descricao: 'Verificar curso e retorno' },
                    { id: 'trans_freio', nome: 'Freio de estacionamento', descricao: 'Verificar funcionamento' },
                    { id: 'trans_cardans', nome: 'Cardans e cruzetas', descricao: 'Verificar lubrificação e folgas' }
                ]
            },
            {
                nome: 'Lubrificação Geral',
                icone: '🛢️',
                itens: [
                    { id: 'lub_central', nome: 'Sistema de lubrificação central', descricao: 'Verificar nível do reservatório' },
                    { id: 'lub_indicador', nome: 'Indicador de lubrificação', descricao: 'Verificar se não há alarme' },
                    { id: 'lub_mangueiras', nome: 'Mangueiras de graxa', descricao: 'Verificar vazamentos e conexões' },
                    { id: 'lub_pinos', nome: 'Pinos e articulações', descricao: 'Verificar se graxa está chegando' },
                    { id: 'lub_manual', nome: 'Pontos de graxa manual', descricao: 'Aplicar graxa nos pontos necessários' }
                ]
            }
        ]
    },

    trator: {
        titulo: 'Checklist Trator',
        categorias: [
            {
                nome: 'Motor',
                icone: '🔥',
                itens: [
                    { id: 'motor_oleo', nome: 'Nível de óleo do motor', descricao: 'Verificar com motor frio' },
                    { id: 'motor_agua', nome: 'Nível do líquido de arrefecimento', descricao: 'Verificar no reservatório' },
                    { id: 'motor_filtro_ar', nome: 'Filtro de ar', descricao: 'Verificar indicador de restrição' },
                    { id: 'motor_filtro_ar_sec', nome: 'Pré-filtro/Ciclone', descricao: 'Limpar se necessário' },
                    { id: 'motor_correias', nome: 'Correias', descricao: 'Verificar tensão e condição' },
                    { id: 'motor_vazamentos', nome: 'Vazamentos', descricao: 'Verificar área do motor' },
                    { id: 'motor_radiador', nome: 'Radiador', descricao: 'Verificar limpeza das aletas' },
                    { id: 'motor_escape', nome: 'Escapamento', descricao: 'Verificar fixação e vazamentos' },
                    { id: 'motor_turbo', nome: 'Turbo (se equipado)', descricao: 'Verificar ruídos e vazamentos' }
                ]
            },
            {
                nome: 'Sistema de Combustível',
                icone: '⛽',
                itens: [
                    { id: 'comb_nivel', nome: 'Nível de combustível', descricao: 'Verificar quantidade' },
                    { id: 'comb_filtro', nome: 'Filtro de combustível', descricao: 'Verificar indicador ou substituir' },
                    { id: 'comb_separador', nome: 'Separador de água', descricao: 'Drenar água acumulada' },
                    { id: 'comb_tanque', nome: 'Tampa do tanque', descricao: 'Verificar vedação' },
                    { id: 'comb_mangueiras', nome: 'Mangueiras', descricao: 'Verificar vazamentos' }
                ]
            },
            {
                nome: 'Transmissão',
                icone: '⚙️',
                itens: [
                    { id: 'trans_oleo', nome: 'Óleo da transmissão', descricao: 'Verificar nível na vareta' },
                    { id: 'trans_vazamentos', nome: 'Vazamentos na transmissão', descricao: 'Verificar vedações e juntas' },
                    { id: 'trans_embreagem', nome: 'Embreagem', descricao: 'Verificar curso do pedal' },
                    { id: 'trans_marchas', nome: 'Engrenamento das marchas', descricao: 'Verificar se engata normalmente' },
                    { id: 'trans_tdf', nome: 'Tomada de força (TDF)', descricao: 'Verificar funcionamento' },
                    { id: 'trans_diferenciais', nome: 'Diferenciais', descricao: 'Verificar nível de óleo' },
                    { id: 'trans_reducao', nome: 'Redutores finais', descricao: 'Verificar nível de óleo' }
                ]
            },
            {
                nome: 'Sistema Hidráulico',
                icone: '💧',
                itens: [
                    { id: 'hidr_oleo', nome: 'Nível de óleo hidráulico', descricao: 'Verificar no visor' },
                    { id: 'hidr_filtros', nome: 'Filtro hidráulico', descricao: 'Verificar indicador' },
                    { id: 'hidr_mangueiras', nome: 'Mangueiras e conexões', descricao: 'Verificar vazamentos' },
                    { id: 'hidr_engates', nome: 'Engates rápidos', descricao: 'Verificar funcionamento e desgaste' },
                    { id: 'hidr_levante', nome: 'Levante hidráulico', descricao: 'Verificar funcionamento e deriva' },
                    { id: 'hidr_cilindros', nome: 'Cilindros hidráulicos', descricao: 'Verificar hastes e vedações' },
                    { id: 'hidr_3pontos', nome: 'Sistema 3 pontos', descricao: 'Verificar braços e pinos' }
                ]
            },
            {
                nome: 'Pneus e Rodas',
                icone: '🛞',
                itens: [
                    { id: 'pneu_pressao_d', nome: 'Pressão pneus dianteiros', descricao: 'Verificar conforme manual' },
                    { id: 'pneu_pressao_t', nome: 'Pressão pneus traseiros', descricao: 'Verificar conforme manual' },
                    { id: 'pneu_desgaste', nome: 'Desgaste dos pneus', descricao: 'Verificar banda de rodagem' },
                    { id: 'pneu_cortes', nome: 'Cortes e danos', descricao: 'Verificar flancos e banda' },
                    { id: 'pneu_lastro', nome: 'Lastro líquido', descricao: 'Verificar nível se aplicável' },
                    { id: 'pneu_parafusos', nome: 'Parafusos das rodas', descricao: 'Verificar torque' },
                    { id: 'pneu_aros', nome: 'Aros e cubos', descricao: 'Verificar trincas e fixação' }
                ]
            },
            {
                nome: 'Freios',
                icone: '🛑',
                itens: [
                    { id: 'freio_servico', nome: 'Freio de serviço', descricao: 'Verificar funcionamento e curso' },
                    { id: 'freio_estac', nome: 'Freio de estacionamento', descricao: 'Verificar funcionamento' },
                    { id: 'freio_fluido', nome: 'Fluido de freio', descricao: 'Verificar nível' },
                    { id: 'freio_lonas', nome: 'Lonas/Discos de freio', descricao: 'Verificar desgaste' },
                    { id: 'freio_sincronismo', nome: 'Sincronismo direita/esquerda', descricao: 'Ajustar se necessário' }
                ]
            },
            {
                nome: 'Direção',
                icone: '🎯',
                itens: [
                    { id: 'dir_folga', nome: 'Folga na direção', descricao: 'Verificar jogo no volante' },
                    { id: 'dir_hidraulica', nome: 'Óleo da direção hidráulica', descricao: 'Verificar nível' },
                    { id: 'dir_barras', nome: 'Barras de direção', descricao: 'Verificar folgas e fixação' },
                    { id: 'dir_mangueiras', nome: 'Mangueiras da direção', descricao: 'Verificar vazamentos' },
                    { id: 'dir_cilindro', nome: 'Cilindro da direção', descricao: 'Verificar vedações' }
                ]
            },
            {
                nome: 'Sistema Elétrico',
                icone: '⚡',
                itens: [
                    { id: 'elet_bateria', nome: 'Bateria', descricao: 'Verificar terminais e carga' },
                    { id: 'elet_alternador', nome: 'Alternador', descricao: 'Verificar carga' },
                    { id: 'elet_farois', nome: 'Faróis', descricao: 'Verificar funcionamento' },
                    { id: 'elet_lanternas', nome: 'Lanternas e pisca', descricao: 'Verificar funcionamento' },
                    { id: 'elet_buzina', nome: 'Buzina', descricao: 'Testar funcionamento' },
                    { id: 'elet_instrumentos', nome: 'Painel de instrumentos', descricao: 'Verificar funcionamento' }
                ]
            },
            {
                nome: 'Cabine e Segurança',
                icone: '🪖',
                itens: [
                    { id: 'cab_estrutura', nome: 'Estrutura ROPS/FOPS', descricao: 'Verificar integridade' },
                    { id: 'cab_cinto', nome: 'Cinto de segurança', descricao: 'Verificar funcionamento' },
                    { id: 'cab_espelhos', nome: 'Espelhos retrovisores', descricao: 'Verificar fixação e visibilidade' },
                    { id: 'cab_assento', nome: 'Assento', descricao: 'Verificar ajustes e fixação' },
                    { id: 'cab_extintor', nome: 'Extintor', descricao: 'Verificar validade e pressão' },
                    { id: 'cab_escadas', nome: 'Escadas e apoios', descricao: 'Verificar fixação e antiderrapante' },
                    { id: 'cab_ar_cond', nome: 'Ar condicionado (se equipado)', descricao: 'Verificar funcionamento' }
                ]
            },
            {
                nome: 'Implementos e Acoplamento',
                icone: '🔗',
                itens: [
                    { id: 'impl_engate', nome: 'Barra de tração', descricao: 'Verificar desgaste do olhal' },
                    { id: 'impl_pinos', nome: 'Pinos do 3 pontos', descricao: 'Verificar desgaste' },
                    { id: 'impl_bracos', nome: 'Braços inferiores', descricao: 'Verificar fixação' },
                    { id: 'impl_niveladores', nome: 'Niveladores', descricao: 'Verificar funcionamento' },
                    { id: 'impl_contra_rep', nome: 'Contra-repique', descricao: 'Verificar ajuste e funcionamento' }
                ]
            }
        ]
    },

    transbordo: {
        titulo: 'Checklist Transbordo',
        categorias: [
            {
                nome: 'Estrutura Geral',
                icone: '🏗️',
                itens: [
                    { id: 'estr_chassi', nome: 'Chassi principal', descricao: 'Verificar trincas e soldas' },
                    { id: 'estr_longarinas', nome: 'Longarinas', descricao: 'Verificar deformações e trincas' },
                    { id: 'estr_travessas', nome: 'Travessas', descricao: 'Verificar fixação e condição' },
                    { id: 'estr_cacamba', nome: 'Caçamba/Caixa', descricao: 'Verificar desgaste, furos e trincas' },
                    { id: 'estr_laterais', nome: 'Laterais', descricao: 'Verificar fixação e deformação' },
                    { id: 'estr_fundo', nome: 'Fundo da caçamba', descricao: 'Verificar espessura e furos' },
                    { id: 'estr_reforcos', nome: 'Reforços estruturais', descricao: 'Verificar soldas e fixação' },
                    { id: 'estr_parafusos', nome: 'Parafusaria geral', descricao: 'Verificar torque e falta' }
                ]
            },
            {
                nome: 'Sistema de Descarga',
                icone: '⬇️',
                itens: [
                    { id: 'desc_cilindros', nome: 'Cilindros de basculamento', descricao: 'Verificar vazamentos e funcionamento' },
                    { id: 'desc_hastes', nome: 'Hastes dos cilindros', descricao: 'Verificar riscos e amassados' },
                    { id: 'desc_mangueiras', nome: 'Mangueiras hidráulicas', descricao: 'Verificar condição e vazamentos' },
                    { id: 'desc_conexoes', nome: 'Conexões hidráulicas', descricao: 'Verificar vazamentos e aperto' },
                    { id: 'desc_dobradicas', nome: 'Dobradiças da tampa', descricao: 'Verificar e lubrificar' },
                    { id: 'desc_trava', nome: 'Trava da tampa', descricao: 'Verificar funcionamento' },
                    { id: 'desc_tampa', nome: 'Tampa traseira', descricao: 'Verificar vedação e alinhamento' },
                    { id: 'desc_valvula', nome: 'Válvula de controle', descricao: 'Verificar funcionamento' }
                ]
            },
            {
                nome: 'Rodado e Suspensão',
                icone: '🛞',
                itens: [
                    { id: 'rod_pneus', nome: 'Pneus', descricao: 'Verificar pressão e desgaste' },
                    { id: 'rod_cortes', nome: 'Cortes nos pneus', descricao: 'Verificar flancos e banda' },
                    { id: 'rod_rodas', nome: 'Rodas', descricao: 'Verificar trincas e deformações' },
                    { id: 'rod_parafusos', nome: 'Parafusos das rodas', descricao: 'Verificar torque' },
                    { id: 'rod_cubos', nome: 'Cubos de roda', descricao: 'Verificar temperatura e ruídos' },
                    { id: 'rod_rolamentos', nome: 'Rolamentos', descricao: 'Verificar folgas e ruídos' },
                    { id: 'rod_eixos', nome: 'Eixos', descricao: 'Verificar deformações e trincas' },
                    { id: 'rod_molas', nome: 'Molas/Suspensão', descricao: 'Verificar condição' },
                    { id: 'rod_amortecedores', nome: 'Amortecedores (se equipado)', descricao: 'Verificar vazamentos' }
                ]
            },
            {
                nome: 'Sistema de Engate',
                icone: '🔗',
                itens: [
                    { id: 'eng_lanca', nome: 'Lança de engate', descricao: 'Verificar trincas e soldas' },
                    { id: 'eng_olhal', nome: 'Olhal de engate', descricao: 'Verificar desgaste e trincas' },
                    { id: 'eng_pino', nome: 'Pino de engate', descricao: 'Verificar desgaste e trava' },
                    { id: 'eng_correntes', nome: 'Corrente de segurança', descricao: 'Verificar condição e fixação' },
                    { id: 'eng_mangueiras', nome: 'Mangueiras hidráulicas', descricao: 'Verificar conexões e comprimento' },
                    { id: 'eng_suporte', nome: 'Suporte de apoio', descricao: 'Verificar funcionamento (catraca/hidráulico)' },
                    { id: 'eng_altura', nome: 'Altura do engate', descricao: 'Verificar ajuste' }
                ]
            },
            {
                nome: 'Sistema de Freios',
                icone: '🛑',
                itens: [
                    { id: 'freio_linha', nome: 'Linha de ar/hidráulica', descricao: 'Verificar vazamentos' },
                    { id: 'freio_mangueiras', nome: 'Mangueiras de freio', descricao: 'Verificar condição' },
                    { id: 'freio_lonas', nome: 'Lonas de freio', descricao: 'Verificar espessura' },
                    { id: 'freio_tambores', nome: 'Tambores', descricao: 'Verificar condição' },
                    { id: 'freio_estac', nome: 'Freio de estacionamento', descricao: 'Verificar funcionamento' },
                    { id: 'freio_regulagem', nome: 'Regulagem dos freios', descricao: 'Ajustar se necessário' }
                ]
            },
            {
                nome: 'Segurança e Sinalização',
                icone: '🪖',
                itens: [
                    { id: 'seg_refletores_f', nome: 'Refletores frontais', descricao: 'Verificar presença e visibilidade' },
                    { id: 'seg_refletores_t', nome: 'Refletores traseiros', descricao: 'Verificar presença e visibilidade' },
                    { id: 'seg_refletores_l', nome: 'Refletores laterais', descricao: 'Verificar presença e visibilidade' },
                    { id: 'seg_lanternas', nome: 'Lanternas traseiras', descricao: 'Verificar funcionamento' },
                    { id: 'seg_freio_luz', nome: 'Luz de freio', descricao: 'Verificar funcionamento' },
                    { id: 'seg_pisca', nome: 'Luzes de pisca', descricao: 'Verificar funcionamento' },
                    { id: 'seg_placa', nome: 'Placa de identificação', descricao: 'Verificar legibilidade' },
                    { id: 'seg_triangulo', nome: 'Triângulo/Sinalização', descricao: 'Verificar presença' },
                    { id: 'seg_farol_re', nome: 'Farol de ré', descricao: 'Verificar funcionamento' }
                ]
            },
            {
                nome: 'Lubrificação',
                icone: '🛢️',
                itens: [
                    { id: 'lub_pinos_eng', nome: 'Pinos do engate', descricao: 'Aplicar graxa' },
                    { id: 'lub_dobradicas', nome: 'Dobradiças', descricao: 'Aplicar graxa' },
                    { id: 'lub_cilindros', nome: 'Articulações dos cilindros', descricao: 'Aplicar graxa' },
                    { id: 'lub_rolamentos', nome: 'Rolamentos das rodas', descricao: 'Verificar e aplicar graxa' },
                    { id: 'lub_molas', nome: 'Feixes de mola', descricao: 'Verificar lubrificação' }
                ]
            }
        ]
    }
};

// Exporta para uso global
window.CHECKLIST_ITEMS = CHECKLIST_ITEMS;
