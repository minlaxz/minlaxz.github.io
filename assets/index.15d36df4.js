import{R as e,f as g,s as n,l as o,d as h,i as m,h as x,p as _}from"./vendor.bfaeb708.js";import{_ as s,T as E,g as f,a as w,s as b}from"./index.5ce306e5.js";import{a as y}from"./index.2885cb15.js";import{A as c}from"./index.1978d190.js";const v=()=>{const[t,a]=e.useState(new Date),i=e.useCallback(()=>{a(new Date)});return e.useEffect(()=>{let l=setInterval(()=>i(),1e3);return()=>clearInterval(l)},[i]),e.createElement("span",null,t.toLocaleTimeString())},d="minlaxz.github.io",S="minlaxz",C="main",T=()=>{const t=g(a=>a.lastCommit);return e.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"}},e.createElement("small",null,'Last Commit Sha on "Main": \xA0'),t.error?e.createElement("span",{style:{color:"red"}},t.error):t.loading?e.createElement("span",{style:{color:"orange"}},"Fetching last commit SHA..."):e.createElement(c,{to:`https://github.com/minlaxz/${d}/commit/${t.sha}`,text:`${t.sha.slice(0,7)}`}))};var z=()=>e.createElement("div",null,"Loading Components...");const J=n.ul`
list-style-type: lower-greek;
`,M=n.li`
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
`,k=o(()=>s(()=>import("./AvailableRoutes.2a28d6e1.js"),["assets/AvailableRoutes.2a28d6e1.js","assets/vendor.bfaeb708.js","assets/index.5ce306e5.js","assets/index.dcfb737d.css","assets/index.2885cb15.js","assets/index.1978d190.js","assets/index.574118bd.css"])),D=o(()=>s(()=>import("./Backends.e470f654.js"),["assets/Backends.e470f654.js","assets/vendor.bfaeb708.js","assets/index.1978d190.js","assets/index.574118bd.css","assets/index.5ce306e5.js","assets/index.dcfb737d.css","assets/index.2885cb15.js"])),L=o(()=>s(()=>import("./BuildWith.0f552742.js"),["assets/BuildWith.0f552742.js","assets/vendor.bfaeb708.js"])),A=o(()=>s(()=>import("./ReduxContainer.bf01e290.js"),["assets/ReduxContainer.bf01e290.js","assets/vendor.bfaeb708.js","assets/index.5ce306e5.js","assets/index.dcfb737d.css"])),j=n.div`
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
`;var O=()=>e.createElement(j,null,e.createElement("h3",{className:"animate__animated animate__flipInX animate__slower"},"Hello, world! ((\u{1F47B}) => (minlaxz)) "),e.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",e.createElement(v,null)),e.createElement(I,null,e.createElement(u,null,"You would visit to me with ",e.createElement(c,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you \u{1F974}")),e.createElement(u,{className:"animate__animated animate__flipInX animate__faster animate__delay-1.5s"},"I am a so much responsive page! \u{1F47B}"),e.createElement("p",null,"Source Code is hosted ",e.createElement(c,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(h.exports.Suspense,{fallback:e.createElement(z,null)},e.createElement(k,null),e.createElement(D,null),e.createElement(L,null),e.createElement(T,null),e.createElement(A,null)));const R=n.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`;var B=()=>e.createElement(R,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding \u{1F913} not to distrurb you."),e.createElement(E,null)));const F=`https://api.github.com/repos/${S}/${d}/branches/${C}`,V=()=>async t=>{try{const a=await y.get(F);m.success("Auto fetched and dispatched",{icon:"\u{1F680}",autoClose:3e3,theme:"colored"}),t(f({sha:a.data.commit.sha}))}catch(a){m.error(a.message),t(w({error:a.message}))}},$=()=>{const t=x();return e.useEffect(()=>{window.document.title="minlaxz | Home",window.scrollTo(0,0);const a=b.getState().lastCommit.sha!=="";!a&&t(V()),a&&m.success("phew... won't dispatch again, already have a state.",{icon:"\u{1F60C}"});const i=window.location.hostname,l=localStorage.getItem(i);if(l){const r=_(JSON.parse(l),p=>{p.lastVisitedTime=Date.now()});localStorage.setItem("minlaxz.github.io",JSON.stringify(r))}else{const r={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(r))}},[]),e.createElement(e.Fragment,null,e.createElement(O,null),e.createElement(B,null))};var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$});export{U as D,M as L,J as U,X as i};
