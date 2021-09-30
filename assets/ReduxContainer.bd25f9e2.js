import{h as e,f as t,R as a,i as n,s as r}from"./vendor.bfaeb708.js";import{k as l,l as o}from"./index.8b032ab5.js";const s=r.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;var d=()=>{const r=e(),d=t((e=>e.counter.value)),c=t((e=>e.toast.toastEnabled));return a.createElement(s,null,a.createElement("div",null,a.createElement("p",null,"State : ",a.createElement("b",null,"Redux Toolkit")),a.createElement("button",{onClick:()=>{r(l()),c&&n.success("dipatched increase")}},"+"),"  ",d,"  ",a.createElement("button",{onClick:()=>{r(o()),c&&n.warn("dipatched decrease")}},"-")))};export{s as ReduxContainer,d as default};
