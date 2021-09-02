var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(r,a,t)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,l=(e,r)=>{for(var a in r||(r={}))o.call(r,a)&&s(e,a,r[a]);if(t)for(var a of t(r))n.call(r,a)&&s(e,a,r[a]);return e},i=(e,t)=>r(e,a(t));import{s as p,R as d}from"./vendor.da1af473.js";import{N as c}from"./index.a5d2db77.js";import{g as m,h as x}from"./index.d6c6ff25.js";import{U as u}from"./index.49496324.js";import{v as b}from"./index.719931c2.js";const f=p.form`
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
`,w=p.input`
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
`,g=p.button`
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
`,h=()=>{const[e,r]=d.useState(!0),[a,t]=d.useState({email:"",password:""}),[o,n]=d.useState({email:"",password:""});return d.useEffect((()=>{b.exports.isEmail(a.email)&&a.password.length>=6?(r(!1),n({email:"",password:""})):(r(!0),n({email:b.exports.isEmail(a.email)?"":"Email is not valid",password:a.password.length>=6?"":"Password must be at least 6 characters"}))}),[a]),d.createElement(c,null,d.createElement(f,{onSubmit:r=>(async r=>{e||(r.preventDefault(),console.log("ok"))})(r)},d.createElement(u,null),d.createElement(m,{cusName:"Go HOME 🏡"}),d.createElement("div",null,d.createElement(w,{onChange:e=>t(i(l({},a),{email:e.target.value})),placeholder:"Enter email"})),d.createElement("div",null,d.createElement(w,{type:"password",onChange:e=>t(i(l({},a),{password:e.target.value})),placeholder:"Enter Password"})),d.createElement("div",null,d.createElement(g,{type:"submit",disabled:e},"Submit")),o.email||o.password||d.createElement("p",null,o.email||o.password),d.createElement(x,{cusName:"Don't have an account ?"})))};export{h as default};
