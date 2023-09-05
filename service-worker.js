const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  a + "/_app/immutable/entry/app.ebfdba3f.js",
  a + "/_app/immutable/assets/0.55fe2f70.css",
  a + "/_app/immutable/nodes/0.5e6ab924.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.bb79ea34.js",
  a + "/_app/immutable/assets/2.7183e2f2.css",
  a + "/_app/immutable/nodes/2.dd82ea34.js",
  a + "/_app/immutable/assets/3.0012764f.css",
  a + "/_app/immutable/nodes/3.c59f0cdf.js",
  a + "/_app/immutable/assets/4.378cc837.css",
  a + "/_app/immutable/nodes/4.99649747.js",
  a + "/_app/immutable/chunks/createRipple.6d227583.js",
  a + "/_app/immutable/chunks/index.7e7356c5.js",
  a + "/_app/immutable/chunks/index.a6901bfe.js",
  a + "/_app/immutable/chunks/paths.effd525d.js",
  a + "/_app/immutable/chunks/scheduler.e051e6e5.js",
  a + "/_app/immutable/chunks/singletons.6c49f657.js",
  a + "/_app/immutable/chunks/stores.14182921.js",
  a + "/_app/immutable/entry/start.b18d3a0c.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], p = "1693914813600", n = self, l = "monthly-charges", c = `${l}_${p}`, f = o.concat(m);
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
    const i = await s.match(e);
    if (i)
      return i;
    throw t;
  }
}
n.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((s) => s || r(e.request.clone()))
  );
});
