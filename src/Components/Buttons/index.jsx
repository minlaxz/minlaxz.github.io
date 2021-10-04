import React from 'react';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
    margin-top: 1em;
`;

export const NavigationButtons = (props) => {
    return (
        <ButtonContainer>
            {props.children}
        </ButtonContainer>
    );
}
