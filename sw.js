// 최소한의 서비스 워커 — 설치 가능(installable) 조건을 만족시키기 위한 용도입니다.
// 오프라인 캐싱은 하지 않고, 항상 최신 파일을 그대로 가져옵니다.
self.addEventListener("install", function(e){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ self.clients.claim(); });
self.addEventListener("fetch", function(e){
  e.respondWith(fetch(e.request));
});
