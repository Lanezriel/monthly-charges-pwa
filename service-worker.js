const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  a + "/_app/immutable/entry/app.66a9fb24.js",
  a + "/_app/immutable/assets/0.b4dbee72.css",
  a + "/_app/immutable/nodes/0.41d52595.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.69aac42c.js",
  a + "/_app/immutable/assets/2.7183e2f2.css",
  a + "/_app/immutable/nodes/2.9414329c.js",
  a + "/_app/immutable/assets/3.0012764f.css",
  a + "/_app/immutable/nodes/3.436b9987.js",
  a + "/_app/immutable/nodes/4.7e450bbc.js",
  a + "/_app/immutable/chunks/index.083700e1.js",
  a + "/_app/immutable/chunks/paths.0e484491.js",
  a + "/_app/immutable/chunks/scheduler.8a3e53af.js",
  a + "/_app/immutable/chunks/singletons.df49c199.js",
  a + "/_app/immutable/chunks/stores.f054cf57.js",
  a + "/_app/immutable/entry/start.a1fc4f11.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], p = "1693557266766", n = self, l = "monthly-charges", c = `${l}_${p}`, f = i.concat(m);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(c).then((s) => s.addAll(f)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== c && await caches.delete(t);
      n.clients.claim();
    })
  );
});
async function r(e) {
  const s = await caches.open(c);
  try {
    const t = await fetch(e);
    return s.put(e, t.clone()), t;
  } catch (t) {
    const o = await s.match(e);
    if (o)
      return o;
    throw t;
  }
}
n.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((s) => s || r(e.request.clone()))
  );
});
