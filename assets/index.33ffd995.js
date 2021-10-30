import{s as e,R as t}from"./vendor.09fd204b.js";import{t as s}from"./index.59615b05.js";const r=e.ul`
list-style-type: lower-greek;
`,i=e.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,c=e.div`
margin: 0.5em;
padding: 0.5em;
`,p=e.p`
font-family: 'Source Code Pro', monospace;
font-size: ${n=>n.fontSize||"16px"};
font-weight: ${n=>n.fontWeight||"normal"};
`,f=e.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    `,g=e.article`
	flex: 0 1 20%;
    @media only screen and (max-width: 1024px) {
        flex: 0 1 100%;
    }
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	margin: 2em;
    padding: 1.5em;
    border: 1px solid #e6e6e6;
    `,x=e.h4`
	margin-top: 0;
	margin-bottom: .5em;
	font-weight: bold;
    color: ${s};
`,w=e.div`
    font-size: 80%;
`,d=e.pre`
white-space: pre-wrap;
font-size: 0.8rem;
min-width: 0;
`,u=n=>t.createElement("span",null,t.createElement(r,null,n.content.map((a,o)=>t.createElement(i,{key:o},a.head,t.createElement(d,null,a.command))))),y=()=>t.createElement("div",null,"Loading Components...");export{f as C,c as D,i as L,d as P,p as S,r as U,g as a,x as b,w as c,u as d,y as e};
