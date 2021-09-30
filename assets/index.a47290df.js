import{s as n,R as e,L as s}from"./vendor.bfaeb708.js";import{b as i,c as o}from"./index.9bb5f239.js";import{A as m}from"./index.1978d190.js";import{N as c}from"./index.9345873f.js";import{u}from"./useFetch.068f46e6.js";import"./index.2885cb15.js";const d=n.div`
margin: 0;
padding: 0;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-start;
width: 100vw;
height: auto;
`,p=n.ul`
list-style-type: lower-greek;
margin-block-start: 0;
margin-block-end: 0;
`,g=n.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,w=()=>{const{data:l,error:a,loading:r}=u("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");return a&&a.message,e.createElement(d,null,"Recently updated repositories ...",e.createElement(c,null,e.createElement(i,{cusName:"Back to Home \u{1F3E1}"}),e.createElement(o,{cusName:"Go to markdown \u{1F976}"})),r?e.createElement("p",null,"If this too long to response please ",e.createElement("b",null,"refresh")," ..."):e.createElement(p,null,l.map(t=>e.createElement(e.Fragment,{key:t.id},e.createElement(g,null,t.name," ",e.createElement(m,{to:t.html_url,text:"View on github"}),e.createElement("p",null,`${t.description}`.slice(0,250),"..."),e.createElement("small",null,"Size : ",t.size,"Kb, Language: ",t.language),"\xA0",e.createElement(s,{to:`/repos/${t.name}`},"Detail ")," =>"),e.createElement("hr",null)))))};export{w as default};
