import{c as E,r as P,a as M,t as D,s as p,R as e,l as i,u as V,L as d,S as z,b as l,d as v,e as x,T as F,F as $,f as w,g as H,h as _,H as B,i as W,j as k,k as G,P as K}from"./vendor.085cecd7.js";const J=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};J();const U="modulepreload",T={},q="/",c=function(n,o){return!o||o.length===0?n():Promise.all(o.map(a=>{if(a=`${q}${a}`,a in T)return;T[a]=!0;const r=a.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const u=document.createElement("link");if(u.rel=r?"stylesheet":U,r||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),r)return new Promise((j,N)=>{u.addEventListener("load",j),u.addEventListener("error",N)})})).then(()=>n())},Q=t=>{t&&t instanceof Function&&c(()=>import("./web-vitals.8eea515e.js"),[]).then(({getCLS:n,getFID:o,getFCP:a,getLCP:r,getTTFB:s})=>{n(t),o(t),a(t),r(t),s(t)})},h={set:(t,n)=>{window.localStorage.setItem(t,JSON.stringify(n))},get:t=>{const n=window.localStorage.getItem(t);try{return JSON.parse(n)}catch(o){return{}}},remove:t=>{window.localStorage.removeItem(t)},isExist:t=>window.localStorage.getItem(t)!==null,getAll:()=>window.localStorage,clear:()=>{window.localStorage.clear()}},X={value:0},y=E({name:"counter",initialState:X,reducers:{increase:t=>{t.value+=1},decrease:t=>{t.value-=1},increaseByAmount:(t,n)=>{t.value+=n.payload}}}),{increase:He,decrease:Be,increaseByAmount:We}=y.actions;var Y=y.reducer;const Z={sha:"",error:"",loading:!0},S=E({name:"lastCommit",initialState:Z,reducers:{getLastCommitSuccess:(t,n)=>{t.loading=!1,t.error="",t.sha=n.payload.sha},getLastCommitFailure:(t,n)=>{t.loading=!1,t.error=n.payload.error,t.sha=""}}}),{getLastCommitSuccess:Ge,getLastCommitFailure:Ke}=S.actions;var ee=S.reducer;const te={darkThemeEnabled:!1},L=E({name:"theme",initialState:te,reducers:{toggleTheme:t=>{t.darkThemeEnabled=!t.darkThemeEnabled}}}),{toggleTheme:ne}=L.actions;var re=L.reducer;const ae={toastEnabled:!0},A=E({name:"toast",initialState:ae,reducers:{toggleToast:t=>{t.toastEnabled=!t.toastEnabled}}}),{toggleToast:oe}=A.actions;var se=A.reducer,le={lastCommit:ee,counter:Y,darkTheme:re,toast:se};P.exports.createLogger();const f="theme.portfolio.minlaxz",b="toast.portfolio.minlaxz";h.isExist("minlaxz-theme")&&h.remove("minlaxz-theme");h.isExist(f)&&!h.isExist(b)&&h.clear();const ce=[D],ie=h.isExist(f)&&h.isExist(b)?{darkTheme:h.get(f),toast:h.get(b)}:{},g=M({reducer:le,preloadedState:ie,devTools:!1,middleware:t=>t().concat(ce)});g.subscribe(()=>{!(g.getState().darkTheme&&g.getState().toast)||(h.set(f,g.getState().darkTheme),h.set(b,g.getState().toast))});const me=p.img`
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
`,de=({label:t})=>e.createElement(me,{src:`https://img.shields.io/badge/${t}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),ue=i(()=>c(()=>import("./index.ab15ffab.js"),["assets/index.ab15ffab.js","assets/vendor.085cecd7.js","assets/index.9ff040e8.js","assets/index.3915656f.js","assets/index.574118bd.css","assets/index.63b326be.js"])),he=i(()=>c(()=>import("./index.a6b5fc6b.js"),["assets/index.a6b5fc6b.js","assets/vendor.085cecd7.js","assets/index.d1d54eb1.js"])),pe=i(()=>c(()=>import("./index.30aa1cc4.js"),["assets/index.30aa1cc4.js","assets/vendor.085cecd7.js","assets/index.d1d54eb1.js","assets/index.b94c23d2.js"])),ge=i(()=>c(()=>import("./index.f7fbbff3.js"),["assets/index.f7fbbff3.js","assets/vendor.085cecd7.js","assets/index.3915656f.js","assets/index.574118bd.css","assets/index.b94c23d2.js","assets/useFetch.8cdd2d9d.js","assets/index.9ff040e8.js"])),Ee=i(()=>c(()=>import("./index.307c6b68.js"),["assets/index.307c6b68.js","assets/vendor.085cecd7.js","assets/index.b94c23d2.js"])),xe=i(()=>c(()=>import("./index.335585db.js"),["assets/index.335585db.js","assets/vendor.085cecd7.js","assets/index.9ff040e8.js","assets/index.d1d54eb1.js","assets/useFetch.8cdd2d9d.js"])),fe=i(()=>c(()=>import("./index.cf10b2e3.js"),["assets/index.cf10b2e3.js","assets/vendor.085cecd7.js","assets/index.9ff040e8.js","assets/index.b94c23d2.js"])),be=i(()=>c(()=>import("./index.551af7a8.js"),["assets/index.551af7a8.js","assets/index.1e69e9fa.css","assets/vendor.085cecd7.js","assets/index.9ff040e8.js","assets/index.d1d54eb1.js","assets/index.b94c23d2.js"])),ve=i(()=>c(()=>import("./index.667f2bd8.js"),["assets/index.667f2bd8.js","assets/vendor.085cecd7.js","assets/index.d1d54eb1.js","assets/userAuthActions.10b5e6f8.js","assets/index.9ff040e8.js","assets/index.17f122cf.js"])),we=i(()=>c(()=>import("./index.594f3f80.js"),["assets/index.594f3f80.js","assets/vendor.085cecd7.js","assets/index.d1d54eb1.js","assets/index.17f122cf.js"])),_e=i(()=>c(()=>import("./index.60546ea6.js"),["assets/index.60546ea6.js","assets/vendor.085cecd7.js","assets/index.d1d54eb1.js","assets/userAuthActions.10b5e6f8.js","assets/index.9ff040e8.js"])),ke=i(()=>c(()=>import("./index.b2ebe9ff.js"),["assets/index.b2ebe9ff.js","assets/vendor.085cecd7.js","assets/index.d1d54eb1.js","assets/index.63b326be.js","assets/index.b94c23d2.js"])),Te=i(()=>c(()=>import("./index.ce743998.js"),["assets/index.ce743998.js","assets/vendor.085cecd7.js","assets/index.d1d54eb1.js","assets/index.b94c23d2.js","assets/index.63b326be.js"])),ye=[{name:"home",r:e.createElement(ue,null)},{name:"about",r:e.createElement(he,null)},{name:"other",r:e.createElement(pe,null)},{name:"repos",r:e.createElement(ge,null)},{name:"forhuman",r:e.createElement(Ee,null)},{name:"repodetail",r:e.createElement(xe,null)},{name:"serverless",r:e.createElement(fe,null)},{name:"shortlink",r:e.createElement(be,null)},{name:"login",r:e.createElement(ve,null)},{name:"signup",r:e.createElement(we,null)},{name:"dashboard",r:e.createElement(_e,null)},{name:"cheatsheets",r:e.createElement(ke,null)},{name:"gitcs",r:e.createElement(Te,null)}],Se=p.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,Le=p.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,Ae=()=>{const t=V();return e.useEffect(()=>{window.document.title="minlaxz | Oops!"},[]),e.createElement(Se,null,e.createElement(Le,null,"Oops \u{1F62F}! Well this is embarassing."),e.createElement("pre",null,"Not weed on this ",t.pathname),e.createElement(d,{to:"/"},"Home is safe \u{1F913}"))},m=t=>ye.filter(n=>n.name===t.type).map(n=>e.createElement("div",{key:t.type},e.createElement(v.exports.Suspense,{fallback:e.createElement("div",null,"Loading ",t.type,"...")},n.r))),Ce=()=>e.createElement(z,null,e.createElement(l,{exact:!0,path:"/",render:()=>e.createElement(m,{type:"home"})}),e.createElement(l,{exact:!0,path:"/about",render:()=>e.createElement(m,{type:"about"})}),e.createElement(l,{exact:!0,path:"/other",render:()=>e.createElement(m,{type:"other"})}),e.createElement(l,{exact:!0,path:"/repos",render:()=>e.createElement(m,{type:"repos"})}),e.createElement(l,{path:"/repos/:name",render:()=>e.createElement(m,{type:"repodetail"})}),e.createElement(l,{exact:!0,path:"/forhuman",render:()=>e.createElement(m,{type:"forhuman"})}),e.createElement(l,{exact:!0,path:"/serverless",render:()=>e.createElement(m,{type:"serverless"})}),e.createElement(l,{exact:!0,path:"/shortlink",render:()=>e.createElement(m,{type:"shortlink"})}),e.createElement(l,{exact:!0,path:"/login",render:()=>e.createElement(m,{type:"login"})}),e.createElement(l,{exact:!0,path:"/signup",render:()=>e.createElement(m,{type:"signup"})}),e.createElement(l,{exact:!0,path:"/dashboard",render:()=>e.createElement(m,{type:"dashboard"})}),e.createElement(l,{exact:!0,path:"/cheatsheets",render:()=>e.createElement(m,{type:"cheatsheets"})}),e.createElement(l,{exact:!0,path:"/cheatsheets/gitcs",render:()=>e.createElement(m,{type:"gitcs"})}),e.createElement(l,{component:Ae})),Je=({cusName:t})=>e.createElement(d,{to:"/"},t||"Default Home \u{1F3E0}"),Ue=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(d,{to:"/repos",className:t},n||"repo list \u{1F913}")),qe=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(d,{to:"/other",className:t},n||"Other")),Qe=({linkClass:t})=>e.createElement("span",null,"\xA0 ",e.createElement(d,{to:"/about",className:t},"Here")," is how this went through \xA0 \u{1F914}"),Xe=({linkClass:t,cusName:n})=>e.createElement(d,{to:"/forhuman",className:t},e.createElement(de,{label:n||"View Markdown"})),Ye=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(d,{to:"/serverless",className:t},n||"Serverless API")),Ze=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(d,{to:"/shortlink",className:t},n||"LinkShortener API")),et=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(d,{to:"/login",className:t},n||"Login")),tt=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(d,{to:"/signup",className:t},n||"Signup")),nt=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(d,{to:"/cheatsheets",className:t},n||"Cheat Sheets")),rt=({linkClass:t,cusName:n})=>e.createElement("span",null,"\xA0 ",e.createElement(d,{to:"/cheatsheets/gitcs",className:t},n||"Git Cheat Sheet")),C=x("theme",{light:"#efefef",dark:"#1e1e1e"}),R=x("theme",{light:"#1d3c47",dark:"#b00b69"}),Re=x("theme",{light:"#f5f5f5",dark:"#272727"}),Oe=x("theme",{light:"#1d3c47",dark:"#d4ccac"});var Ie=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${C};
    color: ${R};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;function je(t){const[n,o]=v.exports.useState(!1);return v.exports.useEffect(()=>{const a=window.matchMedia(t);a.matches!==n&&o(a.matches);const r=()=>{o(a.matches)};return a.addListener(r),()=>a.removeListener(r)},[n,t]),n}const Ne=()=>{let t=je("(min-width: 800px)");return e.createElement(F,{position:t?"bottom-right":"bottom-center",limit:3,autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,transition:$,toastStyle:{margin:"10px 10px"}})},Pe=p.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${Re};
`,Me=p.div`
/* I dont need bg color or color cuz mainconatiner set it */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 80%;
    padding: 0 10px;
    user-select: none;
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.2s;

    @media only screen and (max-width: 768px) {
        max-width: 90%;
    }
`,O=p.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${Oe};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;

    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,I=p.button`
    display: flex;
    align-items: center;
    margin: 0.5rem;
    background-color: ${C};
    color: ${R};
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
`,De=()=>{const t=w(s=>s.darkTheme.darkThemeEnabled),n=w(s=>s.toast.toastEnabled),o=H(),a=()=>e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(I,{onClick:()=>{o(oe()),n&&_.warn("Toast has been disabled")}},n?e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})):e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}))),e.createElement(O,null,n?"Show Toast":"No Toast")),r=()=>e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(O,null,"Not Context but Redux =>"),e.createElement(I,{onClick:()=>{o(ne()),n&&_(t?"Switched to light mode \u{1F916}.":"Switched to dark mode \u{1F47B}.",{icon:"\u{1F504}",theme:t?"dark":"light"})}},t?e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))));return e.createElement(Pe,null,e.createElement(Me,null,e.createElement(a,null),e.createElement(r,null)))};function Ve(){return e.createElement(e.Fragment,null,e.createElement(De,null),e.createElement(Ie,null,e.createElement(B,{basename:"/"},e.createElement(Ne,null),e.createElement(Ce,null))))}const ze=({children:t})=>{const n=w(o=>o.darkTheme.darkThemeEnabled);return e.createElement(W,{theme:{theme:n?"dark":"light"}},t)};k.initialize("UA-167479267-1");G.render(e.createElement(e.StrictMode,null,e.createElement(K,{store:g},e.createElement(ze,null,e.createElement(Ve,null)))),document.getElementById("root"));function Fe({id:t,name:n,value:o}){k.ga("send","event",{eventCategory:"Web Vitals",eventAction:n,eventValue:Math.round(n==="CLS"?o*1e3:o),eventLabel:t,nonInteraction:!0})}Q(Fe);export{Qe as T,c as _,Ke as a,Je as b,Xe as c,Ue as d,tt as e,et as f,Ge as g,rt as h,nt as i,qe as j,Ye as k,Ze as l,He as m,Be as n,g as s,Oe as t};
