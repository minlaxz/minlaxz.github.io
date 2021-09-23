var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&s(e,a,t[a]);return e},c=(e,n)=>t(e,a(n));"undefined"!=typeof require&&require;import{s as i,R as m,u as d,L as u,S as p,a as h,r as E,H as g,c as y,b as f,d as x,e as w,t as _,f as v,g as b,P as k}from"./vendor.f7ee82cf.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const L=i.img`
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
`,I=({label:e})=>m.createElement(L,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),O={},N=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in O)return;O[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},C=m.lazy((()=>N((()=>import("./index.6a743d74.js")),["assets/index.6a743d74.js","assets/vendor.f7ee82cf.js","assets/index.9bb169c2.js","assets/index.574118bd.css","assets/useFetch.c83ac6f2.js","assets/index.2885cb15.js"]))),P=m.lazy((()=>N((()=>import("./index.929b7c06.js")),["assets/index.929b7c06.js","assets/vendor.f7ee82cf.js","assets/index.3d3b6559.js"]))),z=m.lazy((()=>N((()=>import("./index.242e9778.js")),["assets/index.242e9778.js","assets/index.3d3b6559.js","assets/vendor.f7ee82cf.js"]))),T=m.lazy((()=>N((()=>import("./index.10a0f468.js")),["assets/index.10a0f468.js","assets/vendor.f7ee82cf.js","assets/index.9bb169c2.js","assets/index.574118bd.css","assets/index.f26576d2.js","assets/useFetch.c83ac6f2.js","assets/index.2885cb15.js"]))),j=m.lazy((()=>N((()=>import("./index.cafafda1.js")),["assets/index.cafafda1.js","assets/vendor.f7ee82cf.js","assets/index.f26576d2.js"]))),S=m.lazy((()=>N((()=>import("./index.d2e845a2.js")),["assets/index.d2e845a2.js","assets/vendor.f7ee82cf.js","assets/index.2885cb15.js","assets/index.3d3b6559.js","assets/useFetch.c83ac6f2.js"]))),A=m.lazy((()=>N((()=>import("./index.7b435f17.js")),["assets/index.7b435f17.js","assets/vendor.f7ee82cf.js","assets/index.2885cb15.js","assets/index.f26576d2.js"]))),D=m.lazy((()=>N((()=>import("./index.4eeceea7.js")),["assets/index.4eeceea7.js","assets/index.1e69e9fa.css","assets/vendor.f7ee82cf.js","assets/index.2885cb15.js","assets/index.3d3b6559.js","assets/index.f26576d2.js"]))),R=m.lazy((()=>N((()=>import("./index.be380062.js")),["assets/index.be380062.js","assets/vendor.f7ee82cf.js","assets/index.3d3b6559.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.dd59dc64.js"]))),M=m.lazy((()=>N((()=>import("./index.4c30e528.js")),["assets/index.4c30e528.js","assets/vendor.f7ee82cf.js","assets/index.3d3b6559.js","assets/index.dd59dc64.js"]))),V=m.lazy((()=>N((()=>import("./index.b0e0a1ae.js")),["assets/index.b0e0a1ae.js","assets/vendor.f7ee82cf.js","assets/index.3d3b6559.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"]))),q=[{name:"home",r:m.createElement(C,null)},{name:"about",r:m.createElement(P,null)},{name:"other",r:m.createElement(z,null)},{name:"repos",r:m.createElement(T,null)},{name:"forhuman",r:m.createElement(j,null)},{name:"repodetail",r:m.createElement(S,null)},{name:"serverless",r:m.createElement(A,null)},{name:"shortlink",r:m.createElement(D,null)},{name:"login",r:m.createElement(R,null)},{name:"signup",r:m.createElement(M,null)},{name:"dashboard",r:m.createElement(V,null)}],H=i.div`
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
`,B=()=>{const e=d();return m.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),m.createElement(H,null,m.createElement(W,null,"Oops 😯! Well this is embarassing."),m.createElement("pre",null,"Not weed on this ",e.pathname),m.createElement(u,{to:"/"},"Home is safe 🤓"))},F=e=>q.filter((t=>t.name===e.type)).map((t=>m.createElement("div",{key:e.type},m.createElement(E.exports.Suspense,{fallback:m.createElement("div",null,"Loading ",e.type,"...")},t.r)))),G=()=>m.createElement(p,null,m.createElement(h,{exact:!0,path:"/",render:e=>m.createElement(F,o({type:"home"},e))}),m.createElement(h,{exact:!0,path:"/about",render:e=>m.createElement(F,o({type:"about"},e))}),m.createElement(h,{exact:!0,path:"/other",render:e=>m.createElement(F,o({type:"other"},e))}),m.createElement(h,{exact:!0,path:"/repos",render:e=>m.createElement(F,o({type:"repos"},e))}),m.createElement(h,{path:"/repos/:name",render:e=>m.createElement(F,o({type:"repodetail"},e))}),m.createElement(h,{exact:!0,path:"/forhuman",render:e=>m.createElement(F,o({type:"forhuman"},e))}),m.createElement(h,{exact:!0,path:"/serverless",render:e=>m.createElement(F,o({type:"serverless"},e))}),m.createElement(h,{exact:!0,path:"/shortlink",render:e=>m.createElement(F,o({type:"shortlink"},e))}),m.createElement(h,{exact:!0,path:"/login",render:e=>m.createElement(F,o({type:"login"},e))}),m.createElement(h,{exact:!0,path:"/signup",render:e=>m.createElement(F,o({type:"signup"},e))}),m.createElement(h,{exact:!0,path:"/dashboard",render:e=>m.createElement(F,o({type:"dashboard"},e))}),m.createElement(h,{component:B})),U=({cusName:e})=>m.createElement(u,{to:"/"},e||"Default Home 🏠"),$=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/repos",className:e},t||"repo list 🤓")),K=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/other",className:e},t||"Other")),J=({linkClass:e})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/about",className:e},"Here")," is how this went through   🤔"),Q=({linkClass:e,cusName:t})=>m.createElement(u,{to:"/forhuman",className:e},m.createElement(I,{label:t||"View Markdown"})),X=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/serverless",className:e},t||"Serverless API")),Y=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/shortlink",className:e},t||"LinkShortener API")),Z=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/login",className:e},t||"Login")),ee=({linkClass:e,cusName:t})=>m.createElement("span",null,"  ",m.createElement(u,{to:"/signup",className:e},t||"Signup"));function te(){return m.createElement("div",{className:"App"},m.createElement(g,{basename:"/"},m.createElement(G,null)))}const ae=e=>window.localStorage.getItem(e),ne={value:0};const re={users:[],loading:!0};const le={reqState:{success:!1,statusCode:0,message:null,at:null},userState:{token:null,validated:!1,expiresIn:null}};var se=y({pointss:(e=ne,t)=>{switch(t.type){case"INCREMENT":return c(o({},e),{value:e.value+t.payload});case"DECREMENT":return c(o({},e),{value:e.value-t.payload});default:return e}},user:(e=re,t)=>{switch(t.type){case"GET_USERS":return c(o({},e),{users:t.payload,loading:!1});default:return e}},authUser:(e=le,t)=>{switch(t.type){case"LOGIN/success":return c(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message},userState:{token:t.payload.data.token,expiresIn:t.payload.data.expiresIn,validated:t.payload.data.loginTime+t.payload.data.expiresIn>Date.now()}});case"LOGIN/fail":return c(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message}});case"LOGOUT/success":return o(o({},e),le);default:return e}},theme:(e="light")=>e});f.exports.createLogger();let oe=x(...[_]);const ce=w(se,ae("minlaxz-theme")?{theme:ae("minlaxz-theme")}:{},oe),ie=()=>{if("undefined"!=typeof window&&window.localStorage){const e=window.localStorage.getItem("minlaxz-theme");if("string"==typeof e)return e;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"},me=E.exports.createContext(),de=({initialTheme:e,children:t})=>{const[a,n]=E.exports.useState(ie),r=e=>{const t=window.document.documentElement,a="dark"===e;t.classList.remove(a?"light":"dark"),t.classList.add(e),localStorage.setItem("minlaxz-theme",e)};return e&&r(e),E.exports.useEffect((()=>{r(a)}),[a]),m.createElement(me.Provider,{value:{theme:a,setTheme:n}},t)},ue=i.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: var(--background-color);
    color: var(--color);
`,pe=i.div`
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
`,he=i.span`
    font-size: 0.8em;
    font-weight: bold;
    color: var(--color);
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,Ee=i.button`
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
`,ge=()=>{const{theme:e,setTheme:t}=E.exports.useContext(me);return m.createElement(ue,null,m.createElement(pe,null,m.createElement(he,null,"Custom Dark Mode =>"),m.createElement(Ee,{onClick:()=>t("dark"===e?"light":"dark")},"dark"===e?m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})))))};var ye;v.initialize("UA-167479267-1"),b.render(m.createElement(m.StrictMode,null,m.createElement(k,{store:ce},m.createElement(de,null,m.createElement(ge,null),m.createElement(te,null)))),document.getElementById("root")),(ye=function({id:e,name:t,value:a}){console.log(e,t,a),v.ga("send","event",{eventCategory:"Web Vitals",eventAction:t,eventValue:Math.round("CLS"===t?1e3*a:a),eventLabel:e,nonInteraction:!0})})&&ye instanceof Function&&N((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:a,getLCP:n,getTTFB:r})=>{e(ye),t(ye),a(ye),n(ye),r(ye)}));export{$ as T,Q as a,K as b,X as c,Y as d,Z as e,J as f,U as g,ee as h};
