import{s as e,R as t}from"./vendor.da1af473.js";import{N as a}from"./index.a5d2db77.js";import{N as n}from"./index.58e2b3ec.js";import{g as o}from"./index.d6c6ff25.js";import{v as s}from"./index.719931c2.js";import{a as r}from"./index.59ead915.js";const l=e.input`
    margin: 0.5em;
    padding: 0.5em;
    width: 50vw;
    transition: all 0.3s ease;
    @media only screen and (max-width: ${e=>e.b_points}px) {
        width: 70%;
    }
`;var c="_short_link_button_1yrq4_1",i="_disabled_1yrq4_21",p="_short_link_result_1yrq4_26";const m=()=>{const[e,m]=t.useState(""),[d,u]=t.useState(!1),[h,_]=t.useState(""),[f,b]=t.useState(!1);t.useEffect((()=>{s.exports.isURL(e,{protocols:["http","https"],require_protocol:!0})?(m(e),u(!1)):u(!0)}),[e]);return t.createElement(a,null,t.createElement("h3",null,"it's me link shortener 👻 "),t.createElement(l,{b_points:"768",value:e,onChange:e=>m(e.target.value)}),t.createElement("button",{onClick:async()=>{b(!0),m(""),_("");const t="https://api.octocat.tk/r";console.log(t);try{const a=await r.post(`${t}`,{Headers:{"Content-Type":"application/json"},url:e});_(a.data.slug)}catch(a){console.log(a)}b(!1)},className:`${c} ${d&&`${i}`}`,disabled:d}," Shorten"),h&&t.createElement(t.Fragment,null,t.createElement("p",{className:p,onClick:e=>{navigator.clipboard.writeText(`https://api.octocat.tk/r/${h}`),e.target.innerHTML=`<b>Copied https://api.octocat.tk/r/${h}</b>`}}," ",`https://api.octocat.tk/r/${h}`," ",t.createElement("b",{style:{color:"green"}},"click to copy"))),f&&t.createElement("span",null,t.createElement("i",{className:"fas fa-spinner fa-spin"})),t.createElement(n,null,t.createElement(o,{cusName:"Well, Go back 🏡"})))};export{m as default};
