const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  a + "/_app/immutable/entry/app.fa20b71a.js",
  a + "/_app/immutable/assets/0.cd0b29c6.css",
  a + "/_app/immutable/nodes/0.3ed4bc12.js",
  a + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  a + "/_app/immutable/assets/github.1ea8d62e.svg",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.6d30c1d3.js",
  a + "/_app/immutable/assets/2.5d969213.css",
  a + "/_app/immutable/nodes/2.ef4891fe.js",
  a + "/_app/immutable/nodes/3.fe160bd4.js",
  a + "/_app/immutable/chunks/index.afc7ab19.js",
  a + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  a + "/_app/immutable/chunks/singletons.0c485742.js",
  a + "/_app/immutable/chunks/stores.b99c5f71.js",
  a + "/_app/immutable/entry/start.255120e5.js"
], m = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt"
], l = "1693250697840", n = self, p = "monthly-charges", c = `${p}_${l}`, r = i.concat(m);
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
