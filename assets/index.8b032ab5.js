import{c as e,r as t,a as n,t as a,s as r,R as l,l as o,u as s,L as i,S as c,b as m,d,e as u,T as h,F as p,H as E,f as g,g as x,h as f,i as w,j as b,k,P as _}from"./vendor.bfaeb708.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const v={},y=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in v)return;v[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},L=(e,t)=>{window.localStorage.setItem(e,JSON.stringify(t))},T=e=>{const t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(n){return{}}},S=e=>{window.localStorage.removeItem(e)},C=e=>null!==window.localStorage.getItem(e),N=()=>{window.localStorage.clear()},I=e({name:"counter",initialState:{value:0},reducers:{increase:e=>{e.value+=1},decrease:e=>{e.value-=1},increaseByAmount:(e,t)=>{e.value+=t.payload}}}),{increase:A,decrease:j,increaseByAmount:P}=I.actions;var O=I.reducer;const z=e({name:"lastCommit",initialState:{sha:"",error:"",loading:!0},reducers:{getLastCommitSuccess:(e,t)=>{e.loading=!1,e.error="",e.sha=t.payload.sha},getLastCommitFailure:(e,t)=>{e.loading=!1,e.error=t.payload.error,e.sha=""}}}),{getLastCommitSuccess:V,getLastCommitFailure:D}=z.actions;var M=z.reducer;const R=e({name:"theme",initialState:{darkThemeEnabled:!1},reducers:{toggleTheme:e=>{e.darkThemeEnabled=!e.darkThemeEnabled}}}),{toggleTheme:$}=R.actions;var B=R.reducer;const F=e({name:"toast",initialState:{toastEnabled:!0},reducers:{toggleToast:e=>{e.toastEnabled=!e.toastEnabled}}}),{toggleToast:W}=F.actions;var H={lastCommit:M,counter:O,darkTheme:B,toast:F.reducer};t.exports.createLogger();const q="theme.portfolio.minlaxz",J="toast.portfolio.minlaxz";C("minlaxz-theme")&&S("minlaxz-theme"),C(q)&&!C(J)&&N();const K=[a],U=n({reducer:H,preloadedState:C(q)&&C(J)?{darkTheme:T(q),toast:T(J)}:{},devTools:!1,middleware:e=>e().concat(K)});U.subscribe((()=>{U.getState().darkTheme&&U.getState().toast&&(L(q,U.getState().darkTheme),L(J,U.getState().toast))}));const G=r.img`
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
`,Q=({label:e})=>l.createElement(G,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),X=o((()=>y((()=>import("./index.81918f0c.js").then((function(e){return e.i}))),["assets/index.81918f0c.js","assets/vendor.bfaeb708.js","assets/index.2885cb15.js","assets/index.1978d190.js","assets/index.574118bd.css"]))),Y=o((()=>y((()=>import("./index.7c8a019f.js")),["assets/index.7c8a019f.js","assets/vendor.bfaeb708.js","assets/index.032abe4e.js"]))),Z=o((()=>y((()=>import("./index.389771ee.js")),["assets/index.389771ee.js","assets/index.032abe4e.js","assets/vendor.bfaeb708.js"]))),ee=o((()=>y((()=>import("./index.12ced2df.js")),["assets/index.12ced2df.js","assets/vendor.bfaeb708.js","assets/index.1978d190.js","assets/index.574118bd.css","assets/index.9345873f.js","assets/useFetch.068f46e6.js","assets/index.2885cb15.js"]))),te=o((()=>y((()=>import("./index.1951d22f.js")),["assets/index.1951d22f.js","assets/vendor.bfaeb708.js","assets/index.9345873f.js"]))),ne=o((()=>y((()=>import("./index.5eb92235.js")),["assets/index.5eb92235.js","assets/vendor.bfaeb708.js","assets/index.2885cb15.js","assets/index.032abe4e.js","assets/useFetch.068f46e6.js"]))),ae=o((()=>y((()=>import("./index.8407936f.js")),["assets/index.8407936f.js","assets/vendor.bfaeb708.js","assets/index.2885cb15.js","assets/index.9345873f.js"]))),re=o((()=>y((()=>import("./index.027b23d6.js")),["assets/index.027b23d6.js","assets/index.1e69e9fa.css","assets/vendor.bfaeb708.js","assets/index.2885cb15.js","assets/index.032abe4e.js","assets/index.9345873f.js"]))),le=o((()=>y((()=>import("./index.446d13d6.js")),["assets/index.446d13d6.js","assets/vendor.bfaeb708.js","assets/index.032abe4e.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.42ca9e36.js"]))),oe=o((()=>y((()=>import("./index.696866d5.js")),["assets/index.696866d5.js","assets/vendor.bfaeb708.js","assets/index.032abe4e.js","assets/index.42ca9e36.js"]))),se=o((()=>y((()=>import("./index.56a2b468.js")),["assets/index.56a2b468.js","assets/vendor.bfaeb708.js","assets/index.032abe4e.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"]))),ie=[{name:"home",r:l.createElement(X,null)},{name:"about",r:l.createElement(Y,null)},{name:"other",r:l.createElement(Z,null)},{name:"repos",r:l.createElement(ee,null)},{name:"forhuman",r:l.createElement(te,null)},{name:"repodetail",r:l.createElement(ne,null)},{name:"serverless",r:l.createElement(ae,null)},{name:"shortlink",r:l.createElement(re,null)},{name:"login",r:l.createElement(le,null)},{name:"signup",r:l.createElement(oe,null)},{name:"dashboard",r:l.createElement(se,null)}],ce=r.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,me=r.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,de=()=>{const e=s();return l.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),l.createElement(ce,null,l.createElement(me,null,"Oops 😯! Well this is embarassing."),l.createElement("pre",null,"Not weed on this ",e.pathname),l.createElement(i,{to:"/"},"Home is safe 🤓"))},ue=e=>ie.filter((t=>t.name===e.type)).map((t=>l.createElement("div",{key:e.type},l.createElement(d.exports.Suspense,{fallback:l.createElement("div",null,"Loading ",e.type,"...")},t.r)))),he=()=>l.createElement(c,null,l.createElement(m,{exact:!0,path:"/",render:()=>l.createElement(ue,{type:"home"})}),l.createElement(m,{exact:!0,path:"/about",render:()=>l.createElement(ue,{type:"about"})}),l.createElement(m,{exact:!0,path:"/other",render:()=>l.createElement(ue,{type:"other"})}),l.createElement(m,{exact:!0,path:"/repos",render:()=>l.createElement(ue,{type:"repos"})}),l.createElement(m,{path:"/repos/:name",render:()=>l.createElement(ue,{type:"repodetail"})}),l.createElement(m,{exact:!0,path:"/forhuman",render:()=>l.createElement(ue,{type:"forhuman"})}),l.createElement(m,{exact:!0,path:"/serverless",render:()=>l.createElement(ue,{type:"serverless"})}),l.createElement(m,{exact:!0,path:"/shortlink",render:()=>l.createElement(ue,{type:"shortlink"})}),l.createElement(m,{exact:!0,path:"/login",render:()=>l.createElement(ue,{type:"login"})}),l.createElement(m,{exact:!0,path:"/signup",render:()=>l.createElement(ue,{type:"signup"})}),l.createElement(m,{exact:!0,path:"/dashboard",render:()=>l.createElement(ue,{type:"dashboard"})}),l.createElement(m,{component:de})),pe=({cusName:e})=>l.createElement(i,{to:"/"},e||"Default Home 🏠"),Ee=({linkClass:e,cusName:t})=>l.createElement("span",null,"  ",l.createElement(i,{to:"/repos",className:e},t||"repo list 🤓")),ge=({linkClass:e,cusName:t})=>l.createElement("span",null,"  ",l.createElement(i,{to:"/other",className:e},t||"Other")),xe=({linkClass:e})=>l.createElement("span",null,"  ",l.createElement(i,{to:"/about",className:e},"Here")," is how this went through   🤔"),fe=({linkClass:e,cusName:t})=>l.createElement(i,{to:"/forhuman",className:e},l.createElement(Q,{label:t||"View Markdown"})),we=({linkClass:e,cusName:t})=>l.createElement("span",null,"  ",l.createElement(i,{to:"/serverless",className:e},t||"Serverless API")),be=({linkClass:e,cusName:t})=>l.createElement("span",null,"  ",l.createElement(i,{to:"/shortlink",className:e},t||"LinkShortener API")),ke=({linkClass:e,cusName:t})=>l.createElement("span",null,"  ",l.createElement(i,{to:"/login",className:e},t||"Login")),_e=({linkClass:e,cusName:t})=>l.createElement("span",null,"  ",l.createElement(i,{to:"/signup",className:e},t||"Signup")),ve=u("theme",{light:"#efefef",dark:"#363738"}),ye=u("theme",{light:"#050505",dark:"#e2e2e2"}),Le=u("theme",{light:"#f5f5f5",dark:"#626466"}),Te=u("theme",{light:"#1d3c47",dark:"#d4ccac"});var Se=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${ve};
    color: ${ye};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;const Ce=()=>{let e=function(e){const[t,n]=d.exports.useState(!1);return d.exports.useEffect((()=>{const a=window.matchMedia(e);a.matches!==t&&n(a.matches);const r=()=>{n(a.matches)};return a.addListener(r),()=>a.removeListener(r)}),[t,e]),t}("(min-width: 800px)");return l.createElement(h,{position:e?"bottom-right":"bottom-center",limit:3,autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,transition:p,toastStyle:{margin:"10px 10px"}})};function Ne(){return l.createElement(Se,null,l.createElement(E,{basename:"/"},l.createElement(Ce,null),l.createElement(he,null)))}const Ie=({children:e})=>{const t=g((e=>e.darkTheme.darkThemeEnabled));return l.createElement(x,{theme:{theme:t?"dark":"light"}},e)},Ae=r.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${Le};
`,je=r.div`
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
`,Pe=r.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${Te};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;

    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,Oe=r.button`
    display: flex;
    align-items: center;
    margin: 0.5rem;
    background-color: ${ve};
    color: ${ye};
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
`,ze=()=>{const e=g((e=>e.darkTheme.darkThemeEnabled)),t=g((e=>e.toast.toastEnabled)),n=f(),a=()=>l.createElement("div",{style:{display:"flex",alignItems:"center"}},l.createElement(Oe,{onClick:()=>{n(W()),t&&w.warn("Toast has been disabled")}},t?l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})):l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}))),l.createElement(Pe,null,t?"Show Toast":"No Toast")),r=()=>l.createElement("div",{style:{display:"flex",alignItems:"center"}},l.createElement(Pe,null,"Not Context but Redux =>"),l.createElement(Oe,{onClick:()=>{n($()),t&&w(e?"Switched to light mode 🤖.":"Switched to dark mode 👻.",{icon:"🔄",theme:e?"dark":"light"})}},e?l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))));return l.createElement(Ae,null,l.createElement(je,null,l.createElement(a,null),l.createElement(r,null)))};var Ve;b.initialize("UA-167479267-1"),k.render(l.createElement(l.StrictMode,null,l.createElement(_,{store:U},l.createElement(Ie,null,l.createElement(ze,null),l.createElement(Ne,null)))),document.getElementById("root")),(Ve=function({id:e,name:t,value:n}){console.log(e,t,n),b.ga("send","event",{eventCategory:"Web Vitals",eventAction:t,eventValue:Math.round("CLS"===t?1e3*n:n),eventLabel:e,nonInteraction:!0})})&&Ve instanceof Function&&y((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:n,getLCP:a,getTTFB:r})=>{e(Ve),t(Ve),n(Ve),a(Ve),r(Ve)}));export{xe as T,y as _,D as a,pe as b,fe as c,Ee as d,_e as e,ke as f,V as g,ge as h,we as i,be as j,A as k,j as l,U as s};
