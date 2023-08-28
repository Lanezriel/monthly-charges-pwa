const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  a + "/_app/immutable/entry/app.2ae1260c.js",
  a + "/_app/immutable/assets/0.cd0b29c6.css",
  a + "/_app/immutable/nodes/0.832cb642.js",
  a + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  a + "/_app/immutable/assets/github.1ea8d62e.svg",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.74aa48d3.js",
  a + "/_app/immutable/assets/2.5d969213.css",
  a + "/_app/immutable/nodes/2.ef4891fe.js",
  a + "/_app/immutable/nodes/3.fe160bd4.js",
  a + "/_app/immutable/chunks/index.afc7ab19.js",
  a + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  a + "/_app/immutable/chunks/singletons.94028928.js",
  a + "/_app/immutable/chunks/stores.87874a53.js",
  a + "/_app/immutable/entry/start.c54dc074.js"
], f = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt"
], i = "1693219481910", c = self, l = `cache${i}`, m = r.concat(f), h = new Set(m);
c.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(l).then((s) => s.addAll(
      m.map(
        (t) => self.location.hostname === "localhost" ? t : `/monthly-charges-pwa${t}`
      )
    )).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== l && await caches.delete(t);
      c.clients.claim();
    })
  );
});
async function u(e) {
  const s = await caches.open(`offline${i}`);
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
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), t = s.protocol.startsWith("http"), o = s.hostname === self.location.hostname && s.port !== self.location.port, n = s.host === self.location.host && h.has(s.pathname), p = e.request.cache === "only-if-cached" && !n;
  t && !o && !p && e.respondWith(
    (async () => n && await caches.match(e.request) || u(e.request))()
  );
});
