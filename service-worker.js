const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.a95f5514.js",
  a + "/_app/immutable/assets/0.affc57d6.css",
  a + "/_app/immutable/nodes/0.bbdda09e.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.8e1f56a7.js",
  a + "/_app/immutable/assets/2.6cec3a9a.css",
  a + "/_app/immutable/nodes/2.2a6a6f9a.js",
  a + "/_app/immutable/assets/3.5a9040e1.css",
  a + "/_app/immutable/nodes/3.9db62ae9.js",
  a + "/_app/immutable/assets/4.e6fa2c48.css",
  a + "/_app/immutable/nodes/4.f386ba9e.js",
  a + "/_app/immutable/assets/ItemWrapper.57ed49ec.css",
  a + "/_app/immutable/chunks/ItemWrapper.e96e27f1.js",
  a + "/_app/immutable/chunks/createRipple.6d227583.js",
  a + "/_app/immutable/chunks/index.2943c15d.js",
  a + "/_app/immutable/chunks/index.3addb090.js",
  a + "/_app/immutable/chunks/paths.125cd0c3.js",
  a + "/_app/immutable/chunks/scheduler.e051e6e5.js",
  a + "/_app/immutable/chunks/singletons.e4b13595.js",
  a + "/_app/immutable/chunks/stores.a674a4d3.js",
  a + "/_app/immutable/entry/start.a729bdc3.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], o = "1693926499171", n = self, l = "monthly-charges", c = `${l}_${o}`, r = p.concat(m);
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
    const i = await s.match(e);
    if (i)
      return i;
    throw t;
  }
}
n.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((s) => s || f(e.request.clone()))
  );
});
