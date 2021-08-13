import styled from "styled-components";

export const Container = styled.div`
margin:0;
padding:0;
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const Pre = styled.pre`
white-space: pre-wrap;
font-size: 0.8rem;
min-width: 0;
`;

export const Code = styled.code`
color: red;
`;

export const UlView = styled.ul`
list-style-type: lower-greek;
`;

export const LiView = styled.li`
font-size: 18px;
margin: 0.4em;
padding: 0.4em;
@media only screen and (max-width: 600px) {
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
}

`;

export const DivUl = styled.div`
margin: 0.5em;
padding: 0.5em;
`;