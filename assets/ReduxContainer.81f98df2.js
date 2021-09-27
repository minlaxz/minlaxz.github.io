import{h as e,g as t,R as n,s as a}from"./vendor.7f3b8c1d.js";const r=a.div`
text-align:center;
border:1px dotted gold;
border-radius:10px;
margin-top:10px;
padding:10px;
`;var l=()=>{var a,l;const o=e(),u=t((e=>e.pointss)),d=t((e=>e.user)),s=t((e=>e.authUser));return n.createElement(r,null,n.createElement("div",null,n.createElement("p",null,"This is about ",n.createElement("b",null,"Redux")," state management"),n.createElement("button",{onClick:()=>{return o({type:"INCREMENT",payload:e||1});var e}},"+"),"  ",u.value,"  ",n.createElement("button",{onClick:()=>{return o({type:"DECREMENT",payload:e||1});var e}},"-")),n.createElement("div",null,null!=(l=null==(a=null==d?void 0:d.users[0])?void 0:a.name)?l:[].toString()),n.createElement("code",{style:{fontSize:"11px"}},s.userState.token?"Logged in":"Logged out"))};export{r as ReduxContainer,l as default};
