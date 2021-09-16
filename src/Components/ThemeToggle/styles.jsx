import styled from "styled-components";

export const MainContainer = styled.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: var(--background-color);
    color: var(--color);
`;

export const ToggleContainer = styled.div`
/* I dont need bg color or color cuz mainconatiner set it */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
    max-width: 80%;
    padding: 0 10px;
    user-select: none;
    @media only screen and (max-width: 768px) {
        max-width: 90%;
    }
`;

export const ToggleText = styled.span`
    font-size: 0.8em;
    font-weight: bold;
    color: var(--color);
    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`;

export const ToggleButton = styled.button`
    margin: 0.5rem;
    background-color: var(--background-color);
    color: var(--color);
    border-radius: 10%;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
    &:active {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.6);
    }
`;
