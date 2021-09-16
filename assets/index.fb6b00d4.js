import{s as e,R as t,L as a}from"./vendor.f7ee82cf.js";import{a as l}from"./index.2885cb15.js";import{g as n,a as r}from"./index.2a371691.js";import{A as s}from"./index.9bb169c2.js";import{N as o}from"./index.f26576d2.js";const m=e.div`
margin: 0;
padding: 0;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-start;
width: 100vw;
height: auto;
`,i=e.ul`
list-style-type: lower-greek;
margin-block-start: 0;
margin-block-end: 0;
`,c=e.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,u=()=>{const[e,u]=t.useState(null);return t.useEffect((()=>{window.document.title="minlaxz | Repos",(async()=>{const e=await l.get("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");u(e.data),console.log("fetched repos ... ")})()}),[u]),t.createElement(m,null,"Recently updated repositories ...",t.createElement(o,null,t.createElement(n,{cusName:"Back to Home 🏡"}),t.createElement(r,{cusName:"Go to markdown 🥶"})),e?t.createElement(i,null,e.map((e=>t.createElement(t.Fragment,{key:e.id},t.createElement(c,null,e.name," ",t.createElement(s,{to:e.html_url,text:"View on github"}),t.createElement("p",null,`${e.description}`.slice(0,250),"..."),t.createElement("small",null,"Size : ",e.size,"Kb, Language: ",e.language)," ",t.createElement(a,{to:`/repos/${e.name}`},"Detail ")," =>"),t.createElement("hr",null))))):t.createElement("p",null,"If this too long to response please ",t.createElement("b",null,"refresh")," ..."))};export{u as default};
