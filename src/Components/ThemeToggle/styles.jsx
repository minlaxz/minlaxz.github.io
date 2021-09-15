import styled from "styled-components";

export const ToggleContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin: 0 auto;
max-width: 80%;
@media only screen and (max-width: 768px) {
    max-width: 90%;
}
padding: 0 10px;
user-select: none;
`;

export const ToggleButton = styled.button`
margin: 0.5rem;
background-color: transparent;
border-radius: 10%;
cursor: pointer;
transition: all 0.8s ease-in-out;
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
&:hover {
box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
}
&:active {
box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
}
`;