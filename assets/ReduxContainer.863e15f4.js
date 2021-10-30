import{g as c,f as s,R as e,h as o,s as d}from"./vendor.09fd204b.js";import{n as l,o as i}from"./index.59615b05.js";const u=d.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;var x=()=>{const a=c(),r=s(t=>t.counter.value),n=s(t=>t.toast.toastEnabled);return e.createElement(u,null,e.createElement("div",null,e.createElement("p",null,"State Management: ",e.createElement("b",null,"Redux Toolkit")),e.createElement("button",{onClick:()=>{a(l()),n&&o.success("dipatched increase")}}," + "),"\xA0 ",r," \xA0",e.createElement("button",{onClick:()=>{a(i()),n&&o.warn("dipatched decrease")}}," - ")))};export{x as default};
