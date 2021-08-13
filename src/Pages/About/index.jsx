import React from 'react';
import { ToHome } from '@/Routes';
import { Container, Pre, Code, DivUl, UlView, LiView } from './styles';

const Li = ({ tech }) => <LiView>{tech}</LiView>;

const UlwithDiv = ({ children, head }) => <DivUl>{head}<UlView>{children}</UlView></DivUl>;

const About = () => {
    React.useEffect(() => {
        window.document.title = 'minlaxz | About this';
    }, []);

    return (
        <Container>
            <UlwithDiv head="I've used the following tools">
                <Li tech="React for fontend" />
                <Li tech="styled componenet for CSS" />
                <Li tech="Vite as build tool" />
                <Li tech="React hash router for frontend routing" />
            </UlwithDiv>
            <UlwithDiv head="I've used these for domain">
                <Li tech="This is hosted on github pages" />
                <Li tech="This is also hosted on cloudflare pages" />
                <Li tech="used CNAME for domain routing" />
            </UlwithDiv>
            <UlwithDiv head="What is cool ..?">
                <Li tech="Clock is about Javascript Closures" />
                <Li tech="Repo page is about axios with useEffect()" />
                <Li tech="Markdown page is about map() and filter()" />
                <Li tech="gh-pages package is cool but this used Github actions workflow" />
            </UlwithDiv>
            <Pre>
                <Code>I will made a backend for this 🤪</Code>
            </Pre>
            <ToHome cusName="Back to Home" />
        </Container>

    );
}

export default About;