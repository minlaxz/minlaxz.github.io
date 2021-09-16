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
color: var(--color);
/* background-color: transparent; */
background-color: var(--background-color);
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

export const Nav = styled.div`
transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
background-color: var(--background-color);
color: var(--color);
`;