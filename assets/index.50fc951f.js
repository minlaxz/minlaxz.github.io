import{h as e,R as t,g as a,v as o}from"./vendor.7f3b8c1d.js";import{N as s}from"./index.6f5045ff.js";import{a as n}from"./userAuthActions.57b73cbb.js";import{a as r}from"./index.14431077.js";import"./index.2885cb15.js";const c=()=>{const c=e(),[l,u]=t.useState(null);t.useState(!1),t.useState(!1),a((e=>e.authUser));const m=()=>{try{const e=JSON.parse(localStorage.getItem("ggwp_user"));(null==e?void 0:e.expireDate)>Date.now()?u(null):u("/login")}catch(e){u("/login")}};return t.useEffect((()=>{m()}),[m]),l?t.createElement(o,{to:l}):t.createElement(s,null,t.createElement(r,{cusName:"Home"}),t.createElement("button",{onClick:e=>(async e=>{e.preventDefault(),c(n())})(e)},"Logout"))};export{c as default};