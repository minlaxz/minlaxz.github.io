import{s as e,R as t,p as l,u as a,L as o,a as n,M as i,b as r,S as s,c as m,H as c,d}from"./vendor.3782532a.js";const g=e.img`
    width: 120px;
    @media only screen and (max-width: 768px) {
        width: 90px;
    }
    @media only screen and (max-width: 1024px) {
        width: 100px;
    }
`,h=({label:e})=>t.createElement(g,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),u=()=>{const[e,l]=t.useState(new Date),a=t.useCallback((()=>{l(new Date)}));return t.useEffect((()=>{let e=setInterval((()=>a()),1e3);return()=>clearInterval(e)}),[a]),t.createElement("span",null,e.toLocaleTimeString())},p=({to:e,text:l})=>t.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},l,t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"16px",width:"16px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}))),f=e.div`
margin: 0;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`,E=e.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`,b=e.ul`
list-style-type: lower-greek;
`,w=e.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,y=e.div`
margin: 0.5em;
padding: 0.5em;
`,x=e.pre`
margin-left:0.5em;
margin-right: 0.5em;
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,k=()=>(t.useEffect((()=>{window.document.title="minlaxz | Home";const e=window.location.hostname,t=localStorage.getItem(e);if(window.scrollTo(0,0),t){const e=l(JSON.parse(t),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}}),[]),t.createElement(t.Fragment,null,t.createElement(f,null,t.createElement("h3",null,"Hello, world! ((👻) => (minlaxz)) "),t.createElement("code",{style:{fontSize:"13px"}},"Welcome to my universe. ",t.createElement(u,null)),t.createElement(x,null,"You would visit to me with ",t.createElement(p,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",t.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",t.createElement("b",null,"long")," to remember for you 🥴"),t.createElement(x,null,"Suggesstion : if you're presbyopia zoom it please."),t.createElement("p",null,"Source Code is hosted ",t.createElement(p,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),t.createElement(y,null,"Available routes:",t.createElement(b,null,t.createElement(w,null,"View my =>",t.createElement(ce,{cusName:"Repo List 🥶"})),t.createElement(w,null,"Here is markdown => ",t.createElement(ue,null)),t.createElement(w,null,"Other sites => ",t.createElement(de,null)),t.createElement(w,null,"Serverless Api Calls => ",t.createElement(ge,null)))),t.createElement(y,null,"This page should also be available at...",t.createElement(b,null,t.createElement(w,null,t.createElement(p,{to:"https://minlaxz.github.io",text:"with Github Pages"}),"github.minlaxz.me"===window.location.hostname?t.createElement("span",null,"  you're currently viewing"):t.createElement("span",null,"  hostname does not match")),t.createElement(w,null,t.createElement(p,{to:"https://gh-minlaxz.pages.dev",text:"with Cloudflare Pages (not yet)"})))),t.createElement("div",{style:{width:"80%",textAlign:"center",padding:"10px",fontSize:"14px"}},t.createElement("b",null,"React")," with ",t.createElement("b",null,"Vite")," as build tool, hosted on ",t.createElement("b",null,"Github Pages")," with ",t.createElement("b",null,"actions")," on ",t.createElement("b",null,"push")," on ",t.createElement("b",null,"main"),", SSL/TLS by ",t.createElement("b",null,"Cloudflare")," with ",t.createElement("b",null,"proxies"),".")),t.createElement(E,null,t.createElement("div",{style:{border:"2px dotted khaki"}},t.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),t.createElement(he,null))))),v=e.div`
margin:0;
padding:0;
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
height: 100vh;
`,C=e.pre`
white-space: pre-wrap;
font-size: 0.8rem;
min-width: 0;
`,S=e.code`
color: red;
`,z=e.ul`
list-style-type: lower-greek;
`,N=e.li`
font-size: 18px;
margin: 0.4em;
padding: 0.4em;
@media only screen and (max-width: 600px) {
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
}

`,j=e.div`
margin: 0.5em;
padding: 0.5em;
`,F=({tech:e})=>t.createElement(N,null,e),D=({children:e,head:l})=>t.createElement(j,null,l,t.createElement(z,null,e)),L=()=>(t.useEffect((()=>{window.document.title="minlaxz | About this"}),[]),t.createElement(v,null,t.createElement(D,{head:"I've used the following tools"},t.createElement(F,{tech:"React for fontend"}),t.createElement(F,{tech:"styled componenet for CSS"}),t.createElement(F,{tech:"Vite as build tool"}),t.createElement(F,{tech:"React hash router for frontend routing"})),t.createElement(D,{head:"I've used these for domain"},t.createElement(F,{tech:"This is hosted on github pages"}),t.createElement(F,{tech:"This is also hosted on cloudflare pages"}),t.createElement(F,{tech:"used CNAME for domain routing"})),t.createElement(D,{head:"What is cool ..?"},t.createElement(F,{tech:"Clock is about Javascript Closures"}),t.createElement(F,{tech:"Repo page is about axios with useEffect()"}),t.createElement(F,{tech:"Markdown page is about map() and filter()"}),t.createElement(F,{tech:"gh-pages package is cool but this used Github actions workflow"})),t.createElement(C,null,t.createElement(S,null,"I will made a backend for this 🤪")),t.createElement(me,{cusName:"Back to Home"}))),T=e.div`
margin: 0;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`,B=()=>t.createElement(T,null,t.createElement("h3",null,"Other Websites")),A=e.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,R=e.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,H=()=>{const e=a();return t.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),t.createElement(A,null,t.createElement(R,null,"Oops 😯! Well this is embarassing."),t.createElement("pre",null,"Not weed on this ",e.pathname),t.createElement(o,{to:"/"},"Home is safe 🤓"))},I=e.div`
margin: 0;
padding: 0;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-start;
width: 100vw;
height: auto;
`,M=e.ul`
list-style-type: lower-greek;
margin-block-start: 0;
margin-block-end: 0;
`,O=e.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,G=e.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
    margin-top: 1em;
`,_=e=>t.createElement(G,null,e.children),J=()=>{const[e,l]=t.useState(null);return t.useEffect((()=>{window.document.title="minlaxz | Repos",(async()=>{const e=await n.get("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");l(e.data),console.log("fetched repos ... ")})()}),[]),t.createElement(I,null,"Recently updated repositories ...",t.createElement(_,null,t.createElement(me,{cusName:"Back to Home 🏡"}),t.createElement(ue,{cusName:"Go to markdown 🥶"})),e?t.createElement(M,null,e.map((e=>t.createElement(t.Fragment,{key:e.id},t.createElement(O,null,e.name," ",t.createElement(p,{to:e.html_url,text:"View on github"}),t.createElement("p",null,`${e.description}`.slice(0,250),"..."),t.createElement("small",null,"Size : ",e.size,"Kb, Language: ",e.language)," ",t.createElement(o,{to:`/repos/${e.name}`},"Detail ")," =>"),t.createElement("hr",null))))):t.createElement("p",null,"Fetching repos..."))},P=[{name:"programming",r:"#### Programming 👽",p:["![git](https://img.shields.io/badge/Git-E94E31?style=for-the-badge&logo=git&logoColor=white)","![shell](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)","![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)","![JS](https://img.shields.io/badge/JavaScript-F3CF00?style=for-the-badge&logo=javascript&logoColor=white)","![TS](https://img.shields.io/badge/TypeScript-2F74C0?style=for-the-badge&logo=typescript&logoColor=white)"]},{name:"others",r:"### Framework / Libraries / Tools / Others 🤷🏼‍♂️",p:["![micropython](https://img.shields.io/badge/Micro_Python-3776AB?style=for-the-badge&logo=micropython&logoColor=white)","![expressjs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)","![NODEJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)","![CSS3](https://img.shields.io/badge/CSS3-264DE4?style=for-the-badge&logo=css3&logoColor=white)","![SASS](https://img.shields.io/badge/sass-C66293?style=for-the-badge&logo=sass&logoColor=white)","![BABEL](https://img.shields.io/badge/babel-F1D53C?style=for-the-badge&logo=babel&logoColor=white)","![flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)","![django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)","![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![reactnative](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![tailwind](https://img.shields.io/badge/Tailwind-39B7D4?style=for-the-badge&logo=tailwind-css&logoColor=white)","![bootstrap](https://img.shields.io/badge/Bootstrap-8412FB?style=for-the-badge&logo=bootstrap&logoColor=white)","![materializecss](https://img.shields.io/badge/MaterializeCSS-EB7077?style=for-the-badge&logo=materialize&logoColor=white)","![firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)","![heroku](https://img.shields.io/badge/heroku-3A0092?style=for-the-badge&logo=heroku&logoColor=black)"]},{name:"osiot",r:"#### OS / IoTs 🤖",p:["![linux](https://img.shields.io/badge/Linux-202020?style=for-the-badge&logo=linux&logoColor=white)","![corelinux](https://img.shields.io/badge/CoreLinux-000000?style=for-the-badge&logo=core-linux&logoColor=white)","![alpine](https://img.shields.io/badge/Alpine-16597F?style=for-the-badge&logo=alpine-linux&logoColor=white)","![debian](https://img.shields.io/badge/Debian-A3052F?style=for-the-badge&logo=debian&logoColor=white)","![ubuntu](https://img.shields.io/badge/Ubuntu-DD4814?style=for-the-badge&logo=ubuntu&logoColor=white)","![kali](https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white)","![tails](https://img.shields.io/badge/Tails%20-56347C?&style=for-the-badge&logo=tails&logoColor=white)","![pi](https://img.shields.io/badge/raspberrypi-C41949?style=for-the-badge&logo=raspberrypi&logoColor=black)","![arduino](https://img.shields.io/badge/arduino-2F989D?style=for-the-badge&logo=arduino&logoColor=black)","![mqtt](https://img.shields.io/badge/MQTT-630064?style=for-the-badge&logo=mqtt&logoColor=black)","![nodemcu](https://img.shields.io/badge/NODEMCU-145582?style=for-the-badge&logo=nodemcu&logoColor=black)"]},{name:"connect",r:"#### Contact with me 📡",p:["![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)","![Gmail](https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white)","![LinkIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)","![Facebook](https://img.shields.io/badge/-Facebook-%230077B5?style=for-the-badge&logo=facebook&logoColor=white)"]}],q=e.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;  /*  100vh remove scroll bar but content will be hidden */
@media only screen and (max-width: 600px) {
    height: 100%;
}
`,V=e.div`
display: flex;
flex-flow: column;
align-items: center;
align-content: space-between;
`,W=e.div`
display: flex;
flex-flow: row;
flex-wrap: wrap;
width: 100vw;
justify-content: center;
@media only screen and (max-width: 768px) {
    justify-content: space-evenly;
}
`,$=e.div`
margin-top: 0.5em;
padding: 0.5em;
@media only screen and (max-width: 768px) {
    margin-top: 0.1em;
    padding: 0.1em;
}

`,U=e.img`
width: 30vw;
@media only screen and (max-width: 1024px) {
    width: 50vw;
}
@media only screen and (max-width: 600px) {
    width: 100vw;
}
`,K=({markdown:e})=>t.createElement($,null,t.createElement(i,null,e)),Y=({name:e})=>t.createElement(t.Fragment,null,t.createElement(V,null,P.filter((t=>t.name===e)).map(((e,l)=>t.createElement(i,{key:l},e.r)))),t.createElement(W,null,P.filter((t=>t.name===e)).map((e=>e.p.map(((e,l)=>t.createElement(K,{markdown:e,key:l}))))))),Q=()=>(t.useEffect((()=>{window.document.title="minlaxz | markdown"}),[]),t.createElement(q,null,t.createElement(_,null,t.createElement(me,{cusName:"Back to Home 🏡"}),t.createElement(ce,{cusName:"Go to Repo List 👻"})),t.createElement(V,null,t.createElement(i,null,"### Howdy 😶‍🌫️ I am Min Min Latt (minlaxz) ☕")),t.createElement(i,null,"🕸 Here is my website (building): [minlaxz.me](https://minlaxz.me)"),t.createElement(Y,{name:"connect"}),t.createElement(Y,{name:"programming"}),t.createElement(Y,{name:"others"}),t.createElement(Y,{name:"osiot"}),t.createElement(U,{src:"https://metrics.lecoq.io/minlaxz",alt:"Github Metrics"}),t.createElement(U,{src:"https://github-readme-streak-stats.herokuapp.com/?user=minlaxz",alt:"Github Streak Stats"}))),X=e.div`
display: flex;
flex-flow: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 90vh;
background-color: #fff;
`,Z=e.pre`
white-space: pre-wrap;
/* word-break: break-all; */
text-align: center;
`,ee=()=>{let{name:e}=r();const[l,a]=t.useState(null);return t.useEffect((()=>{"minlaxz"!==e?(async()=>{const t=await n.get(`https://api.github.com/repos/minlaxz/${e}`);a(t.data)})():a({name:e})}),[]),l?t.createElement(t.Fragment,null,t.createElement(X,null,"minlaxz"===l.name?t.createElement("pre",null,"This is personal repo"):t.createElement(t.Fragment,null,t.createElement("pre",null,"Name : ",l.name),t.createElement("pre",null,"Forked : ",l.fork?"True":"False"),t.createElement(Z,null,"Description : ",l.description),t.createElement("pre",null,"Language : ",l.language),t.createElement("pre",null,"Repo Size : ",l.size," Kb"),t.createElement(Z,null,"GithubURL : ",t.createElement("a",{href:l.html_url},l.html_url)),t.createElement("pre",null,"Website : ",t.createElement("a",{href:l.homepage},l.homepage)||"Not provided.")),t.createElement("hr",null),t.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},t.createElement(ce,{cusName:"Back to Repo List 👻"}),t.createElement(me,{cusName:"Go to Home 🏡"})))):t.createElement(t.Fragment,null,t.createElement("p",null,"Fetching..."),t.createElement(ce,null),t.createElement(me,null))},te=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;    
    background-color: #fafafa;
    height: 100vh;
    width: 100vw;
`,le=e.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100wv;
    justify-content: center;
@media only screen and (max-width: 768px) {
    justify-content: space-evenly;
}
`,ae=e.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

`,oe=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,ne=e.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 3px;
    background-color: #fff;
    color: #000;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    text-align: center;
    text-transform: capitalize;
`,ie=e.button`
    background-color: #5FC9F8;
    border: none;
    outline: none;
    font-size: 0.7;
    padding: 0.5rem;
    margin: 0.5em;
    border-radius: 3px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    text-align: center;
    text-transform: capitalize;
    cursor: pointer;
    color: #000;
    transition: all 0.3s;
    &:hover {
        background-color: #fafafa;
        color: #000;
    }

    ${({danger:e})=>e&&"background-color: red;"}
`,re=()=>{const[e,l]=t.useState(""),[a,o]=t.useState(""),[i,r]=t.useState(null),[s,m]=t.useState(!1);return t.useEffect((()=>{console.log(e);["fuck","sex","nude"].includes(e)?m(!0):m(!1)}),[e]),t.createElement(te,null,t.createElement("h3",null,"You're gonna make serverless api request 👻"),t.createElement(_,null,t.createElement(me,{cusName:"Return Home 😭"}),t.createElement(ue,{cusName:"To markdown 🥶"}),t.createElement(ce,{cusName:"To Repos 📑"})),t.createElement(oe,null,t.createElement(ne,{type:"text",placeholder:"Search images",onChange:e=>l(e.target.value)}),t.createElement(ie,{danger:s,onClick:async()=>{r(null),o("Pwease wait 👻 ... ");const t=await(async({query:e})=>{await n.post("https://lessapi.minlaxz.workers.dev/api/images",{headers:{"Content-type":"application/json;charset=UTF-8"},query:e}).then((e=>e.data)).catch((e=>o(JSON.stringify(e.message))))})({query:e});r(t)}},`Search ${e} images`)),t.createElement(le,null,i?i.map((e=>t.createElement("a",{key:e.id,href:`https://unsplash.com/photos/${e.id}`,target:"_blank",rel:"noopener noreferrer"},t.createElement(ae,{src:e.src,alt:e.alt})))):t.createElement("p",null,a)))},se=()=>t.createElement(s,null,t.createElement(m,{exact:!0,path:"/",component:k}),t.createElement(m,{exact:!0,path:"/about",component:L}),t.createElement(m,{exact:!0,path:"/othersites",component:B}),t.createElement(m,{exact:!0,path:"/repos",component:J}),t.createElement(m,{path:"/repos/:name",component:ee}),t.createElement(m,{exact:!0,path:"/forhuman",component:Q}),t.createElement(m,{exact:!0,path:"/serverless",component:re}),t.createElement(m,{component:H})),me=({cusName:e})=>t.createElement(o,{to:"/"},e||"Default Home 🏠"),ce=({linkClass:e,cusName:l})=>t.createElement("span",null,"  ",t.createElement(o,{to:"/repos",className:e},l||"repo list 🤓")),de=({linkClass:e,cusName:l})=>t.createElement("span",null,"  ",t.createElement(o,{to:"/othersites",className:e},l||"Other websites")),ge=({linkClass:e,cusName:l})=>t.createElement("span",null,"  ",t.createElement(o,{to:"/serverless",className:e},l||"Serverless API")),he=({linkClass:e})=>t.createElement("span",null,"  ",t.createElement(o,{to:"/about",className:e},"Here")," is how this went through   🤔"),ue=({linkClass:e,cusName:l})=>t.createElement(o,{to:"/forhuman",className:e},t.createElement(h,{label:l||"View Markdown"}));function pe(){return t.createElement(c,{basename:"/"},t.createElement(se,null))}d.render(t.createElement(t.StrictMode,null,t.createElement(pe,null)),document.getElementById("root"));
