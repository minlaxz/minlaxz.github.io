var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&s(e,a,t[a]);return e},c=(e,n)=>t(e,a(n));"undefined"!=typeof require&&require;import{c as i,r as m,a as d,b as u,t as p,s as h,R as E,u as g,L as y,S as f,d as x,e as _,f as b,H as w,g as v,F as k,h as L,i as T,j as O,P as I}from"./vendor.e9f8f170.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const S={},N=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in S)return;S[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},C=(e,t)=>{window.localStorage.setItem(e,JSON.stringify(t))},j=e=>{const t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(a){return{}}},z=e=>{window.localStorage.removeItem(e)},P=e=>null!==window.localStorage.getItem(e),A={value:0};const D={users:[],loading:!0};const M={reqState:{success:!1,statusCode:0,message:null,at:null},userState:{token:null,validated:!1,expiresIn:null}};const R={darkThemeEnabled:!1};const V={sha:"",error:"",loading:!0};var $=i({pointss:(e=A,t)=>{switch(t.type){case"INCREMENT":return c(o({},e),{value:e.value+t.payload});case"DECREMENT":return c(o({},e),{value:e.value-t.payload});default:return e}},user:(e=D,t)=>{switch(t.type){case"GET_USERS":return c(o({},e),{users:t.payload,loading:!1});default:return e}},authUser:(e=M,t)=>{switch(t.type){case"LOGIN/success":return c(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message},userState:{token:t.payload.data.token,expiresIn:t.payload.data.expiresIn,validated:t.payload.data.loginTime+t.payload.data.expiresIn>Date.now()}});case"LOGIN/fail":return c(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message}});case"LOGOUT/success":return o(o({},e),M);default:return e}},theme:(e=R,t)=>{switch(t.type){case"TOGGLE_DARKTHEME":return c(o({},e),{darkThemeEnabled:!e.darkThemeEnabled});default:return e}},lastCommit:(e=V,t)=>{switch(t.type){case"GET_LAST_COMMIT_SUCCESS":return c(o({},e),{sha:t.payload.sha,error:"",loading:!1});case"GET_LAST_COMMIT_FAILURE":return c(o({},e),{sha:"",error:t.payload.error,loading:!1});default:return e}}});m.exports.createLogger();const G="theme.portfolio.minlaxz";let q=d(...[p]);P("minlaxz-theme")&&z("minlaxz-theme");const F=u($,P(G)?{theme:j(G)}:{},q);F.subscribe((()=>{F.getState().theme&&C(G,F.getState().theme)}));const H=h.img`
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
`,U=({label:e})=>E.createElement(H,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),W=E.lazy((()=>N((()=>import("./index.99805c5c.js").then((function(e){return e.i}))),["assets/index.99805c5c.js","assets/vendor.e9f8f170.js","assets/index.575b4a25.js","assets/index.574118bd.css","assets/index.2885cb15.js"]))),B=E.lazy((()=>N((()=>import("./index.5a7082f2.js")),["assets/index.5a7082f2.js","assets/vendor.e9f8f170.js","assets/index.7903dbca.js"]))),K=E.lazy((()=>N((()=>import("./index.6c42931c.js")),["assets/index.6c42931c.js","assets/index.7903dbca.js","assets/vendor.e9f8f170.js"]))),J=E.lazy((()=>N((()=>import("./index.23171440.js")),["assets/index.23171440.js","assets/vendor.e9f8f170.js","assets/index.575b4a25.js","assets/index.574118bd.css","assets/index.0862d0a5.js","assets/useFetch.ac0e7297.js","assets/index.2885cb15.js"]))),Q=E.lazy((()=>N((()=>import("./index.e32d7dd9.js")),["assets/index.e32d7dd9.js","assets/vendor.e9f8f170.js","assets/index.0862d0a5.js"]))),X=E.lazy((()=>N((()=>import("./index.3c21d719.js")),["assets/index.3c21d719.js","assets/vendor.e9f8f170.js","assets/index.2885cb15.js","assets/index.7903dbca.js","assets/useFetch.ac0e7297.js"]))),Y=E.lazy((()=>N((()=>import("./index.1b80cf1e.js")),["assets/index.1b80cf1e.js","assets/vendor.e9f8f170.js","assets/index.2885cb15.js","assets/index.0862d0a5.js"]))),Z=E.lazy((()=>N((()=>import("./index.7cb55c4b.js")),["assets/index.7cb55c4b.js","assets/index.1e69e9fa.css","assets/vendor.e9f8f170.js","assets/index.2885cb15.js","assets/index.7903dbca.js","assets/index.0862d0a5.js"]))),ee=E.lazy((()=>N((()=>import("./index.90230c4e.js")),["assets/index.90230c4e.js","assets/vendor.e9f8f170.js","assets/index.7903dbca.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.2ff2116f.js"]))),te=E.lazy((()=>N((()=>import("./index.9ab97c12.js")),["assets/index.9ab97c12.js","assets/vendor.e9f8f170.js","assets/index.7903dbca.js","assets/index.2ff2116f.js"]))),ae=E.lazy((()=>N((()=>import("./index.9d3f7999.js")),["assets/index.9d3f7999.js","assets/vendor.e9f8f170.js","assets/index.7903dbca.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"]))),ne=[{name:"home",r:E.createElement(W,null)},{name:"about",r:E.createElement(B,null)},{name:"other",r:E.createElement(K,null)},{name:"repos",r:E.createElement(J,null)},{name:"forhuman",r:E.createElement(Q,null)},{name:"repodetail",r:E.createElement(X,null)},{name:"serverless",r:E.createElement(Y,null)},{name:"shortlink",r:E.createElement(Z,null)},{name:"login",r:E.createElement(ee,null)},{name:"signup",r:E.createElement(te,null)},{name:"dashboard",r:E.createElement(ae,null)}],re=h.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,le=h.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,se=()=>{const e=g();return E.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),E.createElement(re,null,E.createElement(le,null,"Oops 😯! Well this is embarassing."),E.createElement("pre",null,"Not weed on this ",e.pathname),E.createElement(y,{to:"/"},"Home is safe 🤓"))},oe=e=>ne.filter((t=>t.name===e.type)).map((t=>E.createElement("div",{key:e.type},E.createElement(_.exports.Suspense,{fallback:E.createElement("div",null,"Loading ",e.type,"...")},t.r)))),ce=()=>E.createElement(f,null,E.createElement(x,{exact:!0,path:"/",render:e=>E.createElement(oe,o({type:"home"},e))}),E.createElement(x,{exact:!0,path:"/about",render:e=>E.createElement(oe,o({type:"about"},e))}),E.createElement(x,{exact:!0,path:"/other",render:e=>E.createElement(oe,o({type:"other"},e))}),E.createElement(x,{exact:!0,path:"/repos",render:e=>E.createElement(oe,o({type:"repos"},e))}),E.createElement(x,{path:"/repos/:name",render:e=>E.createElement(oe,o({type:"repodetail"},e))}),E.createElement(x,{exact:!0,path:"/forhuman",render:e=>E.createElement(oe,o({type:"forhuman"},e))}),E.createElement(x,{exact:!0,path:"/serverless",render:e=>E.createElement(oe,o({type:"serverless"},e))}),E.createElement(x,{exact:!0,path:"/shortlink",render:e=>E.createElement(oe,o({type:"shortlink"},e))}),E.createElement(x,{exact:!0,path:"/login",render:e=>E.createElement(oe,o({type:"login"},e))}),E.createElement(x,{exact:!0,path:"/signup",render:e=>E.createElement(oe,o({type:"signup"},e))}),E.createElement(x,{exact:!0,path:"/dashboard",render:e=>E.createElement(oe,o({type:"dashboard"},e))}),E.createElement(x,{component:se})),ie=({cusName:e})=>E.createElement(y,{to:"/"},e||"Default Home 🏠"),me=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/repos",className:e},t||"repo list 🤓")),de=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/other",className:e},t||"Other")),ue=({linkClass:e})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/about",className:e},"Here")," is how this went through   🤔"),pe=({linkClass:e,cusName:t})=>E.createElement(y,{to:"/forhuman",className:e},E.createElement(U,{label:t||"View Markdown"})),he=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/serverless",className:e},t||"Serverless API")),Ee=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/shortlink",className:e},t||"LinkShortener API")),ge=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/login",className:e},t||"Login")),ye=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/signup",className:e},t||"Signup")),fe=b("theme",{light:"#efefef",dark:"#292929"}),xe=b("theme",{light:"#050505",dark:"#e2e2e2"});var _e=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${fe};
    color: ${xe};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;function be(){return E.createElement(_e,null,E.createElement(w,{basename:"/"},E.createElement(ce,null)))}const we=({children:e})=>{const t=v((e=>e.theme.darkThemeEnabled));return E.createElement(k,{theme:{theme:t?"dark":"light"}},e)},ve=h.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${fe};
    color: ${xe};
`,ke=h.div`
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
`,Le=h.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${xe};
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,Te=h.button`
    margin: 0.5rem;
    background-color: ${fe};
    color: ${xe};
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
`,Oe=()=>{const e=v((e=>e.theme.darkThemeEnabled)),t=L();return E.createElement(E.Fragment,null,E.createElement(ve,null,E.createElement(ke,null,E.createElement(Le,null,"not context but redux =>"),E.createElement(Te,{onClick:()=>t({type:"TOGGLE_DARKTHEME"})},e?E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))))))};var Ie;T.initialize("UA-167479267-1"),O.render(E.createElement(E.StrictMode,null,E.createElement(I,{store:F},E.createElement(we,null,E.createElement(Oe,null),E.createElement(be,null)))),document.getElementById("root")),(Ie=function({id:e,name:t,value:a}){console.log(e,t,a),T.ga("send","event",{eventCategory:"Web Vitals",eventAction:t,eventValue:Math.round("CLS"===t?1e3*a:a),eventLabel:e,nonInteraction:!0})})&&Ie instanceof Function&&N((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:a,getLCP:n,getTTFB:r})=>{e(Ie),t(Ie),a(Ie),n(Ie),r(Ie)}));export{ue as T,N as _,ie as a,pe as b,me as c,ye as d,ge as e,de as f,he as g,Ee as h};
