import{s as e,j as t,R as l}from"./vendor.4f34775f.js";import{a as n}from"./index.2885cb15.js";import{T as a,g as r}from"./index.f90b7844.js";const m=e.div`
display: flex;
flex-flow: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 90vh;
background-color: #fff;
`,c=e.pre`
white-space: pre-wrap;
/* word-break: break-all; */
text-align: center;
`,o=()=>{let{name:e}=t();const[o,i]=l.useState(null);return l.useEffect((()=>{"minlaxz"!==e?(async()=>{const t=await n.get(`https://api.github.com/repos/minlaxz/${e}`);i(t.data)})():i({name:e})}),[]),o?l.createElement(l.Fragment,null,l.createElement(m,null,"minlaxz"===o.name?l.createElement("pre",null,"This is personal repo"):l.createElement(l.Fragment,null,l.createElement("pre",null,"Name : ",o.name),l.createElement("pre",null,"Forked : ",o.fork?"True":"False"),l.createElement(c,null,"Description : ",o.description),l.createElement("pre",null,"Language : ",o.language),l.createElement("pre",null,"Repo Size : ",o.size," Kb"),l.createElement(c,null,"GithubURL : ",l.createElement("a",{href:o.html_url},o.html_url)),l.createElement("pre",null,"Website : ",l.createElement("a",{href:o.homepage},o.homepage)||"Not provided.")),l.createElement("hr",null),l.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},l.createElement(a,{cusName:"Back to Repo List 👻"}),l.createElement(r,{cusName:"Go to Home 🏡"})))):l.createElement(l.Fragment,null,l.createElement("p",null,"Fetching..."),l.createElement(a,null),l.createElement(r,null))};export{o as default};
