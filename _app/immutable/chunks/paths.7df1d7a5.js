import{n as a,s as _}from"./scheduler.b5980d7e.js";const e=[];function d(i,u=a){let n;const o=new Set;function r(t){if(_(i,t)&&(i=t,n)){const c=!e.length;for(const s of o)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function b(t){r(t(i))}function p(t,c=a){const s=[t,c];return o.add(s),o.size===1&&(n=u(r,b)||a),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:b,subscribe:p}}var f;const h=((f=globalThis.__sveltekit_apilit)==null?void 0:f.base)??"/monthly-charges-pwa";var l;const m=((l=globalThis.__sveltekit_apilit)==null?void 0:l.assets)??h;export{m as a,h as b,d as w};
