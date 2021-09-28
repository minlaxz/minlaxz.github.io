import{_ as e,m as t,n,R as a,o as r,p as o,g as i,s as l,e as s,i as c,h as u,q as m}from"./vendor.f214a426.js";import{_ as d,T as h,g as f,a as p,s as g}from"./index.9b92a233.js";import{A as y}from"./index.401f627a.js";import{a as E}from"./index.2885cb15.js";function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var _=a.createContext(),x={};var b=function(e){return e};function w(i){var l=i.defaultResolveComponent,s=void 0===l?b:l,c=i.render,u=i.onLoad;function m(i,l){void 0===l&&(l={});var m=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(i),d={};function h(e){return l.cacheKey?l.cacheKey(e):m.resolve?m.resolve(e):"static"}function f(e,t,n){var a=l.resolveComponent?l.resolveComponent(e,t):s(e);if(l.resolveComponent&&!r.exports.isValidElementType(a))throw new Error("resolveComponent returned something that is not a React component!");return o(n,a,{preload:!0}),a}var p,g,y=function(a){function r(e){var t;return(t=a.call(this,e)||this).state={result:null,error:null,loading:!0,cacheKey:h(e)},function(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}(!e.__chunkExtractor||m.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),e.__chunkExtractor?(!1===l.ssr||(m.requireAsync(e).catch((function(){return null})),t.loadSync(),e.__chunkExtractor.addChunk(m.chunkName(e))),v(t)):(!1!==l.ssr&&(m.isReady&&m.isReady(e)||m.chunkName&&x[m.chunkName(e)])&&t.loadSync(),t)}t(r,a),r.getDerivedStateFromProps=function(t,n){var a=h(t);return e({},n,{cacheKey:a,loading:n.loading||n.cacheKey!==a})};var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return h(this.props)},o.getCache=function(){return d[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),d[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;u&&setTimeout((function(){u(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=f(m.requireSync(this.props),this.props,b);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:m.resolve(this.props),chunkName:m.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=f(t,e.props,{Loadable:b});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},o.resolveAsync=function(){var e=this,t=this.props;t.__chunkExtractor,t.forwardedRef;var a=n(t,["__chunkExtractor","forwardedRef"]),r=this.getCache();return r||((r=m.requireAsync(a)).status="PENDING",this.setCache(r),r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:m.resolve(e.props),chunkName:m.chunkName(e.props),error:t?t.message:t}),r.status="REJECTED"}))),r},o.render=function(){var t=this.props,a=t.forwardedRef,r=t.fallback;t.__chunkExtractor;var o=n(t,["forwardedRef","fallback","__chunkExtractor"]),i=this.state,s=i.error,u=i.loading,m=i.result;if(l.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(s)throw s;var d=r||l.fallback||null;return u?d:c({fallback:d,result:m,options:l,props:e({},o,{ref:a})})},r}(a.Component),E=(g=function(e){return a.createElement(_.Consumer,null,(function(t){return a.createElement(p,Object.assign({__chunkExtractor:t},e))}))},(p=y).displayName&&(g.displayName=p.displayName+"WithChunkExtractor"),g),b=a.forwardRef((function(e,t){return a.createElement(E,Object.assign({forwardedRef:t},e))}));return b.displayName="Loadable",b.preload=function(e){m.requireAsync(e)},b.load=function(e){return m.requireAsync(e)},b}return{loadable:m,lazy:function(t,n){return m(t,e({},n,{suspense:!0}))}}}var S=w({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return a.createElement(t,n)}}),k=S.loadable,C=S.lazy,R=w({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),N=R.loadable,A=R.lazy;k.lib=N;var D=C;D.lib=A;const I=()=>{const[e,t]=a.useState(new Date),n=a.useCallback((()=>{t(new Date)}));return a.useEffect((()=>{let e=setInterval((()=>n()),1e3);return()=>clearInterval(e)}),[n]),a.createElement("span",null,e.toLocaleTimeString())},z="minlaxz.github.io",L=()=>{const e=i((e=>e.lastCommit));return a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"}},a.createElement("small",null,'Last Commit Sha on "Main":  '),e.error?a.createElement("span",{style:{color:"red"}},e.error):e.loading?a.createElement("span",{style:{color:"orange"}},"Fetching last commit SHA..."):a.createElement(y,{to:`https://github.com/minlaxz/${z}/commit/${e.sha}`,text:`${e.sha.slice(0,7)}`}))};var T=()=>a.createElement("div",null,"Loading Components...");const j=l.ul`
list-style-type: lower-greek;
`,O=l.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,K=l.div`
margin: 0.5em;
padding: 0.5em;
`,q=l.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`,V=l.pre`
/* margin-left:0.5em; */
/* margin-right: 0.5em; */
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,P=D((()=>d((()=>import("./AvailableRoutes.148d8cb4.js")),["assets/AvailableRoutes.148d8cb4.js","assets/vendor.f214a426.js","assets/index.9b92a233.js","assets/index.dcfb737d.css","assets/index.401f627a.js","assets/index.574118bd.css","assets/index.2885cb15.js"]))),J=D((()=>d((()=>import("./Backends.2fccdfc7.js")),["assets/Backends.2fccdfc7.js","assets/vendor.f214a426.js","assets/index.401f627a.js","assets/index.574118bd.css","assets/index.9b92a233.js","assets/index.dcfb737d.css","assets/index.2885cb15.js"]))),W=D((()=>d((()=>import("./BuildWith.eca1aac0.js")),["assets/BuildWith.eca1aac0.js","assets/vendor.f214a426.js"]))),M=D((()=>d((()=>import("./ReduxContainer.fb6f1dcc.js")),["assets/ReduxContainer.fb6f1dcc.js","assets/vendor.f214a426.js","assets/index.9b92a233.js","assets/index.dcfb737d.css"]))),$=l.div`
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
`;var F=()=>a.createElement($,null,a.createElement("h3",{className:"animate__animated animate__flipInX animate__slower"},"Hello, world! ((👻) => (minlaxz)) "),a.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",a.createElement(I,null)),a.createElement(q,null,a.createElement(V,null,"You would visit to me with ",a.createElement(y,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",a.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",a.createElement("b",null,"long")," to remember for you 🥴")),a.createElement(V,{className:"animate__animated animate__flipInX animate__faster animate__delay-1.5s"},"I am a so much responsive page! 👻"),a.createElement("p",null,"Source Code is hosted ",a.createElement(y,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),a.createElement(s.exports.Suspense,{fallback:a.createElement(T,null)},a.createElement(P,null),a.createElement(J,null),a.createElement(W,null),a.createElement(L,null),a.createElement(M,null)));const H=l.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`;var U=()=>a.createElement(H,null,a.createElement("div",{style:{border:"2px dotted khaki"}},a.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),a.createElement(h,null)));const X=`https://api.github.com/repos/minlaxz/${z}/branches/main`;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const e=u();return a.useEffect((()=>{window.document.title="minlaxz | Home",window.scrollTo(0,0);const t=""!==g.getState().lastCommit.sha;!t&&e((async e=>{try{const t=await E.get(X);c.success("Auto fetched and dispatched",{icon:"🚀",autoClose:3e3,theme:"colored"}),e(f({sha:t.data.commit.sha}))}catch(t){c.error(t.message),e(p({error:t.message}))}})),t&&c.success("phew... won't dispatch again, already have a state.",{icon:"😌"});const n=window.location.hostname,a=localStorage.getItem(n);if(a){const e=m(JSON.parse(a),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}}),[]),a.createElement(a.Fragment,null,a.createElement(F,null),a.createElement(U,null))}});export{K as D,O as L,j as U,B as i};
