var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,o=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&s(e,r,t[r]);if(n)for(var r of n(t))l.call(t,r)&&s(e,r,t[r]);return e};import{s as c,R as i,u as m,L as p,S as d,a as u,r as E,H as h,c as y,b as f,d as _,e as g,t as x,f as b,P as w}from"./vendor.da1af473.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k={},O=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in k)return;k[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},N=c.img`
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
`,v=({label:e})=>i.createElement(N,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),P=c.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,L=c.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,j=()=>{const e=m();return i.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),i.createElement(P,null,i.createElement(L,null,"Oops 😯! Well this is embarassing."),i.createElement("pre",null,"Not weed on this ",e.pathname),i.createElement(p,{to:"/"},"Home is safe 🤓"))},I=i.lazy((()=>O((()=>import("./index.c24a612c.js")),["assets/index.c24a612c.js","assets/vendor.da1af473.js","assets/index.a32fd311.js","assets/index.574118bd.css","assets/index.59ead915.js"]))),R=i.lazy((()=>O((()=>import("./index.8b02ab00.js")),["assets/index.8b02ab00.js","assets/vendor.da1af473.js"]))),T=i.lazy((()=>O((()=>import("./index.c87944e3.js")),["assets/index.c87944e3.js","assets/vendor.da1af473.js"]))),z=i.lazy((()=>O((()=>import("./index.a0a07d02.js")),["assets/index.a0a07d02.js","assets/vendor.da1af473.js","assets/index.a32fd311.js","assets/index.574118bd.css","assets/index.59ead915.js","assets/index.58e2b3ec.js"]))),A=i.lazy((()=>O((()=>import("./index.45891ae9.js")),["assets/index.45891ae9.js","assets/vendor.da1af473.js","assets/index.58e2b3ec.js"]))),D=i.lazy((()=>O((()=>import("./index.347d5a25.js")),["assets/index.347d5a25.js","assets/vendor.da1af473.js","assets/index.59ead915.js"]))),C=i.lazy((()=>O((()=>import("./index.ea45e198.js")),["assets/index.ea45e198.js","assets/vendor.da1af473.js","assets/index.59ead915.js","assets/index.58e2b3ec.js"]))),S=i.lazy((()=>O((()=>import("./index.03811496.js")),["assets/index.03811496.js","assets/index.1e69e9fa.css","assets/vendor.da1af473.js","assets/index.43c4adbd.js","assets/index.58e2b3ec.js","assets/index.59ead915.js"]))),V=i.lazy((()=>O((()=>import("./index.08e9776b.js")),["assets/index.08e9776b.js","assets/vendor.da1af473.js","assets/index.43c4adbd.js","assets/index.49496324.js"]))),M=i.lazy((()=>O((()=>import("./index.291f3232.js")),["assets/index.291f3232.js","assets/index.43c4adbd.js","assets/vendor.da1af473.js","assets/index.49496324.js"]))),H=[{name:"home",r:i.createElement(I,null)},{name:"about",r:i.createElement(R,null)},{name:"othersites",r:i.createElement(T,null)},{name:"repos",r:i.createElement(z,null)},{name:"forhuman",r:i.createElement(A,null)},{name:"repodetail",r:i.createElement(D,null)},{name:"serverless",r:i.createElement(C,null)},{name:"shortlink",r:i.createElement(S,null)},{name:"login",r:i.createElement(V,null)},{name:"signup",r:i.createElement(M,null)}],$=e=>H.filter((t=>t.name===e.type)).map((t=>i.createElement("div",{key:e.type},i.createElement(E.exports.Suspense,{fallback:i.createElement("div",null,"Loading ",e.type,"...")},t.r)))),q=()=>i.createElement(d,null,i.createElement(u,{exact:!0,path:"/",render:e=>i.createElement($,o({type:"home"},e))}),i.createElement(u,{exact:!0,path:"/about",render:e=>i.createElement($,o({type:"about"},e))}),i.createElement(u,{exact:!0,path:"/othersites",render:e=>i.createElement($,o({type:"othersites"},e))}),i.createElement(u,{exact:!0,path:"/repos",render:e=>i.createElement($,o({type:"repos"},e))}),i.createElement(u,{path:"/repos/:name",render:e=>i.createElement($,o({type:"repodetail"},e))}),i.createElement(u,{exact:!0,path:"/forhuman",render:e=>i.createElement($,o({type:"forhuman"},e))}),i.createElement(u,{exact:!0,path:"/serverless",render:e=>i.createElement($,o({type:"serverless"},e))}),i.createElement(u,{exact:!0,path:"/shortlink",render:e=>i.createElement($,o({type:"shortlink"},e))}),i.createElement(u,{exact:!0,path:"/login",render:e=>i.createElement($,o({type:"login"},e))}),i.createElement(u,{exact:!0,path:"/signup",render:e=>i.createElement($,o({type:"signup"},e))}),i.createElement(u,{component:j})),W=({cusName:e})=>i.createElement(p,{to:"/"},e||"Default Home 🏠"),B=({linkClass:e,cusName:t})=>i.createElement("span",null,"  ",i.createElement(p,{to:"/repos",className:e},t||"repo list 🤓")),G=({linkClass:e,cusName:t})=>i.createElement("span",null,"  ",i.createElement(p,{to:"/othersites",className:e},t||"Other websites")),K=({linkClass:e})=>i.createElement("span",null,"  ",i.createElement(p,{to:"/about",className:e},"Here")," is how this went through   🤔"),U=({linkClass:e,cusName:t})=>i.createElement(p,{to:"/forhuman",className:e},i.createElement(v,{label:t||"View Markdown"})),F=({linkClass:e,cusName:t})=>i.createElement("span",null,"  ",i.createElement(p,{to:"/serverless",className:e},t||"Serverless API")),J=({linkClass:e,cusName:t})=>i.createElement("span",null,"  ",i.createElement(p,{to:"/shortlink",className:e},t||"LinkShortener API")),Q=({linkClass:e,cusName:t})=>i.createElement("span",null,"  ",i.createElement(p,{to:"/login",className:e},t||"Login")),X=({linkClass:e,cusName:t})=>i.createElement("span",null,"  ",i.createElement(p,{to:"/signup",className:e},t||"Signup"));function Y(){return i.createElement(h,{basename:"/"},i.createElement(q,null))}const Z={users:[],loading:!0};let ee;ee=f(y({points:(e=0,t)=>{switch(t.type){case"INCREMENT":return e+t.payload;case"DECREMENT":return e-t.payload;default:return e}},user:(e=Z,n)=>{switch(n.type){case"GET_USERS":return a=o({},e),l={users:n.payload,loading:!1},t(a,r(l));default:return e}var a,l}}),{},_(g(x)));var te=ee;b.render(i.createElement(i.StrictMode,null,i.createElement(w,{store:te},i.createElement(Y,null))),document.getElementById("root"));export{B as T,U as a,G as b,F as c,J as d,Q as e,K as f,W as g,X as h};
