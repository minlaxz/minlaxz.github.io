import{s as a,R as e}from"./vendor.fe7edddc.js";import{a as p}from"./index.9ff040e8.js";import{T as g,a as h,b as x}from"./index.3a8cb21f.js";import{N as y}from"./index.f308b97b.js";const w=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;    
    height: 100vh;
    width: 100vw;
`,v=a.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100wv;
    justify-content: center;
@media only screen and (max-width: 768px) {
    justify-content: space-evenly;
}
`,b=a.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

`,E=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,S=a.input`
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
`,k=a.button`
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

    ${({danger:n})=>n&&"background-color: red;"}
`,N=()=>{const[n,l]=e.useState(""),[u,o]=e.useState(""),[s,c]=e.useState(null),[m,i]=e.useState(!1),d=async({query:t})=>{try{const r="https://api.octocat.tk/api/images";return(await p.post(`${r}`,{headers:{"Content-type":"application/json;charset=UTF-8"},query:t})).data}catch(r){o(JSON.stringify(r.message));return}},f=async()=>{c(null),o("Pwease wait \u{1F47B} ... ");const t=await d({query:n});c(t)};return e.useEffect(()=>{console.log(n),["fuck","sex","nude","porn","simp"].includes(n)?i(!0):i(!1)},[n]),e.createElement(w,null,e.createElement("h3",null,"You're gonna make serverless api request \u{1F47B}"),e.createElement(y,null,e.createElement(g,{cusName:"Return Home \u{1F62D}"}),e.createElement(h,{cusName:"To markdown \u{1F976}"}),e.createElement(x,{cusName:"To Repos \u{1F4D1}"})),e.createElement(E,null,e.createElement(S,{type:"text",placeholder:"Search any images",onChange:t=>l(t.target.value)}),e.createElement(k,{danger:m,onClick:f},`Search ${n} images`)),e.createElement(v,null,s?s.map(t=>e.createElement("a",{key:t.id,href:`https://unsplash.com/photos/${t.id}`,target:"_blank",rel:"noopener noreferrer"},e.createElement(b,{src:t.src,alt:t.alt}))):e.createElement("p",null,u)))};export{N as default};
