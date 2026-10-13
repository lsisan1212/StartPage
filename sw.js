/* StartPage service worker — 離線快取（數據本身喺 localStorage，唔經網絡） */
const CACHE = 'startpage-v1';
const CORE = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE)
            .then(c => c.addAll(CORE))
            .then(() => self.skipWaiting())
            .catch(() => { /* 部份資源失敗都照裝 */ })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;
    if (new URL(req.url).origin !== location.origin) return; /* 外部 API／favicon 唔缓存 */

    e.respondWith((async () => {
        const cache = await caches.open(CACHE);
        const cached = await cache.match(req, { ignoreSearch: true });
        try {
            const fresh = await fetch(req);
            if (fresh && fresh.ok) cache.put(req, fresh.clone());
            return fresh;
        } catch (err) {
            if (cached) return cached;
            const fallback = await cache.match('./index.html', { ignoreSearch: true });
            if (fallback) return fallback;
            throw err;
        }
    })());
});
