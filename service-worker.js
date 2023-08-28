const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  e + "/_app/immutable/entry/app.e421b500.js",
  e + "/_app/immutable/assets/0.cd0b29c6.css",
  e + "/_app/immutable/nodes/0.333450a8.js",
  e + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  e + "/_app/immutable/assets/github.1ea8d62e.svg",
  e + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  e + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  e + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  e + "/_app/immutable/nodes/1.41d9d686.js",
  e + "/_app/immutable/assets/2.5d969213.css",
  e + "/_app/immutable/nodes/2.ef4891fe.js",
  e + "/_app/immutable/nodes/3.fe160bd4.js",
  e + "/_app/immutable/chunks/index.afc7ab19.js",
  e + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  e + "/_app/immutable/chunks/singletons.94bac80e.js",
  e + "/_app/immutable/chunks/stores.e2bca769.js",
  e + "/_app/immutable/entry/start.a307b9f9.js"
], r = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/icon192.png",
  e + "/icon512.png",
  e + "/robots.txt"
], f = "1693233348414", c = self, h = "monthly-charges", o = `${h}_${f}`, l = p.concat(r), u = new Set(l);
c.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(o).then((s) => s.addAll(l)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== o && await caches.delete(t);
      c.clients.claim();
    })
  );
});
async function b(a) {
  const s = await caches.open(o);
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
c.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const s = new URL(a.request.url), t = s.protocol.startsWith("http"), n = s.hostname === self.location.hostname && s.port !== self.location.port, i = s.host === self.location.host && u.has(s.pathname), m = a.request.cache === "only-if-cached" && !i;
  t && !n && !m && a.respondWith(
    (async () => i && await caches.match(a.request) || b(a.request))()
  );
});
