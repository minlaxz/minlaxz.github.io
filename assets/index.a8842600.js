var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&s(e,a,t[a]);return e},c=(e,n)=>t(e,a(n));"undefined"!=typeof require&&require;import{c as i,r as m,a as d,b as u,t as p,s as E,R as h,u as g,L as y,S as f,d as x,e as b,f as _,H as w,g as v,F as k,h as L,i as O,j as I,P as T}from"./vendor.5935c84f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const N={},S=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in N)return;N[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},j=(e,t)=>{window.localStorage.setItem(e,JSON.stringify(t))},z=e=>{const t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(a){return{}}},P=e=>{window.localStorage.removeItem(e)},C=e=>null!==window.localStorage.getItem(e),A={value:0};const D={users:[],loading:!0};const R={reqState:{success:!1,statusCode:0,message:null,at:null},userState:{token:null,validated:!1,expiresIn:null}};const M={darkThemeEnabled:!1};var V=i({pointss:(e=A,t)=>{switch(t.type){case"INCREMENT":return c(o({},e),{value:e.value+t.payload});case"DECREMENT":return c(o({},e),{value:e.value-t.payload});default:return e}},user:(e=D,t)=>{switch(t.type){case"GET_USERS":return c(o({},e),{users:t.payload,loading:!1});default:return e}},authUser:(e=R,t)=>{switch(t.type){case"LOGIN/success":return c(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message},userState:{token:t.payload.data.token,expiresIn:t.payload.data.expiresIn,validated:t.payload.data.loginTime+t.payload.data.expiresIn>Date.now()}});case"LOGIN/fail":return c(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message}});case"LOGOUT/success":return o(o({},e),R);default:return e}},theme:(e=M,t)=>{switch(t.type){case"TOGGLE_DARKTHEME":return c(o({},e),{darkThemeEnabled:!e.darkThemeEnabled});default:return e}}});m.exports.createLogger();const $="theme.portfolio.minlaxz";let G=d(...[p]);C("minlaxz-theme")&&P("minlaxz-theme");const q=u(V,C($)?{theme:z($)}:{},G);q.subscribe((()=>{q.getState().theme&&j($,q.getState().theme)}));const H=E.img`
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
`,F=({label:e})=>h.createElement(H,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),W=h.lazy((()=>S((()=>import("./index.7a9b53a1.js")),["assets/index.7a9b53a1.js","assets/vendor.5935c84f.js","assets/index.96e9221d.js","assets/index.574118bd.css","assets/useFetch.482d3749.js","assets/index.2885cb15.js"]))),B=h.lazy((()=>S((()=>import("./index.e76eb025.js")),["assets/index.e76eb025.js","assets/vendor.5935c84f.js","assets/index.dd1ea109.js"]))),U=h.lazy((()=>S((()=>import("./index.93902be6.js")),["assets/index.93902be6.js","assets/index.dd1ea109.js","assets/vendor.5935c84f.js"]))),K=h.lazy((()=>S((()=>import("./index.0318bf4b.js")),["assets/index.0318bf4b.js","assets/vendor.5935c84f.js","assets/index.96e9221d.js","assets/index.574118bd.css","assets/index.9be9fd1b.js","assets/useFetch.482d3749.js","assets/index.2885cb15.js"]))),J=h.lazy((()=>S((()=>import("./index.72682c00.js")),["assets/index.72682c00.js","assets/vendor.5935c84f.js","assets/index.9be9fd1b.js"]))),Q=h.lazy((()=>S((()=>import("./index.ddac0f01.js")),["assets/index.ddac0f01.js","assets/vendor.5935c84f.js","assets/index.2885cb15.js","assets/index.dd1ea109.js","assets/useFetch.482d3749.js"]))),X=h.lazy((()=>S((()=>import("./index.3e583676.js")),["assets/index.3e583676.js","assets/vendor.5935c84f.js","assets/index.2885cb15.js","assets/index.9be9fd1b.js"]))),Y=h.lazy((()=>S((()=>import("./index.eae7af5f.js")),["assets/index.eae7af5f.js","assets/index.1e69e9fa.css","assets/vendor.5935c84f.js","assets/index.2885cb15.js","assets/index.dd1ea109.js","assets/index.9be9fd1b.js"]))),Z=h.lazy((()=>S((()=>import("./index.ea203cb9.js")),["assets/index.ea203cb9.js","assets/vendor.5935c84f.js","assets/index.dd1ea109.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.c29b3e74.js"]))),ee=h.lazy((()=>S((()=>import("./index.01f036cd.js")),["assets/index.01f036cd.js","assets/vendor.5935c84f.js","assets/index.dd1ea109.js","assets/index.c29b3e74.js"]))),te=h.lazy((()=>S((()=>import("./index.2a55cadb.js")),["assets/index.2a55cadb.js","assets/vendor.5935c84f.js","assets/index.dd1ea109.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"]))),ae=[{name:"home",r:h.createElement(W,null)},{name:"about",r:h.createElement(B,null)},{name:"other",r:h.createElement(U,null)},{name:"repos",r:h.createElement(K,null)},{name:"forhuman",r:h.createElement(J,null)},{name:"repodetail",r:h.createElement(Q,null)},{name:"serverless",r:h.createElement(X,null)},{name:"shortlink",r:h.createElement(Y,null)},{name:"login",r:h.createElement(Z,null)},{name:"signup",r:h.createElement(ee,null)},{name:"dashboard",r:h.createElement(te,null)}],ne=E.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,re=E.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,le=()=>{const e=g();return h.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),h.createElement(ne,null,h.createElement(re,null,"Oops 😯! Well this is embarassing."),h.createElement("pre",null,"Not weed on this ",e.pathname),h.createElement(y,{to:"/"},"Home is safe 🤓"))},se=e=>ae.filter((t=>t.name===e.type)).map((t=>h.createElement("div",{key:e.type},h.createElement(b.exports.Suspense,{fallback:h.createElement("div",null,"Loading ",e.type,"...")},t.r)))),oe=()=>h.createElement(f,null,h.createElement(x,{exact:!0,path:"/",render:e=>h.createElement(se,o({type:"home"},e))}),h.createElement(x,{exact:!0,path:"/about",render:e=>h.createElement(se,o({type:"about"},e))}),h.createElement(x,{exact:!0,path:"/other",render:e=>h.createElement(se,o({type:"other"},e))}),h.createElement(x,{exact:!0,path:"/repos",render:e=>h.createElement(se,o({type:"repos"},e))}),h.createElement(x,{path:"/repos/:name",render:e=>h.createElement(se,o({type:"repodetail"},e))}),h.createElement(x,{exact:!0,path:"/forhuman",render:e=>h.createElement(se,o({type:"forhuman"},e))}),h.createElement(x,{exact:!0,path:"/serverless",render:e=>h.createElement(se,o({type:"serverless"},e))}),h.createElement(x,{exact:!0,path:"/shortlink",render:e=>h.createElement(se,o({type:"shortlink"},e))}),h.createElement(x,{exact:!0,path:"/login",render:e=>h.createElement(se,o({type:"login"},e))}),h.createElement(x,{exact:!0,path:"/signup",render:e=>h.createElement(se,o({type:"signup"},e))}),h.createElement(x,{exact:!0,path:"/dashboard",render:e=>h.createElement(se,o({type:"dashboard"},e))}),h.createElement(x,{component:le})),ce=({cusName:e})=>h.createElement(y,{to:"/"},e||"Default Home 🏠"),ie=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/repos",className:e},t||"repo list 🤓")),me=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/other",className:e},t||"Other")),de=({linkClass:e})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/about",className:e},"Here")," is how this went through   🤔"),ue=({linkClass:e,cusName:t})=>h.createElement(y,{to:"/forhuman",className:e},h.createElement(F,{label:t||"View Markdown"})),pe=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/serverless",className:e},t||"Serverless API")),Ee=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/shortlink",className:e},t||"LinkShortener API")),he=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/login",className:e},t||"Login")),ge=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/signup",className:e},t||"Signup")),ye=_("theme",{light:"#efefef",dark:"#292929"}),fe=_("theme",{light:"#050505",dark:"#e2e2e2"});var xe=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${ye};
    color: ${fe};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;function be(){return h.createElement(xe,null,h.createElement(w,{basename:"/"},h.createElement(oe,null)))}const _e=({children:e})=>{const t=v((e=>e.theme.darkThemeEnabled));return h.createElement(k,{theme:{theme:t?"dark":"light"}},e)},we=E.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${ye};
    color: ${fe};
`,ve=E.div`
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
`,ke=E.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${fe};
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,Le=E.button`
    margin: 0.5rem;
    background-color: ${ye};
    color: ${fe};
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
`,Oe=()=>{const e=v((e=>e.theme.darkThemeEnabled)),t=L();return h.createElement(h.Fragment,null,h.createElement(we,null,h.createElement(ve,null,h.createElement(ke,null,"not context but redux =>"),h.createElement(Le,{onClick:()=>t({type:"TOGGLE_DARKTHEME"})},e?h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},h.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},h.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))))))};var Ie;O.initialize("UA-167479267-1"),I.render(h.createElement(h.StrictMode,null,h.createElement(T,{store:q},h.createElement(_e,null,h.createElement(Oe,null),h.createElement(be,null)))),document.getElementById("root")),(Ie=function({id:e,name:t,value:a}){console.log(e,t,a),O.ga("send","event",{eventCategory:"Web Vitals",eventAction:t,eventValue:Math.round("CLS"===t?1e3*a:a),eventLabel:e,nonInteraction:!0})})&&Ie instanceof Function&&S((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:a,getLCP:n,getTTFB:r})=>{e(Ie),t(Ie),a(Ie),n(Ie),r(Ie)}));export{ie as T,ue as a,me as b,pe as c,Ee as d,he as e,de as f,ce as g,ge as h};
