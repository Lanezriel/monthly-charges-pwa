import{s as O,n as k,g as P,c as A,d as B}from"../chunks/scheduler.8a3e53af.js";import{S as I,i as N,g as d,s as b,m as R,E as U,h,f,c as x,j as z,A as y,n as G,k as p,G as H,z as o,a as M,B as L,o as W}from"../chunks/index.a1cd61c0.js";const $=!0;function D(){return{title:"Home",type:"main",backURL:null}}const V=Object.freeze(Object.defineProperty({__proto__:null,load:D,prerender:$},Symbol.toStringTag,{value:"Module"}));function F(l){let a,r,t,e,_="Welcome!",g,n,q="This page is soon to be completely changed",C,m,T="The following button exists only for testing the offline local storage",S,u,v,j,w;return{c(){a=d("meta"),r=b(),t=d("section"),e=d("h1"),e.textContent=_,g=b(),n=d("p"),n.textContent=q,C=b(),m=d("p"),m.textContent=T,S=b(),u=d("button"),v=R(l[1]),this.h()},l(s){const i=U("svelte-15d2sbj",document.head);a=h(i,"META",{name:!0,content:!0}),i.forEach(f),r=x(s),t=h(s,"SECTION",{class:!0});var c=z(t);e=h(c,"H1",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-68ohjl"&&(e.textContent=_),g=x(c),n=h(c,"P",{class:!0,"data-svelte-h":!0}),y(n)!=="svelte-1vg7hl2"&&(n.textContent=q),C=x(c),m=h(c,"P",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-6qqzl1"&&(m.textContent=T),S=x(c),u=h(c,"BUTTON",{class:!0});var E=z(u);v=G(E,l[1]),E.forEach(f),c.forEach(f),this.h()},h(){document.title="Monthly charges - Home",p(a,"name","description"),p(a,"content","Home page"),p(e,"class","svelte-1q7m9wj"),H(e,"small-title",l[0].isSmall),p(n,"class","svelte-1q7m9wj"),p(m,"class","svelte-1q7m9wj"),p(u,"class","svelte-1q7m9wj"),p(t,"class","svelte-1q7m9wj")},m(s,i){o(document.head,a),M(s,r,i),M(s,t,i),o(t,e),o(t,g),o(t,n),o(t,C),o(t,m),o(t,S),o(t,u),o(u,v),j||(w=L(u,"click",l[3]),j=!0)},p(s,[i]){i&1&&H(e,"small-title",s[0].isSmall),i&2&&W(v,s[1])},i:k,o:k,d(s){s&&(f(r),f(t)),f(a),j=!1,w()}}}function J(l,a,r){let t,e;const _=P("test");A(l,_,n=>r(0,e=n));function g(){B(_,e.isSmall=!e.isSmall,e)}return l.$$.update=()=>{l.$$.dirty&1&&r(1,t=e.isSmall?"Restore title size":"Make title small")},[e,t,_,g]}class X extends I{constructor(a){super(),N(this,a,J,F,O,{})}}export{X as component,V as universal};