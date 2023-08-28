import{s as X,n as G,c as te,d as ae,u as se,g as le,e as re}from"../chunks/scheduler.b0c1c2c3.js";import{S as Y,i as ee,g as b,s as E,x as D,m as ne,h as w,j as g,y as R,c as y,z as j,f as c,n as ie,k as e,a as U,A as l,H as oe,e as J,r as ue,B as ce,C as fe,u as ve,v as he,d as Q,t as W,w as de}from"../chunks/index.afc7ab19.js";import{p as pe}from"../chunks/stores.19b099a8.js";import{e as S}from"../chunks/singletons.99918757.js";const me=!1,_e=!1,ge="always",Ce=Object.freeze(Object.defineProperty({__proto__:null,prerender:me,ssr:_e,trailingSlash:ge},Symbol.toStringTag,{value:"Module"})),O={pwaInDevEnvironment:!1,webManifest:{href:"./manifest.webmanifest",useCredentials:!1,linkTag:'<link rel="manifest" href="./manifest.webmanifest">'}},be=""+new URL("../assets/svelte-logo.87df40b8.svg",import.meta.url).href,we=""+new URL("../assets/github.1ea8d62e.svg",import.meta.url).href;function ze(u){let t,n,p=`<a href="https://kit.svelte.dev" target="_blank" class="svelte-1u9z1tp"><img src="${be}" alt="SvelteKit" class="svelte-1u9z1tp"/></a>`,r,s,h,m,H,f,z,v,M,i,a,o,d,I="Test",A,V,L,k,x,T,K=`<a href="https://github.com/Lanezriel" target="_blank" class="svelte-1u9z1tp"><img src="${we}" alt="GitHub" class="svelte-1u9z1tp"/></a>`;return{c(){t=b("header"),n=b("div"),n.innerHTML=p,r=E(),s=b("nav"),h=D("svg"),m=D("path"),H=E(),f=b("ul"),z=b("li"),v=b("a"),M=ne("Home"),a=E(),o=b("li"),d=b("a"),d.textContent=I,V=E(),L=D("svg"),k=D("path"),x=E(),T=b("div"),T.innerHTML=K,this.h()},l($){t=w($,"HEADER",{class:!0});var _=g(t);n=w(_,"DIV",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-1njadi2"&&(n.innerHTML=p),r=y(_),s=w(_,"NAV",{class:!0});var C=g(s);h=j(C,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var N=g(h);m=j(N,"path",{d:!0,class:!0}),g(m).forEach(c),N.forEach(c),H=y(C),f=w(C,"UL",{class:!0});var B=g(f);z=w(B,"LI",{"aria-current":!0,class:!0});var P=g(z);v=w(P,"A",{href:!0,class:!0});var Z=g(v);M=ie(Z,"Home"),Z.forEach(c),P.forEach(c),a=y(B),o=w(B,"LI",{"aria-current":!0,class:!0});var q=g(o);d=w(q,"A",{href:!0,class:!0,"data-svelte-h":!0}),R(d)!=="svelte-7z7a6m"&&(d.textContent=I),q.forEach(c),B.forEach(c),V=y(C),L=j(C,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var F=g(L);k=j(F,"path",{d:!0,class:!0}),g(k).forEach(c),F.forEach(c),C.forEach(c),x=y(_),T=w(_,"DIV",{class:!0,"data-svelte-h":!0}),R(T)!=="svelte-7f5nwb"&&(T.innerHTML=K),_.forEach(c),this.h()},h(){e(n,"class","corner svelte-1u9z1tp"),e(m,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(m,"class","svelte-1u9z1tp"),e(h,"viewBox","0 0 2 3"),e(h,"aria-hidden","true"),e(h,"class","svelte-1u9z1tp"),e(v,"href",u[0]),e(v,"class","svelte-1u9z1tp"),e(z,"aria-current",i=u[1].url.pathname===u[0]?"page":void 0),e(z,"class","svelte-1u9z1tp"),e(d,"href",S+"/test"),e(d,"class","svelte-1u9z1tp"),e(o,"aria-current",A=u[1].url.pathname===`${S}/test`?"page":void 0),e(o,"class","svelte-1u9z1tp"),e(f,"class","svelte-1u9z1tp"),e(k,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(k,"class","svelte-1u9z1tp"),e(L,"viewBox","0 0 2 3"),e(L,"aria-hidden","true"),e(L,"class","svelte-1u9z1tp"),e(s,"class","svelte-1u9z1tp"),e(T,"class","corner svelte-1u9z1tp"),e(t,"class","svelte-1u9z1tp")},m($,_){U($,t,_),l(t,n),l(t,r),l(t,s),l(s,h),l(h,m),l(s,H),l(s,f),l(f,z),l(z,v),l(v,M),l(f,a),l(f,o),l(o,d),l(s,V),l(s,L),l(L,k),l(t,x),l(t,T)},p($,[_]){_&1&&e(v,"href",$[0]),_&3&&i!==(i=$[1].url.pathname===$[0]?"page":void 0)&&e(z,"aria-current",i),_&2&&A!==(A=$[1].url.pathname===`${S}/test`?"page":void 0)&&e(o,"aria-current",A)},i:G,o:G,d($){$&&c(t)}}}function $e(u,t,n){let p,r;return te(u,pe,s=>n(1,r=s)),n(0,p=S===""?"/":S),[p,r]}class Le extends Y{constructor(t){super(),ee(this,t,$e,ze,X,{})}}function Ee(u){let t,n,p,r,s,h,m,H,f,z='<p>visit <a href="https://kit.svelte.dev" class="svelte-12avua8">kit.svelte.dev</a> to learn SvelteKit</p>',v;s=new Le({});const M=u[3].default,i=ae(M,u,u[2],null);return{c(){t=new oe(!1),n=J(),p=E(),r=b("div"),ue(s.$$.fragment),h=E(),m=b("main"),i&&i.c(),H=E(),f=b("footer"),f.innerHTML=z,this.h()},l(a){const o=ce("svelte-1h3nao2",document.head);t=fe(o,!1),n=J(),o.forEach(c),p=y(a),r=w(a,"DIV",{class:!0});var d=g(r);ve(s.$$.fragment,d),h=y(d),m=w(d,"MAIN",{class:!0});var I=g(m);i&&i.l(I),I.forEach(c),H=y(d),f=w(d,"FOOTER",{class:!0,"data-svelte-h":!0}),R(f)!=="svelte-1dlfr5"&&(f.innerHTML=z),d.forEach(c),this.h()},h(){t.a=n,e(m,"class","svelte-12avua8"),e(f,"class","svelte-12avua8"),e(r,"class","app svelte-12avua8")},m(a,o){t.m(u[0],document.head),l(document.head,n),U(a,p,o),U(a,r,o),he(s,r,null),l(r,h),l(r,m),i&&i.m(m,null),l(r,H),l(r,f),v=!0},p(a,[o]){(!v||o&1)&&t.p(a[0]),i&&i.p&&(!v||o&4)&&se(i,M,a,a[2],v?re(M,a[2],o,null):le(a[2]),null)},i(a){v||(Q(s.$$.fragment,a),Q(i,a),v=!0)},o(a){W(s.$$.fragment,a),W(i,a),v=!1},d(a){a&&(t.d(),c(p),c(r)),c(n),de(s),i&&i.d(a)}}}function ye(u,t,n){let p,{$$slots:r={},$$scope:s}=t;return O.webManifest.linkTag='<link rel="manifest" href="/monthly-charges-pwa/manifest.webmanifest">',u.$$set=h=>{"$$scope"in h&&n(2,s=h.$$scope)},u.$$.update=()=>{u.$$.dirty&2&&n(0,p=O?O.webManifest.linkTag:"")},[p,O,s,r]}class Ie extends Y{constructor(t){super(),ee(this,t,ye,Ee,X,{})}}export{Ie as component,Ce as universal};
