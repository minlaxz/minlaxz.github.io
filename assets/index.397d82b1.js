import{R as e,f as g,s as n,l as o,d as h,h as c,g as x,p as E}from"./vendor.085cecd7.js";import{_ as s,T as f,g as _,a as y,s as w}from"./index.dfe33cfc.js";import{a as b}from"./index.9ff040e8.js";import{A as r}from"./index.3915656f.js";const v=()=>{const[t,a]=e.useState(new Date),i=e.useCallback(()=>{a(new Date)});return e.useEffect(()=>{let l=setInterval(()=>i(),1e3);return()=>clearInterval(l)},[i]),e.createElement("span",null,t.toLocaleTimeString())},d="minlaxz.github.io",S="minlaxz",C="main",T=()=>{const t=g(a=>a.lastCommit);return e.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"}},e.createElement("small",null,'Last Commit Sha on "Main": \xA0'),t.error?e.createElement("span",{style:{color:"red"}},t.error):t.loading?e.createElement("span",{style:{color:"orange"}},"Fetching last commit SHA..."):e.createElement(r,{to:`https://github.com/minlaxz/${d}/commit/${t.sha}`,text:`${t.sha.slice(0,7)}`}))};var z=()=>e.createElement("div",null,"Loading Components...");const W=n.ul`
list-style-type: lower-greek;
`,J=n.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,U=n.div`
margin: 0.5em;
padding: 0.5em;
`,I=n.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`,u=n.pre`
/* margin-left:0.5em; */
/* margin-right: 0.5em; */
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,k=o(()=>s(()=>import("./AvailableRoutes.d6d0d086.js"),["assets/AvailableRoutes.d6d0d086.js","assets/vendor.085cecd7.js","assets/index.dfe33cfc.js","assets/index.dcfb737d.css","assets/index.9ff040e8.js","assets/index.3915656f.js","assets/index.574118bd.css"])),D=o(()=>s(()=>import("./Backends.dd2e998b.js"),["assets/Backends.dd2e998b.js","assets/vendor.085cecd7.js","assets/index.3915656f.js","assets/index.574118bd.css","assets/index.dfe33cfc.js","assets/index.dcfb737d.css","assets/index.9ff040e8.js"])),A=o(()=>s(()=>import("./BuildWith.a3aba5af.js"),["assets/BuildWith.a3aba5af.js","assets/vendor.085cecd7.js"])),L=o(()=>s(()=>import("./ReduxContainer.a9aab12d.js"),["assets/ReduxContainer.a9aab12d.js","assets/vendor.085cecd7.js","assets/index.dfe33cfc.js","assets/index.dcfb737d.css"])),j=n.div`
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
`;var F=()=>e.createElement(j,null,e.createElement("h4",{style:{fontFamily:"cursive"},className:"animate__animated animate__flipInX animate__slower"},"( minlaxz = (\xA0) => async dispatch => \u{1F47B} ) "),e.createElement("div",{style:{marginBottom:"1em",fontFamily:"fantasy"}},e.createElement("small",null,"Here is ",e.createElement(r,{to:"https://github.com/minlaxz",text:"My Github"}))),e.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",e.createElement(v,null)),e.createElement(I,null,e.createElement(u,null,"You would visit to me with ",e.createElement(r,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you \u{1F974}")),e.createElement(u,{className:"animate__animated animate__flipInX animate__faster animate__delay-1.5s"},"I am a so much responsive page! \u{1F47B}"),e.createElement("p",null,"Source Code is hosted ",e.createElement(r,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(h.exports.Suspense,{fallback:e.createElement(z,null)},e.createElement(k,null),e.createElement(D,null),e.createElement(A,null),e.createElement(T,null),e.createElement(L,null)));const O=n.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`;var B=()=>e.createElement(O,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding \u{1F913} not to distrurb you."),e.createElement(f,null)));const R=`https://api.github.com/repos/${S}/${d}/branches/${C}`,V=()=>async t=>{try{const a=await b.get(R);c.success("Auto fetched and dispatched",{icon:"\u{1F680}",autoClose:3e3,theme:"colored"}),t(_({sha:a.data.commit.sha}))}catch(a){c.error(a.message),t(y({error:a.message}))}},$=()=>{const t=x();return e.useEffect(()=>{window.document.title="minlaxz | Home",window.scrollTo(0,0);const a=w.getState().lastCommit.sha!=="";!a&&t(V()),a&&c.success("phew... won't dispatch again, already have a state.",{icon:"\u{1F60C}"});const i=window.location.hostname,l=localStorage.getItem(i);if(l){const m=E(JSON.parse(l),p=>{p.lastVisitedTime=Date.now()});localStorage.setItem("minlaxz.github.io",JSON.stringify(m))}else{const m={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(m))}},[]),e.createElement(e.Fragment,null,e.createElement(F,null),e.createElement(B,null))};var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$});export{U as D,J as L,W as U,X as i};
