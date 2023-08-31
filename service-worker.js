const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  a + "/_app/immutable/entry/app.d965ac9a.js",
  a + "/_app/immutable/assets/0.c98876d0.css",
  a + "/_app/immutable/nodes/0.068affe7.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.b8207584.js",
  a + "/_app/immutable/assets/2.e64809d5.css",
  a + "/_app/immutable/nodes/2.bf29c88e.js",
  a + "/_app/immutable/assets/3.203a94cf.css",
  a + "/_app/immutable/nodes/3.ab1b314c.js",
  a + "/_app/immutable/chunks/index.43038c9e.js",
  a + "/_app/immutable/chunks/scheduler.a00299e9.js",
  a + "/_app/immutable/chunks/singletons.40dc8ab8.js",
  a + "/_app/immutable/chunks/stores.ff8ac355.js",
  a + "/_app/immutable/entry/start.a564182b.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], l = "1693481037552", n = self, p = "monthly-charges", c = `${p}_${l}`, r = i.concat(m);
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
