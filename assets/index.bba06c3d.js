import{R as e,s as t,p as l,u as a,L as o,a as n,b as i,M as r,S as s,c as m,H as c,d}from"./vendor.bd382d30.js";const g=()=>{const[t,l]=e.useState(new Date),a=e.useCallback((()=>{l(new Date)}));return e.useEffect((()=>{let e=setInterval((()=>a()),1e3);return()=>clearInterval(e)}),[a]),e.createElement("span",null,t.toLocaleTimeString())},h=({to:t,text:l})=>e.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},l,e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"16px",width:"16px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}))),u=t.div`
margin: 0;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`,p=t.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`,f=t.ul`
list-style-type: lower-greek;
`,E=t.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,b=t.div`
margin: 0.5em;
padding: 0.5em;
`,w=t.pre`
margin-left:0.5em;
margin-right: 0.5em;
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,y=()=>(e.useEffect((()=>{window.document.title="minlaxz | Home";const e=window.location.hostname,t=localStorage.getItem(e);if(window.scrollTo(0,0),t){const e=l(JSON.parse(t),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}}),[]),e.createElement(e.Fragment,null,e.createElement(u,null,e.createElement("h3",null,"Hello, world! ((👻) => (minlaxz)) "),e.createElement("code",{style:{fontSize:"13px"}},"Welcome to my universe. ",e.createElement(g,null)),e.createElement(w,null,"You would visit to me with ",e.createElement(h,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",e.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",e.createElement("b",null,"long")," to remember for you 🥴"),e.createElement(w,null,"Suggesstion : if you're presbyopia zoom it please."),e.createElement("p",null,"Source Code is hosted ",e.createElement(h,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),e.createElement(b,null,"Available routes:",e.createElement(f,null,e.createElement(E,null,"View my =>",e.createElement(se,{cusName:"Repo List 🥶"})),e.createElement(E,null,"Here is markdown => ",e.createElement(ge,null)),e.createElement(E,null,"Other sites => ",e.createElement(me,null)),e.createElement(E,null,"Serverless Api Calls => ",e.createElement(ce,null)))),e.createElement(b,null,"This page should also be available at...",e.createElement(f,null,e.createElement(E,null,e.createElement(h,{to:"https://minlaxz.github.io",text:"with Github Pages"}),"github.minlaxz.me"===window.location.hostname?e.createElement("span",null,"  you're currently viewing"):e.createElement("span",null,"  hostname does not match")),e.createElement(E,null,e.createElement(h,{to:"https://gh-minlaxz.pages.dev",text:"with Cloudflare Pages (not yet)"})))),e.createElement("div",{style:{width:"80%",textAlign:"center",padding:"10px",fontSize:"14px"}},e.createElement("b",null,"React")," with ",e.createElement("b",null,"Vite")," as build tool, hosted on ",e.createElement("b",null,"Github Pages")," with ",e.createElement("b",null,"actions")," on ",e.createElement("b",null,"push")," on ",e.createElement("b",null,"main"),", SSL/TLS by ",e.createElement("b",null,"Cloudflare")," with ",e.createElement("b",null,"proxies"),".")),e.createElement(p,null,e.createElement("div",{style:{border:"2px dotted khaki"}},e.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),e.createElement(de,null))))),x=t.div`
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
`,v=()=>{const t=a();return e.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),e.createElement(x,null,e.createElement(k,null,"Oops 😯! Well this is embarassing."),e.createElement("pre",null,"Not weed on this ",t.pathname),e.createElement(o,{to:"/"},"Home is safe 🤓"))},C=t.div`
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
`,N=()=>{const[t,l]=e.useState(null);return e.useEffect((()=>{window.document.title="minlaxz | Repos",(async()=>{const e=await n.get("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");l(e.data),console.log("fetched repos ... ")})()}),[]),e.createElement(C,null,"Recently updated repositories ...",e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},e.createElement(re,{cusName:"Back to Home 🏡"}),e.createElement(ge,{cusName:"Go to markdown 🥶"})),t?e.createElement(S,null,t.map((t=>e.createElement(e.Fragment,{key:t.id},e.createElement(z,null,t.name," ",e.createElement(h,{to:t.html_url,text:"View on github"}),e.createElement("p",null,`${t.description}`.slice(0,250),"..."),e.createElement("small",null,"Size : ",t.size,"Kb, Language: ",t.language)," ",e.createElement(o,{to:`/repos/${t.name}`},"Detail ")," =>"),e.createElement("hr",null))))):e.createElement("p",null,"Fetching repos..."))},j=t.div`
margin:0;
padding:0;
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
height: 100vh;
`,D=t.pre`
white-space: pre-wrap;
font-size: 0.8rem;
min-width: 0;
`,F=t.code`
color: red;
`,T=t.ul`
list-style-type: lower-greek;
`,B=t.li`
font-size: 18px;
margin: 0.4em;
padding: 0.4em;
@media only screen and (max-width: 600px) {
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
}

`,L=t.div`
margin: 0.5em;
padding: 0.5em;
`,A=({tech:t})=>e.createElement(B,null,t),R=({children:t,head:l})=>e.createElement(L,null,l,e.createElement(T,null,t)),H=()=>(e.useEffect((()=>{window.document.title="minlaxz | About"}),[]),e.createElement(j,null,e.createElement(R,{head:"I've used the following tools"},e.createElement(A,{tech:"React for fontend"}),e.createElement(A,{tech:"styled componenet for CSS"}),e.createElement(A,{tech:"Vite as build tool"}),e.createElement(A,{tech:"React hash router for frontend routing"})),e.createElement(R,{head:"I've used these for domain"},e.createElement(A,{tech:"This is hosted on github pages"}),e.createElement(A,{tech:"This is also hosted on cloudflare pages"}),e.createElement(A,{tech:"used CNAME for domain routing"})),e.createElement(R,{head:"What is cool ..?"},e.createElement(A,{tech:"Clock is about Javascript Closures"}),e.createElement(A,{tech:"Repo page is about axios with useEffect()"}),e.createElement(A,{tech:"Markdown page is about map() and filter()"}),e.createElement(A,{tech:"gh-pages package is cool but this used Github actions workflow"})),e.createElement(D,null,e.createElement(F,null,"I will made a backend for this 🤪")),e.createElement(re,{cusName:"Back to Home"}))),I=t.div`
display: flex;
flex-flow: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 90vh;
background-color: #fff;
`,M=t.pre`
white-space: pre-wrap;
/* word-break: break-all; */
text-align: center;
`,O=()=>{let{name:t}=i();const[l,a]=e.useState(null);return e.useEffect((()=>{"minlaxz"!==t?(async()=>{const e=await n.get(`https://api.github.com/repos/minlaxz/${t}`);a(e.data)})():a({name:t})}),[]),l?e.createElement(e.Fragment,null,e.createElement(I,null,"minlaxz"===l.name?e.createElement("pre",null,"This is personal repo"):e.createElement(e.Fragment,null,e.createElement("pre",null,"Name : ",l.name),e.createElement("pre",null,"Forked : ",l.fork?"True":"False"),e.createElement(M,null,"Description : ",l.description),e.createElement("pre",null,"Language : ",l.language),e.createElement("pre",null,"Repo Size : ",l.size," Kb"),e.createElement(M,null,"GithubURL : ",e.createElement("a",{href:l.html_url},l.html_url)),e.createElement("pre",null,"Website : ",e.createElement("a",{href:l.homepage},l.homepage)||"Not provided.")),e.createElement("hr",null),e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},e.createElement(se,{cusName:"Back to Repo List 👻"}),e.createElement(re,{cusName:"Go to Home 🏡"})))):e.createElement(e.Fragment,null,e.createElement("p",null,"Fetching..."),e.createElement(se,null),e.createElement(re,null))},G=[{name:"programming",r:"#### Programming 👽",p:["![git](https://img.shields.io/badge/Git-E94E31?style=for-the-badge&logo=git&logoColor=white)","![shell](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)","![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)","![JS](https://img.shields.io/badge/JavaScript-F3CF00?style=for-the-badge&logo=javascript&logoColor=white)","![TS](https://img.shields.io/badge/TypeScript-2F74C0?style=for-the-badge&logo=typescript&logoColor=white)"]},{name:"others",r:"### Framework / Libraries / Tools / Others 🤷🏼‍♂️",p:["![micropython](https://img.shields.io/badge/Micro_Python-3776AB?style=for-the-badge&logo=micropython&logoColor=white)","![expressjs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)","![NODEJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)","![CSS3](https://img.shields.io/badge/CSS3-264DE4?style=for-the-badge&logo=css3&logoColor=white)","![SASS](https://img.shields.io/badge/sass-C66293?style=for-the-badge&logo=sass&logoColor=white)","![BABEL](https://img.shields.io/badge/babel-F1D53C?style=for-the-badge&logo=babel&logoColor=white)","![flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)","![django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)","![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![reactnative](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![tailwind](https://img.shields.io/badge/Tailwind-39B7D4?style=for-the-badge&logo=tailwind-css&logoColor=white)","![bootstrap](https://img.shields.io/badge/Bootstrap-8412FB?style=for-the-badge&logo=bootstrap&logoColor=white)","![materializecss](https://img.shields.io/badge/MaterializeCSS-EB7077?style=for-the-badge&logo=materialize&logoColor=white)","![firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)","![heroku](https://img.shields.io/badge/heroku-3A0092?style=for-the-badge&logo=heroku&logoColor=black)"]},{name:"osiot",r:"#### OS / IoTs 🤖",p:["![linux](https://img.shields.io/badge/Linux-202020?style=for-the-badge&logo=linux&logoColor=white)","![corelinux](https://img.shields.io/badge/CoreLinux-000000?style=for-the-badge&logo=core-linux&logoColor=white)","![alpine](https://img.shields.io/badge/Alpine-16597F?style=for-the-badge&logo=alpine-linux&logoColor=white)","![debian](https://img.shields.io/badge/Debian-A3052F?style=for-the-badge&logo=debian&logoColor=white)","![ubuntu](https://img.shields.io/badge/Ubuntu-DD4814?style=for-the-badge&logo=ubuntu&logoColor=white)","![kali](https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white)","![tails](https://img.shields.io/badge/Tails%20-56347C?&style=for-the-badge&logo=tails&logoColor=white)","![pi](https://img.shields.io/badge/raspberrypi-C41949?style=for-the-badge&logo=raspberrypi&logoColor=black)","![arduino](https://img.shields.io/badge/arduino-2F989D?style=for-the-badge&logo=arduino&logoColor=black)","![mqtt](https://img.shields.io/badge/MQTT-630064?style=for-the-badge&logo=mqtt&logoColor=black)","![nodemcu](https://img.shields.io/badge/NODEMCU-145582?style=for-the-badge&logo=nodemcu&logoColor=black)"]},{name:"connect",r:"#### Contact with me 📡",p:["![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)","![Gmail](https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white)","![LinkIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)","![Facebook](https://img.shields.io/badge/-Facebook-%230077B5?style=for-the-badge&logo=facebook&logoColor=white)"]}],_=t.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;  /*  100vh remove scroll bar but content will be hidden */
@media only screen and (max-width: 600px) {
    height: 100%;
}
`,P=t.div`
display: flex;
flex-flow: column;
align-items: center;
align-content: space-between;
`,q=t.div`
display: flex;
flex-flow: row;
flex-wrap: wrap;
width: 100vw;
justify-content: center;
@media only screen and (max-width: 768px) {
    justify-content: space-evenly;
}
`,J=t.div`
margin-top: 0.5em;
padding: 0.5em;
@media only screen and (max-width: 768px) {
    margin-top: 0.1em;
    padding: 0.1em;
}

`,V=t.img`
width: 30vw;
@media only screen and (max-width: 1024px) {
    width: 50vw;
}
@media only screen and (max-width: 600px) {
    width: 100vw;
}
`,W=({markdown:t})=>e.createElement(J,null,e.createElement(r,null,t)),$=({name:t})=>e.createElement(e.Fragment,null,e.createElement(P,null,G.filter((e=>e.name===t)).map(((t,l)=>e.createElement(r,{key:l},t.r)))),e.createElement(q,null,G.filter((e=>e.name===t)).map((t=>t.p.map(((t,l)=>e.createElement(W,{markdown:t,key:l}))))))),U=()=>(e.useEffect((()=>{window.document.title="minlaxz | markdown"}),[]),e.createElement(_,null,e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginTop:"1em"}},e.createElement(re,{cusName:"Back to Home 🏡"}),e.createElement(se,{cusName:"Go to Repo List 👻"})),e.createElement(P,null,e.createElement(r,null,"### Howdy 😶‍🌫️ I am Min Min Latt (minlaxz) ☕")),e.createElement(r,null,"🕸 Here is my website (building): [minlaxz.me](https://minlaxz.me)"),e.createElement($,{name:"connect"}),e.createElement($,{name:"programming"}),e.createElement($,{name:"others"}),e.createElement($,{name:"osiot"}),e.createElement(V,{src:"https://metrics.lecoq.io/minlaxz",alt:"Github Metrics"}),e.createElement(V,{src:"https://github-readme-streak-stats.herokuapp.com/?user=minlaxz",alt:"Github Streak Stats"}))),K=t.div`
margin: 0;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`,Y=()=>e.createElement(K,null,e.createElement("h3",null,"Other Websites")),Q=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;    
    background-color: #fafafa;
    height: 100vh;
    width: 100vw;
`,X=t.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100wv;
    justify-content: center;
@media only screen and (max-width: 768px) {
    justify-content: space-evenly;
}
`,Z=t.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

`,ee=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,te=t.input`
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
`,le=t.button`
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
`,ae=()=>{const[t,l]=e.useState(""),[a,o]=e.useState(""),[i,r]=e.useState(null),[s,m]=e.useState(!1);return e.useEffect((()=>{console.log(t);["fuck","sex","nude"].includes(t)?m(!0):m(!1)}),[t]),e.createElement(Q,null,e.createElement("h3",null,"You're gonna make serverless api request 👻"),e.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},e.createElement(re,{cusName:"Return Home 😭"}),e.createElement(ge,{cusName:"To markdown 🥶"}),e.createElement(se,{cusName:"To Repos 📑"})),e.createElement(ee,null,e.createElement(te,{type:"text",placeholder:"Search images",onChange:e=>l(e.target.value)}),e.createElement(le,{danger:s,onClick:async()=>{r(null),o("Pwease wait 👻 ... ");const e=await(async({query:e})=>(await n.post("https://lessapi.minlaxz.workers.dev/api/images",{headers:{"Content-type":"application/json;charset=UTF-8"},query:e})).data)({query:t});r(e)}},`Search ${t} images`)),e.createElement(X,null,i?i.map((t=>e.createElement("a",{key:t.id,href:`https://unsplash.com/photos/${t.id}`,target:"_blank",rel:"noopener noreferrer"},e.createElement(Z,{src:t.src,alt:t.alt})))):e.createElement("p",null,a)))},oe=t.img`
    width: 120px;
    @media only screen and (max-width: 768px) {
        width: 90px;
    }
    @media only screen and (max-width: 1024px) {
        width: 100px;
    }
`,ne=({label:t})=>e.createElement(oe,{src:`https://img.shields.io/badge/${t}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),ie=()=>e.createElement(s,null,e.createElement(m,{exact:!0,path:"/",component:y}),e.createElement(m,{exact:!0,path:"/repos",component:N}),e.createElement(m,{exact:!0,path:"/about",component:H}),e.createElement(m,{path:"/repos/:name",component:O}),e.createElement(m,{exact:!0,path:"/forhuman",component:U}),e.createElement(m,{exact:!0,path:"/othersites",component:Y}),e.createElement(m,{exact:!0,path:"/serverless",component:ae}),e.createElement(m,{component:v})),re=({cusName:t})=>e.createElement(o,{to:"/"},t||"Default Home 🏠"),se=({linkClass:t,cusName:l})=>e.createElement("span",null,"  ",e.createElement(o,{to:"/repos",className:t},l||"repo list 🤓")),me=({linkClass:t,cusName:l})=>e.createElement("span",null,"  ",e.createElement(o,{to:"/othersites",className:t},l||"Other websites")),ce=({linkClass:t,cusName:l})=>e.createElement("span",null,"  ",e.createElement(o,{to:"/serverless",className:t},l||"Serverless API")),de=({linkClass:t})=>e.createElement("span",null,"  ",e.createElement(o,{to:"/about",className:t},"Here")," is how this went through   🤔"),ge=({linkClass:t,cusName:l})=>e.createElement(o,{to:"/forhuman",className:t},e.createElement(ne,{label:l||"View Markdown"}));function he(){return e.createElement(c,{basename:"/"},e.createElement(ie,null))}d.render(e.createElement(e.StrictMode,null,e.createElement(he,null)),document.getElementById("root"));
