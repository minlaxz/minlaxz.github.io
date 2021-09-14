import{R as e,s as t,g as n,h as r}from"./vendor.12814481.js";import{A as a}from"./index.44f80c3f.js";import{a as o}from"./index.2885cb15.js";import{T as i,a as l,b as c,c as u,d as s,e as f,f as m}from"./index.4ee939ae.js";function p(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function d(e){return!!e&&!!e[Z]}function h(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===ee}(e)||Array.isArray(e)||!!e[Q]||!!e.constructor[Q]||E(e)||x(e))}function y(e,t,n){void 0===n&&(n=!1),0===g(e)?(n?Object.keys:te)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function g(e){var t=e[Z];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:E(e)?2:x(e)?3:0}function v(e,t){return 2===g(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function b(e,t,n){var r=g(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function E(e){return H&&e instanceof Map}function x(e){return Y&&e instanceof Set}function w(e){return e.o||e.t}function _(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=ne(e);delete t[Z];for(var n=te(t),r=0;r<n.length;r++){var a=n[r],o=t[a];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[a]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[a]})}return Object.create(Object.getPrototypeOf(e),t)}function P(e,t){return void 0===t&&(t=!1),S(e)||d(e)||!h(e)||(g(e)>1&&(e.set=e.add=e.clear=e.delete=O),Object.freeze(e),t&&y(e,(function(e,t){return P(t,!0)}),!0)),e}function O(){p(2)}function S(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function j(e){var t=re[e];return t||p(18,e),t}function A(){return V}function k(e,t){t&&(j("Patches"),e.u=[],e.s=[],e.v=t)}function z(e){I(e),e.p.forEach(F),e.p=null}function I(e){e===V&&(V=e.l)}function D(e){return V={p:[],l:V,h:e,m:!0,_:0}}function F(e){var t=e[Z];0===t.i||1===t.i?t.j():t.O=!0}function N(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||j("ES5").S(t,e,r),r?(n[Z].P&&(z(t),p(4)),h(e)&&(e=R(t,e),t.l||T(t,e)),t.u&&j("Patches").M(n[Z],e,t.u,t.s)):e=R(t,n,[]),z(t),t.u&&t.v(t.u,t.s),e!==B?e:void 0}function R(e,t,n){if(S(t))return t;var r=t[Z];if(!r)return y(t,(function(a,o){return C(e,r,t,a,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return T(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var a=4===r.i||5===r.i?r.o=_(r.k):r.o;y(3===r.i?new Set(a):a,(function(t,o){return C(e,r,a,t,o,n)})),T(e,a,!1),n&&e.u&&j("Patches").R(r,n,e.u,e.s)}return r.o}function C(e,t,n,r,a,o){if(d(a)){var i=R(e,a,o&&t&&3!==t.i&&!v(t.D,r)?o.concat(r):void 0);if(b(n,r,i),!d(i))return;e.m=!1}if(h(a)&&!S(a)){if(!e.h.F&&e._<1)return;R(e,a),t&&t.A.l||T(e,a)}}function T(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&P(t,n)}function L(e,t){var n=e[Z];return(n?w(n):e)[t]}function M(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function X(e){e.P||(e.P=!0,e.l&&X(e.l))}function K(e){e.o||(e.o=_(e.t))}function W(e,t,n){var r=E(t)?j("MapSet").N(t,n):x(t)?j("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:A(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},a=r,o=ae;n&&(a=[r],o=oe);var i=Proxy.revocable(a,o),l=i.revoke,c=i.proxy;return r.k=c,r.j=l,c}(t,n):j("ES5").J(t,n);return(n?n.A:A()).p.push(r),r}function $(e){return d(e)||p(22,e),function e(t){if(!h(t))return t;var n,r=t[Z],a=g(t);if(r){if(!r.P&&(r.i<4||!j("ES5").K(r)))return r.t;r.I=!0,n=J(t,a),r.I=!1}else n=J(t,a);return y(n,(function(t,a){r&&function(e,t){return 2===g(e)?e.get(t):e[t]}(r.t,t)===a||b(n,t,e(a))})),3===a?new Set(n):n}(e)}function J(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return _(e)}var U,V,G="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),H="undefined"!=typeof Map,Y="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=G?Symbol.for("immer-nothing"):((U={})["immer-nothing"]=!0,U),Q=G?Symbol.for("immer-draftable"):"__$immer_draftable",Z=G?Symbol.for("immer-state"):"__$immer_state",ee=""+Object.prototype.constructor,te="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,ne=Object.getOwnPropertyDescriptors||function(e){var t={};return te(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},re={},ae={get:function(e,t){if(t===Z)return e;var n,r,a,o=w(e);if(!v(o,t))return n=e,(a=M(o,t))?"value"in a?a.value:null===(r=a.get)||void 0===r?void 0:r.call(n.k):void 0;var i=o[t];return e.I||!h(i)?i:i===L(e.t,t)?(K(e),e.o[t]=W(e.A.h,i,e)):i},has:function(e,t){return t in w(e)},ownKeys:function(e){return Reflect.ownKeys(w(e))},set:function(e,t,n){var r=M(w(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var a=L(w(e),t),o=null==a?void 0:a[Z];if(o&&o.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,a)&&(void 0!==n||v(e.t,t)))return!0;K(e),X(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==L(e.t,t)||t in e.t?(e.D[t]=!1,K(e),X(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=w(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){p(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){p(12)}},oe={};y(ae,(function(e,t){oe[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),oe.deleteProperty=function(e,t){return ae.deleteProperty.call(this,e[0],t)},oe.set=function(e,t,n){return ae.set.call(this,e[0],t,n,e[0])};var ie=new(function(){function e(e){var t=this;this.g=q,this.F=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var a=n;n=e;var o=t;return function(e){var t=this;void 0===e&&(e=a);for(var r=arguments.length,i=Array(r>1?r-1:0),l=1;l<r;l++)i[l-1]=arguments[l];return o.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(i))}))}}var i;if("function"!=typeof n&&p(6),void 0!==r&&"function"!=typeof r&&p(7),h(e)){var l=D(t),c=W(t,e,void 0),u=!0;try{i=n(c),u=!1}finally{u?z(l):I(l)}return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return k(l,r),N(e,l)}),(function(e){throw z(l),e})):(k(l,r),N(i,l))}if(!e||"object"!=typeof e){if((i=n(e))===B)return;return void 0===i&&(i=e),t.F&&P(i,!0),i}p(21,e)},this.produceWithPatches=function(e,n){return"function"==typeof e?function(n){for(var r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(a))}))}:[t.produce(e,n,(function(e,t){r=e,a=t})),r,a];var r,a},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){h(e)||p(8),d(e)&&(e=$(e));var t=D(this),n=W(this,e,void 0);return n[Z].C=!0,I(t),n},t.finishDraft=function(e,t){var n=(e&&e[Z]).A;return k(n,t),N(void 0,n)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!q&&p(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var a=j("Patches").$;return d(e)?a(e,t):this.produce(e,(function(e){return a(e,t.slice(n+1))}))},e}()),le=ie.produce;ie.produceWithPatches.bind(ie),ie.setAutoFreeze.bind(ie),ie.setUseProxies.bind(ie),ie.applyPatches.bind(ie),ie.createDraft.bind(ie),ie.finishDraft.bind(ie);var ce=le;const ue=()=>{const[t,n]=e.useState(new Date),r=e.useCallback((()=>{n(new Date)}));return e.useEffect((()=>{let e=setInterval((()=>r()),1e3);return()=>clearInterval(e)}),[r]),e.createElement("span",null,t.toLocaleTimeString())},se=()=>{const[t,n]=e.useState(""),[r,a]=e.useState(!1),i="minlaxz.github.io";return e.useEffect((()=>{(async()=>{await o.get("https://microapi.octocat.tk/api/v1/github/lastcommit",{headers:{"Content-type":"application/json"},params:{repo:i,user:"minlaxz",branch:"main"},timeout:5e3}).then((e=>n(e.data.data))).catch((e=>{a(!0),console.log("API is down.")}))})()}),[]),e.createElement("span",{style:{color:"red"}},e.createElement("small",null,r?e.createElement("p",null,"API is seem to be down."):t?e.createElement("a",{href:`https://github.com/minlaxz/${i}/commit/${t}`,rel:"noopener noreferrer",target:"_blank"},`MD5: ${t}`):e.createElement("p",null,"Fetching latest checksum ...")))},fe=t.div`
margin: 0;
padding: 0;
height: 100%;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 812px) {
    height: 130%;
}
`,me=t.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`,pe=t.ul`
list-style-type: lower-greek;
`,de=t.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,he=t.div`
margin: 0.5em;
padding: 0.5em;
`,ye=t.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`,ge=t.pre`
/* margin-left:0.5em; */
/* margin-right: 0.5em; */
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,ve=t.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`,be=()=>{var t,p;const d=n(),h=r((e=>e.pointss)),y=r((e=>e.user)),g=r((e=>e.authUser)),[v,b]=e.useState(null);return e.useEffect((()=>{window.document.title="minlaxz | Home",d((async e=>{try{e({type:"GET_USERS",payload:(await o.get("http://jsonplaceholder.typicode.com/users")).data})}catch(t){e({type:"FAIL",payload:console.log(t)})}}));const e=window.location.hostname,t=localStorage.getItem(e),n=JSON.parse(localStorage.getItem("ggwp_user"));if(window.scrollTo(0,0),t){const e=ce(JSON.parse(t),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}n&&b(n.token)}),[]),e.createElement(e.Fragment,null,e.createElement(fe,null,e.createElement("h3",{className:"animate__animated animate__flipInX animate__slower"},"Hello, world! ((👻) => (minlaxz)) "),e.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",e.createElement(ue,null)),e.createElement(ye,null,e.createElement(ge,null,"You would visit to me with ",e.createElement(a,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you 🥴")),e.createElement(ge,{className:"animate__animated animate__flipInX animate__faster animate__delay-1.5s"},"I am a so much responsive page! 👻"),e.createElement("p",null,"Source Code is hosted ",e.createElement(a,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(he,{className:"animate__animated animate__flipInX animate__faster animate__delay-1s"},"Available routes:",e.createElement(pe,null,e.createElement(de,null,"View my =>",e.createElement(i,{cusName:"Repo List 🥶"})),e.createElement(de,null,"Here is markdown => ",e.createElement(l,null)),e.createElement(de,null,"Other sites => ",e.createElement(c,null)),e.createElement(de,null,"Serverless Api Calls => ",e.createElement(u,null)),e.createElement(de,null,"Link shortener => ",e.createElement(s,null)),e.createElement(de,null,"Test Login System => ",e.createElement(f,null)))),e.createElement(he,{className:"animate__animated animate__flipInX animate__faster animate__delay-2s"},"Other sites and backends ...",e.createElement(pe,null,e.createElement(de,null,e.createElement(a,{to:"https://minlaxz.github.io",text:"with Github Pages"}),"minlaxz.github.io"===window.location.hostname?e.createElement("span",null,"  you're currently viewing"):e.createElement("span",null,"...")),e.createElement(de,null,e.createElement(a,{to:"https://gh-minlaxz.pages.dev",text:"with Cloudflare Pages (not yet)"})),e.createElement(de,null,e.createElement(a,{to:"https://api.octocat.tk",text:"CF backend 👻 (using workers)"})),e.createElement(de,null,e.createElement(a,{to:"https://microapi.octocat.tk",text:"Deta backend 👻 (using express)"})))),e.createElement("div",{style:{width:"80%",textAlign:"center",padding:"10px",fontSize:"14px"},className:"animate__animated animate__flipInX animate__faster animate__delay-4s"},e.createElement("b",null,"React")," with ",e.createElement("b",null,"Redux")," and ",e.createElement("b",null,"Vite")," as build tool, hosted on ",e.createElement("b",null,"Github Pages")," with ",e.createElement("b",null,"actions")," on ",e.createElement("b",null,"push")," on ",e.createElement("b",null,"main"),", SSL/TLS by ",e.createElement("b",null,"Cloudflare")," with ",e.createElement("b",null,"proxies"),"."),e.createElement(se,null),e.createElement(ve,null,e.createElement("div",null,e.createElement("p",null,"This is about ",e.createElement("b",null,"Redux")," state management"),e.createElement("button",{onClick:()=>{return d({type:"INCREMENT",payload:e||1});var e}},"+"),"  ",h.value,"  ",e.createElement("button",{onClick:()=>{return d({type:"DECREMENT",payload:e||1});var e}},"-")),e.createElement("div",null,null!=(p=null==(t=null==y?void 0:y.users[0])?void 0:t.name)?p:[].toString()),e.createElement("code",{style:{fontSize:"11px"}},g.userState.token||v?"Logged in":"Logged out"))),e.createElement(me,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),e.createElement(m,null))))};export{be as default};