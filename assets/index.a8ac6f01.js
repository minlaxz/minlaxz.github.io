var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&s(e,a,t[a]);return e},i=(e,n)=>t(e,a(n));"undefined"!=typeof require&&require;import{c,r as m,a as d,b as u,t as p,s as E,R as h,u as g,L as y,S as f,d as x,e as b,f as _,H as w,g as v,F as k,h as L,i as O,j as T,P as I}from"./vendor.5935c84f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const N={},j=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in N)return;N[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},z=(e,t)=>{window.localStorage.setItem(e,JSON.stringify(t))},P=e=>{const t=window.localStorage.getItem(e);return JSON.parse(t)},S={value:0};const C={users:[],loading:!0};const A={reqState:{success:!1,statusCode:0,message:null,at:null},userState:{token:null,validated:!1,expiresIn:null}};const D={darkThemeEnabled:!1};var R=c({pointss:(e=S,t)=>{switch(t.type){case"INCREMENT":return i(o({},e),{value:e.value+t.payload});case"DECREMENT":return i(o({},e),{value:e.value-t.payload});default:return e}},user:(e=C,t)=>{switch(t.type){case"GET_USERS":return i(o({},e),{users:t.payload,loading:!1});default:return e}},authUser:(e=A,t)=>{switch(t.type){case"LOGIN/success":return i(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message},userState:{token:t.payload.data.token,expiresIn:t.payload.data.expiresIn,validated:t.payload.data.loginTime+t.payload.data.expiresIn>Date.now()}});case"LOGIN/fail":return i(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message}});case"LOGOUT/success":return o(o({},e),A);default:return e}},theme:(e=D,t)=>{switch(t.type){case"TOGGLE_DARKTHEME":return i(o({},e),{darkThemeEnabled:!e.darkThemeEnabled});default:return e}}});m.exports.createLogger();let M=d(...[p]);const V=u(R,P("minlaxz-theme")?{theme:P("minlaxz-theme")}:{},M);V.subscribe((()=>{V.getState().theme&&z("minlaxz-theme",V.getState().theme)}));const $=E.img`
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
`,G=({label:e})=>h.createElement($,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),q=h.lazy((()=>j((()=>import("./index.6159d140.js")),["assets/index.6159d140.js","assets/vendor.5935c84f.js","assets/index.96e9221d.js","assets/index.574118bd.css","assets/useFetch.482d3749.js","assets/index.2885cb15.js"]))),H=h.lazy((()=>j((()=>import("./index.f52ce5a8.js")),["assets/index.f52ce5a8.js","assets/vendor.5935c84f.js","assets/index.dd1ea109.js"]))),F=h.lazy((()=>j((()=>import("./index.5742be57.js")),["assets/index.5742be57.js","assets/index.dd1ea109.js","assets/vendor.5935c84f.js"]))),W=h.lazy((()=>j((()=>import("./index.b3f74e7f.js")),["assets/index.b3f74e7f.js","assets/vendor.5935c84f.js","assets/index.96e9221d.js","assets/index.574118bd.css","assets/index.9be9fd1b.js","assets/useFetch.482d3749.js","assets/index.2885cb15.js"]))),B=h.lazy((()=>j((()=>import("./index.852b9b5f.js")),["assets/index.852b9b5f.js","assets/vendor.5935c84f.js","assets/index.9be9fd1b.js"]))),U=h.lazy((()=>j((()=>import("./index.c18c6412.js")),["assets/index.c18c6412.js","assets/vendor.5935c84f.js","assets/index.2885cb15.js","assets/index.dd1ea109.js","assets/useFetch.482d3749.js"]))),K=h.lazy((()=>j((()=>import("./index.16df43d5.js")),["assets/index.16df43d5.js","assets/vendor.5935c84f.js","assets/index.2885cb15.js","assets/index.9be9fd1b.js"]))),J=h.lazy((()=>j((()=>import("./index.778efc58.js")),["assets/index.778efc58.js","assets/index.1e69e9fa.css","assets/vendor.5935c84f.js","assets/index.2885cb15.js","assets/index.dd1ea109.js","assets/index.9be9fd1b.js"]))),Q=h.lazy((()=>j((()=>import("./index.e6c355ab.js")),["assets/index.e6c355ab.js","assets/vendor.5935c84f.js","assets/index.dd1ea109.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.c29b3e74.js"]))),X=h.lazy((()=>j((()=>import("./index.67896db7.js")),["assets/index.67896db7.js","assets/vendor.5935c84f.js","assets/index.dd1ea109.js","assets/index.c29b3e74.js"]))),Y=h.lazy((()=>j((()=>import("./index.8138eb38.js")),["assets/index.8138eb38.js","assets/vendor.5935c84f.js","assets/index.dd1ea109.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"]))),Z=[{name:"home",r:h.createElement(q,null)},{name:"about",r:h.createElement(H,null)},{name:"other",r:h.createElement(F,null)},{name:"repos",r:h.createElement(W,null)},{name:"forhuman",r:h.createElement(B,null)},{name:"repodetail",r:h.createElement(U,null)},{name:"serverless",r:h.createElement(K,null)},{name:"shortlink",r:h.createElement(J,null)},{name:"login",r:h.createElement(Q,null)},{name:"signup",r:h.createElement(X,null)},{name:"dashboard",r:h.createElement(Y,null)}],ee=E.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,te=E.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,ae=()=>{const e=g();return h.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),h.createElement(ee,null,h.createElement(te,null,"Oops 😯! Well this is embarassing."),h.createElement("pre",null,"Not weed on this ",e.pathname),h.createElement(y,{to:"/"},"Home is safe 🤓"))},ne=e=>Z.filter((t=>t.name===e.type)).map((t=>h.createElement("div",{key:e.type},h.createElement(b.exports.Suspense,{fallback:h.createElement("div",null,"Loading ",e.type,"...")},t.r)))),re=()=>h.createElement(f,null,h.createElement(x,{exact:!0,path:"/",render:e=>h.createElement(ne,o({type:"home"},e))}),h.createElement(x,{exact:!0,path:"/about",render:e=>h.createElement(ne,o({type:"about"},e))}),h.createElement(x,{exact:!0,path:"/other",render:e=>h.createElement(ne,o({type:"other"},e))}),h.createElement(x,{exact:!0,path:"/repos",render:e=>h.createElement(ne,o({type:"repos"},e))}),h.createElement(x,{path:"/repos/:name",render:e=>h.createElement(ne,o({type:"repodetail"},e))}),h.createElement(x,{exact:!0,path:"/forhuman",render:e=>h.createElement(ne,o({type:"forhuman"},e))}),h.createElement(x,{exact:!0,path:"/serverless",render:e=>h.createElement(ne,o({type:"serverless"},e))}),h.createElement(x,{exact:!0,path:"/shortlink",render:e=>h.createElement(ne,o({type:"shortlink"},e))}),h.createElement(x,{exact:!0,path:"/login",render:e=>h.createElement(ne,o({type:"login"},e))}),h.createElement(x,{exact:!0,path:"/signup",render:e=>h.createElement(ne,o({type:"signup"},e))}),h.createElement(x,{exact:!0,path:"/dashboard",render:e=>h.createElement(ne,o({type:"dashboard"},e))}),h.createElement(x,{component:ae})),le=({cusName:e})=>h.createElement(y,{to:"/"},e||"Default Home 🏠"),se=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/repos",className:e},t||"repo list 🤓")),oe=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/other",className:e},t||"Other")),ie=({linkClass:e})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/about",className:e},"Here")," is how this went through   🤔"),ce=({linkClass:e,cusName:t})=>h.createElement(y,{to:"/forhuman",className:e},h.createElement(G,{label:t||"View Markdown"})),me=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/serverless",className:e},t||"Serverless API")),de=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/shortlink",className:e},t||"LinkShortener API")),ue=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/login",className:e},t||"Login")),pe=({linkClass:e,cusName:t})=>h.createElement("span",null,"  ",h.createElement(y,{to:"/signup",className:e},t||"Signup")),Ee=_("theme",{light:"#efefef",dark:"#292929"}),he=_("theme",{light:"#050505",dark:"#e2e2e2"});var ge=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${Ee};
    color: ${he};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;function ye(){return h.createElement(ge,null,h.createElement(w,{basename:"/"},h.createElement(re,null)))}const fe=({children:e})=>{const t=v((e=>e.theme.darkThemeEnabled));return h.createElement(k,{theme:{theme:t?"dark":"light"}},e)},xe=E.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${Ee};
    color: ${he};
`,be=E.div`
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
`,_e=E.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${he};
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,we=E.button`
    margin: 0.5rem;
    background-color: ${Ee};
    color: ${he};
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
`,ve=()=>{const e=v((e=>e.theme.darkThemeEnabled)),t=L();return h.createElement(h.Fragment,null,h.createElement(xe,null,h.createElement(be,null,h.createElement(_e,null,"not context but redux =>"),h.createElement(we,{onClick:()=>t({type:"TOGGLE_DARKTHEME"})},e?h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},h.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},h.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))))))};var ke;O.initialize("UA-167479267-1"),T.render(h.createElement(h.StrictMode,null,h.createElement(I,{store:V},h.createElement(fe,null,h.createElement(ve,null),h.createElement(ye,null)))),document.getElementById("root")),(ke=function({id:e,name:t,value:a}){console.log(e,t,a),O.ga("send","event",{eventCategory:"Web Vitals",eventAction:t,eventValue:Math.round("CLS"===t?1e3*a:a),eventLabel:e,nonInteraction:!0})})&&ke instanceof Function&&j((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:a,getLCP:n,getTTFB:r})=>{e(ke),t(ke),a(ke),n(ke),r(ke)}));export{se as T,ce as a,oe as b,me as c,de as d,ue as e,ie as f,le as g,pe as h};
