const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  a + "/_app/immutable/entry/app.530d8d6e.js",
  a + "/_app/immutable/assets/0.affc57d6.css",
  a + "/_app/immutable/nodes/0.e82f7477.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.54a1f411.js",
  a + "/_app/immutable/assets/2.6cec3a9a.css",
  a + "/_app/immutable/nodes/2.2a6a6f9a.js",
  a + "/_app/immutable/assets/3.ed28a95f.css",
  a + "/_app/immutable/nodes/3.53d3548c.js",
  a + "/_app/immutable/assets/4.c1dfb9f5.css",
  a + "/_app/immutable/nodes/4.68e1b05b.js",
  a + "/_app/immutable/chunks/createRipple.6d227583.js",
  a + "/_app/immutable/chunks/index.0e93d61b.js",
  a + "/_app/immutable/chunks/index.2943c15d.js",
  a + "/_app/immutable/chunks/index.bd3e99d2.js",
  a + "/_app/immutable/chunks/paths.6fb46185.js",
  a + "/_app/immutable/chunks/scheduler.e051e6e5.js",
  a + "/_app/immutable/chunks/singletons.3add02cd.js",
  a + "/_app/immutable/chunks/stores.48103d63.js",
  a + "/_app/immutable/entry/start.556ef10a.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], p = "1693924903772", n = self, l = "monthly-charges", c = `${l}_${p}`, f = o.concat(m);
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
