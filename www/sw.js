// Web-only offline app shell, not offline maps or social media.
const CACHE='tourismo-shell-v1',ASSETS=['./','./index.html','./assets/js/app.js','./assets/css/styles.css','./assets/images/ecotour-logo.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('tourismo-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(async()=>await caches.match('./index.html')||Response.error()));
    return;
  }
  if(!ASSETS.some(p=>new URL(p,self.registration.scope).pathname===u.pathname))return;
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));
});
