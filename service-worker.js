const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/_app/immutable/entry/app.0c86c229.js",
  e + "/_app/immutable/assets/0.cd0b29c6.css",
  e + "/_app/immutable/nodes/0.608be2a0.js",
  e + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  e + "/_app/immutable/assets/github.1ea8d62e.svg",
  e + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  e + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  e + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  e + "/_app/immutable/nodes/1.e769410b.js",
  e + "/_app/immutable/assets/2.5d969213.css",
  e + "/_app/immutable/nodes/2.ef4891fe.js",
  e + "/_app/immutable/nodes/3.fe160bd4.js",
  e + "/_app/immutable/chunks/index.afc7ab19.js",
  e + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  e + "/_app/immutable/chunks/singletons.f40a63f6.js",
  e + "/_app/immutable/chunks/stores.290d72ab.js",
  e + "/_app/immutable/entry/start.b5f89d86.js"
], f = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/icon192.png",
  e + "/icon512.png",
  e + "/robots.txt"
], h = [
  e + "/",
  e + "/test"
], i = "1693219282285", o = self, l = `cache${i}`, m = [
  ...r,
  ...f,
  ...h
], u = new Set(m);
o.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(l).then((s) => s.addAll(
      m.map(
        (t) => self.location.hostname === "localhost" ? t : `/monthly-charges-pwa${t}`
      )
    )).then(() => {
      o.skipWaiting();
    })
  );
});
o.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== l && await caches.delete(t);
      o.clients.claim();
    })
  );
});
async function b(a) {
  const s = await caches.open(`offline${i}`);
  try {
    const t = await fetch(a);
    return s.put(a, t.clone()), t;
  } catch (t) {
    const n = await s.match(a);
    if (n)
      return n;
    throw t;
  }
}
o.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const s = new URL(a.request.url), t = s.protocol.startsWith("http"), n = s.hostname === self.location.hostname && s.port !== self.location.port, c = s.host === self.location.host && u.has(s.pathname), p = a.request.cache === "only-if-cached" && !c;
  t && !n && !p && a.respondWith(
    (async () => c && await caches.match(a.request) || b(a.request))()
  );
});
