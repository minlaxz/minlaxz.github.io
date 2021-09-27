import{_ as e,m as t,n,R as r,o,p as a,g as i,s as c,e as l,i as u,h as s}from"./vendor.7f3b8c1d.js";import{_ as f,T as d}from"./index.14431077.js";import{A as p}from"./index.ee5528d0.js";import{a as m}from"./index.2885cb15.js";function h(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function y(e){return!!e&&!!e[te]}function v(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===ne}(e)||Array.isArray(e)||!!e[ee]||!!e.constructor[ee]||w(e)||x(e))}function g(e,t,n){void 0===n&&(n=!1),0===b(e)?(n?Object.keys:re)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function b(e){var t=e[te];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:w(e)?2:x(e)?3:0}function E(e,t){return 2===b(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _(e,t,n){var r=b(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function w(e){return B&&e instanceof Map}function x(e){return Y&&e instanceof Set}function P(e){return e.o||e.t}function S(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=oe(e);delete t[te];for(var n=re(t),r=0;r<n.length;r++){var o=n[r],a=t[o];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function O(e,t){return void 0===t&&(t=!1),j(e)||y(e)||!v(e)||(b(e)>1&&(e.set=e.add=e.clear=e.delete=A),Object.freeze(e),t&&g(e,(function(e,t){return O(t,!0)}),!0)),e}function A(){h(2)}function j(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function k(e){var t=ae[e];return t||h(18,e),t}function C(){return X}function R(e,t){t&&(k("Patches"),e.u=[],e.s=[],e.v=t)}function D(e){I(e),e.p.forEach(z),e.p=null}function I(e){e===X&&(X=e.l)}function N(e){return X={p:[],l:X,h:e,m:!0,_:0}}function z(e){var t=e[te];0===t.i||1===t.i?t.j():t.O=!0}function T(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||k("ES5").S(t,e,r),r?(n[te].P&&(D(t),h(4)),v(e)&&(e=L(t,e),t.l||K(t,e)),t.u&&k("Patches").M(n[te],e,t.u,t.s)):e=L(t,n,[]),D(t),t.u&&t.v(t.u,t.s),e!==Z?e:void 0}function L(e,t,n){if(j(t))return t;var r=t[te];if(!r)return g(t,(function(o,a){return F(e,r,t,o,a,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return K(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=S(r.k):r.o;g(3===r.i?new Set(o):o,(function(t,a){return F(e,r,o,t,a,n)})),K(e,o,!1),n&&e.u&&k("Patches").R(r,n,e.u,e.s)}return r.o}function F(e,t,n,r,o,a){if(y(o)){var i=L(e,o,a&&t&&3!==t.i&&!E(t.D,r)?a.concat(r):void 0);if(_(n,r,i),!y(i))return;e.m=!1}if(v(o)&&!j(o)){if(!e.h.F&&e._<1)return;L(e,o),t&&t.A.l||K(e,o)}}function K(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&O(t,n)}function M(e,t){var n=e[te];return(n?P(n):e)[t]}function U(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function V(e){e.P||(e.P=!0,e.l&&V(e.l))}function W(e){e.o||(e.o=S(e.t))}function q(e,t,n){var r=w(t)?k("MapSet").N(t,n):x(t)?k("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:C(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=r,a=ie;n&&(o=[r],a=ce);var i=Proxy.revocable(o,a),c=i.revoke,l=i.proxy;return r.k=l,r.j=c,l}(t,n):k("ES5").J(t,n);return(n?n.A:C()).p.push(r),r}function $(e){return y(e)||h(22,e),function e(t){if(!v(t))return t;var n,r=t[te],o=b(t);if(r){if(!r.P&&(r.i<4||!k("ES5").K(r)))return r.t;r.I=!0,n=J(t,o),r.I=!1}else n=J(t,o);return g(n,(function(t,o){r&&function(e,t){return 2===b(e)?e.get(t):e[t]}(r.t,t)===o||_(n,t,e(o))})),3===o?new Set(n):n}(e)}function J(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return S(e)}var G,X,H="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),B="undefined"!=typeof Map,Y="undefined"!=typeof Set,Q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Z=H?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),ee=H?Symbol.for("immer-draftable"):"__$immer_draftable",te=H?Symbol.for("immer-state"):"__$immer_state",ne=""+Object.prototype.constructor,re="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,oe=Object.getOwnPropertyDescriptors||function(e){var t={};return re(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},ae={},ie={get:function(e,t){if(t===te)return e;var n,r,o,a=P(e);if(!E(a,t))return n=e,(o=U(a,t))?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(n.k):void 0;var i=a[t];return e.I||!v(i)?i:i===M(e.t,t)?(W(e),e.o[t]=q(e.A.h,i,e)):i},has:function(e,t){return t in P(e)},ownKeys:function(e){return Reflect.ownKeys(P(e))},set:function(e,t,n){var r=U(P(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=M(P(e),t),a=null==o?void 0:o[te];if(a&&a.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,o)&&(void 0!==n||E(e.t,t)))return!0;W(e),V(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==M(e.t,t)||t in e.t?(e.D[t]=!1,W(e),V(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=P(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){h(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){h(12)}},ce={};g(ie,(function(e,t){ce[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),ce.deleteProperty=function(e,t){return ie.deleteProperty.call(this,e[0],t)},ce.set=function(e,t,n){return ie.set.call(this,e[0],t,n,e[0])};var le=new(function(){function e(e){var t=this;this.g=Q,this.F=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var o=n;n=e;var a=t;return function(e){var t=this;void 0===e&&(e=o);for(var r=arguments.length,i=Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];return a.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(i))}))}}var i;if("function"!=typeof n&&h(6),void 0!==r&&"function"!=typeof r&&h(7),v(e)){var c=N(t),l=q(t,e,void 0),u=!0;try{i=n(l),u=!1}finally{u?D(c):I(c)}return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return R(c,r),T(e,c)}),(function(e){throw D(c),e})):(R(c,r),T(i,c))}if(!e||"object"!=typeof e){if((i=n(e))===Z)return;return void 0===i&&(i=e),t.F&&O(i,!0),i}h(21,e)},this.produceWithPatches=function(e,n){return"function"==typeof e?function(n){for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(o))}))}:[t.produce(e,n,(function(e,t){r=e,o=t})),r,o];var r,o},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){v(e)||h(8),y(e)&&(e=$(e));var t=N(this),n=q(this,e,void 0);return n[te].C=!0,I(t),n},t.finishDraft=function(e,t){var n=(e&&e[te]).A;return R(n,t),T(void 0,n)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!Q&&h(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var o=k("Patches").$;return y(e)?o(e,t):this.produce(e,(function(e){return o(e,t.slice(n+1))}))},e}()),ue=le.produce;le.produceWithPatches.bind(le),le.setAutoFreeze.bind(le),le.setUseProxies.bind(le),le.applyPatches.bind(le),le.createDraft.bind(le),le.finishDraft.bind(le);var se=ue;function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var de=r.createContext(),pe={};var me=function(e){return e};function he(i){var c=i.defaultResolveComponent,l=void 0===c?me:c,u=i.render,s=i.onLoad;function f(i,c){void 0===c&&(c={});var f=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(i),d={};function p(e){return c.cacheKey?c.cacheKey(e):f.resolve?f.resolve(e):"static"}function m(e,t,n){var r=c.resolveComponent?c.resolveComponent(e,t):l(e);if(c.resolveComponent&&!o.exports.isValidElementType(r))throw new Error("resolveComponent returned something that is not a React component!");return a(n,r,{preload:!0}),r}var h,y,v=function(r){function o(e){var t;return(t=r.call(this,e)||this).state={result:null,error:null,loading:!0,cacheKey:p(e)},function(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}(!e.__chunkExtractor||f.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),e.__chunkExtractor?(!1===c.ssr||(f.requireAsync(e).catch((function(){return null})),t.loadSync(),e.__chunkExtractor.addChunk(f.chunkName(e))),fe(t)):(!1!==c.ssr&&(f.isReady&&f.isReady(e)||f.chunkName&&pe[f.chunkName(e)])&&t.loadSync(),t)}t(o,r),o.getDerivedStateFromProps=function(t,n){var r=p(t);return e({},n,{cacheKey:r,loading:n.loading||n.cacheKey!==r})};var a=o.prototype;return a.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},a.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},a.componentWillUnmount=function(){this.mounted=!1},a.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},a.getCacheKey=function(){return p(this.props)},a.getCache=function(){return d[this.getCacheKey()]},a.setCache=function(e){void 0===e&&(e=void 0),d[this.getCacheKey()]=e},a.triggerOnLoad=function(){var e=this;s&&setTimeout((function(){s(e.state.result,e.props)}))},a.loadSync=function(){if(this.state.loading)try{var e=m(f.requireSync(this.props),this.props,b);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:f.resolve(this.props),chunkName:f.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},a.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=m(t,e.props,{Loadable:b});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},a.resolveAsync=function(){var e=this,t=this.props;t.__chunkExtractor,t.forwardedRef;var r=n(t,["__chunkExtractor","forwardedRef"]),o=this.getCache();return o||((o=f.requireAsync(r)).status="PENDING",this.setCache(o),o.then((function(){o.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:f.resolve(e.props),chunkName:f.chunkName(e.props),error:t?t.message:t}),o.status="REJECTED"}))),o},a.render=function(){var t=this.props,r=t.forwardedRef,o=t.fallback;t.__chunkExtractor;var a=n(t,["forwardedRef","fallback","__chunkExtractor"]),i=this.state,l=i.error,s=i.loading,f=i.result;if(c.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(l)throw l;var d=o||c.fallback||null;return s?d:u({fallback:d,result:f,options:c,props:e({},a,{ref:r})})},o}(r.Component),g=(y=function(e){return r.createElement(de.Consumer,null,(function(t){return r.createElement(h,Object.assign({__chunkExtractor:t},e))}))},(h=v).displayName&&(y.displayName=h.displayName+"WithChunkExtractor"),y),b=r.forwardRef((function(e,t){return r.createElement(g,Object.assign({forwardedRef:t},e))}));return b.displayName="Loadable",b.preload=function(e){f.requireAsync(e)},b.load=function(e){return f.requireAsync(e)},b}return{loadable:f,lazy:function(t,n){return f(t,e({},n,{suspense:!0}))}}}var ye=he({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.createElement(t,n)}}),ve=ye.loadable,ge=ye.lazy,be=he({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),Ee=be.loadable,_e=be.lazy;ve.lib=Ee;var we=ge;we.lib=_e;const xe=()=>{const[e,t]=r.useState(new Date),n=r.useCallback((()=>{t(new Date)}));return r.useEffect((()=>{let e=setInterval((()=>n()),1e3);return()=>clearInterval(e)}),[n]),r.createElement("span",null,e.toLocaleTimeString())},Pe="minlaxz.github.io",Se=()=>{const e=i((e=>e.lastCommit));return r.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"}},r.createElement("small",null,'Last Commit Sha on "Main":  '),e.error?r.createElement("span",{style:{color:"red"}},e.error):e.loading?r.createElement("span",{style:{color:"orange"}},"Fetching last commit SHA..."):r.createElement(p,{to:`https://github.com/minlaxz/${Pe}/commit/${e.sha}`,text:`${e.sha.slice(0,7)}`}))};var Oe=()=>r.createElement("div",null,"Loading Components...");const Ae=c.ul`
list-style-type: lower-greek;
`,je=c.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,ke=c.div`
margin: 0.5em;
padding: 0.5em;
`,Ce=c.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`,Re=c.pre`
/* margin-left:0.5em; */
/* margin-right: 0.5em; */
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,De=we((()=>f((()=>import("./AvailableRoutes.188f55c0.js")),["assets/AvailableRoutes.188f55c0.js","assets/vendor.7f3b8c1d.js","assets/index.14431077.js","assets/index.dcfb737d.css","assets/index.ee5528d0.js","assets/index.574118bd.css","assets/index.2885cb15.js"]))),Ie=we((()=>f((()=>import("./Backends.f5d701bb.js")),["assets/Backends.f5d701bb.js","assets/vendor.7f3b8c1d.js","assets/index.ee5528d0.js","assets/index.574118bd.css","assets/index.14431077.js","assets/index.dcfb737d.css","assets/index.2885cb15.js"]))),Ne=we((()=>f((()=>import("./BuildWith.201715fd.js")),["assets/BuildWith.201715fd.js","assets/vendor.7f3b8c1d.js"]))),ze=we((()=>f((()=>import("./ReduxContainer.81f98df2.js")),["assets/ReduxContainer.81f98df2.js","assets/vendor.7f3b8c1d.js"]))),Te=c.div`
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
`;var Le=()=>r.createElement(Te,null,r.createElement("h3",{className:"animate__animated animate__flipInX animate__slower"},"Hello, world! ((👻) => (minlaxz)) "),r.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",r.createElement(xe,null)),r.createElement(Ce,null,r.createElement(Re,null,"You would visit to me with ",r.createElement(p,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",r.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",r.createElement("b",null,"long")," to remember for you 🥴")),r.createElement(Re,{className:"animate__animated animate__flipInX animate__faster animate__delay-1.5s"},"I am a so much responsive page! 👻"),r.createElement("p",null,"Source Code is hosted ",r.createElement(p,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),r.createElement(l.exports.Suspense,{fallback:r.createElement(Oe,null)},r.createElement(De,null),r.createElement(Ie,null),r.createElement(Ne,null),r.createElement(Se,null),r.createElement(ze,null)));const Fe=c.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`;var Ke=()=>r.createElement(Fe,null,r.createElement("div",{style:{border:"2px dotted khaki"}},r.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),r.createElement(d,null)));const Me=`https://api.github.com/repos/minlaxz/${Pe}/branches/main`;var Ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const e=s();return r.useEffect((()=>{window.document.title="minlaxz | Home",window.scrollTo(0,0),e((async e=>{try{e({type:"GET_USERS",payload:(await m.get("https://jsonplaceholder.typicode.com/users")).data})}catch(t){e({type:"FAIL",payload:console.log(t)})}})),e((async e=>{try{const t=await m.get(Me);u.success("Auto fetched and dispatched",{icon:"🚀",autoClose:3e3,theme:"colored"}),e({type:"GET_LAST_COMMIT_SUCCESS",payload:{sha:t.data.commit.sha}})}catch(t){u.error(t.message),e({type:"GET_LAST_COMMIT_FAILURE",payload:{error:t.message}})}}));const t=window.location.hostname,n=localStorage.getItem(t);if(n){const e=se(JSON.parse(n),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}}),[]),r.createElement(r.Fragment,null,r.createElement(Le,null),r.createElement(Ke,null))}});export{ke as D,je as L,Ae as U,Ue as i};
