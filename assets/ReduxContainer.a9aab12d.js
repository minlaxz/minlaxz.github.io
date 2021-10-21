import{g as o,f as s,R as e,h as c,s as d}from"./vendor.085cecd7.js";import{k as l,l as i}from"./index.dfe33cfc.js";const u=d.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;var m=()=>{const a=o(),r=s(t=>t.counter.value),n=s(t=>t.toast.toastEnabled);return e.createElement(u,null,e.createElement("div",null,e.createElement("p",null,"State : ",e.createElement("b",null,"Redux Toolkit")),e.createElement("button",{onClick:()=>{a(l()),n&&c.success("dipatched increase")}},"+"),"\xA0 ",r," \xA0",e.createElement("button",{onClick:()=>{a(i()),n&&c.warn("dipatched decrease")}},"-")))};export{u as ReduxContainer,m as default};
