import styled from "styled-components";

export const DamnImage2 = styled.img`
width: 30vw;
margin: 10px;
@media only screen and (max-width: 1024px) {
    width: 50vw;
}
@media only screen and (max-width: 600px) {
    width: 100vw;
}
`;

export const DamnImage = styled.img`
width: 15vw;
margin: 1em;
@media only screen and (max-width: 1024px) {
    width: 30vw;
}
@media only screen and (max-width: 600px) {
    width: 60vw;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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