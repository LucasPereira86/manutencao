// App Principal - Funções globais

// Registra Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registrado:', reg.scope))
            .catch(err => console.log('Erro ao registrar SW:', err));
    });
}

// Sistema de Toast/Notificações
function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    // Marcadores textuais para cada tipo
    const markers = {
        success: '[OK]',
        error: '[!]',
        warning: '[!]',
        info: '[i]'
    };

    toast.innerHTML = `
    <span style="font-size: 1rem; font-weight: bold;">${markers[type]}</span>
    <span>${message}</span>
  `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Formata data para exibição
function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Formata data curta
function formatarDataCurta(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit'
    });
}

// Verifica se é hoje
function isHoje(dataString) {
    const data = new Date(dataString);
    const hoje = new Date();
    return data.toDateString() === hoje.toDateString();
}

// ========================================
// SISTEMA DE FROTA DINÂMICA
// ========================================

// Dados padrão iniciais (apenas se nunca foi configurado)
const MAQUINAS_PADRAO = {
    colhedoras: [],
    tratores: [],
    transbordos: []
};

// Carrega frota do localStorage
function carregarFrota() {
    const frotaSalva = localStorage.getItem('frota_customizada');
    if (frotaSalva) {
        return JSON.parse(frotaSalva);
    }
    return MAQUINAS_PADRAO;
}

// Salva frota no localStorage
function salvarFrota(frota) {
    localStorage.setItem('frota_customizada', JSON.stringify(frota));
}

// Getter dinâmico para máquinas
function getMaquinas() {
    return carregarFrota();
}

// Getter para todas as máquinas em array
function getTodasMaquinas() {
    const frota = carregarFrota();
    return [
        ...frota.colhedoras,
        ...frota.tratores,
        ...frota.transbordos
    ];
}

// Busca máquina por ID
function buscarMaquina(id) {
    return getTodasMaquinas().find(m => m.id === id);
}

// Conta total de máquinas
function contarMaquinas() {
    const frota = carregarFrota();
    return frota.colhedoras.length + frota.tratores.length + frota.transbordos.length;
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Ícones por tipo de máquina (texto simples)
function getIconeMaquina(tipo) {
    const icones = {
        colhedora: 'CH',
        trator: 'TR',
        transbordo: 'TB'
    };
    return icones[tipo] || 'MQ';
}

// Cores por tipo
function getCorMaquina(tipo) {
    const cores = {
        colhedora: '#22c55e',
        trator: '#3b82f6',
        transbordo: '#f59e0b'
    };
    return cores[tipo] || '#6366f1';
}

// Captura foto da câmera
async function capturarFoto() {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'environment'; // Usa câmera traseira

        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) {
                reject('Nenhuma foto selecionada');
                return;
            }

            // Converte para base64
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject('Erro ao ler foto');
            reader.readAsDataURL(file);
        };

        input.click();
    });
}

// Comprime imagem
function comprimirImagem(base64, maxWidth = 800, quality = 0.7) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;

            if (width > maxWidth) {
                height = (height * maxWidth) / width;
                width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = base64;
    });
}

// Compatibilidade com código antigo (propriedades dinâmicas)
const MAQUINAS = new Proxy({}, {
    get: function (target, prop) {
        const frota = carregarFrota();
        return frota[prop];
    }
});

const TODAS_MAQUINAS = new Proxy([], {
    get: function (target, prop) {
        if (prop === 'length') {
            return getTodasMaquinas().length;
        }
        if (prop === 'forEach' || prop === 'map' || prop === 'filter' || prop === 'find' || prop === 'some') {
            return getTodasMaquinas()[prop].bind(getTodasMaquinas());
        }
        if (!isNaN(prop)) {
            return getTodasMaquinas()[prop];
        }
        return getTodasMaquinas()[prop];
    }
});

// ========================================
// SISTEMA DE TEMA
// ========================================

// Carrega tema salvo ou usa preferência do sistema
function carregarTema() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
        document.documentElement.setAttribute('data-theme', temaSalvo);
        return temaSalvo;
    }
    // Verifica preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        return 'dark';
    }
    return 'light';
}

// Alterna entre tema claro e escuro
function toggleTema() {
    const temaAtual = document.documentElement.getAttribute('data-theme');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', novoTema);
    localStorage.setItem('tema', novoTema);
    atualizarBotaoTema(novoTema);
    return novoTema;
}

// Atualiza texto do botão de tema
function atualizarBotaoTema(tema) {
    const btn = document.getElementById('btnTema');
    if (btn) {
        btn.textContent = tema === 'dark' ? 'Claro' : 'Escuro';
    }
}

// Inicializa tema ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const tema = carregarTema();
    atualizarBotaoTema(tema);
});

// Exporta para uso global
window.App = {
    showToast,
    formatarData,
    formatarDataCurta,
    isHoje,
    // Frota dinâmica
    getMaquinas,
    getTodasMaquinas,
    carregarFrota,
    salvarFrota,
    contarMaquinas,
    // Compatibilidade
    MAQUINAS,
    TODAS_MAQUINAS,
    buscarMaquina,
    getIconeMaquina,
    getCorMaquina,
    capturarFoto,
    comprimirImagem,
    // Tema
    toggleTema,
    carregarTema
};
