import{g as c,f as s,R as e,h as r,s as d}from"./vendor.dd7afec9.js";import{k as l,l as i}from"./index.02aaf4fe.js";const u=d.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;var m=()=>{const a=c(),o=s(t=>t.counter.value),n=s(t=>t.toast.toastEnabled);return e.createElement(u,null,e.createElement("div",null,e.createElement("p",null,"State : ",e.createElement("b",null,"Redux Toolkit")),e.createElement("button",{onClick:()=>{a(l()),n&&r.success("dipatched increase")}},"+"),"\xA0 ",o," \xA0",e.createElement("button",{onClick:()=>{a(i()),n&&r.warn("dipatched decrease")}},"-")))};export{u as ReduxContainer,m as default};
