if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,u)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const r=e=>l(e,n),t={module:{uri:n},exports:a,require:r};s[n]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(u(...e),a)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.61820300.css",revision:null},{url:"_app/immutable/assets/_page.105b8efc.css",revision:null},{url:"_app/immutable/assets/_page.1eb56d66.css",revision:null},{url:"_app/immutable/assets/_page.5a9040e1.css",revision:null},{url:"_app/immutable/assets/_page.e347a84f.css",revision:null},{url:"_app/immutable/assets/0.2ac126b5.css",revision:null},{url:"_app/immutable/assets/2.1eb56d66.css",revision:null},{url:"_app/immutable/assets/3.105b8efc.css",revision:null},{url:"_app/immutable/assets/4.e347a84f.css",revision:null},{url:"_app/immutable/assets/5.5a9040e1.css",revision:null},{url:"_app/immutable/assets/ItemEntry.4a5cd914.css",revision:null},{url:"_app/immutable/assets/plusRounded.b763df92.css",revision:null},{url:"_app/immutable/assets/UpdateCharge.02de2814.css",revision:null},{url:"_app/immutable/chunks/edit.ffce0ce6.js",revision:null},{url:"_app/immutable/chunks/index.a4e761a8.js",revision:null},{url:"_app/immutable/chunks/index.ffe372b4.js",revision:null},{url:"_app/immutable/chunks/ItemEntry.2d2f0d3c.js",revision:null},{url:"_app/immutable/chunks/navigation.82742b4f.js",revision:null},{url:"_app/immutable/chunks/paths.503b4e32.js",revision:null},{url:"_app/immutable/chunks/plusRounded.73ee9a39.js",revision:null},{url:"_app/immutable/chunks/roundCheck.09e24eeb.js",revision:null},{url:"_app/immutable/chunks/scheduler.b5980d7e.js",revision:null},{url:"_app/immutable/chunks/singletons.908e4ee0.js",revision:null},{url:"_app/immutable/chunks/stores.dbf5b41b.js",revision:null},{url:"_app/immutable/chunks/UpdateCharge.56be3401.js",revision:null},{url:"_app/immutable/entry/app.96a98fbc.js",revision:null},{url:"_app/immutable/entry/start.bb3e7d75.js",revision:null},{url:"_app/immutable/nodes/0.3b3547cc.js",revision:null},{url:"_app/immutable/nodes/1.d26a1af8.js",revision:null},{url:"_app/immutable/nodes/2.f040588b.js",revision:null},{url:"_app/immutable/nodes/3.678981e8.js",revision:null},{url:"_app/immutable/nodes/4.895f8cf0.js",revision:null},{url:"_app/immutable/nodes/5.4b5cfa15.js",revision:null},{url:"favicon.png",revision:"bfd6ff48d937fab8e0938d1d390f96fe"},{url:"icon192.png",revision:"bfd6ff48d937fab8e0938d1d390f96fe"},{url:"icon512.png",revision:"79f2ca418b79513f2aa5777fa1e99c99"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"service-worker.js",revision:"43c5202f2916694c0f33718a85279380"},{url:"touch-icon.png",revision:"75c8884a177129c97a58eeb1efa2f911"},{url:"/monthly-charges-pwa/",revision:"df787c286f17d894c7f9eeef520a2788"},{url:"manifest.webmanifest",revision:"e4d4daeef6cc3a66b9c866103d3641d1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/monthly-charges-pwa/")))}));
