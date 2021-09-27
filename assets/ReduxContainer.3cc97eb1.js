import{i as e,h as t,g as n,R as a,s as r}from"./vendor.804426a9.js";const l=r.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;var o=()=>{var r,o;const s=t(),u=n((e=>e.pointss)),d=n((e=>e.user)),i=n((e=>e.authUser));return a.createElement(l,null,a.createElement("div",null,a.createElement("p",null,"This is about ",a.createElement("b",null,"Redux")," state management"),a.createElement("button",{onClick:()=>{return s((e.success(`${t||1} incremented`),{type:"INCREMENT",payload:t||1}));var t}},"+"),"  ",u.value,"  ",a.createElement("button",{onClick:()=>{return s((e.warn(`${null!=t?t:1} decremented`),{type:"DECREMENT",payload:t||1}));var t}},"-")),a.createElement("div",null,null!=(o=null==(r=null==d?void 0:d.users[0])?void 0:r.name)?o:[].toString()),a.createElement("code",{style:{fontSize:"11px"}},i.userState.token?"Logged in":"Logged out"))};export{l as ReduxContainer,o as default};
