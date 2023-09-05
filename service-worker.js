const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  e + "/_app/immutable/entry/app.4ee1477c.js",
  e + "/_app/immutable/assets/0.3d42dee1.css",
  e + "/_app/immutable/nodes/0.14b4ccce.js",
  e + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  e + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  e + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  e + "/_app/immutable/nodes/1.6d4d9af9.js",
  e + "/_app/immutable/assets/2.7183e2f2.css",
  e + "/_app/immutable/nodes/2.dd82ea34.js",
  e + "/_app/immutable/assets/3.0012764f.css",
  e + "/_app/immutable/nodes/3.7ea4289f.js",
  e + "/_app/immutable/assets/4.378cc837.css",
  e + "/_app/immutable/nodes/4.66632a8b.js",
  e + "/_app/immutable/chunks/createRipple.6d227583.js",
  e + "/_app/immutable/chunks/index.37d41f52.js",
  e + "/_app/immutable/chunks/index.7e7356c5.js",
  e + "/_app/immutable/chunks/paths.96bf0ee7.js",
  e + "/_app/immutable/chunks/scheduler.e051e6e5.js",
  e + "/_app/immutable/chunks/singletons.9aa8bbf4.js",
  e + "/_app/immutable/chunks/stores.56ff9220.js",
  e + "/_app/immutable/entry/start.90710ede.js"
], m = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/icon192.png",
  e + "/icon512.png",
  e + "/robots.txt",
  e + "/touch-icon.png"
], p = "1693909581581", n = self, l = "monthly-charges", c = `${l}_${p}`, r = o.concat(m);
n.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(c).then((s) => s.addAll(r)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== c && await caches.delete(t);
      n.clients.claim();
    })
  );
});
async function f(a) {
  const s = await caches.open(c);
  try {
    const t = await fetch(a);
    return s.put(a, t.clone()), t;
  } catch (t) {
    const i = await s.match(a);
    if (i)
      return i;
    throw t;
  }
}
n.addEventListener("fetch", (a) => {
  a.respondWith(
    caches.match(a.request).then((s) => s || f(a.request.clone()))
  );
});
