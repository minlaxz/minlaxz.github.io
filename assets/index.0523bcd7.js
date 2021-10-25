var f=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var x=(r,a,o)=>a in r?f(r,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[a]=o,l=(r,a)=>{for(var o in a||(a={}))E.call(a,o)&&x(r,o,a[o]);if(m)for(var o of m(a))v.call(a,o)&&x(r,o,a[o]);return r},c=(r,a)=>b(r,w(a));import{s as i,g as y,R as e,f as S,n as D}from"./vendor.085cecd7.js";import{N as C}from"./index.d1d54eb1.js";import{b as j,e as N}from"./index.7b67436b.js";import{l as R}from"./userAuthActions.10b5e6f8.js";import{a as k}from"./index.9ff040e8.js";import{U as F}from"./index.17f122cf.js";const U=i.form`
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
`,h=i.input`
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
`,A=i.button`
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
    ${({disabled:r})=>r&&`
    color:grey;
    background-color:#f5f5f5;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.0);
    &:hover {
        cursor:not-allowed;
    };
    `}
`,J=()=>{const r=y(),[a,o]=e.useState(null),[d,G]=e.useState(!1),[n,p]=e.useState({email:"",password:""}),u=()=>{try{const t=JSON.parse(localStorage.getItem("ggwp_user"));(t==null?void 0:t.expireDate)>Date.now()?o("/dashboard"):o(null)}catch(t){console.log(t),o(null)}},g=async t=>{d||(t.preventDefault(),r(R(n.email,n.password)))};return S(t=>t.authUser),e.useEffect(()=>{u()},[u]),a?e.createElement(D,{to:a}):e.createElement(C,null,e.createElement(U,{onSubmit:t=>g(t)},e.createElement(F,null),e.createElement(j,{cusName:"Go HOME \u{1F3E1}"}),e.createElement("input",{type:"hidden",name:"_csrf",value:""}),e.createElement("div",null,e.createElement(h,{onChange:t=>p(c(l({},n),{email:t.target.value})),placeholder:"Enter email"})),e.createElement("div",null,e.createElement(h,{type:"password",onChange:t=>p(c(l({},n),{password:t.target.value})),placeholder:"Enter Password"})),e.createElement("div",null,e.createElement("button",{onClick:t=>{t.preventDefault(),k.get("http://localhost:3001/",{withCredentials:!0}).then(s=>{console.log(s)}).catch(s=>{console.log(s)})}},"Get CSRF")),e.createElement("div",null,e.createElement(A,{type:"submit",disabled:d},"Submit")),e.createElement(N,{cusName:"Don't have an account ?"})))};export{J as default};
