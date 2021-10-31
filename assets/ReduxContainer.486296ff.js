import{g as d,f as s,R as e,h as o,s as c}from"./vendor.fe7edddc.js";import{n as l,o as i}from"./index.95e92e4e.js";const u=c.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;var x=()=>{const a=d(),r=s(t=>t.counter.value),n=s(t=>t.toast.toastEnabled);return e.createElement(u,null,e.createElement("div",null,e.createElement("p",null,"State Management: ",e.createElement("b",null,"Redux Toolkit")),e.createElement("button",{onClick:()=>{a(l()),n&&o.success("dipatched increase")}}," + "),"\xA0 ",r," \xA0",e.createElement("button",{onClick:()=>{a(i()),n&&o.warn("dipatched decrease")}}," - ")))};export{x as default};
