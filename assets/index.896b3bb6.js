import{R as e,s as r}from"./vendor.085cecd7.js";import{N as o}from"./index.d1d54eb1.js";import{CShead as c}from"./index.dd15f11d.js";import{R as l}from"./icons.63114d1a.js";import"./index.538cacbe.js";import"./index.7b67436b.js";import"./index.b94c23d2.js";const d=r.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
`,t=r.div`
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    border-radius: 10px;
    padding: 15px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
`,n=a=>e.createElement("pre",null,e.createElement("code",null,a.code));var E=()=>e.createElement(o,{justifyContent:"flex-start",height:"100%"},e.createElement(c,{text:"React Cheat Sheet"},e.createElement(l,null)),e.createElement(d,null,e.createElement(t,null,e.createElement("h3",null,"Create React App"),e.createElement(n,{code:"npx create-react-app APP_NAME"})),e.createElement(t,null,e.createElement("h3",null,"Stateless component"),e.createElement(n,{code:`
import React from 'react';

const YourComponent = () => <div> aaa </div> ;

export default YourComponent;
`})),e.createElement(t,null,e.createElement("h3",null,"Class component"),e.createElement(n,{code:`
import React from 'react';

class YourComponent extends React.Component {
    render() {
        return <div>aaa</div>
    };
};

export default YourComponent;
`}))));export{E as default};
