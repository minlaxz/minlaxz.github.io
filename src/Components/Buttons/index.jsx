import React from 'react';
import { Container } from './styles';

export const NavigationButtons = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
}
