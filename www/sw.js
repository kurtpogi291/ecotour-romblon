// TOURismo: prefer fresh app assets online, retain an offline fallback.
// External maps, images and social links are not cached.
const CACHE = 'tourismo-shell-v2';
const ASSETS = ['./', './index.html', './assets/js/app.js', './assets/css/styles.css', './assets/images/ecotour-logo.svg'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith('tourismo-shell-') && key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isShell = ASSETS.some(path => new URL(path, self.registration.scope).pathname === url.pathname);
  if (!isShell && request.mode !== 'navigate') return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const fresh = await fetch(request, { cache: 'no-store' });
      if (!fresh.ok) throw new Error('HTTP ' + fresh.status);
      event.waitUntil(cache.put(request, fresh.clone()).catch(() => {}));
      return fresh;
    } catch (err) {
      const cached = await cache.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const appPage = await cache.match('./index.html');
        if (appPage) return appPage;
      }
      return Response.error();
    }
  })());
});
