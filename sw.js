if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const a=e=>i(e,r),t={module:{uri:r},exports:u,require:a};s[r]=Promise.all(l.map((e=>t[e]||a(e)))).then((e=>(n(...e),u)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.30042f83.css",revision:null},{url:"_app/immutable/assets/_page.5d969213.css",revision:null},{url:"_app/immutable/assets/0.cd0b29c6.css",revision:null},{url:"_app/immutable/assets/2.5d969213.css",revision:null},{url:"_app/immutable/assets/github.1ea8d62e.svg",revision:null},{url:"_app/immutable/assets/svelte-logo.87df40b8.svg",revision:null},{url:"_app/immutable/chunks/index.afc7ab19.js",revision:null},{url:"_app/immutable/chunks/scheduler.b0c1c2c3.js",revision:null},{url:"_app/immutable/chunks/singletons.29f4adf5.js",revision:null},{url:"_app/immutable/chunks/stores.72f624c3.js",revision:null},{url:"_app/immutable/entry/app.7fb0cf1b.js",revision:null},{url:"_app/immutable/entry/start.e2b92626.js",revision:null},{url:"_app/immutable/nodes/0.fe9ce894.js",revision:null},{url:"_app/immutable/nodes/1.da4cc5b9.js",revision:null},{url:"_app/immutable/nodes/2.ef4891fe.js",revision:null},{url:"_app/immutable/nodes/3.fe160bd4.js",revision:null},{url:"favicon.png",revision:"3a387408ecc6cc283f724b39ca5fffb4"},{url:"icon192.png",revision:"84c88925dc60134bf58fb3a08e3710f7"},{url:"icon512.png",revision:"0faca3d807787e48b6c5988b62698e3d"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"service-worker.js",revision:"d79bf4f0365709984cc19be164edfa1c"},{url:"/monthly-charges-pwa/",revision:"44547b5b0e4191133e0c7e76ff6fed7d"},{url:"manifest.webmanifest",revision:"eaff6017ff2564de6d21960172b81966"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/monthly-charges-pwa/")))}));
