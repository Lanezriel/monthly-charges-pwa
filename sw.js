if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const u=e=>i(e,r),o={module:{uri:r},exports:a,require:u};s[r]=Promise.all(l.map((e=>o[e]||u(e)))).then((e=>(n(...e),a)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.5717b5ed.css",revision:null},{url:"_app/immutable/assets/_page.203a94cf.css",revision:null},{url:"_app/immutable/assets/_page.e64809d5.css",revision:null},{url:"_app/immutable/assets/0.12a30921.css",revision:null},{url:"_app/immutable/assets/2.e64809d5.css",revision:null},{url:"_app/immutable/assets/3.203a94cf.css",revision:null},{url:"_app/immutable/chunks/index.43038c9e.js",revision:null},{url:"_app/immutable/chunks/scheduler.a00299e9.js",revision:null},{url:"_app/immutable/chunks/singletons.0511796c.js",revision:null},{url:"_app/immutable/chunks/stores.0cb91900.js",revision:null},{url:"_app/immutable/entry/app.2f483747.js",revision:null},{url:"_app/immutable/entry/start.c4e27fbb.js",revision:null},{url:"_app/immutable/nodes/0.47b2166d.js",revision:null},{url:"_app/immutable/nodes/1.efc62ea7.js",revision:null},{url:"_app/immutable/nodes/2.bf29c88e.js",revision:null},{url:"_app/immutable/nodes/3.ab1b314c.js",revision:null},{url:"favicon.png",revision:"bfd6ff48d937fab8e0938d1d390f96fe"},{url:"icon192.png",revision:"bfd6ff48d937fab8e0938d1d390f96fe"},{url:"icon512.png",revision:"79f2ca418b79513f2aa5777fa1e99c99"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"service-worker.js",revision:"7ab7a75ecf4c3130cb72e3943519aafa"},{url:"touch-icon.png",revision:"75c8884a177129c97a58eeb1efa2f911"},{url:"/monthly-charges-pwa/",revision:"1788b59894ad62f0b12e3cf32b15541c"},{url:"manifest.webmanifest",revision:"e4d4daeef6cc3a66b9c866103d3641d1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/monthly-charges-pwa/")))}));
