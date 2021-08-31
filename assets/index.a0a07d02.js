import{s as e,R as t,L as a}from"./vendor.da1af473.js";import{g as l,a as n}from"./index.7ae6e4a7.js";import{A as r}from"./index.a32fd311.js";import{a as s}from"./index.59ead915.js";import{N as o}from"./index.58e2b3ec.js";const m=e.div`
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
`,u=()=>{const[e,u]=t.useState(null);return t.useEffect((()=>{window.document.title="minlaxz | Repos",(async()=>{const e=await s.get("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");u(e.data),console.log("fetched repos ... ")})()}),[u]),t.createElement(m,null,"Recently updated repositories ...",t.createElement(o,null,t.createElement(l,{cusName:"Back to Home 🏡"}),t.createElement(n,{cusName:"Go to markdown 🥶"})),e?t.createElement(i,null,e.map((e=>t.createElement(t.Fragment,{key:e.id},t.createElement(c,null,e.name," ",t.createElement(r,{to:e.html_url,text:"View on github"}),t.createElement("p",null,`${e.description}`.slice(0,250),"..."),t.createElement("small",null,"Size : ",e.size,"Kb, Language: ",e.language)," ",t.createElement(a,{to:`/repos/${e.name}`},"Detail ")," =>"),t.createElement("hr",null))))):t.createElement("p",null,"If this too long to response please ",t.createElement("b",null,"refresh")," ..."))};export{u as default};
