const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/_app/immutable/entry/app.a4e38ac0.js",
  e + "/_app/immutable/assets/0.cd0b29c6.css",
  e + "/_app/immutable/nodes/0.e0dfb7e9.js",
  e + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  e + "/_app/immutable/assets/github.1ea8d62e.svg",
  e + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  e + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  e + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  e + "/_app/immutable/nodes/1.3d22f687.js",
  e + "/_app/immutable/assets/2.5d969213.css",
  e + "/_app/immutable/nodes/2.ef4891fe.js",
  e + "/_app/immutable/nodes/3.fe160bd4.js",
  e + "/_app/immutable/chunks/index.afc7ab19.js",
  e + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  e + "/_app/immutable/chunks/singletons.6e7d0b35.js",
  e + "/_app/immutable/chunks/stores.8b540965.js",
  e + "/_app/immutable/entry/start.d4db84bf.js"
], f = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/icon192.png",
  e + "/icon512.png",
  e + "/robots.txt"
], l = "1693220182516", o = self, m = `cache${l}`, n = r.concat(f), h = new Set(n);
console.log(n);
o.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(m).then((s) => s.addAll(
      n.map(
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
        t !== m && await caches.delete(t);
      o.clients.claim();
    })
  );
});
async function u(a) {
  const s = await caches.open(`offline${l}`);
  try {
    const t = await fetch(a);
    return s.put(a, t.clone()), t;
  } catch (t) {
    const c = await s.match(a);
    if (c)
      return c;
    throw t;
  }
}
o.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const s = new URL(a.request.url), t = s.protocol.startsWith("http"), c = s.hostname === self.location.hostname && s.port !== self.location.port, i = s.host === self.location.host && h.has(s.pathname), p = a.request.cache === "only-if-cached" && !i;
  t && !c && !p && a.respondWith(
    (async () => i && await caches.match(a.request) || u(a.request))()
  );
});
