function x(){}const C=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function F(){return Object.create(null)}function j(t){t.forEach(w)}function M(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function B(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t,n,e){t.$$.on_destroy.push(E(n,e))}function S(t,n,e,o){if(t){const s=y(t,n,e,o);return t[0](s)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function U(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const a=[],_=Math.max(n.dirty.length,s.length);for(let u=0;u<_;u+=1)a[u]=n.dirty[u]|s[u];return a}return n.dirty|s}return n.dirty}function D(t,n,e,o,s,a){if(s){const _=y(n,e,o,a);t.p(_,s)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t,n,e){return t.set(e),n}function I(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let l;function d(t){l=t}function f(){if(!l)throw new Error("Function called outside component initialization");return l}function J(t){f().$$.on_mount.push(t)}function K(t){f().$$.after_update.push(t)}function L(t,n){return f().$$.context.set(t,n),n}function N(t){return f().$$.context.get(t)}const i=[],g=[];let c=[];const b=[],m=Promise.resolve();let p=!1;function v(){p||(p=!0,m.then(q))}function Q(){return v(),m}function O(t){c.push(t)}const h=new Set;let r=0;function q(){if(r!==0)return;const t=l;do{try{for(;r<i.length;){const n=i[r];r++,d(n),z(n.$$)}}catch(n){throw i.length=0,r=0,n}for(d(null),i.length=0,r=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(i.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function R(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{i as A,v as B,K as a,g as b,P as c,H as d,I as e,S as f,N as g,G as h,U as i,O as j,L as k,M as l,C as m,x as n,J as o,F as p,q,j as r,A as s,Q as t,D as u,B as v,R as w,l as x,d as y,w as z};