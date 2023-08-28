const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  e + "/_app/immutable/entry/app.0b3025f6.js",
  e + "/_app/immutable/assets/0.cd0b29c6.css",
  e + "/_app/immutable/nodes/0.1c15bb7c.js",
  e + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  e + "/_app/immutable/assets/github.1ea8d62e.svg",
  e + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  e + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  e + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  e + "/_app/immutable/nodes/1.2cb0fe64.js",
  e + "/_app/immutable/assets/2.5d969213.css",
  e + "/_app/immutable/nodes/2.ef4891fe.js",
  e + "/_app/immutable/nodes/3.fe160bd4.js",
  e + "/_app/immutable/chunks/index.afc7ab19.js",
  e + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  e + "/_app/immutable/chunks/singletons.70d300f9.js",
  e + "/_app/immutable/chunks/stores.199448e5.js",
  e + "/_app/immutable/entry/start.1e44d0e2.js"
], m = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/icon192.png",
  e + "/icon512.png",
  e + "/robots.txt"
], l = "1693234476389", t = self, c = "monthly-charges", i = `${c}_${l}`, p = o.concat(m);
t.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(i).then((s) => s.addAll(p)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (s) => {
      for (const n of s)
        n !== i && await caches.delete(n);
      t.clients.claim();
    })
  );
});
t.addEventListener("fetch", (a) => {
  a.respondWith(
    caches.match(a.request).then((s) => s || fetch(a.request))
  );
});
