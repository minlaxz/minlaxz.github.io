import React from 'react';
// import styles from './Tech.module.css';
// import { Alink } from '../Units';
import { ToHome } from '../routes';
import styled from 'styled-components';

const Box = styled.div`
margin:0;
padding:0;
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;
height: 100vh;
`;

const Pre = styled.pre`
white-space: pre-wrap;
font-size: 0.9rem;
min-width: 0;
`;

const Code = styled.code`
color: red;
`;

const TechList = () => {
    React.useEffect(() => {
        window.document.title = 'minlaxz | About';
    }, []);

    return (
        <Box>
            <Pre>
                Hello, world!
                in this page I've used styled components and <Code>pre</Code>
            </Pre>
            <ToHome />
        </Box>

    );
}

export default TechList;