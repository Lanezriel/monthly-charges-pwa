import{s as k,n as E,g as P,c as A,d as B}from"../chunks/scheduler.a00299e9.js";import{S as H,i as I,g as p,s as S,m as N,C as q,h as d,f as _,c as y,j as M,A as j,n as R,k as f,E as z,z as r,a as O,B as U,o as W}from"../chunks/index.43038c9e.js";const $=!0,J=Object.freeze(Object.defineProperty({__proto__:null,prerender:$},Symbol.toStringTag,{value:"Module"}));function w(a){let l,c,t,e,m="Welcome!",h,n,C="This page is soon to be completely changed",v,i,g,b,x;return{c(){l=p("meta"),c=S(),t=p("section"),e=p("h1"),e.textContent=m,h=S(),n=p("p"),n.textContent=C,v=S(),i=p("button"),g=N(a[1]),this.h()},l(s){const o=q("svelte-15mybzv",document.head);l=d(o,"META",{name:!0,content:!0}),o.forEach(_),c=y(s),t=d(s,"SECTION",{class:!0});var u=M(t);e=d(u,"H1",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-68ohjl"&&(e.textContent=m),h=y(u),n=d(u,"P",{"data-svelte-h":!0}),j(n)!=="svelte-1vg7hl2"&&(n.textContent=C),v=y(u),i=d(u,"BUTTON",{class:!0});var T=M(i);g=R(T,a[1]),T.forEach(_),u.forEach(_),this.h()},h(){document.title="Monthly charges - Home",f(l,"name","description"),f(l,"content","Monthly charges home page"),f(e,"class","svelte-134fs1m"),z(e,"small-title",a[0].isSmall),f(i,"class","svelte-134fs1m"),f(t,"class","svelte-134fs1m")},m(s,o){r(document.head,l),O(s,c,o),O(s,t,o),r(t,e),r(t,h),r(t,n),r(t,v),r(t,i),r(i,g),b||(x=U(i,"click",a[3]),b=!0)},p(s,[o]){o&1&&z(e,"small-title",s[0].isSmall),o&2&&W(g,s[1])},i:E,o:E,d(s){s&&(_(c),_(t)),_(l),b=!1,x()}}}function D(a,l,c){let t,e;const m=P("test");A(a,m,n=>c(0,e=n));function h(){B(m,e.isSmall=!e.isSmall,e)}return a.$$.update=()=>{a.$$.dirty&1&&c(1,t=e.isSmall?"Restore title size":"Make title small")},[e,t,m,h]}class K extends H{constructor(l){super(),I(this,l,D,w,k,{})}}export{K as component,J as universal};
