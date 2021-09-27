import styled from "styled-components";

export const UlView = styled.ul`
list-style-type: lower-greek;
`;

export const LiView = styled.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`;

export const DivUl = styled.div`
margin: 0.5em;
padding: 0.5em;
`;

export const Border = styled.div`
border: 1px dotted crimson;
border-radius: 5px;
margin: 5px 10px;
padding: 0 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
@media only screen and (max-width: 812px) {
    padding: 0 5px;
}
`;


export const Pre = styled.pre`
/* margin-left:0.5em; */
/* margin-right: 0.5em; */
white-space: pre-wrap;
text-align: center;
/* word-break: break-all; */
`;