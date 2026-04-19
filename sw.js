const CACHE_NAME = 'winter-tracker-v2';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js'
];

// Install the service worker and cache core files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached files, and dynamically cache new files (like your uploaded photos) on the fly
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 1. Return the cached version if we already have it
        if (response) {
          return response;
        }
        
        // 2. If it's not in the cache, fetch it from the internet
        return fetch(event.request).then(networkResponse => {
          // Check if we received a valid response back
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // 3. Clone the response (it's a stream, so it can only be consumed once)
          const responseToCache = networkResponse.clone();

          // 4. Open the cache and stash the new file for offline use
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return networkResponse;
        }).catch(() => {
            // Optional: If you are totally offline and request something not cached, it just fails quietly
            console.log("Offline and resource not found in cache: ", event.request.url);
        });
      })
  );
});

// Clean up old caches if we ever update the version number
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});