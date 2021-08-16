import React from 'react';
import { ButtonContainer } from './styles';

export const NavigationButtons = (props) => {
    return (
        <ButtonContainer>
            {props.children}
        </ButtonContainer>
    );
}
