const CACHE_NAME = 'manutencao-campo-v2';
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/db.js',
  './js/checklist.js',
  './js/dashboard.js',
  './js/diagnostico.js',
  './pages/checklist.html',
  './pages/dashboard.html',
  './pages/diagnostico.html',
  './pages/manuais.html',
  './pages/frota.html'
];

// Instalação - cacheia recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
  // Força ativação imediata
  self.skipWaiting();
});

// Ativação - limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Toma controle imediato
  self.clients.claim();
});

// Fetch - retorna do cache ou busca na rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache se disponível
        if (response) {
          return response;
        }
        // Senão, busca na rede
        return fetch(event.request).then(response => {
          // Não cacheia se não for uma resposta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // Clona a resposta para cachear
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
      .catch(() => {
        // Fallback para páginas offline
        return caches.match('./index.html');
      })
  );
});
