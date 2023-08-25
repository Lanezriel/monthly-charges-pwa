const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.818f6669.js",
  s + "/_app/immutable/assets/0.fa9427ff.css",
  s + "/_app/immutable/nodes/0.a6367487.js",
  s + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  s + "/_app/immutable/assets/github.1ea8d62e.svg",
  s + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  s + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  s + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  s + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  s + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  s + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  s + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  s + "/_app/immutable/nodes/1.3b6c75fa.js",
  s + "/_app/immutable/assets/2.932fb878.css",
  s + "/_app/immutable/nodes/2.247c64ee.js",
  s + "/_app/immutable/chunks/index.981904c4.js",
  s + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  s + "/_app/immutable/chunks/singletons.f2f4c384.js",
  s + "/_app/immutable/chunks/stores.70d8f886.js",
  s + "/_app/immutable/entry/start.8db15105.js"
], f = [
  s + "/.nojekyll",
  s + "/favicon.png",
  s + "/icon192.png",
  s + "/icon512.png",
  s + "/manifest.json",
  s + "/robots.txt"
], i = "1692960157539", o = self, l = `cache${i}`, m = r.concat(f), h = new Set(m);
o.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(l).then((e) => e.addAll(m)).then(() => {
      o.skipWaiting();
    })
  );
});
o.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== l && await caches.delete(t);
      o.clients.claim();
    })
  );
});
async function u(a) {
  const e = await caches.open(`offline${i}`);
  console.log(a);
  try {
    const t = await fetch(a);
    return e.put(a, t.clone()), t;
  } catch (t) {
    const n = await e.match(a);
    if (n)
      return n;
    throw t;
  }
}
o.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const e = new URL(a.request.url), t = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && h.has(e.pathname), p = a.request.cache === "only-if-cached" && !c;
  t && !n && !p && a.respondWith(
    (async () => c && await caches.match(a.request) || u(a.request))()
  );
});
