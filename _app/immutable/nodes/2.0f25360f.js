import{s as _e,n as re,m as Ue,r as Re,b as xe,j as de,k as ve}from"../chunks/scheduler.b5980d7e.js";import{S as he,i as pe,x as ue,y as fe,j as b,f as d,k as _,a as M,z as h,e as K,d as q,p as oe,t as C,b as ce,q as se,g as k,s as I,r as j,m as U,h as y,A as Be,c as z,u as Y,n as x,v as P,B as ie,w as O,o as le,G as ye,E as Fe,l as we}from"../chunks/index.ffe372b4.js";import{a as me,u as He,i as Je,f as Ee,g as Le,b as qe,j as De,o as Ye,s as Ze,d as ge}from"../chunks/index.da52130c.js";import{b as Ge,g as We}from"../chunks/navigation.ef4df86b.js";import{c as Ce,I as be,a as Ae}from"../chunks/ItemEntry.2d2f0d3c.js";import{P as Ie,D as Ke,I as Qe,a as Xe}from"../chunks/plusRounded.2a3bf52c.js";const et=!0;function tt(){return{title:"Home",type:"main",backURL:null,editable:!0}}const yt=Object.freeze(Object.defineProperty({__proto__:null,load:tt,prerender:et},Symbol.toStringTag,{value:"Module"}));function lt(n){let e,l;return{c(){e=ue("svg"),l=ue("path"),this.h()},l(t){e=fe(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var r=b(e);l=fe(r,"path",{fill:!0,d:!0}),b(l).forEach(d),r.forEach(d),this.h()},h(){_(l,"fill","currentColor"),_(l,"d","m10.8 12l3.9 3.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12q0-.2.063-.375T8.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L10.8 12Z"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"width","32"),_(e,"height","32"),_(e,"viewBox","0 0 24 24")},m(t,r){M(t,e,r),h(e,l)},p:re,i:re,o:re,d(t){t&&d(e)}}}class ze extends he{constructor(e){super(),pe(this,e,null,lt,_e,{})}}function rt(n){let e,l;return{c(){e=ue("svg"),l=ue("path"),this.h()},l(t){e=fe(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var r=b(e);l=fe(r,"path",{fill:!0,d:!0}),b(l).forEach(d),r.forEach(d),this.h()},h(){_(l,"fill","currentColor"),_(l,"d","M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l3.9-3.9Z"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"width","32"),_(e,"height","32"),_(e,"viewBox","0 0 24 24")},m(t,r){M(t,e,r),h(e,l)},p:re,i:re,o:re,d(t){t&&d(e)}}}class Te extends he{constructor(e){super(),pe(this,e,null,rt,_e,{})}}function Me(n,e,l){const t=n.slice();return t[9]=e[l],t}function Se(n){let e,l,t,r="Select charges month",s,o,i,a,c,f,p,u,D,S,w,g,N,R,E=[],Q=new Map,V,T,F,X;var L=ze;function Z(m,v){return{}}L&&(f=se(L,Z()));var B=Te;function ne(m,v){return{}}B&&(g=se(B,ne()));let H=me(n[4]);const A=m=>m[9].value;for(let m=0;m<H.length;m+=1){let v=Me(n,H,m),$=A(v);Q.set($,E[m]=Ve($,v))}return{c(){e=k("div"),l=k("div"),t=k("h2"),t.textContent=r,s=I(),o=k("hr"),i=I(),a=k("div"),c=k("button"),f&&j(f.$$.fragment),p=I(),u=k("p"),D=U(n[3]),S=I(),w=k("button"),g&&j(g.$$.fragment),N=I(),R=k("div");for(let m=0;m<E.length;m+=1)E[m].c();this.h()},l(m){e=y(m,"DIV",{role:!0,class:!0});var v=b(e);l=y(v,"DIV",{class:!0});var $=b(l);t=y($,"H2",{"data-svelte-h":!0}),Be(t)!=="svelte-1trvg25"&&(t.textContent=r),s=z($),o=y($,"HR",{}),i=z($),a=y($,"DIV",{class:!0});var J=b(a);c=y(J,"BUTTON",{title:!0,"aria-label":!0,"aria-live":!0,class:!0});var G=b(c);f&&Y(f.$$.fragment,G),G.forEach(d),p=z(J),u=y(J,"P",{class:!0});var ee=b(u);D=x(ee,n[3]),ee.forEach(d),S=z(J),w=y(J,"BUTTON",{title:!0,"aria-label":!0,"aria-live":!0,class:!0});var te=b(w);g&&Y(g.$$.fragment,te),te.forEach(d),J.forEach(d),N=z($),R=y($,"DIV",{class:!0});var ae=b(R);for(let W=0;W<E.length;W+=1)E[W].l(ae);ae.forEach(d),$.forEach(d),v.forEach(d),this.h()},h(){_(c,"title","Previous year"),_(c,"aria-label","auto"),_(c,"aria-live","polite"),_(c,"class","svelte-qm6j2y"),_(u,"class","svelte-qm6j2y"),_(w,"title","Next year"),_(w,"aria-label","auto"),_(w,"aria-live","polite"),_(w,"class","svelte-qm6j2y"),_(a,"class","year svelte-qm6j2y"),_(R,"class","months svelte-qm6j2y"),_(l,"class","contents"),_(e,"role","dialog"),_(e,"class","modal")},m(m,v){M(m,e,v),h(e,l),h(l,t),h(l,s),h(l,o),h(l,i),h(l,a),h(a,c),f&&P(f,c,null),h(a,p),h(a,u),h(u,D),h(a,S),h(a,w),g&&P(g,w,null),h(l,N),h(l,R);for(let $=0;$<E.length;$+=1)E[$]&&E[$].m(R,null);n[8](e),T=!0,F||(X=[ie(c,"click",Ce),ie(c,"click",n[5]),ie(w,"click",Ce),ie(w,"click",n[6])],F=!0)},p(m,v){if(L!==(L=ze)){if(f){oe();const $=f;C($.$$.fragment,1,0,()=>{O($,1)}),ce()}L?(f=se(L,Z()),j(f.$$.fragment),q(f.$$.fragment,1),P(f,c,null)):f=null}if((!T||v&8)&&le(D,m[3]),B!==(B=Te)){if(g){oe();const $=g;C($.$$.fragment,1,0,()=>{O($,1)}),ce()}B?(g=se(B,ne()),j(g.$$.fragment),q(g.$$.fragment,1),P(g,w,null)):g=null}v&26&&(H=me(m[4]),E=He(E,v,A,1,m,H,Q,R,Je,Ve,null,Me))},i(m){T||(f&&q(f.$$.fragment,m),g&&q(g.$$.fragment,m),Ue(()=>{T&&(V||(V=ye(e,Ee,{y:50},!0)),V.run(1))}),T=!0)},o(m){f&&C(f.$$.fragment,m),g&&C(g.$$.fragment,m),V||(V=ye(e,Ee,{y:50},!1)),V.run(0),T=!1},d(m){m&&d(e),f&&O(f),g&&O(g);for(let v=0;v<E.length;v+=1)E[v].d();n[8](null),m&&V&&V.end(),F=!1,Re(X)}}}function Ve(n,e){let l,t=e[9].name+"",r,s,o,i;function a(){return e[7](e[9])}return{key:n,first:null,c(){l=k("button"),r=U(t),s=I(),this.h()},l(c){l=y(c,"BUTTON",{title:!0,"aria-label":!0,"aria-live":!0,class:!0});var f=b(l);r=x(f,t),s=z(f),f.forEach(d),this.h()},h(){_(l,"title",e[9].name),_(l,"aria-label","auto"),_(l,"aria-live","polite"),_(l,"class","svelte-qm6j2y"),this.first=l},m(c,f){M(c,l,f),h(l,r),h(l,s),o||(i=[ie(l,"click",a),ie(l,"click",Le)],o=!0)},p(c,f){e=c},d(c){c&&d(l),o=!1,Re(i)}}}function nt(n){let e,l,t=n[0]&&Se(n);return{c(){t&&t.c(),e=K()},l(r){t&&t.l(r),e=K()},m(r,s){t&&t.m(r,s),M(r,e,s),l=!0},p(r,[s]){r[0]?t?(t.p(r,s),s&1&&q(t,1)):(t=Se(r),t.c(),q(t,1),t.m(e.parentNode,e)):t&&(oe(),C(t,1,1,()=>{t=null}),ce())},i(r){l||(q(t),l=!0)},o(r){C(t),l=!1},d(r){r&&d(e),t&&t.d(r)}}}function at(n,e,l){let{isOpen:t}=e,{onSelect:r}=e;const s=[{name:"January",value:0},{name:"February",value:1},{name:"March",value:2},{name:"April",value:3},{name:"May",value:4},{name:"June",value:5},{name:"July",value:6},{name:"August",value:7},{name:"September",value:8},{name:"October",value:9},{name:"November",value:10},{name:"December",value:11}];let o=new Date().getFullYear(),i;const a=()=>l(3,o-=1),c=()=>l(3,o+=1),f=u=>r(new Date(o,u.value));function p(u){xe[u?"unshift":"push"](()=>{i=u,l(2,i)})}return n.$$set=u=>{"isOpen"in u&&l(0,t=u.isOpen),"onSelect"in u&&l(1,r=u.onSelect)},n.$$.update=()=>{n.$$.dirty&5&&t&&i&&i.querySelector("button").focus()},[t,r,i,o,s,a,c,f,p]}class st extends he{constructor(e){super(),pe(this,e,at,nt,_e,{isOpen:0,onSelect:1})}}function je(n,e,l){const t=n.slice();return t[9]=e[l],t}function it(n){let e=[],l=new Map,t,r,s=me(n[2]);const o=i=>i[9].id;for(let i=0;i<s.length;i+=1){let a=je(n,s,i),c=o(a);l.set(c,e[i]=Pe(c,a))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=K()},l(i){for(let a=0;a<e.length;a+=1)e[a].l(i);t=K()},m(i,a){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(i,a);M(i,t,a),r=!0},p(i,a){a&31&&(s=me(i[2]),oe(),e=He(e,a,o,1,i,s,l,t.parentNode,Ye,Pe,t,je),ce())},i(i){if(!r){for(let a=0;a<s.length;a+=1)q(e[a]);r=!0}},o(i){for(let a=0;a<e.length;a+=1)C(e[a]);r=!1},d(i){i&&d(t);for(let a=0;a<e.length;a+=1)e[a].d(i)}}}function ot(n){let e,l;return e=new be({props:{$$slots:{default:[ft]},$$scope:{ctx:n}}}),{c(){j(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){P(e,t,r),l=!0},p(t,r){const s={};r&4096&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){O(e,t)}}}function ct(n){let e,l,t,r=n[9].name+"",s,o,i,a,c=Oe(n[9].charges)+"",f,p,u=n[1].currency+"",D,S,w,g,N,R,E=n[1].currency+"",Q,V,T,F=$e(n[9].charges)+"",X,L,Z=n[1].currency+"",B,ne,H,A;return{c(){e=k("div"),l=k("div"),t=k("h2"),s=U(r),o=I(),i=k("p"),a=U("Remaining: "),f=U(c),p=I(),D=U(u),S=I(),w=k("div"),g=k("div"),N=k("p"),R=U("0 "),Q=U(E),V=I(),T=k("p"),X=U(F),L=I(),B=U(Z),ne=I(),H=k("div"),A=k("div"),this.h()},l(m){e=y(m,"DIV",{class:!0});var v=b(e);l=y(v,"DIV",{class:!0});var $=b(l);t=y($,"H2",{class:!0});var J=b(t);s=x(J,r),J.forEach(d),o=z($),i=y($,"P",{class:!0});var G=b(i);a=x(G,"Remaining: "),f=x(G,c),p=z(G),D=x(G,u),G.forEach(d),$.forEach(d),S=z(v),w=y(v,"DIV",{class:!0});var ee=b(w);g=y(ee,"DIV",{class:!0});var te=b(g);N=y(te,"P",{class:!0});var ae=b(N);R=x(ae,"0 "),Q=x(ae,E),ae.forEach(d),V=z(te),T=y(te,"P",{class:!0});var W=b(T);X=x(W,F),L=z(W),B=x(W,Z),W.forEach(d),te.forEach(d),ne=z(ee),H=y(ee,"DIV",{class:!0});var ke=b(H);A=y(ke,"DIV",{style:!0,class:!0}),b(A).forEach(d),ke.forEach(d),ee.forEach(d),v.forEach(d),this.h()},h(){_(t,"class","svelte-11vgxzf"),_(i,"class","svelte-11vgxzf"),_(l,"class","info svelte-11vgxzf"),_(N,"class","svelte-11vgxzf"),_(T,"class","svelte-11vgxzf"),_(g,"class","labels svelte-11vgxzf"),we(A,"width",Ne(n[9].charges)+"%"),_(A,"class","svelte-11vgxzf"),_(H,"class","progress-bar svelte-11vgxzf"),_(w,"class","progress svelte-11vgxzf"),_(e,"class","wrapper svelte-11vgxzf")},m(m,v){M(m,e,v),h(e,l),h(l,t),h(t,s),h(l,o),h(l,i),h(i,a),h(i,f),h(i,p),h(i,D),h(e,S),h(e,w),h(w,g),h(g,N),h(N,R),h(N,Q),h(g,V),h(g,T),h(T,X),h(T,L),h(T,B),h(w,ne),h(w,H),h(H,A)},p(m,v){v&4&&r!==(r=m[9].name+"")&&le(s,r),v&4&&c!==(c=Oe(m[9].charges)+"")&&le(f,c),v&2&&u!==(u=m[1].currency+"")&&le(D,u),v&2&&E!==(E=m[1].currency+"")&&le(Q,E),v&4&&F!==(F=$e(m[9].charges)+"")&&le(X,F),v&2&&Z!==(Z=m[1].currency+"")&&le(B,Z),v&4&&we(A,"width",Ne(m[9].charges)+"%")},d(m){m&&d(e)}}}function ut(n){let e,l,t,r,s;function o(){return n[7](n[9])}e=new Ae({props:{clickCallback:o,$$slots:{default:[ct]},$$scope:{ctx:n}}});function i(){return n[8](n[9])}return t=new Qe({props:{type:"delete",isVisible:n[0]===n[9].id,clickCallback:i,icon:Xe}}),{c(){j(e.$$.fragment),l=I(),j(t.$$.fragment),r=I()},l(a){Y(e.$$.fragment,a),l=z(a),Y(t.$$.fragment,a),r=z(a)},m(a,c){P(e,a,c),M(a,l,c),P(t,a,c),M(a,r,c),s=!0},p(a,c){n=a;const f={};c&4&&(f.clickCallback=o),c&4102&&(f.$$scope={dirty:c,ctx:n}),e.$set(f);const p={};c&5&&(p.isVisible=n[0]===n[9].id),c&4&&(p.clickCallback=i),t.$set(p)},i(a){s||(q(e.$$.fragment,a),q(t.$$.fragment,a),s=!0)},o(a){C(e.$$.fragment,a),C(t.$$.fragment,a),s=!1},d(a){a&&(d(l),d(r)),O(e,a),O(t,a)}}}function Pe(n,e){let l,t,r;return t=new be({props:{$$slots:{default:[ut]},$$scope:{ctx:e}}}),{key:n,first:null,c(){l=K(),j(t.$$.fragment),this.h()},l(s){l=K(),Y(t.$$.fragment,s),this.h()},h(){this.first=l},m(s,o){M(s,l,o),P(t,s,o),r=!0},p(s,o){e=s;const i={};o&4103&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)},i(s){r||(q(t.$$.fragment,s),r=!0)},o(s){C(t.$$.fragment,s),r=!1},d(s){s&&d(l),O(t,s)}}}function ft(n){let e,l='<h2 class="svelte-11vgxzf">Oops!</h2> <p class="oops-detail svelte-11vgxzf">You don&#39;t seem to have any entry yet.</p> <p class="oops-detail svelte-11vgxzf">Think about preparing your <a href="./settings/template?home=true" class="svelte-11vgxzf">template</a> before starting.</p>';return{c(){e=k("div"),e.innerHTML=l,this.h()},l(t){e=y(t,"DIV",{class:!0,"data-svelte-h":!0}),Be(e)!=="svelte-arbl8x"&&(e.innerHTML=l),this.h()},h(){_(e,"class","oops svelte-11vgxzf")},m(t,r){M(t,e,r)},p:re,d(t){t&&d(e)}}}function mt(n){let e,l,t;var r=Ie;function s(o,i){return{}}return r&&(e=se(r,s())),{c(){e&&j(e.$$.fragment),l=K()},l(o){e&&Y(e.$$.fragment,o),l=K()},m(o,i){e&&P(e,o,i),M(o,l,i),t=!0},p(o,i){if(r!==(r=Ie)){if(e){oe();const a=e;C(a.$$.fragment,1,0,()=>{O(a,1)}),ce()}r?(e=se(r,s()),j(e.$$.fragment),q(e.$$.fragment,1),P(e,l.parentNode,l)):e=null}},i(o){t||(e&&q(e.$$.fragment,o),t=!0)},o(o){e&&C(e.$$.fragment,o),t=!1},d(o){o&&d(l),e&&O(e,o)}}}function _t(n){let e,l;return e=new Ae({props:{clickCallback:n[5],centered:!0,$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){j(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){P(e,t,r),l=!0},p(t,r){const s={};r&4096&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){O(e,t)}}}function ht(n){let e,l,t,r,s,o,i;const a=[ot,it],c=[];function f(p,u){return p[2].length===0?0:1}return t=f(n),r=c[t]=a[t](n),o=new be({props:{$$slots:{default:[_t]},$$scope:{ctx:n}}}),{c(){e=k("meta"),l=I(),r.c(),s=I(),j(o.$$.fragment),this.h()},l(p){const u=Fe("svelte-15d2sbj",document.head);e=y(u,"META",{name:!0,content:!0}),u.forEach(d),l=z(p),r.l(p),s=z(p),Y(o.$$.fragment,p),this.h()},h(){document.title="Monthly charges - Home",_(e,"name","description"),_(e,"content","Home page")},m(p,u){h(document.head,e),M(p,l,u),c[t].m(p,u),M(p,s,u),P(o,p,u),i=!0},p(p,[u]){let D=t;t=f(p),t===D?c[t].p(p,u):(oe(),C(c[D],1,1,()=>{c[D]=null}),ce(),r=c[t],r?r.p(p,u):(r=c[t]=a[t](p),r.c()),q(r,1),r.m(s.parentNode,s));const S={};u&4096&&(S.$$scope={dirty:u,ctx:p}),o.$set(S)},i(p){i||(q(r),q(o.$$.fragment,p),i=!0)},o(p){C(r),C(o.$$.fragment,p),i=!1},d(p){p&&(d(l),d(s)),d(e),c[t].d(p),O(o,p)}}}function Oe(n){return n.reduce((e,l)=>l.paid?e:e+l.value,0)}function $e(n){return n.reduce((e,l)=>e+l.value,0)}function Ne(n){const e=$e(n);return n.reduce((t,r)=>r.paid?t+r.value:t,0)/e*100}function pt(n,e,l){let t,r,s;de(n,Ze,u=>l(1,t=u)),de(n,ge,u=>l(2,r=u)),de(n,qe,u=>l(6,s=u));let o;Ge(()=>{ve(qe,s=!1,s)});function i(u){s?o===u?l(0,o=null):l(0,o=u):We(`./${u}`)}function a(u){De(Ke,{onDelete:()=>{l(0,o=null),ve(ge,r=r.filter(D=>D.id!==u),r),Le()}},{replace:!0})}function c(){De(st,{onSelect:u=>{ve(ge,r=[...r,{id:crypto.randomUUID(),name:u.toLocaleDateString(void 0,{month:"long",year:"numeric"}),date:u,charges:[...t.template.charges]}].toSorted((D,S)=>D.date.getTime()-S.date.getTime()),r)}},{replace:!0})}const f=u=>i(u.id),p=u=>a(u.id);return n.$$.update=()=>{n.$$.dirty&64&&(s||l(0,o=null))},[o,t,r,i,a,c,s,f,p]}class wt extends he{constructor(e){super(),pe(this,e,pt,ht,_e,{})}}export{wt as component,yt as universal};
