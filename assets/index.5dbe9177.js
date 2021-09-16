import{s as e,R as t}from"./vendor.f7ee82cf.js";import{g as a}from"./index.59082b13.js";const n=e.div`
margin:0;
padding:0;
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
height: 100vh;
`,l=e.pre`
white-space: pre-wrap;
font-size: 0.8rem;
min-width: 0;
`,o=e.code`
color: red;
`,c=e.ul`
list-style-type: lower-greek;
`,r=e.li`
font-size: 18px;
margin: 0.4em;
padding: 0.4em;
@media only screen and (max-width: 600px) {
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
}

`,i=e.div`
margin: 0.5em;
padding: 0.5em;
`,s=({tech:e})=>t.createElement(r,null,e),m=({children:e,head:a})=>t.createElement(i,null,a,t.createElement(c,null,e)),d=()=>(t.useEffect((()=>{window.document.title="minlaxz | About this"}),[]),t.createElement(n,null,t.createElement(m,{head:"I've used the following tools"},t.createElement(s,{tech:"React for fontend"}),t.createElement(s,{tech:"Redux for state management"}),t.createElement(s,{tech:"styled componenet for CSS"}),t.createElement(s,{tech:"Vite as build tool"}),t.createElement(s,{tech:"React hash router for frontend routing"})),t.createElement(m,{head:"I've used these for hosting"},t.createElement(s,{tech:"This is hosted on github pages"}),t.createElement(s,{tech:"This is also hosted on cloudflare pages"}),t.createElement(s,{tech:"used CNAME for domain routing"})),t.createElement(m,{head:"What is cool ..?"},t.createElement(s,{tech:"Clock is about Javascript Closures"}),t.createElement(s,{tech:"Repo page is about axios with useEffect()"}),t.createElement(s,{tech:"Markdown page is about map() and filter()"}),t.createElement(s,{tech:"gh-pages package is cool but this used Github actions workflow"})),t.createElement(l,null,t.createElement(o,null,"This have two backends 🤪")),t.createElement(a,{cusName:"Back to Home"})));export{d as default};
