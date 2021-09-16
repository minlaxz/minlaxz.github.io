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
            <UlwithDiv head="I've used the following tools">
                <Li tech="React for fontend" />
                <Li tech="Redux for state management" />
                <Li tech="styled componenet for CSS" />
                <Li tech="Vite as build tool" />
                <Li tech="React hash router for frontend routing" />
            </UlwithDiv>
            <UlwithDiv head="I've used these for hosting">
                <Li tech="Hosted on github pages" />
                <Li tech="Also hosted on cloudflare pages" />
                <Li tech="used CNAME for domain routing" />
            </UlwithDiv>
            <UlwithDiv head="What is cool ..?">
                <Li tech="Clock is about Javascript Closures" />
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