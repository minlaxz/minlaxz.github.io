import{R as e,s as a}from"./vendor.fe7edddc.js";import{N as o}from"./index.fd650fc1.js";import{CShead as l}from"./index.a06a0df2.js";import{R as c}from"./icons.d7f28cdd.js";import"./index.f43aef7a.js";import"./index.3a8cb21f.js";import"./index.f308b97b.js";const d=a.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
`,t=a.div`
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    border-radius: 10px;
    padding: 15px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
`,n=r=>e.createElement("pre",null,e.createElement("code",null,r.code));var E=()=>e.createElement(o,{justifyContent:"flex-start",height:"100%"},e.createElement(l,{text:"React Cheat Sheet"},e.createElement(c,null)),e.createElement(d,null,e.createElement(t,null,e.createElement("h3",null,"Create React App"),e.createElement(n,{code:"npx create-react-app APP_NAME"})),e.createElement(t,null,e.createElement("h3",null,"Stateless component"),e.createElement(n,{code:`
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
