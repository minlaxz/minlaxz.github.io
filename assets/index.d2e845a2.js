import{s as e,j as t,R as l}from"./vendor.f7ee82cf.js";import"./index.2885cb15.js";import{T as r,g as a}from"./index.420ba8a6.js";import{N as n}from"./index.3d3b6559.js";import{u as m}from"./useFetch.c83ac6f2.js";const o=e.pre`
white-space: pre-wrap;
/* word-break: break-all; */
text-align: center;
`,c=()=>{let{name:e}=t();const{data:c,error:s,loading:i}=m(`https://api.github.com/repos/minlaxz/${e}`);return s&&console.log(s),i?l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement("p",null,"Fetching....."),l.createElement(r,null),l.createElement(a,null))):l.createElement(n,null,"minlaxz"===c.name?l.createElement("pre",null,"This is personal repo"):l.createElement(l.Fragment,null,l.createElement("pre",null,"Name : ",c.name),l.createElement("pre",null,"Forked : ",c.fork?"True":"False"),l.createElement(o,null,"Description : ",c.description),l.createElement("pre",null,"Language : ",c.language),l.createElement("pre",null,"Repo Size : ",c.size," Kb"),l.createElement(o,null,"GithubURL : ",l.createElement("a",{href:c.html_url},c.html_url)),l.createElement("pre",null,"Website : ",l.createElement("a",{href:c.homepage},c.homepage)||"Not provided.")),l.createElement("hr",null),l.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},l.createElement(r,{cusName:"Back to Repo List 👻"}),l.createElement(a,{cusName:"Go to Home 🏡"})))};export{c as default};