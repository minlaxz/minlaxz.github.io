import{R as e,s as t,p as l,u as o,L as a,a as n,b as i,M as r,S as s,c as m,H as c,d as g}from"./vendor.bd382d30.js";const d=()=>{const[t,l]=e.useState(new Date),o=e.useCallback((()=>{l(new Date)}));return e.useEffect((()=>{let e=setInterval((()=>o()),1e3);return()=>clearInterval(e)}),[o]),e.createElement("span",null,t.toLocaleTimeString())},h=({to:t,text:l})=>e.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},l,e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"16px",width:"16px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}))),p=t.div`
margin: 0;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`,u=t.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`,b=t.ul`
list-style-type: lower-greek;
`,E=t.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,w=t.div`
margin: 0.5em;
padding: 0.5em;
`,f=t.pre`
margin-left:0.5em;
margin-right: 0.5em;
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,y=()=>(e.useEffect((()=>{window.document.title="minlaxz | Home";const e=window.location.hostname,t=localStorage.getItem(e);if(window.scrollTo(0,0),t){const e=l(JSON.parse(t),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}}),[]),e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement("h3",null,"Hello, world! ((👻) => (minlaxz)) "),e.createElement("code",{style:{fontSize:"13px"}},"Welcome to my universe. ",e.createElement(d,null)),e.createElement(f,null,"You would visit to me with ",e.createElement(h,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you 🥴"),e.createElement(f,null,"Suggesstion : if you're presbyopia zoom it please."),e.createElement("p",null,"Source Code is hosted ",e.createElement(h,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(w,null,"Available routes:",e.createElement(b,null,e.createElement(E,null,"View my =>",e.createElement(Q,{cusName:"Repo List 🥶"})),e.createElement(E,null,"Here is markdown => ",e.createElement(Z,null)),e.createElement(E,null,"Other sites => ",e.createElement(Y,null)))),e.createElement(w,null,"This page should also be available at...",e.createElement(b,null,e.createElement(E,null,e.createElement(h,{to:"https://minlaxz.github.io",text:"with Github Pages"}),"github.minlaxz.me"===window.location.hostname?e.createElement("span",null,"  you're currently viewing"):e.createElement("span",null,"  hostname does not match")),e.createElement(E,null,e.createElement(h,{to:"https://gh-minlaxz.pages.dev",text:"with Cloudflare Pages (not yet)"})))),e.createElement("div",{style:{width:"80%",textAlign:"center",padding:"10px",fontSize:"14px"}},e.createElement("b",null,"React")," with ",e.createElement("b",null,"Vite")," as build tool, hosted on ",e.createElement("b",null,"Github Pages")," with ",e.createElement("b",null,"actions")," on ",e.createElement("b",null,"push")," on ",e.createElement("b",null,"main"),", SSL/TLS by ",e.createElement("b",null,"Cloudflare")," with ",e.createElement("b",null,"proxies"),".")),e.createElement(u,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),e.createElement(X,null))))),x=t.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,k=t.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,C=()=>{const t=o();return e.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),e.createElement(x,null,e.createElement(k,null,"Oops 😯! Well this is embarassing."),e.createElement("pre",null,"Not weed on this ",t.pathname),e.createElement(a,{to:"/"},"Home is safe 🤓"))},v=t.div`
margin: 0;
padding: 0;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-start;
width: 100vw;
height: auto;
`,S=t.ul`
list-style-type: lower-greek;
margin-block-start: 0;
margin-block-end: 0;
`,z=t.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,D=()=>{const[t,l]=e.useState(null);return e.useEffect((()=>{window.document.title="minlaxz | Repos",(async()=>{const e=await n.get("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");l(e.data),console.log("fetched repos ... ")})()}),[]),e.createElement(v,null,"Recently updated repositories ...",e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},e.createElement(U,{cusName:"Back to Home 🏡"}),e.createElement(Z,{cusName:"Go to markdown 🥶"})),t?e.createElement(S,null,t.map((t=>e.createElement(e.Fragment,{key:t.id},e.createElement(z,null,t.name," ",e.createElement(h,{to:t.html_url,text:"View on github"}),e.createElement("p",null,`${t.description}`.slice(0,250),"..."),e.createElement("small",null,"Size : ",t.size,"Kb, Language: ",t.language)," ",e.createElement(a,{to:`/repos/${t.name}`},"Detail ")," =>"),e.createElement("hr",null))))):e.createElement("p",null,"Fetching repos..."))},N=t.div`
margin:0;
padding:0;
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
height: 100vh;
`,j=t.pre`
white-space: pre-wrap;
font-size: 0.9rem;
min-width: 0;
`,F=t.code`
color: red;
`,L=()=>(e.useEffect((()=>{window.document.title="minlaxz | About"}),[]),e.createElement(N,null,e.createElement(j,null,"Hello, world! in this page I've used styled components and ",e.createElement(F,null,"pre")),e.createElement(U,null))),B=t.div`
display: flex;
flex-flow: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 90vh;
background-color: #fff;
`,T=t.pre`
white-space: pre-wrap;
/* word-break: break-all; */
text-align: center;
`,A=()=>{let{name:t}=i();const[l,o]=e.useState(null);return e.useEffect((()=>{"minlaxz"!==t?(async()=>{const e=await n.get(`https://api.github.com/repos/minlaxz/${t}`);o(e.data)})():o({name:t})}),[]),l?e.createElement(e.Fragment,null,e.createElement(B,null,"minlaxz"===l.name?e.createElement("pre",null,"This is personal repo"):e.createElement(e.Fragment,null,e.createElement("pre",null,"Name : ",l.name),e.createElement("pre",null,"Forked : ",l.fork?"True":"False"),e.createElement(T,null,"Description : ",l.description),e.createElement("pre",null,"Language : ",l.language),e.createElement("pre",null,"Repo Size : ",l.size," Kb"),e.createElement(T,null,"GithubURL : ",e.createElement("a",{href:l.html_url},l.html_url)),e.createElement("pre",null,"Website : ",e.createElement("a",{href:l.homepage},l.homepage)||"Not provided.")),e.createElement("hr",null),e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},e.createElement(Q,{cusName:"Back to Repo List 👻"}),e.createElement(U,{cusName:"Go to Home 🏡"})))):e.createElement(e.Fragment,null,e.createElement("p",null,"Fetching..."),e.createElement(Q,null),e.createElement(U,null))},H=[{name:"programming",r:"#### Programming 👽",p:["![git](https://img.shields.io/badge/Git-E94E31?style=for-the-badge&logo=git&logoColor=white)","![shell](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)","![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)","![JS](https://img.shields.io/badge/JavaScript-F3CF00?style=for-the-badge&logo=javascript&logoColor=white)","![TS](https://img.shields.io/badge/TypeScript-2F74C0?style=for-the-badge&logo=typescript&logoColor=white)"]},{name:"others",r:"### Framework / Libraries / Tools / Others 🤷🏼‍♂️",p:["![micropython](https://img.shields.io/badge/Micro_Python-3776AB?style=for-the-badge&logo=micropython&logoColor=white)","![expressjs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)","![NODEJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)","![CSS3](https://img.shields.io/badge/CSS3-264DE4?style=for-the-badge&logo=css3&logoColor=white)","![SASS](https://img.shields.io/badge/sass-C66293?style=for-the-badge&logo=sass&logoColor=white)","![BABEL](https://img.shields.io/badge/babel-F1D53C?style=for-the-badge&logo=babel&logoColor=white)","![flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)","![django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)","![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![reactnative](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![tailwind](https://img.shields.io/badge/Tailwind-39B7D4?style=for-the-badge&logo=tailwind-css&logoColor=white)","![bootstrap](https://img.shields.io/badge/Bootstrap-8412FB?style=for-the-badge&logo=bootstrap&logoColor=white)","![materializecss](https://img.shields.io/badge/MaterializeCSS-EB7077?style=for-the-badge&logo=materialize&logoColor=white)","![firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)","![heroku](https://img.shields.io/badge/heroku-3A0092?style=for-the-badge&logo=heroku&logoColor=black)"]},{name:"osiot",r:"#### OS / IoTs 🤖",p:["![linux](https://img.shields.io/badge/Linux-202020?style=for-the-badge&logo=linux&logoColor=white)","![corelinux](https://img.shields.io/badge/CoreLinux-000000?style=for-the-badge&logo=core-linux&logoColor=white)","![alpine](https://img.shields.io/badge/Alpine-16597F?style=for-the-badge&logo=alpine-linux&logoColor=white)","![debian](https://img.shields.io/badge/Debian-A3052F?style=for-the-badge&logo=debian&logoColor=white)","![ubuntu](https://img.shields.io/badge/Ubuntu-DD4814?style=for-the-badge&logo=ubuntu&logoColor=white)","![kali](https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white)","![tails](https://img.shields.io/badge/Tails%20-56347C?&style=for-the-badge&logo=tails&logoColor=white)","![pi](https://img.shields.io/badge/raspberrypi-C41949?style=for-the-badge&logo=raspberrypi&logoColor=black)","![arduino](https://img.shields.io/badge/arduino-2F989D?style=for-the-badge&logo=arduino&logoColor=black)","![mqtt](https://img.shields.io/badge/MQTT-630064?style=for-the-badge&logo=mqtt&logoColor=black)","![nodemcu](https://img.shields.io/badge/NODEMCU-145582?style=for-the-badge&logo=nodemcu&logoColor=black)"]},{name:"connect",r:"#### Contact with me 📡",p:["![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)","![Gmail](https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white)","![LinkIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)","![Facebook](https://img.shields.io/badge/-Facebook-%230077B5?style=for-the-badge&logo=facebook&logoColor=white)"]}],M=t.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;  /*  100vh remove scroll bar but content will be hidden */
@media only screen and (max-width: 600px) {
    height: 100%;
}
`,I=t.div`
display: flex;
flex-flow: column;
align-items: center;
align-content: space-between;
`,O=t.div`
display: flex;
flex-flow: row;
flex-wrap: wrap;
width: 100vw;
justify-content: center;
@media only screen and (max-width: 768px) {
    justify-content: space-evenly;
}
`,G=t.div`
margin-top: 0.5em;
padding: 0.5em;
@media only screen and (max-width: 768px) {
    margin-top: 0.1em;
    padding: 0.1em;
}

`,R=t.img`
width: 30vw;
@media only screen and (max-width: 1024px) {
    width: 50vw;
}
@media only screen and (max-width: 600px) {
    width: 100vw;
}
`,_=({markdown:t})=>e.createElement(G,null,e.createElement(r,null,t)),J=({name:t})=>e.createElement(e.Fragment,null,e.createElement(I,null,H.filter((e=>e.name===t)).map(((t,l)=>e.createElement(r,{key:l},t.r)))),e.createElement(O,null,H.filter((e=>e.name===t)).map((t=>t.p.map(((t,l)=>e.createElement(_,{markdown:t,key:l}))))))),P=()=>(e.useEffect((()=>{window.document.title="minlaxz | markdown"}),[]),e.createElement(M,null,e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginTop:"1em"}},e.createElement(U,{cusName:"Back to Home 🏡"}),e.createElement(Q,{cusName:"Go to Repo List 👻"})),e.createElement(I,null,e.createElement(r,null,"### Howdy 😶‍🌫️ I am Min Min Latt (minlaxz) ☕")),e.createElement(r,null,"🕸 Here is my website (building): [minlaxz.me](https://minlaxz.me)"),e.createElement(J,{name:"connect"}),e.createElement(J,{name:"programming"}),e.createElement(J,{name:"others"}),e.createElement(J,{name:"osiot"}),e.createElement(R,{src:"https://metrics.lecoq.io/minlaxz",alt:"Github Metrics"}),e.createElement(R,{src:"https://github-readme-streak-stats.herokuapp.com/?user=minlaxz",alt:"Github Streak Stats"}))),V=t.div`
margin: 0;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`,W=()=>e.createElement(V,null,e.createElement("h3",null,"Other Websites")),$=t.img`
    width: 120px;
    @media only screen and (max-width: 768px) {
        width: 90px;
    }
    @media only screen and (max-width: 1024px) {
        width: 100px;
    }
`,q=({label:t})=>e.createElement($,{src:`https://img.shields.io/badge/${t}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),K=()=>e.createElement(s,null,e.createElement(m,{exact:!0,path:"/",component:y}),e.createElement(m,{exact:!0,path:"/repos",component:D}),e.createElement(m,{exact:!0,path:"/about",component:L}),e.createElement(m,{path:"/repos/:name",component:A}),e.createElement(m,{exact:!0,path:"/forhuman",component:P}),e.createElement(m,{exact:!0,path:"/othersites",component:W}),e.createElement(m,{component:C})),U=({cusName:t})=>e.createElement(a,{to:"/"},t||"Default Home 🏠"),Q=({linkClass:t,cusName:l})=>e.createElement("span",null,"  ",e.createElement(a,{to:"/repos",className:t},l||"repo list 🤓")),Y=({linkClass:t,cusName:l})=>e.createElement("span",null,"  ",e.createElement(a,{to:"/othersites",className:t},l||"Other websites")),X=({linkClass:t})=>e.createElement("span",null,"  ",e.createElement(a,{to:"/about",className:t},"Here")," is how this went through   🤔"),Z=({linkClass:t,cusName:l})=>e.createElement(a,{to:"/forhuman",className:t},e.createElement(q,{label:l||"View Markdown"}));function ee(){return e.createElement(c,{basename:"/"},e.createElement(K,null))}g.render(e.createElement(e.StrictMode,null,e.createElement(ee,null)),document.getElementById("root"));
