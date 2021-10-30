import{h as d,i as u,_ as i,u as p,s as h,j as x}from"./index.59615b05.js";import{h as o,R as e,s,l as r,g,d as f}from"./vendor.09fd204b.js";import{a as E}from"./index.9ff040e8.js";import{N as b}from"./index.ee7f19ac.js";import{S as m,P as w,e as y}from"./index.33ffd995.js";import{A as l}from"./index.650f1912.js";const _="minlaxz.github.io",v="minlaxz",z="main",j=`https://api.github.com/repos/${v}/${_}/branches/${z}`,S=()=>async t=>{try{const a=await E.get(j);o.success("Auto fetched and dispatched",{icon:"\u{1F680}",autoClose:3e3,theme:"colored"}),t(d({sha:a.data.commit.sha}))}catch(a){o.error(a.message),t(u({error:a.message}))}},C=()=>{const[t,a]=e.useState(new Date),n=e.useCallback(()=>{a(new Date)});return e.useEffect(()=>{let c=setInterval(()=>n(),1e3);return()=>clearInterval(c)},[n]),e.createElement("span",null,t.toLocaleTimeString())},A=s.img`
width: 30vw;
margin: 10px;
@media only screen and (max-width: 1024px) {
    width: 50vw;
}
@media only screen and (max-width: 600px) {
    width: 100vw;
}
`,D=s.img`
width: 15vw;
margin: 1em;
@media only screen and (max-width: 1024px) {
    width: 30vw;
}
@media only screen and (max-width: 600px) {
    width: 60vw;
}
`;s.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;const F=s.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`,I=r(()=>i(()=>import("./BuildWith.33886958.js"),["assets/BuildWith.33886958.js","assets/vendor.09fd204b.js"])),T=r(()=>i(()=>import("./index.43b07080.js"),["assets/index.43b07080.js","assets/vendor.09fd204b.js","assets/index.650f1912.js","assets/index.574118bd.css","assets/index.59615b05.js","assets/index.dcfb737d.css","assets/index.9ff040e8.js","assets/index.ee7f19ac.js","assets/index.33ffd995.js"])),k=r(()=>i(()=>import("./AvailableRoutes.1a0b9360.js"),["assets/AvailableRoutes.1a0b9360.js","assets/vendor.09fd204b.js","assets/index.59615b05.js","assets/index.dcfb737d.css","assets/index.33ffd995.js"])),L=r(()=>i(()=>import("./ReduxContainer.863e15f4.js"),["assets/ReduxContainer.863e15f4.js","assets/vendor.09fd204b.js","assets/index.59615b05.js","assets/index.dcfb737d.css"])),R=r(()=>i(()=>import("./Backends.cee081ef.js"),["assets/Backends.cee081ef.js","assets/vendor.09fd204b.js","assets/index.650f1912.js","assets/index.574118bd.css","assets/index.33ffd995.js","assets/index.59615b05.js","assets/index.dcfb737d.css"]));s.div`
width: ${t=>t.width};
`;const P=()=>{let t=p("(min-width: 768px)");const a=g();return e.useEffect(()=>{const n=h.getState().lastCommit.sha!=="";!n&&a(S()),n&&o.success("phew... won't dispatch again, already have a state.",{icon:"\u{1F60C}"})},[]),e.createElement(b,{flow:t?"row":"column",justifyContent:t?"space-evenly":"flex-start",alignItems:t?"flex-start":"center",height:"100%"},e.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.createElement(m,{fontSize:"15px",fontWeight:"bolder"}," minlaxz = (\xA0) => async dispatch => \u{1F680} "),e.createElement("div",null,e.createElement("p",null,"Here is ",e.createElement(l,{to:"https://github.com/minlaxz",text:"My Github"})),e.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",e.createElement(C,null)),e.createElement(m,{fontSize:"14px"},"This is an automated profile.")),e.createElement("div",{style:{maxWidth:"100%"}},e.createElement("p",{style:{margin:"10px",padding:"10px",fontFamily:"serif"}},"My name is ",e.createElement("b",null,"Min Min Latt"),", \xA0",e.createElement("span",null,"a self-taught software developer.")),e.createElement("p",{style:{margin:"10px",padding:"10px",fontFamily:"monospace"}},"Use to create stuffs \u{1F680} by reading documentations \u{1F5D2}\uFE0F and fixed bugs \u{1F41B} by following discussions and thoughts \u{1F4AD}.")),e.createElement(D,{src:"https://raw.githubusercontent.com/minlaxz/minlaxz/devcard/devcard.svg",alt:"Dev Card"}),e.createElement(F,null,e.createElement(w,null,"You would visit to me with ",e.createElement(l,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you \u{1F974}")),e.createElement("p",null,"Source Code is hosted ",e.createElement(l,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(f.exports.Suspense,{fallback:e.createElement(y,null)},e.createElement(T,null),e.createElement(L,null),e.createElement(I,null),e.createElement(k,null),e.createElement(R,null)),e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am the last one \u{1F913} not to distrurb you."),e.createElement(x,null))),e.createElement(A,{src:"https://raw.githubusercontent.com/minlaxz/minlaxz/github-metrics/github-metrics.svg",alt:"Github Metrics"}))};var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});export{N as i,_ as r};
