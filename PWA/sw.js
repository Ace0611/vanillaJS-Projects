const cacheName = 'cache-v1';
const resourcesToPrecache = [
    '/',
    'index.html',
    'styles/main.css',
    'images/icon1.jpg',
    'images/icon2.jpg',
]

self.addEventListener('install', event => {
    console.log('Service worker install event!');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourcesToPrecache);
            })
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request))
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
})
