const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  e + "/_app/immutable/entry/app.43b82c76.js",
  e + "/_app/immutable/assets/0.cd0b29c6.css",
  e + "/_app/immutable/nodes/0.5b855211.js",
  e + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  e + "/_app/immutable/assets/github.1ea8d62e.svg",
  e + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  e + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  e + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  e + "/_app/immutable/nodes/1.4feacb6f.js",
  e + "/_app/immutable/assets/2.5d969213.css",
  e + "/_app/immutable/nodes/2.ef4891fe.js",
  e + "/_app/immutable/nodes/3.fe160bd4.js",
  e + "/_app/immutable/chunks/index.afc7ab19.js",
  e + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  e + "/_app/immutable/chunks/singletons.57d11242.js",
  e + "/_app/immutable/chunks/stores.9ee5f138.js",
  e + "/_app/immutable/entry/start.5ee0f5fd.js"
], m = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/icon192.png",
  e + "/icon512.png",
  e + "/robots.txt"
], l = "1693235752510", n = self, p = "monthly-charges", o = `${p}_${l}`, f = i.concat(m);
n.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(o).then((s) => s.addAll(f)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== o && await caches.delete(t);
      n.clients.claim();
    })
  );
});
async function r(a) {
  const s = await caches.open(o);
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
n.addEventListener("fetch", (a) => {
  a.respondWith(
    caches.match(a.request).then((s) => s || r(a.request.clone()))
  );
});
