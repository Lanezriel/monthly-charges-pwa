const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  e + "/_app/immutable/entry/app.eafea62c.js",
  e + "/_app/immutable/assets/0.cd0b29c6.css",
  e + "/_app/immutable/nodes/0.c440d50d.js",
  e + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  e + "/_app/immutable/assets/github.1ea8d62e.svg",
  e + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  e + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  e + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  e + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  e + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  e + "/_app/immutable/nodes/1.c9ef1840.js",
  e + "/_app/immutable/assets/2.e64809d5.css",
  e + "/_app/immutable/nodes/2.1e78e864.js",
  e + "/_app/immutable/assets/3.203a94cf.css",
  e + "/_app/immutable/nodes/3.0c800e59.js",
  e + "/_app/immutable/chunks/index.5e7feea3.js",
  e + "/_app/immutable/chunks/index.b8e80db4.js",
  e + "/_app/immutable/chunks/scheduler.b0c1c2c3.js",
  e + "/_app/immutable/chunks/singletons.1d95749a.js",
  e + "/_app/immutable/chunks/stores.a42ee3a2.js",
  e + "/_app/immutable/entry/start.6deb4341.js"
], m = [
  e + "/.nojekyll",
  e + "/favicon.png",
  e + "/icon192.png",
  e + "/icon512.png",
  e + "/robots.txt",
  e + "/touch-icon.png"
], l = "1693304048375", n = self, p = "monthly-charges", c = `${p}_${l}`, r = i.concat(m);
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
    const o = await s.match(a);
    if (o)
      return o;
    throw t;
  }
}
n.addEventListener("fetch", (a) => {
  a.respondWith(
    caches.match(a.request).then((s) => s || f(a.request.clone()))
  );
});
