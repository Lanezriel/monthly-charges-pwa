import{s as q,n as H,g as A,c as B,d as I}from"../chunks/scheduler.a00299e9.js";import{S as N,i as R,g as d,s as b,m as U,C as w,h,f as v,c as C,j as M,A as z,n as L,k as p,E as O,z as o,a as P,B as W,o as $}from"../chunks/index.43038c9e.js";const D=!0;function F(){return{title:"Home",type:"main",backURL:null}}const V=Object.freeze(Object.defineProperty({__proto__:null,load:F,prerender:D},Symbol.toStringTag,{value:"Module"}));function G(l){let a,r,t,e,_="Welcome!",f,n,T="This page is soon to be completely changed",x,m,E="The following button exists only for testing the offline local storage",S,u,g,y,j;return{c(){a=d("meta"),r=b(),t=d("section"),e=d("h1"),e.textContent=_,f=b(),n=d("p"),n.textContent=T,x=b(),m=d("p"),m.textContent=E,S=b(),u=d("button"),g=U(l[1]),this.h()},l(s){const i=w("svelte-15d2sbj",document.head);a=h(i,"META",{name:!0,content:!0}),i.forEach(v),r=C(s),t=h(s,"SECTION",{class:!0});var c=M(t);e=h(c,"H1",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-68ohjl"&&(e.textContent=_),f=C(c),n=h(c,"P",{class:!0,"data-svelte-h":!0}),z(n)!=="svelte-1vg7hl2"&&(n.textContent=T),x=C(c),m=h(c,"P",{class:!0,"data-svelte-h":!0}),z(m)!=="svelte-6qqzl1"&&(m.textContent=E),S=C(c),u=h(c,"BUTTON",{class:!0});var k=M(u);g=L(k,l[1]),k.forEach(v),c.forEach(v),this.h()},h(){document.title="Monthly charges - Home",p(a,"name","description"),p(a,"content","Home page"),p(e,"class","svelte-v2bz85"),O(e,"small-title",l[0].isSmall),p(n,"class","svelte-v2bz85"),p(m,"class","svelte-v2bz85"),p(u,"class","svelte-v2bz85"),p(t,"class","svelte-v2bz85")},m(s,i){o(document.head,a),P(s,r,i),P(s,t,i),o(t,e),o(t,f),o(t,n),o(t,x),o(t,m),o(t,S),o(t,u),o(u,g),y||(j=W(u,"click",l[3]),y=!0)},p(s,[i]){i&1&&O(e,"small-title",s[0].isSmall),i&2&&$(g,s[1])},i:H,o:H,d(s){s&&(v(r),v(t)),v(a),y=!1,j()}}}function J(l,a,r){let t,e;const _=A("test");B(l,_,n=>r(0,e=n));function f(){I(_,e.isSmall=!e.isSmall,e)}return l.$$.update=()=>{l.$$.dirty&1&&r(1,t=e.isSmall?"Restore title size":"Make title small")},[e,t,_,f]}class X extends N{constructor(a){super(),R(this,a,J,G,q,{})}}export{X as component,V as universal};
