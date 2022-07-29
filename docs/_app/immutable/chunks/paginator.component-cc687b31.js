import{S as j,i as B,s as M,e as g,c as v,a as y,d as p,b as w,g as d,E as C,t as E,k as A,h as L,m as N,F as b,G as T,_ as q,j as H,V,Q as F}from"./index-9f470294.js";class G{constructor(){this.URL="https://rickandmortyapi.com/api",this.resultDefault={results:[],info:{count:0,pages:0,next:null,prev:null}},this.URL_CHARACTER=`${this.URL}/character`,this.URL_EPISODE=`${this.URL}/episode`,this.URL_LOCATION=`${this.URL}/location`}async findCharacter({page:e=1,name:t=null,status:s=null},i){try{const u=new URL(this.URL_CHARACTER);u.searchParams.append("page",`${e}`),t&&u.searchParams.append("name",t),s&&u.searchParams.append("status",s);let n;if(i&&i.fetch&&(n=await i.fetch(u.toString())),i||(n=await fetch(u.toString())),!n.ok)throw Error(JSON.stringify(n));return[await n.json(),null]}catch(u){return[this.resultDefault,u]}}async findEpisode({page:e=1,name:t=null}){try{const s=new URL(this.URL_EPISODE);s.searchParams.append("page",`${e}`),t&&s.searchParams.append("name",t);const i=await fetch(s.toString());if(!i.ok)throw Error(JSON.stringify(i));return[await i.json(),null]}catch(s){return[this.resultDefault,s]}}async findLocation({page:e=1,name:t=null}){try{const s=new URL(this.URL_LOCATION);s.searchParams.append("page",`${e}`),t&&s.searchParams.append("name",t);const i=await fetch(s.toString());if(!i.ok)throw Error(JSON.stringify(i));return[await i.json(),null]}catch(s){return[this.resultDefault,s]}}}class Q{constructor(e){this._repository=e}async findCharacter({page:e,name:t,status:s},i){const[u]=await this._repository.findCharacter({page:e,name:t,status:s},i);return u}async findEpisode({page:e,name:t}){const[s]=await this._repository.findEpisode({page:e,name:t});return s}async findLocation({page:e,name:t}){const[s]=await this._repository.findLocation({page:e,name:t});return s}}const Z=new Q(new G);function K(l){let e;return{c(){e=g("article"),this.h()},l(t){e=v(t,"ARTICLE",{"aria-busy":!0}),y(e).forEach(p),this.h()},h(){w(e,"aria-busy","true")},m(t,s){d(t,e,s)},p:C,i:C,o:C,d(t){t&&p(e)}}}class x extends j{constructor(e){super(),B(this,e,null,K,M,{})}}function J(l,e,t){const s=l.slice();return s[11]=e[t],s}function D(l){let e,t,s,i,u,n,r,c,h,k,P,O,m=l[3][l[2]],o=[];for(let a=0;a<m.length;a+=1)o[a]=I(J(l,m,a));return{c(){e=g("button"),t=g("span"),s=E("\xAB"),u=A();for(let a=0;a<o.length;a+=1)o[a].c();n=A(),r=g("button"),c=g("span"),h=E("\xBB"),this.h()},l(a){e=v(a,"BUTTON",{class:!0});var _=y(e);t=v(_,"SPAN",{});var f=y(t);s=L(f,"\xAB"),f.forEach(p),_.forEach(p),u=N(a);for(let S=0;S<o.length;S+=1)o[S].l(a);n=N(a),r=v(a,"BUTTON",{class:!0});var R=y(r);c=v(R,"SPAN",{});var z=y(c);h=L(z,"\xBB"),z.forEach(p),R.forEach(p),this.h()},h(){e.disabled=i=!l[0].prev,w(e,"class","svelte-zw2vsq"),w(r,"class","page-link svelte-zw2vsq"),r.disabled=k=!l[0].next},m(a,_){d(a,e,_),b(e,t),b(t,s),d(a,u,_);for(let f=0;f<o.length;f+=1)o[f].m(a,_);d(a,n,_),d(a,r,_),b(r,c),b(c,h),P||(O=[T(e,"click",l[7]),T(r,"click",l[6])],P=!0)},p(a,_){if(_&1&&i!==(i=!a[0].prev)&&(e.disabled=i),_&46){m=a[3][a[2]];let f;for(f=0;f<m.length;f+=1){const R=J(a,m,f);o[f]?o[f].p(R,_):(o[f]=I(R),o[f].c(),o[f].m(n.parentNode,n))}for(;f<o.length;f+=1)o[f].d(1);o.length=m.length}_&1&&k!==(k=!a[0].next)&&(r.disabled=k)},d(a){a&&p(e),a&&p(u),V(o,a),a&&p(n),a&&p(r),P=!1,F(O)}}}function I(l){let e,t=l[11]+1+"",s,i,u,n;function r(){return l[10](l[11])}return{c(){e=g("button"),s=E(t),this.h()},l(c){e=v(c,"BUTTON",{class:!0});var h=y(e);s=L(h,t),h.forEach(p),this.h()},h(){w(e,"class",i=q(l[11]+1===l[1]?"active":"")+" svelte-zw2vsq")},m(c,h){d(c,e,h),b(e,s),u||(n=T(e,"click",r),u=!0)},p(c,h){l=c,h&12&&t!==(t=l[11]+1+"")&&H(s,t),h&14&&i!==(i=q(l[11]+1===l[1]?"active":"")+" svelte-zw2vsq")&&w(e,"class",i)},d(c){c&&p(e),u=!1,n()}}}function W(l){let e,t,s,i,u,n=l[3][l[2]]&&D(l);return{c(){e=g("div"),n&&n.c(),t=A(),s=g("p"),i=E("Records:"),u=E(l[4]),this.h()},l(r){e=v(r,"DIV",{class:!0});var c=y(e);n&&n.l(c),c.forEach(p),t=N(r),s=v(r,"P",{});var h=y(s);i=L(h,"Records:"),u=L(h,l[4]),h.forEach(p),this.h()},h(){w(e,"class","svelte-zw2vsq")},m(r,c){d(r,e,c),n&&n.m(e,null),d(r,t,c),d(r,s,c),b(s,i),b(s,u)},p(r,[c]){r[3][r[2]]?n?n.p(r,c):(n=D(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null),c&16&&H(u,r[4])},i:C,o:C,d(r){r&&p(e),n&&n.d(),r&&p(t),r&&p(s)}}}const U=5;function X(l,e,t){let{metadata:s={prev:null,next:null,pages:0,count:0}}=e,{numberPageOnClick:i}=e,{currentPageProps:u=1}=e,n=u,r=0,c=[],h=0;const k=async o=>{t(1,n=o),await i(o)},P=async()=>{t(2,r+=1),t(1,n=c[r][0]+1),await i(n)},O=async()=>{t(2,r-=1),t(1,n=c[r][0]+1),await i(n)},m=o=>k(o+1);return l.$$set=o=>{"metadata"in o&&t(0,s=o.metadata),"numberPageOnClick"in o&&t(8,i=o.numberPageOnClick),"currentPageProps"in o&&t(9,u=o.currentPageProps)},l.$$.update=()=>{if(l.$$.dirty&527){t(3,c=[]),t(4,h=s.count);let o=Array.from(Array(s.pages).keys());for(let a=0;a<o.length;a+=U){const _=o.slice(a,a+U);t(3,c=c.concat([_]))}t(1,n=u),c[r+1]||t(0,s.next=null,s),n<=U&&t(0,s.prev=null,s)}},[s,n,r,c,h,k,P,O,i,u,m]}class $ extends j{constructor(e){super(),B(this,e,X,W,M,{metadata:0,numberPageOnClick:8,currentPageProps:9})}}export{$ as P,Z as R,x as S};
