const CACHE_NAME='stalla-caseificio-shell-2026-10-25-5';
const APP_ROOT=self.registration.scope;
const INDEX_URL=new URL('./index.html',APP_ROOT).href;
const SHELL=['./','./index.html','./manifest.webmanifest','./manuale-utente.pdf','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png'].map(p=>new URL(p,APP_ROOT).href);

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)));
});

self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  for(const key of await caches.keys())if(key.startsWith('stalla-caseificio-shell-')&&key!==CACHE_NAME)await caches.delete(key);
  await self.clients.claim();
 })());
});

self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});

self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url),scopePath=new URL(APP_ROOT).pathname;
 if(url.origin!==self.location.origin||!url.pathname.startsWith(scopePath))return;
 if(request.mode==='navigate'){
  event.respondWith((async()=>{
   try{const response=await fetch(request);if(response.ok){const cache=await caches.open(CACHE_NAME);await cache.put(INDEX_URL,response.clone())}return response}
   catch(x){return await caches.match(INDEX_URL)||Response.error()}
  })());
  return;
 }
 event.respondWith((async()=>{
  const cached=await caches.match(request);if(cached)return cached;
  const response=await fetch(request);if(response.ok){const cache=await caches.open(CACHE_NAME);await cache.put(request,response.clone())}return response;
 })());
});
