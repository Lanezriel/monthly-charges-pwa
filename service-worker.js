const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  a + "/_app/immutable/entry/app.a39abab5.js",
  a + "/_app/immutable/assets/0.12a30921.css",
  a + "/_app/immutable/nodes/0.99779e4f.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.a7d3ebe4.js",
  a + "/_app/immutable/assets/2.9d45a74d.css",
  a + "/_app/immutable/nodes/2.cb6b8345.js",
  a + "/_app/immutable/assets/3.203a94cf.css",
  a + "/_app/immutable/nodes/3.95a67d57.js",
  a + "/_app/immutable/chunks/index.43038c9e.js",
  a + "/_app/immutable/chunks/scheduler.a00299e9.js",
  a + "/_app/immutable/chunks/singletons.5c230825.js",
  a + "/_app/immutable/chunks/stores.d0ae1399.js",
  a + "/_app/immutable/entry/start.445c918d.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], l = "1693493222333", n = self, p = "monthly-charges", o = `${p}_${l}`, r = i.concat(m);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(o).then((s) => s.addAll(r)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== o && await caches.delete(t);
      n.clients.claim();
    })
  );
});
async function f(e) {
  const s = await caches.open(o);
  try {
    const t = await fetch(e);
    return s.put(e, t.clone()), t;
  } catch (t) {
    const c = await s.match(e);
    if (c)
      return c;
    throw t;
  }
}
n.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((s) => s || f(e.request.clone()))
  );
});
