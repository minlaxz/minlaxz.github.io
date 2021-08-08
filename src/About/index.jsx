import React from 'react';
import { ToHome } from '../routes';
import { Box, Pre, Code } from './styles';

const About = () => {
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

export default About;