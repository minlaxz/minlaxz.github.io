import{c as E,r as M,a as P,t as D,s as p,R as e,l as m,u as z,L as h,S as V,b as l,d as b,e as x,T as F,F as $,H,f as v,g as B,h as W,i as k,j as T,k as K,P as J}from"./vendor.bfaeb708.js";const U=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};U();const q="modulepreload",_={},G="/",i=function(n,a){return!a||a.length===0?n():Promise.all(a.map(o=>{if(o=`${G}${o}`,o in _)return;_[o]=!0;const r=o.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":q,r||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),r)return new Promise((j,N)=>{c.addEventListener("load",j),c.addEventListener("error",N)})})).then(()=>n())},Q=t=>{t&&t instanceof Function&&i(()=>import("./web-vitals.0e8c1e4e.js"),[]).then(({getCLS:n,getFID:a,getFCP:o,getLCP:r,getTTFB:s})=>{n(t),a(t),o(t),r(t),s(t)})},d={set:(t,n)=>{window.localStorage.setItem(t,JSON.stringify(n))},get:t=>{const n=window.localStorage.getItem(t);try{return JSON.parse(n)}catch(a){return{}}},remove:t=>{window.localStorage.removeItem(t)},isExist:t=>window.localStorage.getItem(t)!==null,getAll:()=>window.localStorage,clear:()=>{window.localStorage.clear()}},X={value:0},y=E({name:"counter",initialState:X,reducers:{increase:t=>{t.value+=1},decrease:t=>{t.value-=1},increaseByAmount:(t,n)=>{t.value+=n.payload}}}),{increase:Fe,decrease:$e,increaseByAmount:He}=y.actions;var Y=y.reducer;const Z={sha:"",error:"",loading:!0},S=E({name:"lastCommit",initialState:Z,reducers:{getLastCommitSuccess:(t,n)=>{t.loading=!1,t.error="",t.sha=n.payload.sha},getLastCommitFailure:(t,n)=>{t.loading=!1,t.error=n.payload.error,t.sha=""}}}),{getLastCommitSuccess:Be,getLastCommitFailure:We}=S.actions;var ee=S.reducer;const te={darkThemeEnabled:!1},L=E({name:"theme",initialState:te,reducers:{toggleTheme:t=>{t.darkThemeEnabled=!t.darkThemeEnabled}}}),{toggleTheme:ne}=L.actions;var re=L.reducer;const ae={toastEnabled:!0},A=E({name:"toast",initialState:ae,reducers:{toggleToast:t=>{t.toastEnabled=!t.toastEnabled}}}),{toggleToast:oe}=A.actions;var se=A.reducer,le={lastCommit:ee,counter:Y,darkTheme:re,toast:se};M.exports.createLogger();const f="theme.portfolio.minlaxz",w="toast.portfolio.minlaxz";d.isExist("minlaxz-theme")&&d.remove("minlaxz-theme");d.isExist(f)&&!d.isExist(w)&&d.clear();const ie=[D],ce=d.isExist(f)&&d.isExist(w)?{darkTheme:d.get(f),toast:d.get(w)}:{},g=P({reducer:le,preloadedState:ce,devTools:!1,middleware:t=>t().concat(ie)});g.subscribe(()=>{!(g.getState().darkTheme&&g.getState().toast)||(d.set(f,g.getState().darkTheme),d.set(w,g.getState().toast))});const me=p.img`
    width: 120px;
    height: 20px;
    @media only screen and (max-width: 768px) {
        width: 90px;
        height: 15px ;
    }
    @media only screen and (max-width: 1024px) {
        width: 100px;
        height: 16.67px;
    }
`,de=({label:t})=>e.createElement(me,{src:`https://img.shields.io/badge/${t}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),ue=m(()=>i(()=>import("./index.f3b5aea1.js").then(function(t){return t.i}),["assets/index.f3b5aea1.js","assets/vendor.bfaeb708.js","assets/index.2885cb15.js","assets/index.1978d190.js","assets/index.574118bd.css"])),he=m(()=>i(()=>import("./index.a6398a0b.js"),["assets/index.a6398a0b.js","assets/vendor.bfaeb708.js","assets/index.032abe4e.js"])),pe=m(()=>i(()=>import("./index.d926131e.js"),["assets/index.d926131e.js","assets/index.032abe4e.js","assets/vendor.bfaeb708.js"])),ge=m(()=>i(()=>import("./index.a47290df.js"),["assets/index.a47290df.js","assets/vendor.bfaeb708.js","assets/index.1978d190.js","assets/index.574118bd.css","assets/index.9345873f.js","assets/useFetch.068f46e6.js","assets/index.2885cb15.js"])),Ee=m(()=>i(()=>import("./index.24d82e76.js"),["assets/index.24d82e76.js","assets/vendor.bfaeb708.js","assets/index.9345873f.js"])),xe=m(()=>i(()=>import("./index.2a7e423a.js"),["assets/index.2a7e423a.js","assets/vendor.bfaeb708.js","assets/index.2885cb15.js","assets/index.032abe4e.js","assets/useFetch.068f46e6.js"])),fe=m(()=>i(()=>import("./index.243822d4.js"),["assets/index.243822d4.js","assets/vendor.bfaeb708.js","assets/index.2885cb15.js","assets/index.9345873f.js"])),we=m(()=>i(()=>import("./index.003b1b65.js"),["assets/index.003b1b65.js","assets/index.1e69e9fa.css","assets/vendor.bfaeb708.js","assets/index.2885cb15.js","assets/index.032abe4e.js","assets/index.9345873f.js"])),be=m(()=>i(()=>import("./index.70604c9d.js"),["assets/index.70604c9d.js","assets/vendor.bfaeb708.js","assets/index.032abe4e.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.42ca9e36.js"])),ve=m(()=>i(()=>import("./index.ad3d0e98.js"),["assets/index.ad3d0e98.js","assets/vendor.bfaeb708.js","assets/index.032abe4e.js","assets/index.42ca9e36.js"])),ke=m(()=>i(()=>import("./index.b6b085b2.js"),["assets/index.b6b085b2.js","assets/vendor.bfaeb708.js","assets/index.032abe4e.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"])),Te=[{name:"home",r:e.createElement(ue,null)},{name:"about",r:e.createElement(he,null)},{name:"other",r:e.createElement(pe,null)},{name:"repos",r:e.createElement(ge,null)},{name:"forhuman",r:e.createElement(Ee,null)},{name:"repodetail",r:e.createElement(xe,null)},{name:"serverless",r:e.createElement(fe,null)},{name:"shortlink",r:e.createElement(we,null)},{name:"login",r:e.createElement(be,null)},{name:"signup",r:e.createElement(ve,null)},{name:"dashboard",r:e.createElement(ke,null)}],_e=p.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,ye=p.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,Se=()=>{const t=z();return e.useEffect(()=>{window.document.title="minlaxz | Oops!"},[]),e.createElement(_e,null,e.createElement(ye,null,"Oops \u{1F62F}! Well this is embarassing."),e.createElement("pre",null,"Not weed on this ",t.pathname),e.createElement(h,{to:"/"},"Home is safe \u{1F913}"))},u=t=>Te.filter(n=>n.name===t.type).map(n=>e.createElement("div",{key:t.type},e.createElement(b.exports.Suspense,{fallback:e.createElement("div",null,"Loading ",t.type,"...")},n.r))),Le=()=>e.createElement(V,null,e.createElement(l,{exact:!0,path:"/",render:()=>e.createElement(u,{type:"home"})}),e.createElement(l,{exact:!0,path:"/about",render:()=>e.createElement(u,{type:"about"})}),e.createElement(l,{exact:!0,path:"/other",render:()=>e.createElement(u,{type:"other"})}),e.createElement(l,{exact:!0,path:"/repos",render:()=>e.createElement(u,{type:"repos"})}),e.createElement(l,{path:"/repos/:name",render:()=>e.createElement(u,{type:"repodetail"})}),e.createElement(l,{exact:!0,path:"/forhuman",render:()=>e.createElement(u,{type:"forhuman"})}),e.createElement(l,{exact:!0,path:"/serverless",render:()=>e.createElement(u,{type:"serverless"})}),e.createElement(l,{exact:!0,path:"/shortlink",render:()=>e.createElement(u,{type:"shortlink"})}),e.createElement(l,{exact:!0,path:"/login",render:()=>e.createElement(u,{type:"login"})}),e.createElement(l,{exact:!0,path:"/signup",render:()=>e.createElement(u,{type:"signup"})}),e.createElement(l,{exact:!0,path:"/dashboard",render:()=>e.createElement(u,{type:"dashboard"})}),e.createElement(l,{component:Se})),Ke=({cusName:t})=>e.createElement(h,{to:"/"},t||"Default Home \u{1F3E0}"),Je=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(h,{to:"/repos",className:t},n||"repo list \u{1F913}")),Ue=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(h,{to:"/other",className:t},n||"Other")),qe=({linkClass:t})=>e.createElement("span",null,"\xA0 ",e.createElement(h,{to:"/about",className:t},"Here")," is how this went through \xA0 \u{1F914}"),Ge=({linkClass:t,cusName:n})=>e.createElement(h,{to:"/forhuman",className:t},e.createElement(de,{label:n||"View Markdown"})),Qe=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(h,{to:"/serverless",className:t},n||"Serverless API")),Xe=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(h,{to:"/shortlink",className:t},n||"LinkShortener API")),Ye=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(h,{to:"/login",className:t},n||"Login")),Ze=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(h,{to:"/signup",className:t},n||"Signup")),R=x("theme",{light:"#efefef",dark:"#1e1e1e"}),C=x("theme",{light:"#1d3c47",dark:"#CEA981"}),Ae=x("theme",{light:"#f5f5f5",dark:"#272727"}),Re=x("theme",{light:"#1d3c47",dark:"#d4ccac"});var Ce=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${R};
    color: ${C};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;function Oe(t){const[n,a]=b.exports.useState(!1);return b.exports.useEffect(()=>{const o=window.matchMedia(t);o.matches!==n&&a(o.matches);const r=()=>{a(o.matches)};return o.addListener(r),()=>o.removeListener(r)},[n,t]),n}const Ie=()=>{let t=Oe("(min-width: 800px)");return e.createElement(F,{position:t?"bottom-right":"bottom-center",limit:3,autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,transition:$,toastStyle:{margin:"10px 10px"}})};function je(){return e.createElement(Ce,null,e.createElement(H,{basename:"/"},e.createElement(Ie,null),e.createElement(Le,null)))}const Ne=({children:t})=>{const n=v(a=>a.darkTheme.darkThemeEnabled);return e.createElement(B,{theme:{theme:n?"dark":"light"}},t)},Me=p.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${Ae};
`,Pe=p.div`
/* I dont need bg color or color cuz mainconatiner set it */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 80%;
    padding: 0 10px;
    user-select: none;
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;

    @media only screen and (max-width: 768px) {
        max-width: 90%;
    }
`,O=p.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${Re};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;

    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,I=p.button`
    display: flex;
    align-items: center;
    margin: 0.5rem;
    background-color: ${R};
    color: ${C};
    border-radius: 10%;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    /* box-shadow: 0px 0px 10px rgba(0,0,0,0.2); */
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
    &:active {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.6);
    }
`,De=()=>{const t=v(s=>s.darkTheme.darkThemeEnabled),n=v(s=>s.toast.toastEnabled),a=W(),o=()=>e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(I,{onClick:()=>{a(oe()),n&&k.warn("Toast has been disabled")}},n?e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})):e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}))),e.createElement(O,null,n?"Show Toast":"No Toast")),r=()=>e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(O,null,"Not Context but Redux =>"),e.createElement(I,{onClick:()=>{a(ne()),n&&k(t?"Switched to light mode \u{1F916}.":"Switched to dark mode \u{1F47B}.",{icon:"\u{1F504}",theme:t?"dark":"light"})}},t?e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))));return e.createElement(Me,null,e.createElement(Pe,null,e.createElement(o,null),e.createElement(r,null)))};T.initialize("UA-167479267-1");K.render(e.createElement(e.StrictMode,null,e.createElement(J,{store:g},e.createElement(Ne,null,e.createElement(De,null),e.createElement(je,null)))),document.getElementById("root"));function ze({id:t,name:n,value:a}){console.log(t,n,a),T.ga("send","event",{eventCategory:"Web Vitals",eventAction:n,eventValue:Math.round(n==="CLS"?a*1e3:a),eventLabel:t,nonInteraction:!0})}Q(ze);export{qe as T,i as _,We as a,Ke as b,Ge as c,Je as d,Ze as e,Ye as f,Be as g,Ue as h,Qe as i,Xe as j,Fe as k,$e as l,g as s};
