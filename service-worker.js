const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  a + "/_app/immutable/entry/app.35d93e82.js",
  a + "/_app/immutable/assets/0.a483ac78.css",
  a + "/_app/immutable/nodes/0.bfb20201.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.bac710ae.js",
  a + "/_app/immutable/assets/2.9d45a74d.css",
  a + "/_app/immutable/nodes/2.e9eb04f9.js",
  a + "/_app/immutable/assets/3.203a94cf.css",
  a + "/_app/immutable/nodes/3.6814a90a.js",
  a + "/_app/immutable/nodes/4.9f815823.js",
  a + "/_app/immutable/chunks/index.43038c9e.js",
  a + "/_app/immutable/chunks/paths.8d62b5e6.js",
  a + "/_app/immutable/chunks/scheduler.a00299e9.js",
  a + "/_app/immutable/chunks/singletons.c06f7bd3.js",
  a + "/_app/immutable/chunks/stores.3c29b6c9.js",
  a + "/_app/immutable/entry/start.50cbb503.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], p = "1693507669354", n = self, l = "monthly-charges", c = `${l}_${p}`, r = i.concat(m);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(c).then((s) => s.addAll(r)).then(() => {
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
async function f(e) {
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
    caches.match(e.request).then((s) => s || f(e.request.clone()))
  );
});
