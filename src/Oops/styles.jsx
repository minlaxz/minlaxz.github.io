import styled from "styled-components";

export const Container = styled.div`
    margin: 0%;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const OopsText = styled.p`
    font-size: 2em;
    font-weight: bold;
    color: deepskyblue;
    @media only screen and (max-width: 600px) {
        font-size: 1em;
    }
`;