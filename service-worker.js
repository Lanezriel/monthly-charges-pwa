const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  a + "/_app/immutable/entry/app.477b2a3f.js",
  a + "/_app/immutable/assets/0.5d1b5b09.css",
  a + "/_app/immutable/nodes/0.487dd687.js",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.95e1c997.js",
  a + "/_app/immutable/assets/2.7183e2f2.css",
  a + "/_app/immutable/nodes/2.9414329c.js",
  a + "/_app/immutable/assets/3.0012764f.css",
  a + "/_app/immutable/nodes/3.5da4399d.js",
  a + "/_app/immutable/nodes/4.4829386d.js",
  a + "/_app/immutable/chunks/index.083700e1.js",
  a + "/_app/immutable/chunks/paths.93a9ef30.js",
  a + "/_app/immutable/chunks/scheduler.8a3e53af.js",
  a + "/_app/immutable/chunks/singletons.76be3a4e.js",
  a + "/_app/immutable/chunks/stores.0f32646b.js",
  a + "/_app/immutable/entry/start.e4f9d231.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], p = "1693563763829", n = self, l = "monthly-charges", o = `${l}_${p}`, r = i.concat(m);
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
