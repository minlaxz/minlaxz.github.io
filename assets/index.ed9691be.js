var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,s=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))n.call(t,r)&&l(e,r,t[r]);return e},i=(e,a)=>t(e,r(a));"undefined"!=typeof require&&require;import{s as c,h as p,R as d,i as u,k as m}from"./vendor.4f34775f.js";import{N as x}from"./index.f1d4da9e.js";import{g as b,h as f}from"./index.f90b7844.js";import{l as h}from"./userAuthActions.57b73cbb.js";import{a as g}from"./index.2885cb15.js";const w=c.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 0px 10px; */
    width: 100vw;
    height: 100vh;
    margin: 0px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`,v=c.input`
    width: 20vw;
    height: 40px;
    padding: 0px 10px;
    margin: 10px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    @media only screen and (max-width: 768px) {
        width: 70vw;
    }
    @media only screen and (max-width: 1140px) {
        width: 40vw;
    }
`,E=c.button`
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    margin: 10px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    background-color: #f5f5f5;
    color: dodgerblue;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
    ${({disabled:e})=>e&&"\n    color:grey;\n    background-color:#f5f5f5;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.0);\n    &:hover {\n        cursor:not-allowed;\n    };\n    "}
`,y=()=>{const e=p(),[t,r]=d.useState(null),[a,o]=d.useState(!1),[n,l]=d.useState({email:"",password:""}),c=()=>{try{const e=JSON.parse(localStorage.getItem("ggwp_user"));(null==e?void 0:e.expireDate)>Date.now()?r("/dashboard"):r(null)}catch(e){console.log(e),r(null)}},y=u((e=>e.authUser));return d.useEffect((()=>{c()}),[c]),t?d.createElement(m,{to:t}):d.createElement(x,null,d.createElement(w,{onSubmit:t=>(async t=>{a||(t.preventDefault(),e(h(n.email,n.password)))})(t)},y.reqState.success||d.createElement("small",null,y.reqState.message),d.createElement(b,{cusName:"Go HOME 🏡"}),d.createElement("input",{type:"hidden",name:"_csrf",value:""}),d.createElement("div",null,d.createElement(v,{onChange:e=>l(i(s({},n),{email:e.target.value})),placeholder:"Enter email"})),d.createElement("div",null,d.createElement(v,{type:"password",onChange:e=>l(i(s({},n),{password:e.target.value})),placeholder:"Enter Password"})),d.createElement("div",null,d.createElement("button",{onClick:e=>{e.preventDefault(),g.get("http://localhost:3001/",{withCredentials:!0}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}},"Get CSRF")),d.createElement("div",null,d.createElement(E,{type:"submit",disabled:a},"Submit")),d.createElement(f,{cusName:"Don't have an account ?"})))};export{y as default};
