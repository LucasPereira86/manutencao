// Banco de dados local usando IndexedDB
const DB_NAME = 'ManutencaoCampoDB';
const DB_VERSION = 1;

let db = null;

// Inicializa o banco de dados
function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const database = event.target.result;

            // Store para checklists realizados
            if (!database.objectStoreNames.contains('checklists')) {
                const checklistStore = database.createObjectStore('checklists', {
                    keyPath: 'id',
                    autoIncrement: true
                });
                checklistStore.createIndex('maquina', 'maquina', { unique: false });
                checklistStore.createIndex('data', 'data', { unique: false });
                checklistStore.createIndex('tipo', 'tipo', { unique: false });
            }

            // Store para máquinas
            if (!database.objectStoreNames.contains('maquinas')) {
                const maquinaStore = database.createObjectStore('maquinas', {
                    keyPath: 'id'
                });
                maquinaStore.createIndex('tipo', 'tipo', { unique: false });
            }

            // Store para diagnósticos salvos
            if (!database.objectStoreNames.contains('diagnosticos')) {
                const diagStore = database.createObjectStore('diagnosticos', {
                    keyPath: 'id',
                    autoIncrement: true
                });
                diagStore.createIndex('maquina', 'maquina', { unique: false });
                diagStore.createIndex('data', 'data', { unique: false });
            }

            // Store para fotos
            if (!database.objectStoreNames.contains('fotos')) {
                const fotoStore = database.createObjectStore('fotos', {
                    keyPath: 'id',
                    autoIncrement: true
                });
                fotoStore.createIndex('checklistId', 'checklistId', { unique: false });
            }
        };
    });
}

// Salva um checklist
async function salvarChecklist(checklist) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['checklists'], 'readwrite');
        const store = transaction.objectStore('checklists');
        const request = store.add(checklist);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Busca todos os checklists
async function buscarChecklists(filtros = {}) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['checklists'], 'readonly');
        const store = transaction.objectStore('checklists');
        const request = store.getAll();

        request.onsuccess = () => {
            let resultados = request.result;

            // Aplica filtros
            if (filtros.maquina) {
                resultados = resultados.filter(c => c.maquina === filtros.maquina);
            }
            if (filtros.tipo) {
                resultados = resultados.filter(c => c.tipo === filtros.tipo);
            }
            if (filtros.dataInicio) {
                resultados = resultados.filter(c => new Date(c.data) >= new Date(filtros.dataInicio));
            }

            // Ordena por data (mais recente primeiro)
            resultados.sort((a, b) => new Date(b.data) - new Date(a.data));

            resolve(resultados);
        };
        request.onerror = () => reject(request.error);
    });
}

// Busca checklist por ID
async function buscarChecklistPorId(id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['checklists'], 'readonly');
        const store = transaction.objectStore('checklists');
        const request = store.get(id);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Salva foto
async function salvarFoto(foto) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['fotos'], 'readwrite');
        const store = transaction.objectStore('fotos');
        const request = store.add(foto);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Busca fotos de um checklist
async function buscarFotosChecklist(checklistId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['fotos'], 'readonly');
        const store = transaction.objectStore('fotos');
        const index = store.index('checklistId');
        const request = index.getAll(checklistId);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Salva diagnóstico
async function salvarDiagnostico(diagnostico) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['diagnosticos'], 'readwrite');
        const store = transaction.objectStore('diagnosticos');
        const request = store.add(diagnostico);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Busca diagnósticos
async function buscarDiagnosticos(filtros = {}) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['diagnosticos'], 'readonly');
        const store = transaction.objectStore('diagnosticos');
        const request = store.getAll();

        request.onsuccess = () => {
            let resultados = request.result;
            if (filtros.maquina) {
                resultados = resultados.filter(d => d.maquina === filtros.maquina);
            }
            resultados.sort((a, b) => new Date(b.data) - new Date(a.data));
            resolve(resultados);
        };
        request.onerror = () => reject(request.error);
    });
}

// Estatísticas do dashboard
async function obterEstatisticas() {
    const checklists = await buscarChecklists();
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const checklistsHoje = checklists.filter(c => {
        const dataChecklist = new Date(c.data);
        dataChecklist.setHours(0, 0, 0, 0);
        return dataChecklist.getTime() === hoje.getTime();
    });

    const problemasAbertos = checklists.filter(c =>
        c.itens && c.itens.some(item => item.status === 'problema')
    );

    return {
        totalChecklists: checklists.length,
        checklistsHoje: checklistsHoje.length,
        problemasAbertos: problemasAbertos.length,
        ultimoChecklist: checklists[0] || null
    };
}

// Exporta funções
window.DB = {
    init: initDB,
    salvarChecklist,
    buscarChecklists,
    buscarChecklistPorId,
    salvarFoto,
    buscarFotosChecklist,
    salvarDiagnostico,
    buscarDiagnosticos,
    obterEstatisticas
};
