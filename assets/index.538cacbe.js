import{s as e,R as n}from"./vendor.085cecd7.js";import{t as r}from"./index.7b67436b.js";const s=e.ul`
list-style-type: lower-greek;
`,i=e.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`,m=e.div`
margin: 0.5em;
padding: 0.5em;
`,p=e.p`
font-family: 'Source Code Pro', monospace;
font-size: ${t=>t.fontSize||"16px"};
font-weight: ${t=>t.fontWeight||"normal"};
`,f=e.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    `,x=e.article`
	flex: 0 1 20%;
    @media only screen and (max-width: 1024px) {
        flex: 0 1 100%;
    }
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	margin: 2em;
    padding: 1.5em;
    border: 1px solid #e6e6e6;
    `,g=e.h4`
	margin-top: 0;
	margin-bottom: .5em;
	font-weight: bold;
    color: ${r};
`,w=e.div`
    font-size: 80%;
`,d=e.pre`
white-space: pre-wrap;
font-size: 0.8rem;
min-width: 0;
`,y=t=>n.createElement("span",null,n.createElement(s,null,t.content.map((a,o)=>n.createElement(i,{key:o},a.head,n.createElement(d,null,a.command)))));export{f as C,m as D,i as L,p as S,s as U,x as a,g as b,w as c,y as d};
