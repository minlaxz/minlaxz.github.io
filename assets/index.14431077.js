var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&s(e,a,t[a]);return e},i=(e,n)=>t(e,a(n));"undefined"!=typeof require&&require;import{c,r as m,a as d,b as u,t as p,s as h,R as E,u as g,L as y,S as f,d as x,e as _,f as b,H as w,g as k,F as v,h as L,i as T,j as O,k as I,P as S,T as C,l as N}from"./vendor.7f3b8c1d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const P={},j=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in P)return;P[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},z=(e,t)=>{window.localStorage.setItem(e,JSON.stringify(t))},A=e=>{const t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(a){return{}}},D=e=>{window.localStorage.removeItem(e)},M=e=>null!==window.localStorage.getItem(e),R={value:0};const V={users:[],loading:!0};const $={reqState:{success:!1,statusCode:0,message:null,at:null},userState:{token:null,validated:!1,expiresIn:null}};const G={darkThemeEnabled:!1};const q={sha:"",error:"",loading:!0};var F=c({pointss:(e=R,t)=>{switch(t.type){case"INCREMENT":return i(o({},e),{value:e.value+t.payload});case"DECREMENT":return i(o({},e),{value:e.value-t.payload});default:return e}},user:(e=V,t)=>{switch(t.type){case"GET_USERS":return i(o({},e),{users:t.payload,loading:!1});default:return e}},authUser:(e=$,t)=>{switch(t.type){case"LOGIN/success":return i(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message},userState:{token:t.payload.data.token,expiresIn:t.payload.data.expiresIn,validated:t.payload.data.loginTime+t.payload.data.expiresIn>Date.now()}});case"LOGIN/fail":return i(o({},e),{reqState:{success:t.payload.data.success,statusCode:t.payload.status,at:t.payload.data.loginTime,message:t.payload.data.message}});case"LOGOUT/success":return o(o({},e),$);default:return e}},theme:(e=G,t)=>{switch(t.type){case"TOGGLE_DARKTHEME":return i(o({},e),{darkThemeEnabled:!e.darkThemeEnabled});default:return e}},lastCommit:(e=q,t)=>{switch(t.type){case"GET_LAST_COMMIT_SUCCESS":return i(o({},e),{sha:t.payload.sha,error:"",loading:!1});case"GET_LAST_COMMIT_FAILURE":return i(o({},e),{sha:"",error:t.payload.error,loading:!1});default:return e}}});m.exports.createLogger();const H="theme.portfolio.minlaxz";let U=d(...[p]);M("minlaxz-theme")&&D("minlaxz-theme");const B=u(F,M(H)?{theme:A(H)}:{},U);B.subscribe((()=>{B.getState().theme&&z(H,B.getState().theme)}));const W=h.img`
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
`,K=({label:e})=>E.createElement(W,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),J=E.lazy((()=>j((()=>import("./index.8264721c.js").then((function(e){return e.i}))),["assets/index.8264721c.js","assets/vendor.7f3b8c1d.js","assets/index.ee5528d0.js","assets/index.574118bd.css","assets/index.2885cb15.js"]))),Q=E.lazy((()=>j((()=>import("./index.830f2336.js")),["assets/index.830f2336.js","assets/vendor.7f3b8c1d.js","assets/index.6f5045ff.js"]))),X=E.lazy((()=>j((()=>import("./index.232312e9.js")),["assets/index.232312e9.js","assets/index.6f5045ff.js","assets/vendor.7f3b8c1d.js"]))),Y=E.lazy((()=>j((()=>import("./index.ddeae7a3.js")),["assets/index.ddeae7a3.js","assets/vendor.7f3b8c1d.js","assets/index.ee5528d0.js","assets/index.574118bd.css","assets/index.ec7f479f.js","assets/useFetch.b9240bec.js","assets/index.2885cb15.js"]))),Z=E.lazy((()=>j((()=>import("./index.2c8b376b.js")),["assets/index.2c8b376b.js","assets/vendor.7f3b8c1d.js","assets/index.ec7f479f.js"]))),ee=E.lazy((()=>j((()=>import("./index.5c7804bf.js")),["assets/index.5c7804bf.js","assets/vendor.7f3b8c1d.js","assets/index.2885cb15.js","assets/index.6f5045ff.js","assets/useFetch.b9240bec.js"]))),te=E.lazy((()=>j((()=>import("./index.cf9e3350.js")),["assets/index.cf9e3350.js","assets/vendor.7f3b8c1d.js","assets/index.2885cb15.js","assets/index.ec7f479f.js"]))),ae=E.lazy((()=>j((()=>import("./index.5bc3a019.js")),["assets/index.5bc3a019.js","assets/index.1e69e9fa.css","assets/vendor.7f3b8c1d.js","assets/index.2885cb15.js","assets/index.6f5045ff.js","assets/index.ec7f479f.js"]))),ne=E.lazy((()=>j((()=>import("./index.611fac61.js")),["assets/index.611fac61.js","assets/vendor.7f3b8c1d.js","assets/index.6f5045ff.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.3834bfa1.js"]))),re=E.lazy((()=>j((()=>import("./index.9b0fb0eb.js")),["assets/index.9b0fb0eb.js","assets/vendor.7f3b8c1d.js","assets/index.6f5045ff.js","assets/index.3834bfa1.js"]))),le=E.lazy((()=>j((()=>import("./index.50fc951f.js")),["assets/index.50fc951f.js","assets/vendor.7f3b8c1d.js","assets/index.6f5045ff.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"]))),se=[{name:"home",r:E.createElement(J,null)},{name:"about",r:E.createElement(Q,null)},{name:"other",r:E.createElement(X,null)},{name:"repos",r:E.createElement(Y,null)},{name:"forhuman",r:E.createElement(Z,null)},{name:"repodetail",r:E.createElement(ee,null)},{name:"serverless",r:E.createElement(te,null)},{name:"shortlink",r:E.createElement(ae,null)},{name:"login",r:E.createElement(ne,null)},{name:"signup",r:E.createElement(re,null)},{name:"dashboard",r:E.createElement(le,null)}],oe=h.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,ie=h.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,ce=()=>{const e=g();return E.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),E.createElement(oe,null,E.createElement(ie,null,"Oops 😯! Well this is embarassing."),E.createElement("pre",null,"Not weed on this ",e.pathname),E.createElement(y,{to:"/"},"Home is safe 🤓"))},me=e=>se.filter((t=>t.name===e.type)).map((t=>E.createElement("div",{key:e.type},E.createElement(_.exports.Suspense,{fallback:E.createElement("div",null,"Loading ",e.type,"...")},t.r)))),de=()=>E.createElement(f,null,E.createElement(x,{exact:!0,path:"/",render:e=>E.createElement(me,o({type:"home"},e))}),E.createElement(x,{exact:!0,path:"/about",render:e=>E.createElement(me,o({type:"about"},e))}),E.createElement(x,{exact:!0,path:"/other",render:e=>E.createElement(me,o({type:"other"},e))}),E.createElement(x,{exact:!0,path:"/repos",render:e=>E.createElement(me,o({type:"repos"},e))}),E.createElement(x,{path:"/repos/:name",render:e=>E.createElement(me,o({type:"repodetail"},e))}),E.createElement(x,{exact:!0,path:"/forhuman",render:e=>E.createElement(me,o({type:"forhuman"},e))}),E.createElement(x,{exact:!0,path:"/serverless",render:e=>E.createElement(me,o({type:"serverless"},e))}),E.createElement(x,{exact:!0,path:"/shortlink",render:e=>E.createElement(me,o({type:"shortlink"},e))}),E.createElement(x,{exact:!0,path:"/login",render:e=>E.createElement(me,o({type:"login"},e))}),E.createElement(x,{exact:!0,path:"/signup",render:e=>E.createElement(me,o({type:"signup"},e))}),E.createElement(x,{exact:!0,path:"/dashboard",render:e=>E.createElement(me,o({type:"dashboard"},e))}),E.createElement(x,{component:ce})),ue=({cusName:e})=>E.createElement(y,{to:"/"},e||"Default Home 🏠"),pe=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/repos",className:e},t||"repo list 🤓")),he=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/other",className:e},t||"Other")),Ee=({linkClass:e})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/about",className:e},"Here")," is how this went through   🤔"),ge=({linkClass:e,cusName:t})=>E.createElement(y,{to:"/forhuman",className:e},E.createElement(K,{label:t||"View Markdown"})),ye=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/serverless",className:e},t||"Serverless API")),fe=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/shortlink",className:e},t||"LinkShortener API")),xe=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/login",className:e},t||"Login")),_e=({linkClass:e,cusName:t})=>E.createElement("span",null,"  ",E.createElement(y,{to:"/signup",className:e},t||"Signup")),be=b("theme",{light:"#efefef",dark:"#292929"}),we=b("theme",{light:"#050505",dark:"#e2e2e2"});var ke=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${be};
    color: ${we};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;function ve(){return E.createElement(ke,null,E.createElement(w,{basename:"/"},E.createElement(de,null)))}const Le=({children:e})=>{const t=k((e=>e.theme.darkThemeEnabled));return E.createElement(v,{theme:{theme:t?"dark":"light"}},e)},Te=h.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${be};
    color: ${we};
`,Oe=h.div`
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
`,Ie=h.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${we};
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,Se=h.button`
    margin: 0.5rem;
    background-color: ${be};
    color: ${we};
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
`,Ce=()=>{const e=k((e=>e.theme.darkThemeEnabled)),t=L();return E.createElement(E.Fragment,null,E.createElement(Te,null,E.createElement(Oe,null,E.createElement(Ie,null,"not context but redux =>"),E.createElement(Se,{onClick:()=>{t({type:"TOGGLE_DARKTHEME"}),T(e?"Switched to light mode 🤖.":"Switched to dark mode 👻.",{icon:"🔄",theme:e?"dark":"light"})}},e?E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))))))};var Ne;O.initialize("UA-167479267-1"),I.render(E.createElement(E.StrictMode,null,E.createElement(S,{store:B},E.createElement(Le,null,E.createElement(Ce,null),E.createElement(C,{position:"bottom-center",limit:3,autoClose:1e3,hideProgressBar:!1,newestOnTop:!0,transition:N}),E.createElement(ve,null)))),document.getElementById("root")),(Ne=function({id:e,name:t,value:a}){console.log(e,t,a),O.ga("send","event",{eventCategory:"Web Vitals",eventAction:t,eventValue:Math.round("CLS"===t?1e3*a:a),eventLabel:e,nonInteraction:!0})})&&Ne instanceof Function&&j((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:a,getLCP:n,getTTFB:r})=>{e(Ne),t(Ne),a(Ne),n(Ne),r(Ne)}));export{Ee as T,j as _,ue as a,ge as b,pe as c,_e as d,xe as e,he as f,ye as g,fe as h};
