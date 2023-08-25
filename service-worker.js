const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  a + "/_app/immutable/entry/app.166e51fa.js",
  a + "/_app/immutable/assets/0.fa9427ff.css",
  a + "/_app/immutable/nodes/0.ec74247e.js",
  a + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  a + "/_app/immutable/assets/github.1ea8d62e.svg",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.6375a718.js",
  a + "/_app/immutable/assets/2.932fb878.css",
  a + "/_app/immutable/nodes/2.3493689c.js",
  a + "/_app/immutable/chunks/index.afc7ab19.js",
  a + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  a + "/_app/immutable/chunks/singletons.5ad4c815.js",
  a + "/_app/immutable/chunks/stores.fec3988a.js",
  a + "/_app/immutable/entry/start.f430b65e.js"
], f = [
  a + "/.nojekyll",
  a + "/favicon.png",
  a + "/icon192.png",
  a + "/icon512.png",
  a + "/robots.txt"
], i = "1692967710627", c = self, l = `cache${i}`, m = r.concat(f), h = new Set(m);
c.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(l).then((s) => s.addAll(m)).then(() => {
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
    const n = await s.match(e);
    if (n)
      return n;
    throw t;
  }
}
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), t = s.protocol.startsWith("http"), n = s.hostname === self.location.hostname && s.port !== self.location.port, o = s.host === self.location.host && h.has(s.pathname), p = e.request.cache === "only-if-cached" && !o;
  t && !n && !p && e.respondWith(
    (async () => o && await caches.match(e.request) || u(e.request))()
  );
});
