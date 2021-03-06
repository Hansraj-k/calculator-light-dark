self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./dist/css/calculator.css","c.png","./dist/js/calculator.js","tab.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});