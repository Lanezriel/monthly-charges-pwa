import{s as d,d as _,u as m,e as p,h,p as w,r as T}from"./scheduler.b5980d7e.js";import{S as g,i as y,g as k,h as v,j as b,f as c,k as I,a as C,d as E,t as $,I as f,B as u}from"./index.ffe372b4.js";const W=l=>{const e=l.currentTarget,t=document.createElement("span"),r=Math.max(e.clientWidth,e.clientHeight),a=r/2,s=l.offsetX-a,n=l.offsetY-a;t.style.width=t.style.height=`${r}px`,t.style.left=`${s}px`,t.style.top=`${n}px`,t.style.pointerEvents="none",t.classList.add("ripple"),e.appendChild(t),t.addEventListener("animationend",()=>e.removeChild(t))};function B(l){let e,t;const r=l[1].default,a=_(r,l,l[0],null);return{c(){e=k("div"),a&&a.c(),this.h()},l(s){e=v(s,"DIV",{class:!0});var n=b(e);a&&a.l(n),n.forEach(c),this.h()},h(){I(e,"class","item-wrapper svelte-swsoh5")},m(s,n){C(s,e,n),a&&a.m(e,null),t=!0},p(s,[n]){a&&a.p&&(!t||n&1)&&m(a,r,s,s[0],t?h(r,s[0],n,null):p(s[0]),null)},i(s){t||(E(a,s),t=!0)},o(s){$(a,s),t=!1},d(s){s&&c(e),a&&a.d(s)}}}function L(l,e,t){let{$$slots:r={},$$scope:a}=e;return l.$$set=s=>{"$$scope"in s&&t(0,a=s.$$scope)},[a,r]}class D extends g{constructor(e){super(),y(this,e,L,B,d,{})}}function S(l){let e,t,r,a;const s=l[3].default,n=_(s,l,l[2],null);return{c(){e=k("button"),n&&n.c(),this.h()},l(i){e=v(i,"BUTTON",{class:!0});var o=b(e);n&&n.l(o),o.forEach(c),this.h()},h(){I(e,"class","item svelte-rl2z78"),f(e,"centered",l[0])},m(i,o){C(i,e,o),n&&n.m(e,null),t=!0,r||(a=[u(e,"click",W),u(e,"click",function(){w(l[1])&&l[1].apply(this,arguments)})],r=!0)},p(i,[o]){l=i,n&&n.p&&(!t||o&4)&&m(n,s,l,l[2],t?h(s,l[2],o,null):p(l[2]),null),(!t||o&1)&&f(e,"centered",l[0])},i(i){t||(E(n,i),t=!0)},o(i){$(n,i),t=!1},d(i){i&&c(e),n&&n.d(i),r=!1,T(a)}}}function j(l,e,t){let{$$slots:r={},$$scope:a}=e,{centered:s=!1}=e,{clickCallback:n}=e;return l.$$set=i=>{"centered"in i&&t(0,s=i.centered),"clickCallback"in i&&t(1,n=i.clickCallback),"$$scope"in i&&t(2,a=i.$$scope)},[s,n,a,r]}class H extends g{constructor(e){super(),y(this,e,j,S,d,{centered:0,clickCallback:1})}}export{D as I,H as a,W as c};
