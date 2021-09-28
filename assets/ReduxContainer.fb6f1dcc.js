import{i as e,h as t,g as n,R as l,s as a}from"./vendor.f214a426.js";import{k as r,l as o}from"./index.9b92a233.js";const u=a.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;var s=()=>{var a,s;const c=t(),d=n((e=>e.pointss)),i=n((e=>e.user)),m=n((e=>e.authUser)),E=n((e=>e.counter.value));return l.createElement(u,null,l.createElement("div",null,l.createElement("p",null,"This is about ",l.createElement("b",null,"Redux")," state management"),l.createElement("button",{onClick:()=>{return c((e.success(`${t||1} incremented`),{type:"INCREMENT",payload:t||1}));var t}},"+"),"  ",d.value,"  ",l.createElement("button",{onClick:()=>{return c((e.warn(`${null!=t?t:1} decremented`),{type:"DECREMENT",payload:t||1}));var t}},"-")),l.createElement("div",null,l.createElement("p",null,"About ",l.createElement("b",null,"Redux Toolkit")),l.createElement("button",{onClick:()=>c(r())},"+"),"  ",E,"  ",l.createElement("button",{onClick:()=>c(o())},"-")),l.createElement("p",null,"Total ",d.value+E),l.createElement("div",null,null!=(s=null==(a=null==i?void 0:i.users[0])?void 0:a.name)?s:[].toString()),l.createElement("code",{style:{fontSize:"11px"}},m.userState.token?"Logged in":"Logged out"))};export{u as ReduxContainer,s as default};
