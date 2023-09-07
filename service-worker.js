const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.d949293c.js",
  a + "/_app/immutable/assets/0.2ac126b5.css",
  a + "/_app/immutable/nodes/0.32d19b7d.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.d7bec65a.js",
  a + "/_app/immutable/assets/2.5bef8578.css",
  a + "/_app/immutable/nodes/2.0f25360f.js",
  a + "/_app/immutable/assets/3.105b8efc.css",
  a + "/_app/immutable/nodes/3.3526e199.js",
  a + "/_app/immutable/assets/4.e347a84f.css",
  a + "/_app/immutable/nodes/4.a7c917b2.js",
  a + "/_app/immutable/assets/5.5a9040e1.css",
  a + "/_app/immutable/nodes/5.505a1c16.js",
  a + "/_app/immutable/assets/ItemEntry.4a5cd914.css",
  a + "/_app/immutable/assets/UpdateCharge.02de2814.css",
  a + "/_app/immutable/chunks/ItemEntry.2d2f0d3c.js",
  a + "/_app/immutable/chunks/UpdateCharge.ab67ecac.js",
  a + "/_app/immutable/chunks/edit.ffce0ce6.js",
  a + "/_app/immutable/chunks/index.da52130c.js",
  a + "/_app/immutable/chunks/index.ffe372b4.js",
  a + "/_app/immutable/chunks/navigation.ef4df86b.js",
  a + "/_app/immutable/chunks/paths.7df1d7a5.js",
  a + "/_app/immutable/chunks/plusRounded.2a3bf52c.js",
  a + "/_app/immutable/assets/plusRounded.b763df92.css",
  a + "/_app/immutable/chunks/roundCheck.09e24eeb.js",
  a + "/_app/immutable/chunks/scheduler.b5980d7e.js",
  a + "/_app/immutable/chunks/singletons.76245919.js",
  a + "/_app/immutable/chunks/stores.31affb43.js",
  a + "/_app/immutable/entry/start.004f081f.js"
], i = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], o = "1694095491794", n = self, l = "monthly-charges", c = `${l}_${o}`, u = p.concat(i);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(c).then((s) => s.addAll(u)).then(() => {
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
async function b(e) {
  const s = await caches.open(c);
  try {
    const t = await fetch(e);
    return s.put(e, t.clone()), t;
  } catch (t) {
    const m = await s.match(e);
    if (m)
      return m;
    throw t;
  }
}
n.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((s) => s || b(e.request.clone()))
  );
});
