import React from 'react';
import { ToHome } from '@/Routes';
import { Pre, Code, DivUl, UlView, LiView } from './styles';
import { NormalContainer } from '@/Components/Containers';

const Li = ({ tech }) => <LiView>{tech}</LiView>;

const UlwithDiv = ({ children, head }) => <DivUl>{head}<UlView>{children}</UlView></DivUl>;

const About = () => {
    React.useEffect(() => {
        window.document.title = 'minlaxz | About this';
    }, []);

    return (
        <NormalContainer>
            <UlwithDiv head="Tools">
                <Li tech="React for fontend" />
                <Li tech="Redux for state management" />
                <Li tech="styled componenet for CSS" />
                <Li tech="Vite as build tool" />
                <Li tech="React hash router for frontend routing" />
            </UlwithDiv>
            <UlwithDiv head="Hosting">
                <Li tech="Hosted on Github Pages" />
                <Li tech="Hosted on Vercel" />
                <Li tech="Hosted on Netlify" />
                <Li tech="Also hosted on Cloudflare Pages" />
                <Li tech="CNAME for domain routing" />
            </UlwithDiv>
            <UlwithDiv head="Cool stuffs ..?">
                <Li tech="Clock is about Javascript Closures" />
                <Li tech="Redux, Redux Thunk" />
                <Li tech="React 'lazy load' - learning 'loadable'" />
                <Li tech="Internal dispatch from 'thunk' to 'store'" />
                <Li tech="Repo page is about axios with useEffect()" />
                <Li tech="Markdown page is about map() and filter()" />
                <Li tech="gh-pages package is cool but this used Github actions workflow" />
            </UlwithDiv>
            <Pre>
                <Code>This have two backends 🤪</Code>
            </Pre>
            <ToHome cusName="Back to Home" />
        </NormalContainer>

    );
}

export default About;