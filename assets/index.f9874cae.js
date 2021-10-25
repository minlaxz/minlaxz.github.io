import{R as e,f as h,s as l,l as o,d as g,h as c,g as x,p as E}from"./vendor.085cecd7.js";import{_ as r,T as f,g as _,a as b,s as w}from"./index.7b67436b.js";import{a as y}from"./index.9ff040e8.js";import{A as s}from"./index.3915656f.js";import{S as v}from"./index.538cacbe.js";const S=()=>{const[t,a]=e.useState(new Date),n=e.useCallback(()=>{a(new Date)});return e.useEffect(()=>{let i=setInterval(()=>n(),1e3);return()=>clearInterval(i)},[n]),e.createElement("span",null,t.toLocaleTimeString())},d="minlaxz.github.io",C="minlaxz",T="main",z=()=>{const t=h(a=>a.lastCommit);return e.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"}},e.createElement("small",null,'Last Commit Sha on "Main": \xA0'),t.error?e.createElement("span",{style:{color:"red"}},t.error):t.loading?e.createElement("span",{style:{color:"orange"}},"Fetching last commit SHA..."):e.createElement(s,{to:`https://github.com/minlaxz/${d}/commit/${t.sha}`,text:`${t.sha.slice(0,7)}`}))};var I=()=>e.createElement("div",null,"Loading Components...");const k=l.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`,u=l.pre`
/* margin-left:0.5em; */
/* margin-right: 0.5em; */
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,A=o(()=>r(()=>import("./AvailableRoutes.22bd898d.js"),["assets/AvailableRoutes.22bd898d.js","assets/vendor.085cecd7.js","assets/index.7b67436b.js","assets/index.dcfb737d.css","assets/index.538cacbe.js"])),D=o(()=>r(()=>import("./Backends.3dafd4bd.js"),["assets/Backends.3dafd4bd.js","assets/vendor.085cecd7.js","assets/index.3915656f.js","assets/index.574118bd.css","assets/index.538cacbe.js","assets/index.7b67436b.js","assets/index.dcfb737d.css"])),j=o(()=>r(()=>import("./BuildWith.a3aba5af.js"),["assets/BuildWith.a3aba5af.js","assets/vendor.085cecd7.js"])),L=o(()=>r(()=>import("./ReduxContainer.942d40de.js"),["assets/ReduxContainer.942d40de.js","assets/vendor.085cecd7.js","assets/index.7b67436b.js","assets/index.dcfb737d.css"])),B=l.div`
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
`;var F=()=>e.createElement(B,null,e.createElement(v,{className:"animate__animated animate__flipInX animate__slower",fontSize:"14px"}," ( minlaxz = (\xA0) => async dispatch => \u{1F47B} ) "),e.createElement("div",{style:{marginBottom:"1em",fontFamily:"fantasy"}},e.createElement("small",null,"Here is ",e.createElement(s,{to:"https://github.com/minlaxz",text:"My Github"}))),e.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",e.createElement(S,null)),e.createElement(k,null,e.createElement(u,null,"You would visit to me with ",e.createElement(s,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you \u{1F974}")),e.createElement(u,{className:"animate__animated animate__flipInX animate__faster animate__delay-1.5s"},"I am a so much responsive page! \u{1F47B}"),e.createElement("p",null,"Source Code is hosted ",e.createElement(s,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(g.exports.Suspense,{fallback:e.createElement(I,null)},e.createElement(A,null),e.createElement(D,null),e.createElement(j,null),e.createElement(z,null),e.createElement(L,null)));const O=l.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`;var R=()=>e.createElement(O,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding \u{1F913} not to distrurb you."),e.createElement(f,null)));const $=`https://api.github.com/repos/${C}/${d}/branches/${T}`,P=()=>async t=>{try{const a=await y.get($);c.success("Auto fetched and dispatched",{icon:"\u{1F680}",autoClose:3e3,theme:"colored"}),t(_({sha:a.data.commit.sha}))}catch(a){c.error(a.message),t(b({error:a.message}))}},M=()=>{const t=x();return e.useEffect(()=>{window.document.title="minlaxz | Home",window.scrollTo(0,0);const a=w.getState().lastCommit.sha!=="";!a&&t(P()),a&&c.success("phew... won't dispatch again, already have a state.",{icon:"\u{1F60C}"});const n=window.location.hostname,i=localStorage.getItem(n);if(i){const m=E(JSON.parse(i),p=>{p.lastVisitedTime=Date.now()});localStorage.setItem("minlaxz.github.io",JSON.stringify(m))}else{const m={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(m))}},[]),e.createElement(e.Fragment,null,e.createElement(F,null),e.createElement(R,null))};export{M as default};
