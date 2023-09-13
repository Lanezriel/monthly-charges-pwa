const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.2a4a9222.js",
  a + "/_app/immutable/assets/0.2ac126b5.css",
  a + "/_app/immutable/nodes/0.837ce08d.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.c344405c.js",
  a + "/_app/immutable/assets/2.21338be0.css",
  a + "/_app/immutable/nodes/2.bb8e133a.js",
  a + "/_app/immutable/assets/3.105b8efc.css",
  a + "/_app/immutable/nodes/3.2097d4c7.js",
  a + "/_app/immutable/assets/4.e347a84f.css",
  a + "/_app/immutable/nodes/4.ed74e886.js",
  a + "/_app/immutable/assets/5.5a9040e1.css",
  a + "/_app/immutable/nodes/5.b49cb8cb.js",
  a + "/_app/immutable/assets/ItemEntry.4a5cd914.css",
  a + "/_app/immutable/assets/UpdateCharge.02de2814.css",
  a + "/_app/immutable/chunks/ItemEntry.2d2f0d3c.js",
  a + "/_app/immutable/chunks/UpdateCharge.2af49eaf.js",
  a + "/_app/immutable/chunks/edit.ffce0ce6.js",
  a + "/_app/immutable/chunks/index.42635a60.js",
  a + "/_app/immutable/chunks/index.ffe372b4.js",
  a + "/_app/immutable/chunks/navigation.4f767b0e.js",
  a + "/_app/immutable/chunks/paths.05b65bde.js",
  a + "/_app/immutable/chunks/plusRounded.cfefe3cb.js",
  a + "/_app/immutable/assets/plusRounded.b763df92.css",
  a + "/_app/immutable/chunks/roundCheck.09e24eeb.js",
  a + "/_app/immutable/chunks/scheduler.b5980d7e.js",
  a + "/_app/immutable/chunks/singletons.ac561302.js",
  a + "/_app/immutable/chunks/stores.42a0eda6.js",
  a + "/_app/immutable/entry/start.d0e5779c.js"
], i = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], o = "1694614963746", n = self, l = "monthly-charges", c = `${l}_${o}`, u = p.concat(i);
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
