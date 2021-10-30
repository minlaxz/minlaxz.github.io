import{R as e,s as r}from"./vendor.09fd204b.js";import{N as o}from"./index.ee7f19ac.js";import{CShead as l}from"./index.3f5a6bd3.js";import{R as c}from"./icons.9d9447d1.js";import"./index.33ffd995.js";import"./index.59615b05.js";import"./index.537fed23.js";const d=r.div`
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
`,n=a=>e.createElement("pre",null,e.createElement("code",null,a.code));var E=()=>e.createElement(o,{justifyContent:"flex-start",height:"100%"},e.createElement(l,{text:"React Cheat Sheet"},e.createElement(c,null)),e.createElement(d,null,e.createElement(t,null,e.createElement("h3",null,"Create React App"),e.createElement(n,{code:"npx create-react-app APP_NAME"})),e.createElement(t,null,e.createElement("h3",null,"Stateless component"),e.createElement(n,{code:`
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
