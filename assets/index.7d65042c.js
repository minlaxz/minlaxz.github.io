import{g as c,R as t,f as l,n as i}from"./vendor.215aad49.js";import{N as u}from"./index.1434233d.js";import{a as m}from"./userAuthActions.10b5e6f8.js";import{T as f}from"./index.da11606f.js";import"./index.9ff040e8.js";const x=()=>{const r=c(),[o,a]=t.useState(null);t.useState(!1),t.useState(!1),l(e=>e.authUser);const n=async e=>{e.preventDefault(),r(m())},s=()=>{try{const e=JSON.parse(localStorage.getItem("ggwp_user"));(e==null?void 0:e.expireDate)>Date.now()?a(null):a("/login")}catch{a("/login")}};return t.useEffect(()=>{s()},[s]),o?t.createElement(i,{to:o}):t.createElement(u,null,t.createElement(f,{cusName:"Home"}),t.createElement("button",{onClick:e=>n(e)},"Logout"))};export{x as default};
