import{R as e,f as g,s as n,l as o,d as h,h as m,g as x,p as _}from"./vendor.dd7afec9.js";import{_ as s,T as E,g as f,a as w,s as b}from"./index.02aaf4fe.js";import{a as y}from"./index.2885cb15.js";import{A as c}from"./index.e76693d7.js";const v=()=>{const[t,a]=e.useState(new Date),i=e.useCallback(()=>{a(new Date)});return e.useEffect(()=>{let l=setInterval(()=>i(),1e3);return()=>clearInterval(l)},[i]),e.createElement("span",null,t.toLocaleTimeString())},d="minlaxz.github.io",S="minlaxz",C="main",T=()=>{const t=g(a=>a.lastCommit);return e.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"}},e.createElement("small",null,'Last Commit Sha on "Main": \xA0'),t.error?e.createElement("span",{style:{color:"red"}},t.error):t.loading?e.createElement("span",{style:{color:"orange"}},"Fetching last commit SHA..."):e.createElement(c,{to:`https://github.com/minlaxz/${d}/commit/${t.sha}`,text:`${t.sha.slice(0,7)}`}))};var z=()=>e.createElement("div",null,"Loading Components...");const J=n.ul`
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
`,k=o(()=>s(()=>import("./AvailableRoutes.069f1a60.js"),["assets/AvailableRoutes.069f1a60.js","assets/vendor.dd7afec9.js","assets/index.02aaf4fe.js","assets/index.dcfb737d.css","assets/index.2885cb15.js","assets/index.e76693d7.js","assets/index.574118bd.css"])),D=o(()=>s(()=>import("./Backends.204a92b9.js"),["assets/Backends.204a92b9.js","assets/vendor.dd7afec9.js","assets/index.e76693d7.js","assets/index.574118bd.css","assets/index.02aaf4fe.js","assets/index.dcfb737d.css","assets/index.2885cb15.js"])),A=o(()=>s(()=>import("./BuildWith.bb5e65be.js"),["assets/BuildWith.bb5e65be.js","assets/vendor.dd7afec9.js"])),L=o(()=>s(()=>import("./ReduxContainer.ae026b2d.js"),["assets/ReduxContainer.ae026b2d.js","assets/vendor.dd7afec9.js","assets/index.02aaf4fe.js","assets/index.dcfb737d.css"])),j=n.div`
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
`;var O=()=>e.createElement(j,null,e.createElement("h4",{style:{fontFamily:"cursive"},className:"animate__animated animate__flipInX animate__slower"},"( minlaxz = (\xA0) => async dispatch => \u{1F47B} ) "),e.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",e.createElement(v,null)),e.createElement(I,null,e.createElement(u,null,"You would visit to me with ",e.createElement(c,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you \u{1F974}")),e.createElement(u,{className:"animate__animated animate__flipInX animate__faster animate__delay-1.5s"},"I am a so much responsive page! \u{1F47B}"),e.createElement("p",null,"Source Code is hosted ",e.createElement(c,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(h.exports.Suspense,{fallback:e.createElement(z,null)},e.createElement(k,null),e.createElement(D,null),e.createElement(A,null),e.createElement(T,null),e.createElement(L,null)));const F=n.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`;var R=()=>e.createElement(F,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding \u{1F913} not to distrurb you."),e.createElement(E,null)));const B=`https://api.github.com/repos/${S}/${d}/branches/${C}`,V=()=>async t=>{try{const a=await y.get(B);m.success("Auto fetched and dispatched",{icon:"\u{1F680}",autoClose:3e3,theme:"colored"}),t(f({sha:a.data.commit.sha}))}catch(a){m.error(a.message),t(w({error:a.message}))}},$=()=>{const t=x();return e.useEffect(()=>{window.document.title="minlaxz | Home",window.scrollTo(0,0);const a=b.getState().lastCommit.sha!=="";!a&&t(V()),a&&m.success("phew... won't dispatch again, already have a state.",{icon:"\u{1F60C}"});const i=window.location.hostname,l=localStorage.getItem(i);if(l){const r=_(JSON.parse(l),p=>{p.lastVisitedTime=Date.now()});localStorage.setItem("minlaxz.github.io",JSON.stringify(r))}else{const r={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(r))}},[]),e.createElement(e.Fragment,null,e.createElement(O,null),e.createElement(R,null))};var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$});export{U as D,M as L,J as U,X as i};
