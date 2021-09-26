import{R as e,s as t,h as n,g as r}from"./vendor.5935c84f.js";import{A as a}from"./index.96e9221d.js";import{u as o}from"./useFetch.482d3749.js";import{T as i,a as l,b as c,c as u,d as s,e as m,f}from"./index.a8842600.js";import{a as d}from"./index.2885cb15.js";function p(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function y(e){return!!e&&!!e[ee]}function h(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===te}(e)||Array.isArray(e)||!!e[Z]||!!e.constructor[Z]||x(e)||w(e))}function g(e,t,n){void 0===n&&(n=!1),0===v(e)?(n?Object.keys:ne)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function v(e){var t=e[ee];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:x(e)?2:w(e)?3:0}function b(e,t){return 2===v(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function E(e,t,n){var r=v(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function x(e){return G&&e instanceof Map}function w(e){return Y&&e instanceof Set}function _(e){return e.o||e.t}function P(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=re(e);delete t[ee];for(var n=ne(t),r=0;r<n.length;r++){var a=n[r],o=t[a];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[a]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[a]})}return Object.create(Object.getPrototypeOf(e),t)}function S(e,t){return void 0===t&&(t=!1),j(e)||y(e)||!h(e)||(v(e)>1&&(e.set=e.add=e.clear=e.delete=O),Object.freeze(e),t&&g(e,(function(e,t){return S(t,!0)}),!0)),e}function O(){p(2)}function j(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function A(e){var t=ae[e];return t||p(18,e),t}function k(){return H}function z(e,t){t&&(A("Patches"),e.u=[],e.s=[],e.v=t)}function I(e){D(e),e.p.forEach(F),e.p=null}function D(e){e===H&&(H=e.l)}function N(e){return H={p:[],l:H,h:e,m:!0,_:0}}function F(e){var t=e[ee];0===t.i||1===t.i?t.j():t.O=!0}function R(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||A("ES5").S(t,e,r),r?(n[ee].P&&(I(t),p(4)),h(e)&&(e=C(t,e),t.l||M(t,e)),t.u&&A("Patches").M(n[ee],e,t.u,t.s)):e=C(t,n,[]),I(t),t.u&&t.v(t.u,t.s),e!==Q?e:void 0}function C(e,t,n){if(j(t))return t;var r=t[ee];if(!r)return g(t,(function(a,o){return T(e,r,t,a,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return M(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var a=4===r.i||5===r.i?r.o=P(r.k):r.o;g(3===r.i?new Set(a):a,(function(t,o){return T(e,r,a,t,o,n)})),M(e,a,!1),n&&e.u&&A("Patches").R(r,n,e.u,e.s)}return r.o}function T(e,t,n,r,a,o){if(y(a)){var i=C(e,a,o&&t&&3!==t.i&&!b(t.D,r)?o.concat(r):void 0);if(E(n,r,i),!y(i))return;e.m=!1}if(h(a)&&!j(a)){if(!e.h.F&&e._<1)return;C(e,a),t&&t.A.l||M(e,a)}}function M(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&S(t,n)}function L(e,t){var n=e[ee];return(n?_(n):e)[t]}function X(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function $(e){e.P||(e.P=!0,e.l&&$(e.l))}function J(e){e.o||(e.o=P(e.t))}function K(e,t,n){var r=x(t)?A("MapSet").N(t,n):w(t)?A("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:k(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},a=r,o=oe;n&&(a=[r],o=ie);var i=Proxy.revocable(a,o),l=i.revoke,c=i.proxy;return r.k=c,r.j=l,c}(t,n):A("ES5").J(t,n);return(n?n.A:k()).p.push(r),r}function U(e){return y(e)||p(22,e),function e(t){if(!h(t))return t;var n,r=t[ee],a=v(t);if(r){if(!r.P&&(r.i<4||!A("ES5").K(r)))return r.t;r.I=!0,n=W(t,a),r.I=!1}else n=W(t,a);return g(n,(function(t,a){r&&function(e,t){return 2===v(e)?e.get(t):e[t]}(r.t,t)===a||E(n,t,e(a))})),3===a?new Set(n):n}(e)}function W(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return P(e)}var V,H,B="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),G="undefined"!=typeof Map,Y="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Q=B?Symbol.for("immer-nothing"):((V={})["immer-nothing"]=!0,V),Z=B?Symbol.for("immer-draftable"):"__$immer_draftable",ee=B?Symbol.for("immer-state"):"__$immer_state",te=""+Object.prototype.constructor,ne="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,re=Object.getOwnPropertyDescriptors||function(e){var t={};return ne(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},ae={},oe={get:function(e,t){if(t===ee)return e;var n,r,a,o=_(e);if(!b(o,t))return n=e,(a=X(o,t))?"value"in a?a.value:null===(r=a.get)||void 0===r?void 0:r.call(n.k):void 0;var i=o[t];return e.I||!h(i)?i:i===L(e.t,t)?(J(e),e.o[t]=K(e.A.h,i,e)):i},has:function(e,t){return t in _(e)},ownKeys:function(e){return Reflect.ownKeys(_(e))},set:function(e,t,n){var r=X(_(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var a=L(_(e),t),o=null==a?void 0:a[ee];if(o&&o.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,a)&&(void 0!==n||b(e.t,t)))return!0;J(e),$(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==L(e.t,t)||t in e.t?(e.D[t]=!1,J(e),$(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=_(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){p(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){p(12)}},ie={};g(oe,(function(e,t){ie[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),ie.deleteProperty=function(e,t){return oe.deleteProperty.call(this,e[0],t)},ie.set=function(e,t,n){return oe.set.call(this,e[0],t,n,e[0])};var le=new(function(){function e(e){var t=this;this.g=q,this.F=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var a=n;n=e;var o=t;return function(e){var t=this;void 0===e&&(e=a);for(var r=arguments.length,i=Array(r>1?r-1:0),l=1;l<r;l++)i[l-1]=arguments[l];return o.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(i))}))}}var i;if("function"!=typeof n&&p(6),void 0!==r&&"function"!=typeof r&&p(7),h(e)){var l=N(t),c=K(t,e,void 0),u=!0;try{i=n(c),u=!1}finally{u?I(l):D(l)}return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return z(l,r),R(e,l)}),(function(e){throw I(l),e})):(z(l,r),R(i,l))}if(!e||"object"!=typeof e){if((i=n(e))===Q)return;return void 0===i&&(i=e),t.F&&S(i,!0),i}p(21,e)},this.produceWithPatches=function(e,n){return"function"==typeof e?function(n){for(var r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(a))}))}:[t.produce(e,n,(function(e,t){r=e,a=t})),r,a];var r,a},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){h(e)||p(8),y(e)&&(e=U(e));var t=N(this),n=K(this,e,void 0);return n[ee].C=!0,D(t),n},t.finishDraft=function(e,t){var n=(e&&e[ee]).A;return z(n,t),R(void 0,n)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!q&&p(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var a=A("Patches").$;return y(e)?a(e,t):this.produce(e,(function(e){return a(e,t.slice(n+1))}))},e}()),ce=le.produce;le.produceWithPatches.bind(le),le.setAutoFreeze.bind(le),le.setUseProxies.bind(le),le.applyPatches.bind(le),le.createDraft.bind(le),le.finishDraft.bind(le);var ue=ce;const se=()=>{const[t,n]=e.useState(new Date),r=e.useCallback((()=>{n(new Date)}));return e.useEffect((()=>{let e=setInterval((()=>r()),1e3);return()=>clearInterval(e)}),[r]),e.createElement("span",null,t.toLocaleTimeString())},me=()=>{const t="minlaxz.github.io",{data:n,error:r,loading:i}=o(`https://api.github.com/repos/minlaxz/${t}/branches/main`);return e.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"}},e.createElement("small",null,'Last Commit Sha on "Main":  '),r?e.createElement("span",{style:{color:"red"}},r.message):i?e.createElement("span",{style:{color:"orange"}},"Fetching last commit SHA..."):e.createElement(a,{to:`https://github.com/minlaxz/${t}/commit/${n.commit.sha}`,text:`${n.commit.sha.slice(0,7)}`}))},fe=t.div`
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
`,de=t.div`
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
`,ye=t.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,he=t.div`
margin: 0.5em;
padding: 0.5em;
`,ge=t.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`,ve=t.pre`
/* margin-left:0.5em; */
/* margin-right: 0.5em; */
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,be=t.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`,Ee=()=>{var t,o;const p=n(),y=r((e=>e.pointss)),h=r((e=>e.user)),g=r((e=>e.authUser)),[v,b]=e.useState(null);return e.useEffect((()=>{window.document.title="minlaxz | Home",p((async e=>{try{e({type:"GET_USERS",payload:(await d.get("https://jsonplaceholder.typicode.com/users")).data})}catch(t){e({type:"FAIL",payload:console.log(t)})}}));const e=window.location.hostname,t=localStorage.getItem(e),n=JSON.parse(localStorage.getItem("ggwp_user"));if(window.scrollTo(0,0),t){const e=ue(JSON.parse(t),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}n&&b(n.token)}),[]),e.createElement(e.Fragment,null,e.createElement(fe,null,e.createElement("h3",{className:"animate__animated animate__flipInX animate__slower"},"Hello, world! ((👻) => (minlaxz)) "),e.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",e.createElement(se,null)),e.createElement(ge,null,e.createElement(ve,null,"You would visit to me with ",e.createElement(a,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you 🥴")),e.createElement(ve,{className:"animate__animated animate__flipInX animate__faster animate__delay-1.5s"},"I am a so much responsive page! 👻"),e.createElement("p",null,"Source Code is hosted ",e.createElement(a,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(he,{className:"animate__animated animate__flipInX animate__faster animate__delay-1s"},"Available routes:",e.createElement(pe,null,e.createElement(ye,null,"View my =>",e.createElement(i,{cusName:"Repo List 🥶"})),e.createElement(ye,null,"Here is markdown => ",e.createElement(l,null)),e.createElement(ye,null,"Currently I've some challenges => ",e.createElement(c,{cusName:"Problems"})),e.createElement(ye,null,"Serverless Api Calls => ",e.createElement(u,null)),e.createElement(ye,null,"Link shortener => ",e.createElement(s,null)),e.createElement(ye,null,"I challenge ",e.createElement("b",null,"U")," to test my login system => ",e.createElement(m,null)))),e.createElement(he,{className:"animate__animated animate__flipInX animate__faster animate__delay-2s"},"This on other domain and backends ...",e.createElement(pe,null,e.createElement(ye,null,e.createElement(a,{to:"https://minlaxz.github.io",text:"Deploy with Github Pages"}),"minlaxz.github.io"===window.location.hostname?e.createElement("span",null,"  you're currently viewing"):e.createElement("span",null,"   Viewing on ",window.location.hostname)),e.createElement(ye,null,e.createElement(a,{to:"https://gh-minlaxz.pages.dev",text:"Deploy with Cloudflare Pages (not yet)"})),e.createElement(ye,null,e.createElement(a,{to:"https://api.octocat.tk",text:"Serverless Backend"})),e.createElement(ye,null,e.createElement(a,{to:"https://microapi.octocat.tk",text:"NodeJS Backend"})),e.createElement(ye,null,e.createElement(a,{to:"https://github.com/minlaxz/easy-rest",text:"Main Backend (Currently building)"})))),e.createElement("div",{style:{width:"80%",textAlign:"center",padding:"10px",fontSize:"14px"},className:"animate__animated animate__flipInX animate__faster animate__delay-4s"},e.createElement("b",null,"React")," with ",e.createElement("b",null,"Redux")," and ",e.createElement("b",null,"Vite")," as build tool, hosted on ",e.createElement("b",null,"Github Pages")," with ",e.createElement("b",null,"actions")," on ",e.createElement("b",null,"push")," on ",e.createElement("b",null,"main"),", SSL/TLS by ",e.createElement("b",null,"Cloudflare")," with ",e.createElement("b",null,"proxies"),"."),e.createElement(me,null),e.createElement(be,null,e.createElement("div",null,e.createElement("p",null,"This is about ",e.createElement("b",null,"Redux")," state management"),e.createElement("button",{onClick:()=>{return p({type:"INCREMENT",payload:e||1});var e}},"+"),"  ",y.value,"  ",e.createElement("button",{onClick:()=>{return p({type:"DECREMENT",payload:e||1});var e}},"-")),e.createElement("div",null,null!=(o=null==(t=null==h?void 0:h.users[0])?void 0:t.name)?o:[].toString()),e.createElement("code",{style:{fontSize:"11px"}},g.userState.token||v?"Logged in":"Logged out"))),e.createElement(de,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),e.createElement(f,null))))};export{Ee as default};