import React from 'react';
import { ToHuman, ToRepos, ToTech } from '../routes';
import TikTik from '../Clock';
import { Alink } from '../Units';
import produce from 'immer';
import styled from 'styled-components';

const ContainerOne = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;

const ContainerTwo = styled.div`
    margin: 0;
    margin-bottom: 0.5em;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
`;

const UlView = styled.ul`
    list-style-type: lower-greek;
`;

const LiView = styled.li`
    margin: 0.2em;
    padding: 0.2em;
`;

const DivUl = styled.div`
    margin: 0.5em;
    padding: 0.5em;
`;

// A simple home component
const Home = () => {
    React.useEffect(() => {
        window.document.title = 'minlaxz | Home'

        const domain = window.location.hostname;
        // const domain = 'minlaxz.github.io'
        const minlaxzData = localStorage.getItem(domain);

        // return from markdown component, scroll top
        window.scrollTo(0, 0)
        // cuz I set view height to 200vh to hide something

        if (minlaxzData) { // visted user
            const newState = produce(JSON.parse(minlaxzData), (draft) => {
                draft.lastVisitedTime = Date.now()
            })
            localStorage.setItem('minlaxz.github.io', JSON.stringify(newState));
        } else { // new user
            const data = {
                lastVisitedTime: Date.now()
            }
            localStorage.setItem('minlaxz.github.io', JSON.stringify(data));
        }

    }, []);

    return (
        <>
            <ContainerOne>
                <h3>Hello, world! ((👻) =&gt; (minlaxz)) </h3>
                <code style={{ fontSize: "13px" }}>Welcome to my universe. <TikTik /></code>
                <p>Source Code is hosted <Alink to="https://github.com/minlaxz/minlaxz.github.io" text="here" /></p>
                <DivUl>Available routes:
                    <UlView>
                        <LiView>View my<ToRepos cusName="Repo List 🥶" /></LiView>
                        <LiView>View how I rendered <ToHuman cusName="markdown for human" /></LiView>
                    </UlView>
                </DivUl>
                <DivUl>
                    This page should also be available at...
                    <UlView>
                        <LiView>
                            <Alink to="https://minlaxz.github.io" text="on Github Pages" />
                            {
                                window.location.hostname === 'github.minlaxz.me' ? <span>
                                    Currently viewing
                                </span> : <span></span>
                            }
                        </LiView>
                        <LiView>
                            <Alink to="https://gh-minlaxz.pages.dev" text="on Cloudflare Pages (not yet)" />
                        </LiView>
                    </UlView>
                </DivUl>

                <div style={{ 
                    width: "80%", 
                    textAlign: "center", 
                    padding: "10px", 
                    fontSize: "14px",
                    }}>
                    <b>React</b> with <b>Vite</b> as build tool, hosted on <b>Github Pages</b> with <b>actins</b> on <b>push</b> on <b>main</b>, SSL/TLS by <b>Cloudflare</b> with <b>proxies</b>.
                </div>
            </ContainerOne>

            <ContainerTwo>
                <div style={{ border: '2px dotted khaki' }}>
                    <small>Well, actually I am hiding 🤓 not to distrurb you.</small>
                    <ToTech />
                </div>

            </ContainerTwo>
        </>
    );
}

// let's add clock to the home page


export default Home;