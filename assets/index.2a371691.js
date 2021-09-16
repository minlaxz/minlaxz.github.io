var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&s(e,a,t[a]);return e},c=(e,r)=>t(e,a(r));"undefined"!=typeof require&&require;import{s as i,R as m,u as d,L as u,S as p,a as E,r as h,H as g,c as f,b as y,d as x,e as b,t as _,f as w,g as v,P as k}from"./vendor.f7ee82cf.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const L=i.img`
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
`,O=({label:e})=>m.createElement(L,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),I={},N=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in I)return;I[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},C=m.lazy((()=>N((()=>import("./index.c15ff5c1.js")),["assets/index.c15ff5c1.js","assets/vendor.f7ee82cf.js","assets/index.9bb169c2.js","assets/index.574118bd.css","assets/index.2885cb15.js"]))),P=m.lazy((()=>N((()=>import("./index.2a4a0344.js")),["assets/index.2a4a0344.js","assets/vendor.f7ee82cf.js","assets/index.3d3b6559.js"]))),T=m.lazy((()=>N((()=>import("./index.bb184abb.js")),["assets/index.bb184abb.js","assets/index.3d3b6559.js","assets/vendor.f7ee82cf.js"]))),j=m.lazy((()=>N((()=>import("./index.fb6b00d4.js")),["assets/index.fb6b00d4.js","assets/vendor.f7ee82cf.js","assets/index.2885cb15.js","assets/index.9bb169c2.js","assets/index.574118bd.css","assets/index.f26576d2.js"]))),z=m.lazy((()=>N((()=>import("./index.abd89b0f.js")),["assets/index.abd89b0f.js","assets/vendor.f7ee82cf.js","assets/index.f26576d2.js"]))),S=m.lazy((()=>N((()=>import("./index.ecf69371.js")),["assets/index.ecf69371.js","assets/vendor.f7ee82cf.js","assets/index.2885cb15.js","assets/index.3d3b6559.js"]))),A=m.lazy((()=>N((()=>import("./index.22084b3e.js")),["assets/index.22084b3e.js","assets/vendor.f7ee82cf.js","assets/index.2885cb15.js","assets/index.f26576d2.js"]))),D=m.lazy((()=>N((()=>import("./index.5a1ffc75.js")),["assets/index.5a1ffc75.js","assets/index.1e69e9fa.css","assets/vendor.f7ee82cf.js","assets/index.2885cb15.js","assets/index.3d3b6559.js","assets/index.f26576d2.js"]))),R=m.lazy((()=>N((()=>import("./index.c4e62fd7.js")),["assets/index.c4e62fd7.js","assets/vendor.f7ee82cf.js","assets/index.3d3b6559.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.dd59dc64.js"]))),M=m.lazy((()=>N((()=>import("./index.046bc66e.js")),["assets/index.046bc66e.js","assets/vendor.f7ee82cf.js","assets/index.3d3b6559.js","assets/index.dd59dc64.js"]))),V=m.lazy((()=>N((()=>import("./index.6996d57b.js")),["assets/index.6996d57b.js","assets/vendor.f7ee82cf.js","assets/index.3d3b6559.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"]))),q=[{name:"home",r:m.createElement(C,null)},{name:"about",r:m.createElement(P,null)},{name:"other",r:m.createElement(T,null)},{name:"repos",r:m.createElement(j,null)},{name:"forhuman",r:m.createElement(z,null)},{name:"repodetail",r:m.createElement(S,null)},{name:"serverless",r:m.createElement(A,null)},{name:"shortlink",r:m.createElement(D,null)},{name:"login",r:m.createElement(R,null)},{name:"signup",r:m.createElement(M,null)},{name:"dashboard",r:m.createElement(V,null)}],H=i.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,W=i.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,B=()=>{const e=d();return m.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),m.createElement(H,null,m.createElement(W,null,"Oops 😯! Well this is embarassing."),m.createElement("pre",null,"Not weed on this ",e.pathname),m.createElement(u,{to:"/"},"Home is safe 🤓"))},F=e=>q.filter((t=>t.name===e.type)).map((t=>m.createElement("div",{key:e.type},m.createElement(h.exports.Suspense,{fallback:m.createElement("div",null,"Loading ",e.type,"...")},t.r)))),G=()=>m.createElement(p,null,m.createElement(E,{exact:!0,path:"/",render:e=>m.createElement(F,o({type:"home"},e))}),m.createElement(E,{exact:!0,path:"/about",render:e=>m.createElement(F,o({type:"about"},e))}),m.createElement(E,{exact:!0,path:"/other",render:e=>m.createElement(F,o({type:"other"},e))}),m.createElement(E,{exact:!0,path:"/repos",render:e=>m.createElement(F,o({type:"repos"},e))}),m.createElement(E,{path:"/repos/:name",render:e=>m.createElement(F,o({type:"repodetail"},e))}),m.createElement(E,{exact:!0,path:"/forhuman",render:e=>m.createElement(F,o({type:"forhuman"},e))}),m.createElement(E,{exact:!0,path:"/serverless",render:e=>m.createElement(F,o({type:"serverless"},e))}),m.createElement(E,{exact:!0,path:"/shortlink",render:e=>m.createElement(F,o({type:"shortlink"},e))}),m.createElement(E,{exact:!0,path:"/login",render:e=>m.createElement(F,o({type:"login"},e))}),m.createElement(E,{exact:!0,path:"/signup",render:e=>m.createElement(F,o({type:"signup"},e))}),m.createElement(E,{exact:!0,path:"/dashboard",render:e=>m.createElement(F,o({type:"dashboard"},e))}),m.createElement(E,{component:B})),U=({cusName:e})=>m.createElement(u,{to:"/"},e||"Default Home 🏠"),$=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/repos",className:e},t||"repo list 🤓")),K=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/other",className:e},t||"Other")),J=({linkClass:e})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/about",className:e},"Here")," is how this went through   🤔"),Q=({linkClass:e,cusName:t})=>m.createElement(u,{to:"/forhuman",className:e},m.createElement(O,{label:t||"View Markdown"})),X=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/serverless",className:e},t||"Serverless API")),Y=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/shortlink",className:e},t||"LinkShortener API")),Z=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/login",className:e},t||"Login")),ee=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/signup",className:e},t||"Signup"));function te(){return m.createElement("div",{className:"App"},m.createElement(g,{basename:"/"},m.createElement(G,null)))}const ae={value:0};const re={users:[],loading:!0};const ne={reqState:{success:!1,statusCode:0,message:null,at:null},userState:{token:null,validated:!1,expiresIn:null}};var le=f({pointss:(e=ae,t)=>{switch(t.type){case"INCREMENT":return c(o({},e),{value:e.value+t.payload});case"DECREMENT":return c(o({},e),{value:e.value-t.payload});default:return e}},user:(e=re,t)=>{switch(t.type){case"GET_USERS":return c(o({},e),{users:t.payload,loading:!1});default:return e}},authUser:(e=ne,t)=>{switch(t.type){case"LOGIN/success":return c(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message},userState:{token:t.payload.data.token,expiresIn:t.payload.data.expiresIn,validated:t.payload.data.loginTime+t.payload.data.expiresIn>Date.now()}});case"LOGIN/fail":return c(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message}});case"LOGOUT/success":return o(o({},e),ne);default:return e}}});y.exports.createLogger();const se=b(le,{},x(...[_])),oe=()=>{if("undefined"!=typeof window&&window.localStorage){const e=window.localStorage.getItem("minlaxz-theme");if("string"==typeof e)return e;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"},ce=h.exports.createContext(),ie=({initialTheme:e,children:t})=>{const[a,r]=h.exports.useState(oe),n=e=>{const t=window.document.documentElement,a="dark"===e;t.classList.remove(a?"light":"dark"),t.classList.add(e),localStorage.setItem("minlaxz-theme",e)};return e&&n(e),h.exports.useEffect((()=>{n(a)}),[a]),m.createElement(ce.Provider,{value:{theme:a,setTheme:r}},t)},me=i.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: var(--background-color);
    color: var(--color);
`,de=i.div`
/* I dont need bg color or color cuz mainconatiner set it */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
    max-width: 80%;
    padding: 0 10px;
    user-select: none;
    @media only screen and (max-width: 768px) {
        max-width: 90%;
    }
`,ue=i.span`
    font-size: 0.8em;
    font-weight: bold;
    color: var(--color);
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,pe=i.button`
    margin: 0.5rem;
    background-color: var(--background-color);
    color: var(--color);
    border-radius: 10%;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
    &:active {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.6);
    }
`,Ee=()=>{const{theme:e,setTheme:t}=h.exports.useContext(ce);return m.createElement(me,null,m.createElement(de,null,m.createElement(ue,null,"Custom Dark Mode =>"),m.createElement(pe,{onClick:()=>t("dark"===e?"light":"dark")},"dark"===e?m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})))))};var he;w.initialize("UA-167479267-1"),v.render(m.createElement(m.StrictMode,null,m.createElement(k,{store:se},m.createElement(ie,null,m.createElement(Ee,null),m.createElement(te,null)))),document.getElementById("root")),(he=function({id:e,name:t,value:a}){console.log(e,t,a),w.ga("send","event",{eventCategory:"Web Vitals",eventAction:t,eventValue:Math.round("CLS"===t?1e3*a:a),eventLabel:e,nonInteraction:!0})})&&he instanceof Function&&N((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:a,getLCP:r,getTTFB:n})=>{e(he),t(he),a(he),r(he),n(he)}));export{$ as T,Q as a,K as b,X as c,Y as d,Z as e,J as f,U as g,ee as h};
