import{g as o,f as s,R as e,h as r,s as d}from"./vendor.085cecd7.js";import{m as l,n as i}from"./index.c8db17b0.js";const u=d.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;var x=()=>{const a=o(),c=s(t=>t.counter.value),n=s(t=>t.toast.toastEnabled);return e.createElement(u,null,e.createElement("div",null,e.createElement("p",null,"State : ",e.createElement("b",null,"Redux Toolkit")),e.createElement("button",{onClick:()=>{a(l()),n&&r.success("dipatched increase")}}," + "),"\xA0 ",c," \xA0",e.createElement("button",{onClick:()=>{a(i()),n&&r.warn("dipatched decrease")}}," - ")))};export{u as ReduxContainer,x as default};
