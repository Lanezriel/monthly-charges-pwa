const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  a + "/_app/immutable/entry/app.aa8f5589.js",
  a + "/_app/immutable/assets/0.cd0b29c6.css",
  a + "/_app/immutable/nodes/0.d6bb7df5.js",
  a + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  a + "/_app/immutable/assets/github.1ea8d62e.svg",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.2f28c76e.js",
  a + "/_app/immutable/assets/2.5d969213.css",
  a + "/_app/immutable/nodes/2.ef4891fe.js",
  a + "/_app/immutable/nodes/3.fe160bd4.js",
  a + "/_app/immutable/chunks/index.afc7ab19.js",
  a + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  a + "/_app/immutable/chunks/singletons.cf84be07.js",
  a + "/_app/immutable/chunks/stores.3c8333f3.js",
  a + "/_app/immutable/entry/start.bdd4b66b.js"
], f = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt"
], i = "1693218999653", o = self, l = `cache${i}`, m = r.concat(f), h = new Set(m);
o.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(l).then((s) => s.addAll(
      m.map(
        (t) => self.location.hostname === "localhost" ? t : `/monthly-charges-pwa${t}`
      )
    )).then(() => {
      o.skipWaiting();
    })
  );
});
o.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== l && await caches.delete(t);
      o.clients.claim();
    })
  );
});
async function u(e) {
  const s = await caches.open(`offline${i}`);
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
o.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), t = s.protocol.startsWith("http"), c = s.hostname === self.location.hostname && s.port !== self.location.port, n = s.host === self.location.host && h.has(s.pathname), p = e.request.cache === "only-if-cached" && !n;
  t && !c && !p && e.respondWith(
    (async () => n && await caches.match(e.request) || u(e.request))()
  );
});
