import styled from 'styled-components';
import React from 'react';

export const ShortInput = styled.input`
    margin: 0.5em;
    padding: 0.5em;
    width: 50vw;
    transition: all 0.3s ease;
    @media only screen and (max-width: ${props => props.b_points}px) {
        width: 70%;
    }
`;

/* i like this component 🥴 */
/* export const ShortButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 0.3em;
    margin: 0.3em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1.3em;
    @media only screen and (max-width: 768px) {
        font-size: 0.8em;
    }
    font-weight: bold;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    :disabled {
        opacity: 0.4;
    }
    &:hover {
        background-color: #4CAF50;
        color: white;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
        ${({ disabled }) => disabled && `background-color:red`}
    }
    ${({ disabled }) => disabled && `background-color:red`}
`; */