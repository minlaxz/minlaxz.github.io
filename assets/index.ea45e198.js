import{s as e,R as t}from"./vendor.da1af473.js";import{g as a,a as n,T as r}from"./index.7ae6e4a7.js";import{a as o}from"./index.59ead915.js";import{N as i}from"./index.58e2b3ec.js";const s=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;    
    background-color: #fafafa;
    height: 100vh;
    width: 100vw;
`,l=e.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100wv;
    justify-content: center;
@media only screen and (max-width: 768px) {
    justify-content: space-evenly;
}
`,c=e.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

`,d=e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,m=e.input`
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
`,u=e.button`
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
`,f=()=>{const[e,f]=t.useState(""),[p,g]=t.useState(""),[h,x]=t.useState(null),[y,w]=t.useState(!1);return t.useEffect((()=>{console.log(e);["fuck","sex","nude"].includes(e)?w(!0):w(!1)}),[e]),t.createElement(s,null,t.createElement("h3",null,"You're gonna make serverless api request 👻"),t.createElement(i,null,t.createElement(a,{cusName:"Return Home 😭"}),t.createElement(n,{cusName:"To markdown 🥶"}),t.createElement(r,{cusName:"To Repos 📑"})),t.createElement(d,null,t.createElement(m,{type:"text",placeholder:"Search images",onChange:e=>f(e.target.value)}),t.createElement(u,{danger:y,onClick:async()=>{x(null),g("Pwease wait 👻 ... ");const t=await(async({query:e})=>{try{const t="https://api.octocat.tk/api/images";return(await o.post(`${t}`,{headers:{"Content-type":"application/json;charset=UTF-8"},query:e})).data}catch(t){return void g(JSON.stringify(t.message))}})({query:e});x(t)}},`Search ${e} images`)),t.createElement(l,null,h?h.map((e=>t.createElement("a",{key:e.id,href:`https://unsplash.com/photos/${e.id}`,target:"_blank",rel:"noopener noreferrer"},t.createElement(c,{src:e.src,alt:e.alt})))):t.createElement("p",null,p)))};export{f as default};
