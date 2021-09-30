import{R as e,f as t,s as a,l as n,d as l,i,h as o,p as r}from"./vendor.bfaeb708.js";import{_ as s,T as m,g as c,a as d,s as u}from"./index.8b032ab5.js";import{a as p}from"./index.2885cb15.js";import{A as g}from"./index.1978d190.js";const h=()=>{const[t,a]=e.useState(new Date),n=e.useCallback((()=>{a(new Date)}));return e.useEffect((()=>{let e=setInterval((()=>n()),1e3);return()=>clearInterval(e)}),[n]),e.createElement("span",null,t.toLocaleTimeString())},x="minlaxz.github.io",E=()=>{const a=t((e=>e.lastCommit));return e.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"}},e.createElement("small",null,'Last Commit Sha on "Main":  '),a.error?e.createElement("span",{style:{color:"red"}},a.error):a.loading?e.createElement("span",{style:{color:"orange"}},"Fetching last commit SHA..."):e.createElement(g,{to:`https://github.com/minlaxz/${x}/commit/${a.sha}`,text:`${a.sha.slice(0,7)}`}))};var _=()=>e.createElement("div",null,"Loading Components...");const f=a.ul`
list-style-type: lower-greek;
`,b=a.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,w=a.div`
margin: 0.5em;
padding: 0.5em;
`,y=a.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`,v=a.pre`
/* margin-left:0.5em; */
/* margin-right: 0.5em; */
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,S=n((()=>s((()=>import("./AvailableRoutes.19485a10.js")),["assets/AvailableRoutes.19485a10.js","assets/vendor.bfaeb708.js","assets/index.8b032ab5.js","assets/index.dcfb737d.css","assets/index.2885cb15.js","assets/index.1978d190.js","assets/index.574118bd.css"]))),I=n((()=>s((()=>import("./Backends.d50b5373.js")),["assets/Backends.d50b5373.js","assets/vendor.bfaeb708.js","assets/index.1978d190.js","assets/index.574118bd.css","assets/index.8b032ab5.js","assets/index.dcfb737d.css","assets/index.2885cb15.js"]))),z=n((()=>s((()=>import("./BuildWith.0f552742.js")),["assets/BuildWith.0f552742.js","assets/vendor.bfaeb708.js"]))),j=n((()=>s((()=>import("./ReduxContainer.bd25f9e2.js")),["assets/ReduxContainer.bd25f9e2.js","assets/vendor.bfaeb708.js","assets/index.8b032ab5.js","assets/index.dcfb737d.css"]))),D=a.div`
margin: 0;
padding: 0;
height: 100%;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 812px) {
    height: 130%;
}
`;var T=()=>e.createElement(D,null,e.createElement("h3",{className:"animate__animated animate__flipInX animate__slower"},"Hello, world! ((👻) => (minlaxz)) "),e.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",e.createElement(h,null)),e.createElement(y,null,e.createElement(v,null,"You would visit to me with ",e.createElement(g,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you 🥴")),e.createElement(v,{className:"animate__animated animate__flipInX animate__faster animate__delay-1.5s"},"I am a so much responsive page! 👻"),e.createElement("p",null,"Source Code is hosted ",e.createElement(g,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(l.exports.Suspense,{fallback:e.createElement(_,null)},e.createElement(S,null),e.createElement(I,null),e.createElement(z,null),e.createElement(E,null),e.createElement(j,null)));const k=a.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`;var A=()=>e.createElement(k,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),e.createElement(m,null)));const C=`https://api.github.com/repos/minlaxz/${x}/branches/main`;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const t=o();return e.useEffect((()=>{window.document.title="minlaxz | Home",window.scrollTo(0,0);const e=""!==u.getState().lastCommit.sha;!e&&t((async e=>{try{const t=await p.get(C);i.success("Auto fetched and dispatched",{icon:"🚀",autoClose:3e3,theme:"colored"}),e(c({sha:t.data.commit.sha}))}catch(t){i.error(t.message),e(d({error:t.message}))}})),e&&i.success("phew... won't dispatch again, already have a state.",{icon:"😌"});const a=window.location.hostname,n=localStorage.getItem(a);if(n){const e=r(JSON.parse(n),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}}),[]),e.createElement(e.Fragment,null,e.createElement(T,null),e.createElement(A,null))}});export{w as D,b as L,f as U,L as i};
