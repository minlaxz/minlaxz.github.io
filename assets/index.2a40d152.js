import{h as be,i as Se,_ as T,u as _e,s as Ae,j as je}from"./index.da11606f.js";import{h as Y,R as o,s as O,p as d,_ as Ce,o as Re,d as q,q as Ie,l as G,g as Le}from"./vendor.215aad49.js";import{a as Te}from"./index.9ff040e8.js";import{N as qe}from"./index.1434233d.js";import{S as ae,P as Ge,e as ke}from"./index.2eb29880.js";import{A as J}from"./index.905f26db.js";const Me="minlaxz.github.io",We="minlaxz",Ve="main",De=`https://api.github.com/repos/${We}/${Me}/branches/${Ve}`,ze=()=>async i=>{try{const e=await Te.get(De);Y.success("Auto fetched and dispatched",{icon:"\u{1F680}",autoClose:3e3,theme:"colored"}),i(be({sha:e.data.commit.sha}))}catch(e){Y.error(e.message),i(Se({error:e.message}))}},Ne=()=>{const[i,e]=o.useState(new Date),n=o.useCallback(()=>{e(new Date)});return o.useEffect(()=>{let r=setInterval(()=>n(),1e3);return()=>clearInterval(r)},[n]),o.createElement("span",null,i.toLocaleTimeString())};O.img`
width: 30vw;
margin: 10px;
@media only screen and (max-width: 1024px) {
    width: 50vw;
}
@media only screen and (max-width: 600px) {
    width: 100vw;
}
`;O.img`
width: 15vw;
margin: 1em;
@media only screen and (max-width: 1024px) {
    width: 30vw;
}
@media only screen and (max-width: 600px) {
    width: 60vw;
}
`;O.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;const Oe=O.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function K(i,e,n){if(n||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))}/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ie=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,Pe=/\\([\u000b\u0020-\u00ff])/g,Fe=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,Xe=Ue;function Ue(i){if(!i)throw new TypeError("argument string is required");var e=typeof i=="object"?Be(i):i;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var n=e.indexOf(";"),r=n!==-1?e.substr(0,n).trim():e.trim();if(!Fe.test(r))throw new TypeError("invalid media type");var t=new $e(r.toLowerCase());if(n!==-1){var a,s,c;for(ie.lastIndex=n;s=ie.exec(e);){if(s.index!==n)throw new TypeError("invalid parameter format");n+=s[0].length,a=s[1].toLowerCase(),c=s[2],c[0]==='"'&&(c=c.substr(1,c.length-2).replace(Pe,"$1")),t.parameters[a]=c}if(n!==e.length)throw new TypeError("invalid parameter format")}return t}function Be(i){var e;if(typeof i.getHeader=="function"?e=i.getHeader("content-type"):typeof i.headers=="object"&&(e=i.headers&&i.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function $e(i){this.parameters=Object.create(null),this.type=i}var R=new Map,oe=function(e){return e.cloneNode(!0)},se=function(){return window.location.protocol==="file:"},le=function(e,n,r){var t=new XMLHttpRequest;t.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&t.readyState===2){var a=t.getResponseHeader("Content-Type");if(!a)throw new Error("Content type not found");var s=Xe(a).type;if(!(s==="image/svg+xml"||s==="text/plain"))throw new Error("Invalid content type: "+s)}if(t.readyState===4){if(t.status===404||t.responseXML===null)throw new Error(se()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(t.status===200||se()&&t.status===0)r(null,t);else throw new Error("There was a problem injecting the SVG: "+t.status+" "+t.statusText)}}catch(c){if(t.abort(),c instanceof Error)r(c,t);else throw c}},t.open("GET",e),t.withCredentials=n,t.overrideMimeType&&t.overrideMimeType("text/xml"),t.send()},b={},ce=function(e,n){b[e]=b[e]||[],b[e].push(n)},He=function(e){for(var n=function(s,c){setTimeout(function(){if(Array.isArray(b[e])){var u=R.get(e),p=b[e][s];u instanceof SVGSVGElement&&p(null,oe(u)),u instanceof Error&&p(u),s===b[e].length-1&&delete b[e]}},0)},r=0,t=b[e].length;r<t;r++)n(r)},Qe=function(e,n,r){if(R.has(e)){var t=R.get(e);if(t===void 0){ce(e,r);return}if(t instanceof SVGSVGElement){r(null,oe(t));return}}R.set(e,void 0),ce(e,r),le(e,n,function(a,s){a?R.set(e,a):s.responseXML instanceof Document&&s.responseXML.documentElement&&s.responseXML.documentElement instanceof SVGSVGElement&&R.set(e,s.responseXML.documentElement),He(e)})},Ze=function(e,n,r){le(e,n,function(t,a){t?r(t):a.responseXML instanceof Document&&a.responseXML.documentElement&&a.responseXML.documentElement instanceof SVGSVGElement&&r(null,a.responseXML.documentElement)})},Ye=0,Je=function(){return++Ye},g=[],ue={},Ke="http://www.w3.org/2000/svg",ee="http://www.w3.org/1999/xlink",de=function(e,n,r,t,a,s,c){var u=e.getAttribute("data-src")||e.getAttribute("src");if(!u){c(new Error("Invalid data-src or src attribute"));return}if(g.indexOf(e)!==-1){g.splice(g.indexOf(e),1),e=null;return}g.push(e),e.setAttribute("src","");var p=t?Qe:Ze;p(u,a,function(S,l){if(!l){g.splice(g.indexOf(e),1),e=null,c(S);return}var w=e.getAttribute("id");w&&l.setAttribute("id",w);var m=e.getAttribute("title");m&&l.setAttribute("title",m);var f=e.getAttribute("width");f&&l.setAttribute("width",f);var h=e.getAttribute("height");h&&l.setAttribute("height",h);var _=Array.from(new Set(K(K(K([],(l.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();l.setAttribute("class",_);var A=e.getAttribute("style");A&&l.setAttribute("style",A),l.setAttribute("data-src",u);var x=[].filter.call(e.attributes,function(v){return/^data-\w[\w-]*$/.test(v.name)});if(Array.prototype.forEach.call(x,function(v){v.name&&v.value&&l.setAttribute(v.name,v.value)}),r){var y={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},k,E,j,M,W;Object.keys(y).forEach(function(v){k=v,j=y[v],E=l.querySelectorAll(k+"[id]");for(var ge=function(B,ft){M=E[B].id,W=M+"-"+Je();var D;Array.prototype.forEach.call(j,function(Z){D=l.querySelectorAll("["+Z+'*="'+M+'"]');for(var N=0,ye=D.length;N<ye;N++){var ne=D[N].getAttribute(Z);ne&&!ne.match(new RegExp('url\\("?#'+M+'"?\\)'))||D[N].setAttribute(Z,"url(#"+W+")")}});for(var $=l.querySelectorAll("[*|href]"),H=[],z=0,Ee=$.length;z<Ee;z++){var re=$[z].getAttributeNS(ee,"href");re&&re.toString()==="#"+E[B].id&&H.push($[z])}for(var Q=0,we=H.length;Q<we;Q++)H[Q].setAttributeNS(ee,"href","#"+W);E[B].id=W},U=0,xe=E.length;U<xe;U++)ge(U)})}l.removeAttribute("xmlns:a");for(var I=l.querySelectorAll("script"),V=[],F,L,C=0,me=I.length;C<me;C++)L=I[C].getAttribute("type"),(!L||L==="application/ecmascript"||L==="application/javascript"||L==="text/javascript")&&(F=I[C].innerText||I[C].textContent,F&&V.push(F),l.removeChild(I[C]));if(V.length>0&&(n==="always"||n==="once"&&!ue[u])){for(var X=0,he=V.length;X<he;X++)new Function(V[X])(window);ue[u]=!0}var ve=l.querySelectorAll("style");if(Array.prototype.forEach.call(ve,function(v){v.textContent+=""}),l.setAttribute("xmlns",Ke),l.setAttribute("xmlns:xlink",ee),s(l),!e.parentNode){g.splice(g.indexOf(e),1),e=null,c(new Error("Parent node is null"));return}e.parentNode.replaceChild(l,e),g.splice(g.indexOf(e),1),e=null,c(null,l)})},et=function(e,n){var r=n===void 0?{}:n,t=r.afterAll,a=t===void 0?function(){}:t,s=r.afterEach,c=s===void 0?function(){}:s,u=r.beforeEach,p=u===void 0?function(){}:u,S=r.cacheRequests,l=S===void 0?!0:S,w=r.evalScripts,m=w===void 0?"never":w,f=r.httpRequestWithCredentials,h=f===void 0?!1:f,_=r.renumerateIRIElements,A=_===void 0?!0:_;if(e&&"length"in e)for(var x=0,y=0,k=e.length;y<k;y++)de(e[y],m,A,l,h,p,function(E,j){c(E,j),e&&"length"in e&&e.length===++x&&a(x)});else e?de(e,m,A,l,h,p,function(E,j){c(E,j),a(1),e=null}):a(0)},tt=function(e,n){for(var r in e)if(!(r in n))return!0;for(var t in n)if(e[t]!==n[t])return!0;return!1},rt=["afterInjection","beforeInjection","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","useRequestCache","wrapper"],P="http://www.w3.org/2000/svg",fe="http://www.w3.org/1999/xlink",te=function(i){Ce(e,i);function e(){for(var r,t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return r=i.call.apply(i,[this].concat(a))||this,r.initialState={hasError:!1,isLoading:!0},r.state=r.initialState,r._isMounted=!1,r.reactWrapper=void 0,r.nonReactWrapper=void 0,r.refCallback=function(c){r.reactWrapper=c},r}var n=e.prototype;return n.renderSVG=function(){var t=this;if(this.reactWrapper instanceof Node){var a=this.props,s=a.beforeInjection,c=a.evalScripts,u=a.httpRequestWithCredentials,p=a.renumerateIRIElements,S=a.src,l=a.useRequestCache,w=this.props.afterInjection,m=this.props.wrapper,f,h;m==="svg"?(f=document.createElementNS(P,m),f.setAttribute("xmlns",P),f.setAttribute("xmlns:xlink",fe),h=document.createElementNS(P,m)):(f=document.createElement(m),h=document.createElement(m)),f.appendChild(h),h.dataset.src=S,this.nonReactWrapper=this.reactWrapper.appendChild(f);var _=function(x,y){if(x&&(t.removeSVG(),!t._isMounted)){w(x);return}t._isMounted&&t.setState(function(){return{hasError:!!x,isLoading:!1}},function(){w(x,y)})};et(h,{afterEach:_,beforeEach:s,cacheRequests:l,evalScripts:c,httpRequestWithCredentials:u,renumerateIRIElements:p})}},n.removeSVG=function(){var t;(t=this.nonReactWrapper)!=null&&t.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},n.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},n.componentDidUpdate=function(t){var a=this;tt(t,this.props)&&this.setState(function(){return a.initialState},function(){a.removeSVG(),a.renderSVG()})},n.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},n.render=function(){var t=this.props;t.afterInjection,t.beforeInjection,t.evalScripts;var a=t.fallback;t.httpRequestWithCredentials;var s=t.loading;t.renumerateIRIElements,t.src,t.useRequestCache;var c=t.wrapper,u=Re(t,rt),p=c;return q.exports.createElement(p,Ie({},u,{ref:this.refCallback},c==="svg"?{xmlns:P,xmlnsXlink:fe}:{}),this.state.isLoading&&s&&q.exports.createElement(s,null),this.state.hasError&&a&&q.exports.createElement(a,null))},e}(q.exports.Component);te.defaultProps={afterInjection:function(){},beforeInjection:function(){},evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,renumerateIRIElements:!0,useRequestCache:!0,wrapper:"div"};te.propTypes={afterInjection:d.exports.func,beforeInjection:d.exports.func,evalScripts:d.exports.oneOf(["always","once","never"]),fallback:d.exports.oneOfType([d.exports.func,d.exports.object,d.exports.string]),httpRequestWithCredentials:d.exports.bool,loading:d.exports.oneOfType([d.exports.func,d.exports.object,d.exports.string]),renumerateIRIElements:d.exports.bool,src:d.exports.string.isRequired,useRequestCache:d.exports.bool,wrapper:d.exports.oneOf(["div","span","svg"])};const nt="_svg_class_1oxki_1",at="_svg_class_2_1oxki_6";const it=G(()=>T(()=>import("./BuildWith.06dd885e.js"),["assets/BuildWith.06dd885e.js","assets/vendor.215aad49.js"])),ot=G(()=>T(()=>import("./index.8a8b8679.js"),["assets/index.8a8b8679.js","assets/vendor.215aad49.js","assets/index.905f26db.js","assets/index.574118bd.css","assets/index.da11606f.js","assets/index.dcfb737d.css","assets/index.9ff040e8.js","assets/index.1434233d.js","assets/index.2eb29880.js"])),st=G(()=>T(()=>import("./AvailableRoutes.a279c11c.js"),["assets/AvailableRoutes.a279c11c.js","assets/vendor.215aad49.js","assets/index.da11606f.js","assets/index.dcfb737d.css","assets/index.2eb29880.js"])),lt=G(()=>T(()=>import("./ReduxContainer.dc162520.js"),["assets/ReduxContainer.dc162520.js","assets/vendor.215aad49.js","assets/index.da11606f.js","assets/index.dcfb737d.css"])),ct=G(()=>T(()=>import("./Backends.08bd4fe3.js"),["assets/Backends.08bd4fe3.js","assets/vendor.215aad49.js","assets/index.905f26db.js","assets/index.574118bd.css","assets/index.2eb29880.js","assets/index.da11606f.js","assets/index.dcfb737d.css"])),pe=({src:i,className:e,loadingText:n})=>o.createElement(te,{beforeInjection:r=>{r.classList.add(e)},style:{margin:0},evalScripts:"always",fallback:()=>o.createElement("span",null,"Error!"),loading:()=>o.createElement("span",null," ",n," "),renumerateIRIElements:!1,src:i,useRequestCache:!1}),ut=()=>{let i=_e("(min-width: 768px)");const e=Le();return o.useEffect(()=>{const n=Ae.getState().lastCommit.sha!=="";!n&&e(ze()),n&&Y.success("phew... won't dispatch again, already have a state.",{icon:"\u{1F60C}"})},[]),o.createElement(qe,{flow:i?"row":"column",justifyContent:i?"space-evenly":"flex-start",alignItems:i?"flex-start":"center",height:"100%"},o.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.createElement(ae,{fontSize:"15px",fontWeight:"bolder"}," minlaxz = (\xA0) => async dispatch => \u{1F680} "),o.createElement("div",null,o.createElement("p",null,"Here is ",o.createElement(J,{to:"https://github.com/minlaxz",text:"My Github"})),o.createElement("code",{style:{fontSize:"13px"},className:"animate__animated animate__flipInX"},"Welcome to my universe. ",o.createElement(Ne,null)),o.createElement(ae,{fontSize:"14px"},"This is an automated profile."),o.createElement("p",null,"Source Code is hosted ",o.createElement(J,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"}))),o.createElement("div",{style:{maxWidth:"100%"}},o.createElement("p",{style:{margin:"10px",padding:"10px",fontFamily:"serif"}},"My name is ",o.createElement("b",null,"Min Min Latt"),", \xA0",o.createElement("span",null,"a self-taught software developer.Use to create stuffs \u{1F680} by reading documentations \u{1F5D2}\uFE0F and fixed bugs \u{1F41B} by following discussions and thoughts \u{1F4AD}."))),o.createElement(pe,{src:"https://raw.githubusercontent.com/minlaxz/minlaxz/devcard/devcard.svg",className:nt,loadingText:"Loading Daily Developer Card Svg Data..."}),o.createElement(Oe,null,o.createElement(Ge,null,"You would visit to me with ",o.createElement(J,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",o.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",o.createElement("b",null,"long")," to remember for you \u{1F974}")),o.createElement(q.exports.Suspense,{fallback:o.createElement(ke,null)},o.createElement(ot,null),o.createElement(lt,null),o.createElement(it,null),o.createElement(st,null),o.createElement(ct,null)),o.createElement("div",{style:{border:"2px dotted khaki",margin:"1em"}},o.createElement("small",null,"Well, actually I am the last one \u{1F913} not to distrurb you."),o.createElement(je,null))),o.createElement(pe,{src:"https://raw.githubusercontent.com/minlaxz/minlaxz/github-metrics/github-metrics.svg",className:at,loadingText:"Loading Github Metrics Svg Data..."}))};var Et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ut});export{Et as i,Me as r};
