var f=Object.defineProperty,w=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var h=(r,a,o)=>a in r?f(r,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[a]=o,l=(r,a)=>{for(var o in a||(a={}))v.call(a,o)&&h(r,o,a[o]);if(x)for(var o of x(a))S.call(a,o)&&h(r,o,a[o]);return r},c=(r,a)=>w(r,E(a));import{s as i,h as y,R as e,f as D,n as C}from"./vendor.bfaeb708.js";import{N as j}from"./index.032abe4e.js";import{b as N,e as R}from"./index.9bb5f239.js";import{l as k}from"./userAuthActions.57b73cbb.js";import{a as U}from"./index.2885cb15.js";import{U as F}from"./index.42ca9e36.js";const q=i.form`
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
`,g=i.input`
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
`,J=()=>{const r=y(),[a,o]=e.useState(null),[d,G]=e.useState(!1),[n,p]=e.useState({email:"",password:""}),u=()=>{try{const t=JSON.parse(localStorage.getItem("ggwp_user"));(t==null?void 0:t.expireDate)>Date.now()?o("/dashboard"):o(null)}catch(t){console.log(t),o(null)}},b=async t=>{d||(t.preventDefault(),r(k(n.email,n.password)))},m=D(t=>t.authUser);return e.useEffect(()=>{u()},[u]),a?e.createElement(C,{to:a}):e.createElement(j,null,e.createElement(q,{onSubmit:t=>b(t)},m.reqState.success||e.createElement("small",null,m.reqState.message),e.createElement(F,null),e.createElement(N,{cusName:"Go HOME \u{1F3E1}"}),e.createElement("input",{type:"hidden",name:"_csrf",value:""}),e.createElement("div",null,e.createElement(g,{onChange:t=>p(c(l({},n),{email:t.target.value})),placeholder:"Enter email"})),e.createElement("div",null,e.createElement(g,{type:"password",onChange:t=>p(c(l({},n),{password:t.target.value})),placeholder:"Enter Password"})),e.createElement("div",null,e.createElement("button",{onClick:t=>{t.preventDefault(),U.get("http://localhost:3001/",{withCredentials:!0}).then(s=>{console.log(s)}).catch(s=>{console.log(s)})}},"Get CSRF")),e.createElement("div",null,e.createElement(A,{type:"submit",disabled:d},"Submit")),e.createElement(R,{cusName:"Don't have an account ?"})))};export{J as default};
