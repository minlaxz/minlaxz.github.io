import{s as n,R as e,L as s}from"./vendor.085cecd7.js";import{b as m,c as i}from"./index.7b67436b.js";import{A as o}from"./index.3915656f.js";import{N as c}from"./index.b94c23d2.js";import{u}from"./useFetch.8cdd2d9d.js";import"./index.9ff040e8.js";const d=n.div`
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
`,k=()=>{const{data:a,error:l,loading:r}=u("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");return l&&l.message,e.createElement(d,null,e.createElement(c,null,e.createElement(m,{cusName:"Back to Home \u{1F3E1}"}),e.createElement(i,{cusName:"Go to markdown \u{1F976}"})),r?e.createElement("p",null,"If this too long to response please ",e.createElement("b",null,"refresh")," ..."):e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement("b",{style:{fontFamily:"cursive"}},"Recently updated repositories ...")),e.createElement(p,null,a.map(t=>e.createElement(e.Fragment,{key:t.id},e.createElement(g,null,t.name," ",e.createElement(o,{to:t.html_url,text:"View on github"}),e.createElement("p",null,`${t.description}`.slice(0,250),"..."),e.createElement("small",null,"Size : ",t.size,"Kb, Language: ",t.language),"\xA0",e.createElement(s,{to:`/repos/${t.name}`},"Detail ")," =>"),e.createElement("hr",null))))))};export{k as default};
