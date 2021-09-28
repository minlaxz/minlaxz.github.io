import{c as e,t,r as n,a,b as r,s as l,R as o,l as s,u as i,L as c,S as m,d,e as u,f as h,H as p,g as E,F as g,h as x,T as f,i as _,j as w,k as b,P as k}from"./vendor.44efb526.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const y={},v=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in y)return;y[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},L=(e,t)=>{window.localStorage.setItem(e,JSON.stringify(t))},T=e=>{const t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(n){return{}}},S=e=>{window.localStorage.removeItem(e)},C=e=>null!==window.localStorage.getItem(e),N=e({name:"counter",initialState:{value:0},reducers:{increase:e=>{t.success("dipatched increase"),e.value+=1},decrease:e=>{t.warn("dipatched decrease"),e.value-=1},increaseByAmount:(e,t)=>{e.value+=t.payload}}}),{increase:I,decrease:P,increaseByAmount:j}=N.actions;var A=N.reducer;const O=e({name:"lastCommit",initialState:{sha:"",error:"",loading:!0},reducers:{getLastCommitSuccess:(e,t)=>{e.loading=!1,e.error="",e.sha=t.payload.sha},getLastCommitFailure:(e,t)=>{e.loading=!1,e.error=t.payload.error,e.sha=""}}}),{getLastCommitSuccess:V,getLastCommitFailure:z}=O.actions;var D=O.reducer;const R=e({name:"theme",initialState:{darkThemeEnabled:!1},reducers:{toggleTheme:e=>{e.darkThemeEnabled=!e.darkThemeEnabled}}}),{toggleTheme:M}=R.actions;var $={lastCommit:D,counter:A,darkTheme:R.reducer};n.exports.createLogger();const F="theme.portfolio.minlaxz";C("minlaxz-theme")&&S("minlaxz-theme");const B=[r],H=a({reducer:$,preloadedState:C(F)?{darkTheme:T(F)}:{},devTools:!1,middleware:e=>e().concat(B)});H.subscribe((()=>{H.getState().darkTheme&&L(F,H.getState().darkTheme)}));const W=l.img`
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
`,q=({label:e})=>o.createElement(W,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),J=s((()=>v((()=>import("./index.6cc20a03.js").then((function(e){return e.i}))),["assets/index.6cc20a03.js","assets/vendor.44efb526.js","assets/index.84a68d23.js","assets/index.574118bd.css","assets/index.2885cb15.js"]))),K=s((()=>v((()=>import("./index.63807039.js")),["assets/index.63807039.js","assets/vendor.44efb526.js","assets/index.c37bf079.js"]))),U=s((()=>v((()=>import("./index.4fd868b6.js")),["assets/index.4fd868b6.js","assets/index.c37bf079.js","assets/vendor.44efb526.js"]))),G=s((()=>v((()=>import("./index.fc0018ec.js")),["assets/index.fc0018ec.js","assets/vendor.44efb526.js","assets/index.84a68d23.js","assets/index.574118bd.css","assets/index.02b5067d.js","assets/useFetch.9259db2e.js","assets/index.2885cb15.js"]))),Q=s((()=>v((()=>import("./index.9984dfb4.js")),["assets/index.9984dfb4.js","assets/vendor.44efb526.js","assets/index.02b5067d.js"]))),X=s((()=>v((()=>import("./index.1e14e0e4.js")),["assets/index.1e14e0e4.js","assets/vendor.44efb526.js","assets/index.2885cb15.js","assets/index.c37bf079.js","assets/useFetch.9259db2e.js"]))),Y=s((()=>v((()=>import("./index.08323631.js")),["assets/index.08323631.js","assets/vendor.44efb526.js","assets/index.2885cb15.js","assets/index.02b5067d.js"]))),Z=s((()=>v((()=>import("./index.7953e3a3.js")),["assets/index.7953e3a3.js","assets/index.1e69e9fa.css","assets/vendor.44efb526.js","assets/index.2885cb15.js","assets/index.c37bf079.js","assets/index.02b5067d.js"]))),ee=s((()=>v((()=>import("./index.9ef4fc8c.js")),["assets/index.9ef4fc8c.js","assets/vendor.44efb526.js","assets/index.c37bf079.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js","assets/index.2e137bd5.js"]))),te=s((()=>v((()=>import("./index.24cce99d.js")),["assets/index.24cce99d.js","assets/vendor.44efb526.js","assets/index.c37bf079.js","assets/index.2e137bd5.js"]))),ne=s((()=>v((()=>import("./index.211a8978.js")),["assets/index.211a8978.js","assets/vendor.44efb526.js","assets/index.c37bf079.js","assets/userAuthActions.57b73cbb.js","assets/index.2885cb15.js"]))),ae=[{name:"home",r:o.createElement(J,null)},{name:"about",r:o.createElement(K,null)},{name:"other",r:o.createElement(U,null)},{name:"repos",r:o.createElement(G,null)},{name:"forhuman",r:o.createElement(Q,null)},{name:"repodetail",r:o.createElement(X,null)},{name:"serverless",r:o.createElement(Y,null)},{name:"shortlink",r:o.createElement(Z,null)},{name:"login",r:o.createElement(ee,null)},{name:"signup",r:o.createElement(te,null)},{name:"dashboard",r:o.createElement(ne,null)}],re=l.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,le=l.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,oe=()=>{const e=i();return o.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),o.createElement(re,null,o.createElement(le,null,"Oops 😯! Well this is embarassing."),o.createElement("pre",null,"Not weed on this ",e.pathname),o.createElement(c,{to:"/"},"Home is safe 🤓"))},se=e=>ae.filter((t=>t.name===e.type)).map((t=>o.createElement("div",{key:e.type},o.createElement(u.exports.Suspense,{fallback:o.createElement("div",null,"Loading ",e.type,"...")},t.r)))),ie=()=>o.createElement(m,null,o.createElement(d,{exact:!0,path:"/",render:()=>o.createElement(se,{type:"home"})}),o.createElement(d,{exact:!0,path:"/about",render:()=>o.createElement(se,{type:"about"})}),o.createElement(d,{exact:!0,path:"/other",render:()=>o.createElement(se,{type:"other"})}),o.createElement(d,{exact:!0,path:"/repos",render:()=>o.createElement(se,{type:"repos"})}),o.createElement(d,{path:"/repos/:name",render:()=>o.createElement(se,{type:"repodetail"})}),o.createElement(d,{exact:!0,path:"/forhuman",render:()=>o.createElement(se,{type:"forhuman"})}),o.createElement(d,{exact:!0,path:"/serverless",render:()=>o.createElement(se,{type:"serverless"})}),o.createElement(d,{exact:!0,path:"/shortlink",render:()=>o.createElement(se,{type:"shortlink"})}),o.createElement(d,{exact:!0,path:"/login",render:()=>o.createElement(se,{type:"login"})}),o.createElement(d,{exact:!0,path:"/signup",render:()=>o.createElement(se,{type:"signup"})}),o.createElement(d,{exact:!0,path:"/dashboard",render:()=>o.createElement(se,{type:"dashboard"})}),o.createElement(d,{component:oe})),ce=({cusName:e})=>o.createElement(c,{to:"/"},e||"Default Home 🏠"),me=({linkClass:e,cusName:t})=>o.createElement("span",null,"  ",o.createElement(c,{to:"/repos",className:e},t||"repo list 🤓")),de=({linkClass:e,cusName:t})=>o.createElement("span",null,"  ",o.createElement(c,{to:"/other",className:e},t||"Other")),ue=({linkClass:e})=>o.createElement("span",null,"  ",o.createElement(c,{to:"/about",className:e},"Here")," is how this went through   🤔"),he=({linkClass:e,cusName:t})=>o.createElement(c,{to:"/forhuman",className:e},o.createElement(q,{label:t||"View Markdown"})),pe=({linkClass:e,cusName:t})=>o.createElement("span",null,"  ",o.createElement(c,{to:"/serverless",className:e},t||"Serverless API")),Ee=({linkClass:e,cusName:t})=>o.createElement("span",null,"  ",o.createElement(c,{to:"/shortlink",className:e},t||"LinkShortener API")),ge=({linkClass:e,cusName:t})=>o.createElement("span",null,"  ",o.createElement(c,{to:"/login",className:e},t||"Login")),xe=({linkClass:e,cusName:t})=>o.createElement("span",null,"  ",o.createElement(c,{to:"/signup",className:e},t||"Signup")),fe=h("theme",{light:"#efefef",dark:"#292929"}),_e=h("theme",{light:"#050505",dark:"#e2e2e2"});var we=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${fe};
    color: ${_e};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;function be(){return o.createElement(we,null,o.createElement(p,{basename:"/"},o.createElement(ie,null)))}const ke=({children:e})=>{const t=E((e=>e.darkTheme.darkThemeEnabled));return o.createElement(g,{theme:{theme:t?"dark":"light"}},e)},ye=l.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${fe};
    color: ${_e};
`,ve=l.div`
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
`,Le=l.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${_e};
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`,Te=l.button`
    margin: 0.5rem;
    background-color: ${fe};
    color: ${_e};
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
`,Se=()=>{const e=E((e=>e.darkTheme.darkThemeEnabled)),n=x();return o.createElement(o.Fragment,null,o.createElement(ye,null,o.createElement(ve,null,o.createElement(Le,null,"not context but redux =>"),o.createElement(Te,{onClick:()=>{n(M()),t(e?"Switched to light mode 🤖.":"Switched to dark mode 👻.",{icon:"🔄",theme:e?"dark":"light"})}},e?o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",style:{height:"2em",width:"2em"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))))))};const Ce=()=>{let e=function(e){const[t,n]=u.exports.useState(!1);return u.exports.useEffect((()=>{const a=window.matchMedia(e);a.matches!==t&&n(a.matches);const r=()=>{n(a.matches)};return a.addListener(r),()=>a.removeListener(r)}),[t,e]),t}("(min-width: 800px)");return o.createElement(f,{position:e?"bottom-right":"bottom-center",limit:3,autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,transition:_,toastStyle:{margin:"10px 10px"}})};var Ne;w.initialize("UA-167479267-1"),b.render(o.createElement(o.StrictMode,null,o.createElement(k,{store:H},o.createElement(ke,null,o.createElement(Se,null),o.createElement(Ce,null),o.createElement(be,null)))),document.getElementById("root")),(Ne=function({id:e,name:t,value:n}){console.log(e,t,n),w.ga("send","event",{eventCategory:"Web Vitals",eventAction:t,eventValue:Math.round("CLS"===t?1e3*n:n),eventLabel:e,nonInteraction:!0})})&&Ne instanceof Function&&v((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:n,getLCP:a,getTTFB:r})=>{e(Ne),t(Ne),n(Ne),a(Ne),r(Ne)}));export{ue as T,v as _,z as a,ce as b,he as c,me as d,xe as e,ge as f,V as g,de as h,pe as i,Ee as j,I as k,P as l,H as s};
