var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&s(e,a,t[a]);return e},i=(e,n)=>t(e,a(n));"undefined"!=typeof require&&require;import{c,a as m,r as d,b as u,t as p,s as h,R as E,u as g,L as y,S as f,d as x,e as b,f as w,H as _,g as v,F as k,h as L,i as T,T as S,j as O,k as I,l as C,P as N}from"./vendor.f214a426.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const j={},P=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in j)return;j[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},z=(e,t)=>{window.localStorage.setItem(e,JSON.stringify(t))},A=e=>{const t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(a){return{}}},D=e=>{window.localStorage.removeItem(e)},R=e=>null!==window.localStorage.getItem(e),V={value:0};const M={users:[],loading:!0};const $={reqState:{success:!1,statusCode:0,message:null,at:null},userState:{token:null,validated:!1,expiresIn:null}};const F=c({name:"counter",initialState:{value:0},reducers:{increase:e=>{e.value+=1},decrease:e=>{e.value-=1},increaseByAmount:(e,t)=>{e.value+=t.payload}}}),{increase:q,decrease:B,increaseByAmount:H}=F.actions;var W=F.reducer;const G=c({name:"lastCommit",initialState:{sha:"",error:"",loading:!0},reducers:{getLastCommitSuccess:(e,t)=>{e.loading=!1,e.error="",e.sha=t.payload.sha},getLastCommitFailure:(e,t)=>{e.loading=!1,e.error=t.payload.error,e.sha=""}}}),{getLastCommitSuccess:U,getLastCommitFailure:J}=G.actions;var K=G.reducer;const Q=c({name:"theme",initialState:{darkThemeEnabled:!1},reducers:{toggleTheme:e=>{e.darkThemeEnabled=!e.darkThemeEnabled}}}),{toggleTheme:X}=Q.actions;var Y=m({lastCommit:K,counter:W,pointss:(e=V,t)=>{switch(t.type){case"INCREMENT":return i(o({},e),{value:e.value+t.payload});case"DECREMENT":return i(o({},e),{value:e.value-t.payload});default:return e}},user:(e=M,t)=>{switch(t.type){case"GET_USERS":return i(o({},e),{users:t.payload,loading:!1});default:return e}},authUser:(e=$,t)=>{switch(t.type){case"LOGIN/success":return i(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message},userState:{token:t.payload.data.token,expiresIn:t.payload.data.expiresIn,validated:t.payload.data.loginTime+t.payload.data.expiresIn>Date.now()}});case"LOGIN/fail":return i(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message}});case"LOGOUT/success":return o(o({},e),$);default:return e}},darkTheme:Q.reducer});d.exports.createLogger();const Z="theme.portfolio.minlaxz";R("minlaxz-theme")&&D("minlaxz-theme");const ee=[p],te=u({reducer:Y,preloadedState:R(Z)?{darkTheme:A(Z)}:{},devTools:!1,middleware:e=>e().concat(ee)});te.subscribe((()=>{te.getState().darkTheme&&z(Z,te.getState().darkTheme)}));const ae=h.img`
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
`,ne=({label:e})=>E.createElement(ae,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),re=E.lazy((()=>P((()=>import("./index.8cb01367.js").then((function(e){return e.i}))),["assets/index.8cb01367.js","assets/vendor.f214a426.js","assets/index.401f627a.js","assets/index.574118bd.css","assets/index.2885cb15.js"]))),le=E.lazy((()=>P((()=>import("./index.0d41e616.js")),["assets/index.0d41e616.js","assets/vendor.f214a426.js","assets/index.5acbc961.js"]))),se=E.lazy((()=>P((()=>import("./index.76e52847.js")),["assets/index.76e52847.js","assets/index.5acbc961.js","assets/vendor.f214a426.js"]))),oe=E.lazy((()=>P((()=>import("./index.0ecc6fdf.js")),["assets/index.0ecc6fdf.js","assets/vendor.f214a426.js","assets/index.401f627a.js","assets/index.574118bd.css","assets/index.671f4096.js","assets/useFetch.61110a60.js","assets/index.2885cb15.js"]))),ie=E.lazy((()=>P((()=>import("./index.6cb38e55.js")),["assets/index.6cb38e55.js","assets/vendor.f214a426.js","assets/index.671f4096.js"]))),ce=E.lazy((()=>P((()=>import("./index.4696a25d.js")),["assets/index.4696a25d.js","assets/vendor.f214a426.js","assets/index.2885cb15.js","assets/index.5acbc961.js","assets/useFetch.61110a60.js"]))),me=E.lazy((()=>P((()=>import("./index.06ebebe1.js")),["assets/index.06ebebe1.js","assets/vendor.f214a426.js","assets/index.2885cb15.js","assets/index.671f4096.js"]))),de=E.lazy((()=>P((()=>import("./index.bfa4f6d6.js")),["assets/index.bfa4f6d6.js","assets/index.1e69e9fa.css","assets/vendor.f214a426.js","assets/index.2885cb15.js","assets/index.5acbc961.js","assets/index.671f4096.js"]))),ue=E.lazy((()=>P((()=>import("./index.bcf106f7.js")),["assets/index.bcf106f7.js","assets/vendor.f214a426.js","assets/index.5acbc961.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.9b2503d0.js"]))),pe=E.lazy((()=>P((()=>import("./index.1875ca01.js")),["assets/index.1875ca01.js","assets/vendor.f214a426.js","assets/index.5acbc961.js","assets/index.9b2503d0.js"]))),he=E.lazy((()=>P((()=>import("./index.eac3712b.js")),["assets/index.eac3712b.js","assets/vendor.f214a426.js","assets/index.5acbc961.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"]))),Ee=[{name:"home",r:E.createElement(re,null)},{name:"about",r:E.createElement(le,null)},{name:"other",r:E.createElement(se,null)},{name:"repos",r:E.createElement(oe,null)},{name:"forhuman",r:E.createElement(ie,null)},{name:"repodetail",r:E.createElement(ce,null)},{name:"serverless",r:E.createElement(me,null)},{name:"shortlink",r:E.createElement(de,null)},{name:"login",r:E.createElement(ue,null)},{name:"signup",r:E.createElement(pe,null)},{name:"dashboard",r:E.createElement(he,null)}],ge=h.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,ye=h.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,fe=()=>{const e=g();return E.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),E.createElement(ge,null,E.createElement(ye,null,"Oops 😯! Well this is embarassing."),E.createElement("pre",null,"Not weed on this ",e.pathname),E.createElement(y,{to:"/"},"Home is safe 🤓"))},xe=e=>Ee.filter((t=>t.name===e.type)).map((t=>E.createElement("div",{key:e.type},E.createElement(b.exports.Suspense,{fallback:E.createElement("div",null,"Loading ",e.type,"...")},t.r)))),be=()=>E.createElement(f,null,E.createElement(x,{exact:!0,path:"/",render:e=>E.createElement(xe,o({type:"home"},e))}),E.createElement(x,{exact:!0,path:"/about",render:e=>E.createElement(xe,o({type:"about"},e))}),E.createElement(x,{exact:!0,path:"/other",render:e=>E.createElement(xe,o({type:"other"},e))}),E.createElement(x,{exact:!0,path:"/repos",render:e=>E.createElement(xe,o({type:"repos"},e))}),E.createElement(x,{path:"/repos/:name",render:e=>E.createElement(xe,o({type:"repodetail"},e))}),E.createElement(x,{exact:!0,path:"/forhuman",render:e=>E.createElement(xe,o({type:"forhuman"},e))}),E.createElement(x,{exact:!0,path:"/serverless",render:e=>E.createElement(xe,o({type:"serverless"},e))}),E.createElement(x,{exact:!0,path:"/shortlink",render:e=>E.createElement(xe,o({type:"shortlink"},e))}),E.createElement(x,{exact:!0,path:"/login",render:e=>E.createElement(xe,o({type:"login"},e))}),E.createElement(x,{exact:!0,path:"/signup",render:e=>E.createElement(xe,o({type:"signup"},e))}),E.createElement(x,{exact:!0,path:"/dashboard",render:e=>E.createElement(xe,o({type:"dashboard"},e))}),E.createElement(x,{component:fe})),we=({cusName:e})=>E.createElement(y,{to:"/"},e||"Default Home 🏠"),_e=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/repos",className:e},t||"repo list 🤓")),ve=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/other",className:e},t||"Other")),ke=({linkClass:e})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/about",className:e},"Here")," is how this went through   🤔"),Le=({linkClass:e,cusName:t})=>E.createElement(y,{to:"/forhuman",className:e},E.createElement(ne,{label:t||"View Markdown"})),Te=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/serverless",className:e},t||"Serverless API")),Se=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/shortlink",className:e},t||"LinkShortener API")),Oe=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/login",className:e},t||"Login")),Ie=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/signup",className:e},t||"Signup")),Ce=w("theme",{light:"#efefef",dark:"#292929"}),Ne=w("theme",{light:"#050505",dark:"#e2e2e2"});var je=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${Ce};
    color: ${Ne};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;function Pe(){return E.createElement(je,null,E.createElement(_,{basename:"/"},E.createElement(be,null)))}const ze=({children:e})=>{const t=v((e=>e.darkTheme.darkThemeEnabled));return E.createElement(k,{theme:{theme:t?"dark":"light"}},e)},Ae=h.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${Ce};
    color: ${Ne};
`,De=h.div`
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
`,Re=h.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${Ne};
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,Ve=h.button`
    margin: 0.5rem;
    background-color: ${Ce};
    color: ${Ne};
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
`,Me=()=>{const e=v((e=>e.darkTheme.darkThemeEnabled)),t=L();return E.createElement(E.Fragment,null,E.createElement(Ae,null,E.createElement(De,null,E.createElement(Re,null,"not context but redux =>"),E.createElement(Ve,{onClick:()=>{t(X()),T(e?"Switched to light mode 🤖.":"Switched to dark mode 👻.",{icon:"🔄",theme:e?"dark":"light"})}},e?E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))))))};const $e=()=>{let e=function(e){const[t,a]=b.exports.useState(!1);return b.exports.useEffect((()=>{const n=window.matchMedia(e);n.matches!==t&&a(n.matches);const r=()=>{a(n.matches)};return n.addListener(r),()=>n.removeListener(r)}),[t,e]),t}("(min-width: 800px)");return E.createElement(S,{position:e?"bottom-right":"bottom-center",limit:3,autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,transition:O,toastStyle:{margin:"10px 10px"}})};var Fe;I.initialize("UA-167479267-1"),C.render(E.createElement(E.StrictMode,null,E.createElement(N,{store:te},E.createElement(ze,null,E.createElement(Me,null),E.createElement($e,null),E.createElement(Pe,null)))),document.getElementById("root")),(Fe=function({id:e,name:t,value:a}){console.log(e,t,a),I.ga("send","event",{eventCategory:"Web Vitals",eventAction:t,eventValue:Math.round("CLS"===t?1e3*a:a),eventLabel:e,nonInteraction:!0})})&&Fe instanceof Function&&P((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:a,getLCP:n,getTTFB:r})=>{e(Fe),t(Fe),a(Fe),n(Fe),r(Fe)}));export{ke as T,P as _,J as a,we as b,Le as c,_e as d,Ie as e,Oe as f,U as g,ve as h,Te as i,Se as j,q as k,B as l,te as s};
