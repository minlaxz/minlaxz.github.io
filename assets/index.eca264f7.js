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
    margin: 0.2em;
    padding: 0.2em;
`,w=t.div`
    margin: 0.5em;
    padding: 0.5em;
`,f=()=>(e.useEffect((()=>{window.document.title="minlaxz | Home";const e=window.location.hostname,t=localStorage.getItem(e);if(window.scrollTo(0,0),t){const e=l(JSON.parse(t),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}}),[]),e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement("h3",null,"Hello, world! ((👻) => (minlaxz)) "),e.createElement("code",{style:{fontSize:"13px"}},"Welcome to my universe. ",e.createElement(d,null)),e.createElement("p",null,"Source Code is hosted ",e.createElement(h,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(w,null,"Available routes:",e.createElement(b,null,e.createElement(E,null,"View my",e.createElement(P,{cusName:"Repo List 🥶"})),e.createElement(E,null,"View how I rendered ",e.createElement($,{cusName:"markdown for human"})))),e.createElement(w,null,"This page should also be available at...",e.createElement(b,null,e.createElement(E,null,e.createElement(h,{to:"https://minlaxz.github.io",text:"on Github Pages"}),"github.minlaxz.me"===window.location.hostname?e.createElement("span",null,"Currently viewing"):e.createElement("span",null)),e.createElement(E,null,e.createElement(h,{to:"https://gh-minlaxz.pages.dev",text:"on Cloudflare Pages (not yet)"})))),e.createElement("div",{style:{width:"80%",textAlign:"center",padding:"10px",fontSize:"14px"}},e.createElement("b",null,"React")," with ",e.createElement("b",null,"Vite")," as build tool, hosted on ",e.createElement("b",null,"Github Pages")," with ",e.createElement("b",null,"actins")," on ",e.createElement("b",null,"push")," on ",e.createElement("b",null,"main"),", SSL/TLS by ",e.createElement("b",null,"Cloudflare")," with ",e.createElement("b",null,"proxies"),".")),e.createElement(u,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),e.createElement(V,null)))));var y="_root_container_1tiwc_1",x="_oops_1tiwc_10";const C=()=>{const t=o();return e.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),e.createElement("div",{className:`${y}`},e.createElement("p",{className:`${x}`},"Oops 😯! Well this is embarassing."),e.createElement("pre",null,"Not weed on this ",t.pathname),e.createElement(a,{to:"/"},"Home is safe 🤓"))};var v="_root_22s2x_1";const k=()=>{const[t,l]=e.useState(null);return e.useEffect((()=>{window.document.title="minlaxz | Repos",(async()=>{const e=await n.get("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");l(e.data),console.log("fetched repos ... ")})()}),[]),e.createElement("div",{className:`${v}`},"Recently updated repositories ...",e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},e.createElement(J,{cusName:"Back to Home 🏡"}),e.createElement($,{cusName:"Go to markdown 🥶"})),t?e.createElement("ul",null,t.map((t=>e.createElement(e.Fragment,{key:t.id},e.createElement("li",null,t.name," ",e.createElement(h,{to:t.html_url,text:"View on github"}),e.createElement("p",null,`${t.description}`.slice(0,250),"..."),e.createElement("small",null,"Size : ",t.size,"Kb, Language: ",t.language)," ",e.createElement(a,{to:`/repos/${t.name}`},"Detail =>")),e.createElement("hr",null))))):e.createElement("p",null,"Fetching repos..."))},S=t.div`
margin:0;
padding:0;
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
height: 100vh;
`,z=t.pre`
white-space: pre-wrap;
font-size: 0.9rem;
min-width: 0;
`,N=t.code`
color: red;
`,D=()=>(e.useEffect((()=>{window.document.title="minlaxz | About"}),[]),e.createElement(S,null,e.createElement(z,null,"Hello, world! in this page I've used styled components and ",e.createElement(N,null,"pre")),e.createElement(J,null))),F=t.div`
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: #fff;

`,j=t.pre`
    white-space: pre-wrap;
    /* word-break: break-all; */
    text-align: center;
`,L=()=>{let{name:t}=i();const[l,o]=e.useState(null);return e.useEffect((()=>{"minlaxz"!==t?(async()=>{const e=await n.get(`https://api.github.com/repos/minlaxz/${t}`);o(e.data)})():o({name:t})}),[]),l?e.createElement(e.Fragment,null,e.createElement(F,null,"minlaxz"===l.name?e.createElement("pre",null,"This is personal repo"):e.createElement(e.Fragment,null,e.createElement("pre",null,"Name : ",l.name),e.createElement("pre",null,"Forked : ",l.fork?"True":"False"),e.createElement(j,null,"Description : ",l.description),e.createElement("pre",null,"Language : ",l.language),e.createElement("pre",null,"Repo Size : ",l.size," Kb"),e.createElement(j,null,"GithubURL : ",e.createElement("a",{href:l.html_url},l.html_url)),e.createElement("pre",null,"Website : ",e.createElement("a",{href:l.homepage},l.homepage)||"Not provided.")),e.createElement("hr",null),e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},e.createElement(P,{cusName:"Back to Repo List 👻"}),e.createElement(J,{cusName:"Go to Home 🏡"})))):e.createElement(e.Fragment,null,e.createElement("p",null,"Fetching..."),e.createElement(P,null),e.createElement(J,null))},B=[{name:"programming",r:"#### Programming 👽",p:["![git](https://img.shields.io/badge/Git-E94E31?style=for-the-badge&logo=git&logoColor=white)","![shell](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)","![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)","![JS](https://img.shields.io/badge/JavaScript-F3CF00?style=for-the-badge&logo=javascript&logoColor=white)","![TS](https://img.shields.io/badge/TypeScript-2F74C0?style=for-the-badge&logo=typescript&logoColor=white)"]},{name:"others",r:"### Framework / Libraries / Tools / Others 🤷🏼‍♂️",p:["![micropython](https://img.shields.io/badge/Micro_Python-3776AB?style=for-the-badge&logo=micropython&logoColor=white)","![expressjs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)","![NODEJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)","![CSS3](https://img.shields.io/badge/CSS3-264DE4?style=for-the-badge&logo=css3&logoColor=white)","![SASS](https://img.shields.io/badge/sass-C66293?style=for-the-badge&logo=sass&logoColor=white)","![BABEL](https://img.shields.io/badge/babel-F1D53C?style=for-the-badge&logo=babel&logoColor=white)","![flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)","![django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)","![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![reactnative](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![tailwind](https://img.shields.io/badge/Tailwind-39B7D4?style=for-the-badge&logo=tailwind-css&logoColor=white)","![bootstrap](https://img.shields.io/badge/Bootstrap-8412FB?style=for-the-badge&logo=bootstrap&logoColor=white)","![materializecss](https://img.shields.io/badge/MaterializeCSS-EB7077?style=for-the-badge&logo=materialize&logoColor=white)","![firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)","![heroku](https://img.shields.io/badge/heroku-3A0092?style=for-the-badge&logo=heroku&logoColor=black)"]},{name:"osiot",r:"#### OS / IoTs 🤖",p:["![linux](https://img.shields.io/badge/Linux-202020?style=for-the-badge&logo=linux&logoColor=white)","![corelinux](https://img.shields.io/badge/CoreLinux-000000?style=for-the-badge&logo=core-linux&logoColor=white)","![alpine](https://img.shields.io/badge/Alpine-16597F?style=for-the-badge&logo=alpine-linux&logoColor=white)","![debian](https://img.shields.io/badge/Debian-A3052F?style=for-the-badge&logo=debian&logoColor=white)","![ubuntu](https://img.shields.io/badge/Ubuntu-DD4814?style=for-the-badge&logo=ubuntu&logoColor=white)","![kali](https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white)","![tails](https://img.shields.io/badge/Tails%20-56347C?&style=for-the-badge&logo=tails&logoColor=white)","![pi](https://img.shields.io/badge/raspberrypi-C41949?style=for-the-badge&logo=raspberrypi&logoColor=black)","![arduino](https://img.shields.io/badge/arduino-2F989D?style=for-the-badge&logo=arduino&logoColor=black)","![mqtt](https://img.shields.io/badge/MQTT-630064?style=for-the-badge&logo=mqtt&logoColor=black)","![nodemcu](https://img.shields.io/badge/NODEMCU-145582?style=for-the-badge&logo=nodemcu&logoColor=black)"]},{name:"connect",r:"#### Contact with me 📡",p:["![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)","![Gmail](https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white)","![LinkIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)","![Facebook](https://img.shields.io/badge/-Facebook-%230077B5?style=for-the-badge&logo=facebook&logoColor=white)"]}],_=t.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;  /*  100vh remove scroll bar but content will be hidden */
    @media only screen and (max-width: 600px) {
        height: 100%;
    }
`,T=t.div`
    display: flex;
    flex-flow: column;

    align-items: center;
    align-content: space-between;
`,A=t.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        justify-content: space-evenly;
    }

`,H=t.div`
    margin-top: 0.5em;
    padding: 0.5em;
    @media only screen and (max-width: 768px) {
        margin-top: 0.1em;
        padding: 0.1em;
    }

`,I=({markdown:t})=>e.createElement(H,null,e.createElement(r,null,t)),G=({name:t})=>e.createElement(e.Fragment,null,e.createElement(T,null,B.filter((e=>e.name===t)).map(((t,l)=>e.createElement(r,{key:l},t.r)))),e.createElement(A,null,B.filter((e=>e.name===t)).map((t=>t.p.map(((t,l)=>e.createElement(I,{markdown:t,key:l}))))))),M=t.img`
    width: 30vw;
    @media only screen and (max-width: 1024px) {
        width: 50vw;
    }
    @media only screen and (max-width: 600px) {
        width: 100vw;
    }
`,R=()=>e.createElement(_,null,e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginTop:"1em"}},e.createElement(J,{cusName:"Back to Home 🏡"}),e.createElement(P,{cusName:"Go to Repo List 👻"})),e.createElement(T,null,e.createElement(r,null,"### Howdy 😶‍🌫️ I am Min Min Latt (minlaxz) ☕")),e.createElement(r,null,"🕸 Here is my website (building): [minlaxz.me](https://minlaxz.me)"),e.createElement(G,{name:"connect"}),e.createElement(G,{name:"programming"}),e.createElement(G,{name:"others"}),e.createElement(G,{name:"osiot"}),e.createElement(M,{src:"https://metrics.lecoq.io/minlaxz",alt:"Github Metrics"}),e.createElement(M,{src:"https://github-readme-streak-stats.herokuapp.com/?user=minlaxz",alt:"Github Streak Stats"})),O=()=>e.createElement(s,null,e.createElement(m,{exact:!0,path:"/",component:f}),e.createElement(m,{exact:!0,path:"/repos",component:k}),e.createElement(m,{exact:!0,path:"/about",component:D}),e.createElement(m,{path:"/repos/:name",component:L}),e.createElement(m,{exact:!0,path:"/forhuman",component:R}),e.createElement(m,{component:C})),J=({cusName:t})=>e.createElement(a,{to:"/"},t||"Home 🏠"),P=({linkClass:t,cusName:l})=>e.createElement("span",null,"  ",e.createElement(a,{to:"/repos",className:t},l||"repo list 🤓")),V=({linkClass:t})=>e.createElement("span",null,"  ",e.createElement(a,{to:"/about",className:t},"Here")," is how this went through   🤔"),$=({linkClass:t,cusName:l})=>e.createElement("span",null,"  ",e.createElement(a,{to:"/forhuman",className:t},l||"markdown"));function W(){return e.createElement(c,{basename:"/"},e.createElement(O,null))}g.render(e.createElement(e.StrictMode,null,e.createElement(W,null)),document.getElementById("root"));
