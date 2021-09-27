import React from 'react';
import styled from 'styled-components';
import { ToAbout } from '@/Routes/';

export const ContainerTwo = styled.div`
margin: 0;
margin-bottom: 0.5em;
padding: 0;
height: 100vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
`;

export default () => (
    <ContainerTwo>
        <div style={{ border: '2px dotted khaki' }}>
            <small>Well, actually I am hiding 🤓 not to distrurb you.</small>
            <ToAbout />
        </div>
    </ContainerTwo>
)