import{s as e,R as t,a as l,p as a,u as n,L as o,M as i,b as r,S as s,c as m,H as c,d}from"./vendor.3782532a.js";const h=e.img`
    width: 120px;
    @media only screen and (max-width: 768px) {
        width: 90px;
    }
    @media only screen and (max-width: 1024px) {
        width: 100px;
    }
`,g=({label:e})=>t.createElement(h,{src:`https://img.shields.io/badge/${e}-000?style=social&logo=markdown&logoColor=black`,alt:"Markdown"}),u=()=>{const[e,l]=t.useState(new Date),a=t.useCallback((()=>{l(new Date)}));return t.useEffect((()=>{let e=setInterval((()=>a()),1e3);return()=>clearInterval(e)}),[a]),t.createElement("span",null,e.toLocaleTimeString())},p=({to:e,text:l})=>t.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},l,t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"16px",width:"16px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}))),f=e.div`
margin: 0;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 375px) {
    height: 110vh;
}
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
`,x=e.div`
margin: 0.5em;
padding: 0.5em;
`,y=e.pre`
margin-left:0.5em;
margin-right: 0.5em;
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`,k=()=>{const[e,a]=t.useState("");return t.useEffect((()=>{(async()=>{await l.get("https://api.github.com/repos/minlaxz/minlaxz.github.io/branches/main").then((e=>a(e.data.commit.sha))).catch((e=>console.log(e)))})()}),[]),t.createElement("span",{style:{color:"red"}},t.createElement("small",null,t.createElement("a",{href:`https://github.com/minlaxz/minlaxz.github.io/commit/${e}`,rel:"noopener noreferrer",target:"_blank"},"CHECKSUM : ",e)))},v=()=>(t.useEffect((()=>{window.document.title="minlaxz | Home";const e=window.location.hostname,t=localStorage.getItem(e);if(window.scrollTo(0,0),t){const e=a(JSON.parse(t),(e=>{e.lastVisitedTime=Date.now()}));localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}else{const e={lastVisitedTime:Date.now()};localStorage.setItem("minlaxz.github.io",JSON.stringify(e))}}),[]),t.createElement(t.Fragment,null,t.createElement(f,null,t.createElement("h3",null,"Hello, world! ((👻) => (minlaxz)) "),t.createElement("code",{style:{fontSize:"13px"}},"Welcome to my universe. ",t.createElement(u,null)),t.createElement(y,null,"You would visit to me with ",t.createElement(p,{to:"https://git.io/minlaxz",text:"git.io/minlaxz"})," if this url ",t.createElement("u",{style:{color:"hotpink"}},window.location.hostname)," is ",t.createElement("b",null,"long")," to remember for you 🥴"),t.createElement(y,null,"I am a so much responsive page! 👻"),t.createElement("p",null,"Source Code is hosted ",t.createElement(p,{to:"https://github.com/minlaxz/minlaxz.github.io",text:"here"})),t.createElement(x,null,"Available routes:",t.createElement(b,null,t.createElement(w,null,"View my =>",t.createElement(de,{cusName:"Repo List 🥶"})),t.createElement(w,null,"Here is markdown => ",t.createElement(pe,null)),t.createElement(w,null,"Other sites => ",t.createElement(he,null)),t.createElement(w,null,"Serverless Api Calls => ",t.createElement(ge,null)))),t.createElement(x,null,"This page should also be available at...",t.createElement(b,null,t.createElement(w,null,t.createElement(p,{to:"https://minlaxz.github.io",text:"with Github Pages"}),"github.minlaxz.me"===window.location.hostname?t.createElement("span",null,"  you're currently viewing"):t.createElement("span",null,"  hostname does not match")),t.createElement(w,null,t.createElement(p,{to:"https://gh-minlaxz.pages.dev",text:"with Cloudflare Pages (not yet)"})))),t.createElement("div",{style:{width:"80%",textAlign:"center",padding:"10px",fontSize:"14px"}},t.createElement("b",null,"React")," with ",t.createElement("b",null,"Vite")," as build tool, hosted on ",t.createElement("b",null,"Github Pages")," with ",t.createElement("b",null,"actions")," on ",t.createElement("b",null,"push")," on ",t.createElement("b",null,"main"),", SSL/TLS by ",t.createElement("b",null,"Cloudflare")," with ",t.createElement("b",null,"proxies"),"."),t.createElement(k,null)),t.createElement(E,null,t.createElement("div",{style:{border:"2px dotted khaki"}},t.createElement("small",null,"Well, actually I am hiding 🤓 not to distrurb you."),t.createElement(ue,null))))),C=e.div`
margin:0;
padding:0;
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
height: 100vh;
`,S=e.pre`
white-space: pre-wrap;
font-size: 0.8rem;
min-width: 0;
`,z=e.code`
color: red;
`,N=e.ul`
list-style-type: lower-greek;
`,j=e.li`
font-size: 18px;
margin: 0.4em;
padding: 0.4em;
@media only screen and (max-width: 600px) {
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
}

`,F=e.div`
margin: 0.5em;
padding: 0.5em;
`,D=({tech:e})=>t.createElement(j,null,e),L=({children:e,head:l})=>t.createElement(F,null,l,t.createElement(N,null,e)),T=()=>(t.useEffect((()=>{window.document.title="minlaxz | About this"}),[]),t.createElement(C,null,t.createElement(L,{head:"I've used the following tools"},t.createElement(D,{tech:"React for fontend"}),t.createElement(D,{tech:"styled componenet for CSS"}),t.createElement(D,{tech:"Vite as build tool"}),t.createElement(D,{tech:"React hash router for frontend routing"})),t.createElement(L,{head:"I've used these for domain"},t.createElement(D,{tech:"This is hosted on github pages"}),t.createElement(D,{tech:"This is also hosted on cloudflare pages"}),t.createElement(D,{tech:"used CNAME for domain routing"})),t.createElement(L,{head:"What is cool ..?"},t.createElement(D,{tech:"Clock is about Javascript Closures"}),t.createElement(D,{tech:"Repo page is about axios with useEffect()"}),t.createElement(D,{tech:"Markdown page is about map() and filter()"}),t.createElement(D,{tech:"gh-pages package is cool but this used Github actions workflow"})),t.createElement(S,null,t.createElement(z,null,"I will made a backend for this 🤪")),t.createElement(ce,{cusName:"Back to Home"}))),B=e.div`
margin: 0;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`,A=()=>t.createElement(B,null,t.createElement("h3",null,"Other Websites")),H=e.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`,I=e.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`,M=()=>{const e=n();return t.useEffect((()=>{window.document.title="minlaxz | Oops!"}),[]),t.createElement(H,null,t.createElement(I,null,"Oops 😯! Well this is embarassing."),t.createElement("pre",null,"Not weed on this ",e.pathname),t.createElement(o,{to:"/"},"Home is safe 🤓"))},R=e.div`
margin: 0;
padding: 0;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-start;
width: 100vw;
height: auto;
`,O=e.ul`
list-style-type: lower-greek;
margin-block-start: 0;
margin-block-end: 0;
`,G=e.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,_=e.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
    margin-top: 1em;
`,$=e=>t.createElement(_,null,e.children),J=()=>{const[e,a]=t.useState(null);return t.useEffect((()=>{window.document.title="minlaxz | Repos",(async()=>{const e=await l.get("https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10");a(e.data),console.log("fetched repos ... ")})()}),[]),t.createElement(R,null,"Recently updated repositories ...",t.createElement($,null,t.createElement(ce,{cusName:"Back to Home 🏡"}),t.createElement(pe,{cusName:"Go to markdown 🥶"})),e?t.createElement(O,null,e.map((e=>t.createElement(t.Fragment,{key:e.id},t.createElement(G,null,e.name," ",t.createElement(p,{to:e.html_url,text:"View on github"}),t.createElement("p",null,`${e.description}`.slice(0,250),"..."),t.createElement("small",null,"Size : ",e.size,"Kb, Language: ",e.language)," ",t.createElement(o,{to:`/repos/${e.name}`},"Detail ")," =>"),t.createElement("hr",null))))):t.createElement("p",null,"Fetching repos..."))},P=[{name:"programming",r:"#### Programming 👽",p:["![git](https://img.shields.io/badge/Git-E94E31?style=for-the-badge&logo=git&logoColor=white)","![shell](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)","![python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)","![JS](https://img.shields.io/badge/JavaScript-F3CF00?style=for-the-badge&logo=javascript&logoColor=white)","![TS](https://img.shields.io/badge/TypeScript-2F74C0?style=for-the-badge&logo=typescript&logoColor=white)"]},{name:"others",r:"### Framework / Libraries / Tools / Others 🤷🏼‍♂️",p:["![micropython](https://img.shields.io/badge/Micro_Python-3776AB?style=for-the-badge&logo=micropython&logoColor=white)","![expressjs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)","![NODEJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)","![CSS3](https://img.shields.io/badge/CSS3-264DE4?style=for-the-badge&logo=css3&logoColor=white)","![SASS](https://img.shields.io/badge/sass-C66293?style=for-the-badge&logo=sass&logoColor=white)","![BABEL](https://img.shields.io/badge/babel-F1D53C?style=for-the-badge&logo=babel&logoColor=white)","![flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)","![django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)","![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![reactnative](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)","![tailwind](https://img.shields.io/badge/Tailwind-39B7D4?style=for-the-badge&logo=tailwind-css&logoColor=white)","![bootstrap](https://img.shields.io/badge/Bootstrap-8412FB?style=for-the-badge&logo=bootstrap&logoColor=white)","![materializecss](https://img.shields.io/badge/MaterializeCSS-EB7077?style=for-the-badge&logo=materialize&logoColor=white)","![firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)","![heroku](https://img.shields.io/badge/heroku-3A0092?style=for-the-badge&logo=heroku&logoColor=black)"]},{name:"osiot",r:"#### OS / IoTs 🤖",p:["![linux](https://img.shields.io/badge/Linux-202020?style=for-the-badge&logo=linux&logoColor=white)","![corelinux](https://img.shields.io/badge/CoreLinux-000000?style=for-the-badge&logo=core-linux&logoColor=white)","![alpine](https://img.shields.io/badge/Alpine-16597F?style=for-the-badge&logo=alpine-linux&logoColor=white)","![debian](https://img.shields.io/badge/Debian-A3052F?style=for-the-badge&logo=debian&logoColor=white)","![ubuntu](https://img.shields.io/badge/Ubuntu-DD4814?style=for-the-badge&logo=ubuntu&logoColor=white)","![kali](https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white)","![tails](https://img.shields.io/badge/Tails%20-56347C?&style=for-the-badge&logo=tails&logoColor=white)","![pi](https://img.shields.io/badge/raspberrypi-C41949?style=for-the-badge&logo=raspberrypi&logoColor=black)","![arduino](https://img.shields.io/badge/arduino-2F989D?style=for-the-badge&logo=arduino&logoColor=black)","![mqtt](https://img.shields.io/badge/MQTT-630064?style=for-the-badge&logo=mqtt&logoColor=black)","![nodemcu](https://img.shields.io/badge/NODEMCU-145582?style=for-the-badge&logo=nodemcu&logoColor=black)"]},{name:"connect",r:"#### Contact with me 📡",p:["![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)","![Gmail](https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white)","![LinkIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)","![Facebook](https://img.shields.io/badge/-Facebook-%230077B5?style=for-the-badge&logo=facebook&logoColor=white)"]}],q=e.div`
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
`,U=e.div`
margin-top: 0.5em;
padding: 0.5em;
@media only screen and (max-width: 768px) {
    margin-top: 0.1em;
    padding: 0.1em;
}

`,K=e.img`
width: 30vw;
@media only screen and (max-width: 1024px) {
    width: 50vw;
}
@media only screen and (max-width: 600px) {
    width: 100vw;
}
`,Y=({markdown:e})=>t.createElement(U,null,t.createElement(i,null,e)),Q=({name:e})=>t.createElement(t.Fragment,null,t.createElement(V,null,P.filter((t=>t.name===e)).map(((e,l)=>t.createElement(i,{key:l},e.r)))),t.createElement(W,null,P.filter((t=>t.name===e)).map((e=>e.p.map(((e,l)=>t.createElement(Y,{markdown:e,key:l}))))))),X=()=>(t.useEffect((()=>{window.document.title="minlaxz | markdown"}),[]),t.createElement(q,null,t.createElement($,null,t.createElement(ce,{cusName:"Back to Home 🏡"}),t.createElement(de,{cusName:"Go to Repo List 👻"})),t.createElement(V,null,t.createElement(i,null,"### Howdy 😶‍🌫️ I am Min Min Latt (minlaxz) ☕")),t.createElement(i,null,"🕸 Here is my website (building): [minlaxz.me](https://minlaxz.me)"),t.createElement(Q,{name:"connect"}),t.createElement(Q,{name:"programming"}),t.createElement(Q,{name:"others"}),t.createElement(Q,{name:"osiot"}),t.createElement(K,{src:"https://metrics.lecoq.io/minlaxz",alt:"Github Metrics"}),t.createElement(K,{src:"https://github-readme-streak-stats.herokuapp.com/?user=minlaxz",alt:"Github Streak Stats"}))),Z=e.div`
display: flex;
flex-flow: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 90vh;
background-color: #fff;
`,ee=e.pre`
white-space: pre-wrap;
/* word-break: break-all; */
text-align: center;
`,te=()=>{let{name:e}=r();const[a,n]=t.useState(null);return t.useEffect((()=>{"minlaxz"!==e?(async()=>{const t=await l.get(`https://api.github.com/repos/minlaxz/${e}`);n(t.data)})():n({name:e})}),[]),a?t.createElement(t.Fragment,null,t.createElement(Z,null,"minlaxz"===a.name?t.createElement("pre",null,"This is personal repo"):t.createElement(t.Fragment,null,t.createElement("pre",null,"Name : ",a.name),t.createElement("pre",null,"Forked : ",a.fork?"True":"False"),t.createElement(ee,null,"Description : ",a.description),t.createElement("pre",null,"Language : ",a.language),t.createElement("pre",null,"Repo Size : ",a.size," Kb"),t.createElement(ee,null,"GithubURL : ",t.createElement("a",{href:a.html_url},a.html_url)),t.createElement("pre",null,"Website : ",t.createElement("a",{href:a.homepage},a.homepage)||"Not provided.")),t.createElement("hr",null),t.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1em"}},t.createElement(de,{cusName:"Back to Repo List 👻"}),t.createElement(ce,{cusName:"Go to Home 🏡"})))):t.createElement(t.Fragment,null,t.createElement("p",null,"Fetching..."),t.createElement(de,null),t.createElement(ce,null))},le=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;    
    background-color: #fafafa;
    height: 100vh;
    width: 100vw;
`,ae=e.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100wv;
    justify-content: center;
@media only screen and (max-width: 768px) {
    justify-content: space-evenly;
}
`,ne=e.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

`,oe=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,ie=e.input`
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
`,re=e.button`
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
`,se=()=>{const[e,a]=t.useState(""),[n,o]=t.useState(""),[i,r]=t.useState(null),[s,m]=t.useState(!1);return t.useEffect((()=>{console.log(e);["fuck","sex","nude"].includes(e)?m(!0):m(!1)}),[e]),t.createElement(le,null,t.createElement("h3",null,"You're gonna make serverless api request 👻"),t.createElement($,null,t.createElement(ce,{cusName:"Return Home 😭"}),t.createElement(pe,{cusName:"To markdown 🥶"}),t.createElement(de,{cusName:"To Repos 📑"})),t.createElement(oe,null,t.createElement(ie,{type:"text",placeholder:"Search images",onChange:e=>a(e.target.value)}),t.createElement(re,{danger:s,onClick:async()=>{r(null),o("Pwease wait 👻 ... ");const t=await(async({query:e})=>{try{const t="https://lessapi.minlaxz.workers.dev/api/images";return(await l.post(`${t}`,{headers:{"Content-type":"application/json;charset=UTF-8"},query:e})).data}catch(t){return void o(JSON.stringify(t.message))}})({query:e});r(t)}},`Search ${e} images`)),t.createElement(ae,null,i?i.map((e=>t.createElement("a",{key:e.id,href:`https://unsplash.com/photos/${e.id}`,target:"_blank",rel:"noopener noreferrer"},t.createElement(ne,{src:e.src,alt:e.alt})))):t.createElement("p",null,n)))},me=()=>t.createElement(s,null,t.createElement(m,{exact:!0,path:"/",component:v}),t.createElement(m,{exact:!0,path:"/about",component:T}),t.createElement(m,{exact:!0,path:"/othersites",component:A}),t.createElement(m,{exact:!0,path:"/repos",component:J}),t.createElement(m,{path:"/repos/:name",component:te}),t.createElement(m,{exact:!0,path:"/forhuman",component:X}),t.createElement(m,{exact:!0,path:"/serverless",component:se}),t.createElement(m,{component:M})),ce=({cusName:e})=>t.createElement(o,{to:"/"},e||"Default Home 🏠"),de=({linkClass:e,cusName:l})=>t.createElement("span",null,"  ",t.createElement(o,{to:"/repos",className:e},l||"repo list 🤓")),he=({linkClass:e,cusName:l})=>t.createElement("span",null,"  ",t.createElement(o,{to:"/othersites",className:e},l||"Other websites")),ge=({linkClass:e,cusName:l})=>t.createElement("span",null,"  ",t.createElement(o,{to:"/serverless",className:e},l||"Serverless API")),ue=({linkClass:e})=>t.createElement("span",null,"  ",t.createElement(o,{to:"/about",className:e},"Here")," is how this went through   🤔"),pe=({linkClass:e,cusName:l})=>t.createElement(o,{to:"/forhuman",className:e},t.createElement(g,{label:l||"View Markdown"}));function fe(){return t.createElement(c,{basename:"/"},t.createElement(me,null))}d.render(t.createElement(t.StrictMode,null,t.createElement(fe,null)),document.getElementById("root"));
