import{s as e,R as t,L as a}from"./vendor.5935c84f.js";import{g as l,a as n}from"./index.a8842600.js";import{A as r}from"./index.96e9221d.js";import{N as s}from"./index.9be9fd1b.js";import{u as m}from"./useFetch.482d3749.js";import"./index.2885cb15.js";const o=e.div`
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
`,p=()=>{const{data:e,error:p,loading:u}=m("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");return p&&p.message,t.createElement(o,null,"Recently updated repositories ...",t.createElement(s,null,t.createElement(l,{cusName:"Back to Home 🏡"}),t.createElement(n,{cusName:"Go to markdown 🥶"})),u?t.createElement("p",null,"If this too long to response please ",t.createElement("b",null,"refresh")," ..."):t.createElement(i,null,e.map((e=>t.createElement(t.Fragment,{key:e.id},t.createElement(c,null,e.name," ",t.createElement(r,{to:e.html_url,text:"View on github"}),t.createElement("p",null,`${e.description}`.slice(0,250),"..."),t.createElement("small",null,"Size : ",e.size,"Kb, Language: ",e.language)," ",t.createElement(a,{to:`/repos/${e.name}`},"Detail ")," =>"),t.createElement("hr",null))))))};export{p as default};