import{r as t}from"./vendor.f7ee82cf.js";import{a as e}from"./index.2885cb15.js";const a=a=>{const[r,s]=t.exports.useState(null),[o,n]=t.exports.useState(null),[c,u]=t.exports.useState(!0);return t.exports.useEffect((()=>{(async()=>{try{const t=await e(a,{timeout:5e3});s(t.data)}catch(t){n(t)}finally{u(!1)}})()}),[a]),{data:r,error:o,loading:c}};export{a as u};