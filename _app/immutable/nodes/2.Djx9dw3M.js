import{s as ne,e as N,b as M,d as y,O as fe,j as F,f as k,i as w,v as V,k as X,n as O,P as Ve,t as H,h as P,l as v,m as W,w as U,Q as Ye,R as K,A as Ee,S as Me,T as oe,U as ue,V as de,x as Q,W as ie,p as Ne,r as Fe}from"../chunks/scheduler.BJXnsnwn.js";import{S as le,i as se,f as re,b as $,d as x,m as ee,t as J,a as Z,e as te,c as ze,g as He}from"../chunks/index.DQOnwU9f.js";function he(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ye(e,n,t){const a=e.slice();return a[7]=n[t],a}function De(e,n,t){const a=e.slice();return a[10]=n[t],a}function Ce(e){let n,t,a=new Date(e[0][e[7]].dates[e[10]].date).toLocaleDateString()+"",r,i,l,d,f,o,h,g=e[0][e[7]].dates[e[10]].quantity+"",m,p,s,u,c,Y,C=e[0][e[7]].dates[e[10]].acquisitionValue+"",D,I,A,T,R=e[0][e[7]].nsn+"",j;return{c(){n=N("div"),t=N("div"),r=H(a),i=M(),l=N("div"),f=M(),o=N("p"),h=H("("),m=H(g),p=H(")"),s=M(),u=N("div"),c=N("p"),Y=H("Acquisition Value: "),D=H(C),I=M(),A=N("p"),T=H("NSN: "),j=H(R),this.h()},l(E){n=y(E,"DIV",{class:!0});var b=k(n);t=y(b,"DIV",{class:!0});var q=k(t);r=P(q,a),q.forEach(w),i=F(b),l=y(b,"DIV",{class:!0,title:!0,style:!0}),k(l).forEach(w),f=F(b),o=y(b,"P",{class:!0});var _=k(o);h=P(_,"("),m=P(_,g),p=P(_,")"),_.forEach(w),b.forEach(w),s=F(E),u=y(E,"DIV",{class:!0});var S=k(u);c=y(S,"P",{class:!0});var B=k(c);Y=P(B,"Acquisition Value: "),D=P(B,C),B.forEach(w),I=F(S),A=y(S,"P",{class:!0});var G=k(A);T=P(G,"NSN: "),j=P(G,R),G.forEach(w),S.forEach(w),this.h()},h(){V(t,"class","date svelte-1huikoz"),V(l,"class","bar svelte-1huikoz"),V(l,"title",d=`Quantity: ${e[0][e[7]].dates[e[10]].quantity}`),U(l,"width",e[0][e[7]].dates[e[10]].quantity*10+"px"),V(o,"class","tiny svelte-1huikoz"),V(n,"class","item svelte-1huikoz"),V(c,"class","tiny svelte-1huikoz"),V(A,"class","tiny svelte-1huikoz"),V(u,"class","meta svelte-1huikoz")},m(E,b){X(E,n,b),v(n,t),v(t,r),v(n,i),v(n,l),v(n,f),v(n,o),v(o,h),v(o,m),v(o,p),X(E,s,b),X(E,u,b),v(u,c),v(c,Y),v(c,D),v(u,I),v(u,A),v(A,T),v(A,j)},p(E,b){b&3&&a!==(a=new Date(E[0][E[7]].dates[E[10]].date).toLocaleDateString()+"")&&W(r,a),b&3&&d!==(d=`Quantity: ${E[0][E[7]].dates[E[10]].quantity}`)&&V(l,"title",d),b&3&&U(l,"width",E[0][E[7]].dates[E[10]].quantity*10+"px"),b&3&&g!==(g=E[0][E[7]].dates[E[10]].quantity+"")&&W(m,g),b&3&&C!==(C=E[0][E[7]].dates[E[10]].acquisitionValue+"")&&W(D,C),b&3&&R!==(R=E[0][E[7]].nsn+"")&&W(j,R)},d(E){E&&(w(n),w(s),w(u))}}}function Ie(e){let n,t,a,r=e[0][e[7]].totalValue+"",i,l,d,f,o,h=e[0][e[7]].agency+"",g,m,p,s,u=e[0][e[7]].state+"",c,Y,C,D,I=e[0][e[7]].item+"",A,T,R,j=he(Object.keys(e[0][e[7]].dates)),E=[];for(let b=0;b<j.length;b+=1)E[b]=Ce(De(e,j,b));return{c(){n=N("div"),t=N("span"),a=H("(Total Value: $"),i=H(r),l=H(")"),d=M(),f=N("div"),o=N("h3"),g=H(h),m=M(),p=N("span"),s=H("("),c=H(u),Y=H(")"),C=M(),D=N("h3"),A=H(I),T=M();for(let b=0;b<E.length;b+=1)E[b].c();R=M(),this.h()},l(b){n=y(b,"DIV",{class:!0});var q=k(n);t=y(q,"SPAN",{class:!0});var _=k(t);a=P(_,"(Total Value: $"),i=P(_,r),l=P(_,")"),_.forEach(w),d=F(q),f=y(q,"DIV",{class:!0});var S=k(f);o=y(S,"H3",{class:!0});var B=k(o);g=P(B,h),m=F(B),p=y(B,"SPAN",{class:!0});var G=k(p);s=P(G,"("),c=P(G,u),Y=P(G,")"),G.forEach(w),B.forEach(w),C=F(S),D=y(S,"H3",{class:!0});var ce=k(D);A=P(ce,I),ce.forEach(w),S.forEach(w),T=F(q);for(let me=0;me<E.length;me+=1)E[me].l(q);R=F(q),q.forEach(w),this.h()},h(){V(t,"class","tiny svelte-1huikoz"),V(p,"class","tiny svelte-1huikoz"),V(o,"class","svelte-1huikoz"),V(D,"class","svelte-1huikoz"),V(f,"class","header svelte-1huikoz"),V(n,"class","group svelte-1huikoz")},m(b,q){X(b,n,q),v(n,t),v(t,a),v(t,i),v(t,l),v(n,d),v(n,f),v(f,o),v(o,g),v(o,m),v(o,p),v(p,s),v(p,c),v(p,Y),v(f,C),v(f,D),v(D,A),v(n,T);for(let _=0;_<E.length;_+=1)E[_]&&E[_].m(n,null);v(n,R)},p(b,q){if(q&3&&r!==(r=b[0][b[7]].totalValue+"")&&W(i,r),q&3&&h!==(h=b[0][b[7]].agency+"")&&W(g,h),q&3&&u!==(u=b[0][b[7]].state+"")&&W(c,u),q&3&&I!==(I=b[0][b[7]].item+"")&&W(A,I),q&3){j=he(Object.keys(b[0][b[7]].dates));let _;for(_=0;_<j.length;_+=1){const S=De(b,j,_);E[_]?E[_].p(S,q):(E[_]=Ce(S),E[_].c(),E[_].m(n,R))}for(;_<E.length;_+=1)E[_].d(1);E.length=j.length}},d(b){b&&w(n),Ve(E,b)}}}function Pe(e){let n,t="The results are sorted according to the total value of the items.",a,r,i=he(e[1]),l=[];for(let d=0;d<i.length;d+=1)l[d]=Ie(ye(e,i,d));return{c(){n=N("div"),n.textContent=t,a=M(),r=N("div");for(let d=0;d<l.length;d+=1)l[d].c();this.h()},l(d){n=y(d,"DIV",{class:!0,"data-svelte-h":!0}),fe(n)!=="svelte-1118j0o"&&(n.textContent=t),a=F(d),r=y(d,"DIV",{class:!0});var f=k(r);for(let o=0;o<l.length;o+=1)l[o].l(f);f.forEach(w),this.h()},h(){V(n,"class","info svelte-1huikoz"),V(r,"class","timeline svelte-1huikoz")},m(d,f){X(d,n,f),X(d,a,f),X(d,r,f);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,null)},p(d,[f]){if(f&3){i=he(d[1]);let o;for(o=0;o<i.length;o+=1){const h=ye(d,i,o);l[o]?l[o].p(h,f):(l[o]=Ie(h),l[o].c(),l[o].m(r,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=i.length}},i:O,o:O,d(d){d&&(w(n),w(a),w(r)),Ve(l,d)}}}function Te(e,n,t){let a,r,i,{data:l=[]}=n,{itemName:d=""}=n,{agencyName:f=""}=n;const o=h=>parseFloat(h.replace("US$","").replace(/\./g,"").replace(",","."));return e.$$set=h=>{"data"in h&&t(2,l=h.data),"itemName"in h&&t(3,d=h.itemName),"agencyName"in h&&t(4,f=h.agencyName)},e.$$.update=()=>{e.$$.dirty&28&&t(5,a=l.filter(h=>(d===""||h["Item Name"]===d)&&(f===""||h["Agency Name"]===f))),e.$$.dirty&32&&t(0,r=a.reduce((h,g)=>{const m=`${g["Agency Name"]}, ${g["Item Name"]}`,p=new Date(g["Ship Date"]).toLocaleDateString();h[m]||(h[m]={totalValue:0,dates:{}}),h[m].dates[p]||(h[m].dates[p]={date:g["Ship Date"],quantity:0,items:[]});const s=o(g["Acquisition Value"]);return h[m].totalValue+=s,h[m].dates[p].quantity+=parseInt(g.Quantity),h[m].dates[p].acquisitionValue=g["Acquisition Value"],h[m].dates[p].items.push(g),h[m].agency=g["Agency Name"].toLowerCase(),h[m].item=g["Item Name"].toLowerCase(),h[m].state=g.State,h[m].nsn=g.NSN,h},{})),e.$$.dirty&1&&t(1,i=Object.keys(r).sort((h,g)=>r[g].totalValue-r[h].totalValue).slice(0,200))},[r,i,l,d,f,a]}class Re extends le{constructor(n){super(),se(this,n,Te,Pe,ne,{data:2,itemName:3,agencyName:4})}}function Le(e,n,t){const a=e.slice();return a[11]=n[t],a}function ke(e){let n,t=e[11]+"",a,r,i,l;function d(){return e[9](e[11])}return{c(){n=N("div"),a=H(t),r=M(),this.h()},l(f){n=y(f,"DIV",{class:!0});var o=k(n);a=P(o,t),r=F(o),o.forEach(w),this.h()},h(){V(n,"class","svelte-mie8sr")},m(f,o){X(f,n,o),v(n,a),v(n,r),i||(l=K(n,"click",d),i=!0)},p(f,o){e=f,o&4&&t!==(t=e[11]+"")&&W(a,t)},d(f){f&&w(n),i=!1,l()}}}function je(e){let n,t,a,r,i,l="All",d,f,o,h=he(e[2]),g=[];for(let m=0;m<h.length;m+=1)g[m]=ke(Le(e,h,m));return{c(){n=N("div"),t=N("input"),a=M(),r=N("div"),i=N("div"),i.textContent=l,d=M();for(let m=0;m<g.length;m+=1)g[m].c();this.h()},l(m){n=y(m,"DIV",{class:!0});var p=k(n);t=y(p,"INPUT",{type:!0,placeholder:!0,class:!0}),a=F(p),r=y(p,"DIV",{class:!0});var s=k(r);i=y(s,"DIV",{class:!0,"data-svelte-h":!0}),fe(i)!=="svelte-1kk2g5s"&&(i.textContent=l),d=F(s);for(let u=0;u<g.length;u+=1)g[u].l(s);s.forEach(w),p.forEach(w),this.h()},h(){V(t,"type","text"),V(t,"placeholder",e[0]),V(t,"class","svelte-mie8sr"),V(i,"class","svelte-mie8sr"),V(r,"class","dropdown-content svelte-mie8sr"),V(n,"class","dropdown svelte-mie8sr")},m(m,p){X(m,n,p),v(n,t),Ye(t,e[1]),v(n,a),v(n,r),v(r,i),v(r,d);for(let s=0;s<g.length;s+=1)g[s]&&g[s].m(r,null);f||(o=[K(t,"input",e[8]),K(t,"input",e[4]),K(i,"click",e[5])],f=!0)},p(m,[p]){if(p&1&&V(t,"placeholder",m[0]),p&2&&t.value!==m[1]&&Ye(t,m[1]),p&12){h=he(m[2]);let s;for(s=0;s<h.length;s+=1){const u=Le(m,h,s);g[s]?g[s].p(u,p):(g[s]=ke(u),g[s].c(),g[s].m(r,null))}for(;s<g.length;s+=1)g[s].d(1);g.length=h.length}},i:O,o:O,d(m){m&&w(n),Ve(g,m),f=!1,Ee(o)}}}function Be(e,n,t){let a,{options:r=[]}=n,{placeholder:i=""}=n,{selected:l=""}=n;const d=Me();let f="";function o(s){t(6,l=s),t(1,f=s),d("select",s)}function h(s){t(1,f=s.target.value),d("input",f)}function g(){t(6,l=""),t(1,f=""),d("select","")}function m(){f=this.value,t(1,f),t(6,l)}const p=s=>o(s);return e.$$set=s=>{"options"in s&&t(7,r=s.options),"placeholder"in s&&t(0,i=s.placeholder),"selected"in s&&t(6,l=s.selected)},e.$$.update=()=>{e.$$.dirty&64&&t(1,f=l),e.$$.dirty&130&&t(2,a=r.filter(s=>s.toLowerCase().includes(f.toLowerCase())).sort())},[i,f,a,o,h,g,l,r,m,p]}class Ae extends le{constructor(n){super(),se(this,n,Be,je,ne,{options:7,placeholder:0,selected:6})}}function Ue(e){let n,t,a,r,i,l,d,f,o,h,g,m,p;return{c(){n=N("div"),t=N("div"),a=N("div"),r=M(),i=N("div"),l=N("span"),d=H(e[0]),f=M(),o=N("div"),h=N("span"),g=H(e[1]),this.h()},l(s){n=y(s,"DIV",{class:!0});var u=k(n);t=y(u,"DIV",{class:!0});var c=k(t);a=y(c,"DIV",{class:!0,style:!0}),k(a).forEach(w),r=F(c),i=y(c,"DIV",{class:!0,"data-which":!0,style:!0});var Y=k(i);l=y(Y,"SPAN",{class:!0});var C=k(l);d=P(C,e[0]),C.forEach(w),Y.forEach(w),f=F(c),o=y(c,"DIV",{class:!0,"data-which":!0,style:!0});var D=k(o);h=y(D,"SPAN",{class:!0});var I=k(h);g=P(I,e[1]),I.forEach(w),D.forEach(w),c.forEach(w),u.forEach(w),this.h()},h(){V(a,"class","body svelte-16drinl"),U(a,"left",100*((e[0]-e[2])/(e[3]-e[2]))+"%"),U(a,"right",100*(1-(e[1]-e[2])/(e[3]-e[2]))+"%"),V(l,"class","svelte-16drinl"),V(i,"class","handle svelte-16drinl"),V(i,"data-which","start"),U(i,"left",100*((e[0]-e[2])/(e[3]-e[2]))+"%"),V(h,"class","svelte-16drinl"),V(o,"class","handle svelte-16drinl"),V(o,"data-which","end"),U(o,"left",100*((e[1]-e[2])/(e[3]-e[2]))+"%"),V(t,"class","slider svelte-16drinl"),V(n,"class","double-range-container svelte-16drinl")},m(s,u){X(s,n,u),v(n,t),v(t,a),e[9](a),v(t,r),v(t,i),v(i,l),v(l,d),e[10](i),v(t,f),v(t,o),v(o,h),v(h,g),e[11](t),m||(p=[oe(pe.call(null,a)),K(a,"dragmove",ue(de(e[8]))),oe(pe.call(null,i)),K(i,"dragmove",ue(de(e[7]("start")))),oe(pe.call(null,o)),K(o,"dragmove",ue(de(e[7]("end"))))],m=!0)},p(s,[u]){u&13&&U(a,"left",100*((s[0]-s[2])/(s[3]-s[2]))+"%"),u&14&&U(a,"right",100*(1-(s[1]-s[2])/(s[3]-s[2]))+"%"),u&1&&W(d,s[0]),u&13&&U(i,"left",100*((s[0]-s[2])/(s[3]-s[2]))+"%"),u&2&&W(g,s[1]),u&14&&U(o,"left",100*((s[1]-s[2])/(s[3]-s[2]))+"%")},i:O,o:O,d(s){s&&w(n),e[9](null),e[10](null),e[11](null),m=!1,Ee(p)}}}function Se(e,n,t){return e<n?n:e>t?t:e}function pe(e){let n,t;function a(l){l.type==="touchstart"&&(l=l.touches[0]),n=l.clientX,t=l.clientY,e.dispatchEvent(new CustomEvent("dragstart",{detail:{x:n,y:t}})),window.addEventListener("mousemove",r),window.addEventListener("mouseup",i),window.addEventListener("touchmove",r),window.addEventListener("touchend",i)}function r(l){l.type==="touchmove"&&(l=l.changedTouches[0]);const d=l.clientX-n,f=l.clientY-t;n=l.clientX,t=l.clientY,e.dispatchEvent(new CustomEvent("dragmove",{detail:{x:n,y:t,dx:d,dy:f}}))}function i(l){n=l.clientX,t=l.clientY,e.dispatchEvent(new CustomEvent("dragend",{detail:{x:n,y:t}})),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",i),window.removeEventListener("touchmove",r),window.removeEventListener("touchend",i)}return e.addEventListener("mousedown",a),e.addEventListener("touchstart",a),{destroy(){e.removeEventListener("mousedown",a),e.removeEventListener("touchstart",a)}}}function Xe(e,n,t){let{minYear:a}=n,{maxYear:r}=n,{startYear:i=1990}=n,{endYear:l=new Date().getFullYear()}=n,d,f,o;function h(u){return function(c){const{left:Y,right:C}=o.getBoundingClientRect(),D=C-Y,I=Math.min(Math.max((c.detail.x-Y)/D,0),1);u==="start"?(t(0,i=Math.round(a+I*(r-a))),t(1,l=Math.max(l,i))):(t(0,i=Math.min(i,l)),t(1,l=Math.round(a+I*(r-a))))}}function g(u){const{width:c}=f.getBoundingClientRect(),{left:Y,right:C}=o.getBoundingClientRect(),D=C-Y,I=d.getBoundingClientRect().left,A=Se(I+event.detail.dx-Y,0,D-c),T=Se(A+c,c,D),R=A/D,j=T/D;t(0,i=Math.round(a+R*(r-a))),t(1,l=Math.round(a+j*(r-a)))}function m(u){Q[u?"unshift":"push"](()=>{f=u,t(5,f)})}function p(u){Q[u?"unshift":"push"](()=>{d=u,t(4,d)})}function s(u){Q[u?"unshift":"push"](()=>{o=u,t(6,o)})}return e.$$set=u=>{"minYear"in u&&t(2,a=u.minYear),"maxYear"in u&&t(3,r=u.maxYear),"startYear"in u&&t(0,i=u.startYear),"endYear"in u&&t(1,l=u.endYear)},[i,l,a,r,d,f,o,h,g,m,p,s]}class Oe extends le{constructor(n){super(),se(this,n,Xe,Ue,ne,{minYear:2,maxYear:3,startYear:0,endYear:1})}}function We(e){let n,t,a,r,i,l,d,f,o,h,g,m,p,s,u;return{c(){n=N("div"),t=N("div"),a=N("div"),r=M(),i=N("div"),l=N("span"),d=H(e[0]),f=H("$"),o=M(),h=N("div"),g=N("span"),m=H(e[1]),p=H("$"),this.h()},l(c){n=y(c,"DIV",{class:!0});var Y=k(n);t=y(Y,"DIV",{class:!0});var C=k(t);a=y(C,"DIV",{class:!0,style:!0}),k(a).forEach(w),r=F(C),i=y(C,"DIV",{class:!0,"data-which":!0,style:!0});var D=k(i);l=y(D,"SPAN",{class:!0});var I=k(l);d=P(I,e[0]),f=P(I,"$"),I.forEach(w),D.forEach(w),o=F(C),h=y(C,"DIV",{class:!0,"data-which":!0,style:!0});var A=k(h);g=y(A,"SPAN",{class:!0});var T=k(g);m=P(T,e[1]),p=P(T,"$"),T.forEach(w),A.forEach(w),C.forEach(w),Y.forEach(w),this.h()},h(){V(a,"class","body svelte-16drinl"),U(a,"left",100*((e[0]-e[2])/(e[3]-e[2]))+"%"),U(a,"right",100*(1-(e[1]-e[2])/(e[3]-e[2]))+"%"),V(l,"class","svelte-16drinl"),V(i,"class","handle svelte-16drinl"),V(i,"data-which","start"),U(i,"left",100*((e[0]-e[2])/(e[3]-e[2]))+"%"),V(g,"class","svelte-16drinl"),V(h,"class","handle svelte-16drinl"),V(h,"data-which","end"),U(h,"left",100*((e[1]-e[2])/(e[3]-e[2]))+"%"),V(t,"class","slider svelte-16drinl"),V(n,"class","double-range-container svelte-16drinl")},m(c,Y){X(c,n,Y),v(n,t),v(t,a),e[9](a),v(t,r),v(t,i),v(i,l),v(l,d),v(l,f),e[10](i),v(t,o),v(t,h),v(h,g),v(g,m),v(g,p),e[11](t),s||(u=[oe(we.call(null,a)),K(a,"dragmove",ue(de(e[8]))),oe(we.call(null,i)),K(i,"dragmove",ue(de(e[7]("start")))),oe(we.call(null,h)),K(h,"dragmove",ue(de(e[7]("end"))))],s=!0)},p(c,[Y]){Y&13&&U(a,"left",100*((c[0]-c[2])/(c[3]-c[2]))+"%"),Y&14&&U(a,"right",100*(1-(c[1]-c[2])/(c[3]-c[2]))+"%"),Y&1&&W(d,c[0]),Y&13&&U(i,"left",100*((c[0]-c[2])/(c[3]-c[2]))+"%"),Y&2&&W(m,c[1]),Y&14&&U(h,"left",100*((c[1]-c[2])/(c[3]-c[2]))+"%")},i:O,o:O,d(c){c&&w(n),e[9](null),e[10](null),e[11](null),s=!1,Ee(u)}}}function qe(e,n,t){return e<n?n:e>t?t:e}function we(e){let n,t;function a(l){l.type==="touchstart"&&(l=l.touches[0]),n=l.clientX,t=l.clientY,e.dispatchEvent(new CustomEvent("dragstart",{detail:{x:n,y:t}})),window.addEventListener("mousemove",r),window.addEventListener("mouseup",i),window.addEventListener("touchmove",r),window.addEventListener("touchend",i)}function r(l){l.type==="touchmove"&&(l=l.changedTouches[0]);const d=l.clientX-n,f=l.clientY-t;n=l.clientX,t=l.clientY,e.dispatchEvent(new CustomEvent("dragmove",{detail:{x:n,y:t,dx:d,dy:f}}))}function i(l){n=l.clientX,t=l.clientY,e.dispatchEvent(new CustomEvent("dragend",{detail:{x:n,y:t}})),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",i),window.removeEventListener("touchmove",r),window.removeEventListener("touchend",i)}return e.addEventListener("mousedown",a),e.addEventListener("touchstart",a),{destroy(){e.removeEventListener("mousedown",a),e.removeEventListener("touchstart",a)}}}function Qe(e,n,t){let{minValue:a}=n,{maxValue:r}=n,{startValue:i=100}=n,{endValue:l=4e5}=n,d,f,o;function h(u){return function(c){const{left:Y,right:C}=o.getBoundingClientRect(),D=C-Y,I=Math.min(Math.max((c.detail.x-Y)/D,0),1);u==="start"?(t(0,i=Math.round(a+I*(r-a))),t(1,l=Math.max(l,i))):(t(0,i=Math.min(i,l)),t(1,l=Math.round(a+I*(r-a))))}}function g(u){const{width:c}=f.getBoundingClientRect(),{left:Y,right:C}=o.getBoundingClientRect(),D=C-Y,I=d.getBoundingClientRect().left,A=qe(I+event.detail.dx-Y,0,D-c),T=qe(A+c,c,D),R=A/D,j=T/D;t(0,i=Math.round(a+R*(r-a))),t(1,l=Math.round(a+j*(r-a)))}function m(u){Q[u?"unshift":"push"](()=>{f=u,t(5,f)})}function p(u){Q[u?"unshift":"push"](()=>{d=u,t(4,d)})}function s(u){Q[u?"unshift":"push"](()=>{o=u,t(6,o)})}return e.$$set=u=>{"minValue"in u&&t(2,a=u.minValue),"maxValue"in u&&t(3,r=u.maxValue),"startValue"in u&&t(0,i=u.startValue),"endValue"in u&&t(1,l=u.endValue)},[i,l,a,r,d,f,o,h,g,m,p,s]}class Ke extends le{constructor(n){super(),se(this,n,Qe,We,ne,{minValue:2,maxValue:3,startValue:0,endValue:1})}}function Ge(e){let n,t,a="Filter the dataset",r,i,l,d,f,o,h,g,m,p,s,u,c,Y,C,D,I,A="Reset Filters",T,R,j;function E(L){e[16](L)}function b(L){e[17](L)}let q={minYear:e[10],maxYear:e[11]};e[2]!==void 0&&(q.startYear=e[2]),e[3]!==void 0&&(q.endYear=e[3]),i=new Oe({props:q}),Q.push(()=>re(i,"startYear",E)),Q.push(()=>re(i,"endYear",b));function _(L){e[18](L)}function S(L){e[19](L)}let B={minValue:e[8],maxValue:e[9]};e[4]!==void 0&&(B.startValue=e[4]),e[5]!==void 0&&(B.endValue=e[5]),o=new Ke({props:B}),Q.push(()=>re(o,"startValue",_)),Q.push(()=>re(o,"endValue",S));function G(L){e[20](L)}let ce={options:e[7],placeholder:"Type to filter Agency Names..."};e[1]!==void 0&&(ce.selected=e[1]),p=new Ae({props:ce}),Q.push(()=>re(p,"selected",G)),p.$on("select",e[12]),p.$on("input",e[21]);function me(L){e[22](L)}let be={options:e[6],placeholder:"Type to filter Item Names..."};return e[0]!==void 0&&(be.selected=e[0]),c=new Ae({props:be}),Q.push(()=>re(c,"selected",me)),c.$on("select",e[12]),c.$on("input",e[23]),{c(){n=N("div"),t=N("h2"),t.textContent=a,r=M(),$(i.$$.fragment),f=M(),$(o.$$.fragment),m=M(),$(p.$$.fragment),u=M(),$(c.$$.fragment),C=M(),D=N("div"),I=N("button"),I.textContent=A,this.h()},l(L){n=y(L,"DIV",{class:!0});var z=k(n);t=y(z,"H2",{class:!0,"data-svelte-h":!0}),fe(t)!=="svelte-1q9tntr"&&(t.textContent=a),r=F(z),x(i.$$.fragment,z),f=F(z),x(o.$$.fragment,z),m=F(z),x(p.$$.fragment,z),u=F(z),x(c.$$.fragment,z),C=F(z),D=y(z,"DIV",{class:!0});var ae=k(D);I=y(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(I)!=="svelte-p5k4b6"&&(I.textContent=A),ae.forEach(w),z.forEach(w),this.h()},h(){V(t,"class","svelte-8nip6n"),V(I,"class","svelte-8nip6n"),V(D,"class","reset svelte-8nip6n"),V(n,"class","svelte-8nip6n")},m(L,z){X(L,n,z),v(n,t),v(n,r),ee(i,n,null),v(n,f),ee(o,n,null),v(n,m),ee(p,n,null),v(n,u),ee(c,n,null),v(n,C),v(n,D),v(D,I),T=!0,R||(j=K(I,"click",e[13]),R=!0)},p(L,[z]){const ae={};!l&&z&4&&(l=!0,ae.startYear=L[2],ie(()=>l=!1)),!d&&z&8&&(d=!0,ae.endYear=L[3],ie(()=>d=!1)),i.$set(ae);const ge={};!h&&z&16&&(h=!0,ge.startValue=L[4],ie(()=>h=!1)),!g&&z&32&&(g=!0,ge.endValue=L[5],ie(()=>g=!1)),o.$set(ge);const ve={};z&128&&(ve.options=L[7]),!s&&z&2&&(s=!0,ve.selected=L[1],ie(()=>s=!1)),p.$set(ve);const _e={};z&64&&(_e.options=L[6]),!Y&&z&1&&(Y=!0,_e.selected=L[0],ie(()=>Y=!1)),c.$set(_e)},i(L){T||(J(i.$$.fragment,L),J(o.$$.fragment,L),J(p.$$.fragment,L),J(c.$$.fragment,L),T=!0)},o(L){Z(i.$$.fragment,L),Z(o.$$.fragment,L),Z(p.$$.fragment,L),Z(c.$$.fragment,L),T=!1},d(L){L&&w(n),te(i),te(o),te(p),te(c),R=!1,j()}}}function Je(e,n,t){let{data:a=[]}=n,{selectedItemName:r=""}=n,{selectedAgencyName:i=""}=n,{startYear:l=1990}=n,{endYear:d=new Date().getFullYear()}=n,{onFilterChange:f}=n,o=10,h=44e5,g=o,m=h,p=l,s=d,u=[],c=[];const Y=_=>parseFloat(_.replace("US$","").replace(/\./g,"").replace(",","."));function C(){f(r,i,l,d,o,h)}function D(){t(0,r=""),t(1,i=""),t(2,l=1990),t(3,d=new Date().getFullYear()),t(4,o=10),t(5,h=44e5),C()}function I(_){l=_,t(2,l)}function A(_){d=_,t(3,d)}function T(_){o=_,t(4,o)}function R(_){h=_,t(5,h)}function j(_){i=_,t(1,i)}const E=()=>C();function b(_){r=_,t(0,r)}const q=()=>C();return e.$$set=_=>{"data"in _&&t(14,a=_.data),"selectedItemName"in _&&t(0,r=_.selectedItemName),"selectedAgencyName"in _&&t(1,i=_.selectedAgencyName),"startYear"in _&&t(2,l=_.startYear),"endYear"in _&&t(3,d=_.endYear),"onFilterChange"in _&&t(15,f=_.onFilterChange)},e.$$.update=()=>{if(e.$$.dirty&16447){let _=a;(l||d)&&(_=_.filter(S=>{const B=new Date(S["Ship Date"]).getFullYear();return B>=l&&B<=d})),(o||h)&&(_=_.filter(S=>{const B=Y(S["Acquisition Value"]);return B>=o&&B<=h})),r&&(_=_.filter(S=>S["Item Name"].toLowerCase().includes(r.toLowerCase()))),i&&(_=_.filter(S=>S["Agency Name"].toLowerCase().includes(i.toLowerCase()))),t(6,u=[...new Set(_.map(S=>S["Item Name"]))]),t(7,c=[...new Set(_.map(S=>S["Agency Name"]))]),C()}},[r,i,l,d,o,h,u,c,g,m,p,s,C,D,a,f,I,A,T,R,j,E,b,q]}class Ze extends le{constructor(n){super(),se(this,n,Je,Ge,ne,{data:14,selectedItemName:0,selectedAgencyName:1,startYear:2,endYear:3,onFilterChange:15})}}function $e(e){let n,t=`<h1 class="svelte-17c550">All transfers of US military weapons to local police departments from
        1994 to 2024.</h1> <p class="svelte-17c550">It includes the item name, quantity, cost, and date of shipment for
        police departments the US.</p> <p class="svelte-17c550">This data comes from the Defense Logistics Agency.</p>`;return{c(){n=N("header"),n.innerHTML=t,this.h()},l(a){n=y(a,"HEADER",{class:!0,"data-svelte-h":!0}),fe(n)!=="svelte-ij26dw"&&(n.innerHTML=t),this.h()},h(){V(n,"class","svelte-17c550")},m(a,r){X(a,n,r)},p:O,i:O,o:O,d(a){a&&w(n)}}}class xe extends le{constructor(n){super(),se(this,n,null,$e,ne,{})}}function et(e){let n,t="...";return{c(){n=N("p"),n.textContent=t,this.h()},l(a){n=y(a,"P",{class:!0,"data-svelte-h":!0}),fe(n)!=="svelte-nvw4vi"&&(n.textContent=t),this.h()},h(){V(n,"class","svelte-1j0qzbe")},m(a,r){X(a,n,r)},p:O,i:O,o:O,d(a){a&&w(n)}}}function tt(e){let n,t,a;return t=new Re({props:{data:e[7],itemName:e[1],agencyName:e[2]}}),{c(){n=N("div"),$(t.$$.fragment),this.h()},l(r){n=y(r,"DIV",{class:!0});var i=k(n);x(t.$$.fragment,i),i.forEach(w),this.h()},h(){V(n,"class","viz svelte-1j0qzbe")},m(r,i){X(r,n,i),ee(t,n,null),a=!0},p(r,i){const l={};i&128&&(l.data=r[7]),i&2&&(l.itemName=r[1]),i&4&&(l.agencyName=r[2]),t.$set(l)},i(r){a||(J(t.$$.fragment,r),a=!0)},o(r){Z(t.$$.fragment,r),a=!1},d(r){r&&w(n),te(t)}}}function nt(e){let n,t,a,r,i,l,d,f,o,h;t=new xe({}),i=new Ze({props:{data:e[0],selectedItemName:e[1],selectedAgencyName:e[2],startYear:e[3],endYear:e[4],startValue:e[5],endValue:e[6],onFilterChange:e[8]}});const g=[tt,et],m=[];function p(s,u){return s[7].length>0?0:1}return d=p(e),f=m[d]=g[d](e),{c(){n=N("div"),$(t.$$.fragment),a=M(),r=N("div"),$(i.$$.fragment),l=M(),f.c(),o=Ne(),this.h()},l(s){n=y(s,"DIV",{class:!0});var u=k(n);x(t.$$.fragment,u),a=F(u),r=y(u,"DIV",{class:!0});var c=k(r);x(i.$$.fragment,c),c.forEach(w),u.forEach(w),l=F(s),f.l(s),o=Ne(),this.h()},h(){V(r,"class","filters svelte-1j0qzbe"),V(n,"class","header svelte-1j0qzbe")},m(s,u){X(s,n,u),ee(t,n,null),v(n,a),v(n,r),ee(i,r,null),X(s,l,u),m[d].m(s,u),X(s,o,u),h=!0},p(s,[u]){const c={};u&1&&(c.data=s[0]),u&2&&(c.selectedItemName=s[1]),u&4&&(c.selectedAgencyName=s[2]),u&8&&(c.startYear=s[3]),u&16&&(c.endYear=s[4]),u&32&&(c.startValue=s[5]),u&64&&(c.endValue=s[6]),i.$set(c);let Y=d;d=p(s),d===Y?m[d].p(s,u):(He(),Z(m[Y],1,1,()=>{m[Y]=null}),ze(),f=m[d],f?f.p(s,u):(f=m[d]=g[d](s),f.c()),J(f,1),f.m(o.parentNode,o))},i(s){h||(J(t.$$.fragment,s),J(i.$$.fragment,s),J(f),h=!0)},o(s){Z(t.$$.fragment,s),Z(i.$$.fragment,s),Z(f),h=!1},d(s){s&&(w(n),w(l),w(o)),te(t),te(i),m[d].d(s)}}}function lt(e,n,t){let a=[],r="",i="",l=1990,d=new Date().getFullYear(),f=10,o=1e3,h=[];const g=s=>parseFloat(s.replace("US$","").replace(/\./g,"").replace(",","."));Fe(async()=>{const s=await fetch("data.json");t(0,a=await s.json()),m()});function m(){t(7,h=a.filter(s=>{const u=new Date(s["Ship Date"]).getFullYear(),c=g(s["Acquisition Value"]);return(r==""||s["Item Name"].toLowerCase().includes(r.toLowerCase()))&&(i==""||s["Agency Name"].toLowerCase().includes(i.toLowerCase()))&&u>=l&&u<=d&&c>=f&&c<=o}))}function p(s,u,c,Y,C,D){t(1,r=s),t(2,i=u),t(3,l=c),t(4,d=Y),t(5,f=C),t(6,o=D),m()}return[a,r,i,l,d,f,o,h,p]}class it extends le{constructor(n){super(),se(this,n,lt,nt,ne,{})}}export{it as component};