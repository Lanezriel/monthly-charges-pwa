const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  a + "/_app/immutable/entry/app.ef06adaa.js",
  a + "/_app/immutable/assets/0.cd0b29c6.css",
  a + "/_app/immutable/nodes/0.7bdb7674.js",
  a + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  a + "/_app/immutable/assets/github.1ea8d62e.svg",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.e64995b2.js",
  a + "/_app/immutable/assets/2.e64809d5.css",
  a + "/_app/immutable/nodes/2.9be03958.js",
  a + "/_app/immutable/assets/3.203a94cf.css",
  a + "/_app/immutable/nodes/3.6182f017.js",
  a + "/_app/immutable/chunks/index.6b2a264b.js",
  a + "/_app/immutable/chunks/scheduler.1ae337ec.js",
  a + "/_app/immutable/chunks/singletons.6f9f5baa.js",
  a + "/_app/immutable/chunks/stores.80b411ce.js",
  a + "/_app/immutable/entry/start.defe7177.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt",
  a + "/touch-icon.png"
], l = "1693321035371", n = self, p = "monthly-charges", o = `${p}_${l}`, r = i.concat(m);
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
