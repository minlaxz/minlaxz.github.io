import React from 'react';
import { ToHuman, ToRepos, ToTech } from '../routes';
import TikTik from '../Clock';
import { Alink } from '../Units';
import produce from 'immer';
import { ContainerOne, ContainerTwo, UlView, LiView, DivUl } from './styles';


// A simple home component
const Home = () => {
    React.useEffect(() => {
        window.document.title = 'minlaxz | Home'

        const domain = window.location.hostname;
        const minlaxzData = localStorage.getItem(domain);

        // if it is redirected from markdown component, 
        // need to scroll top otherwise it will be empty view
        // cuz I set total view height to 100vh + 100 vh to hide ContainerTwo
        window.scrollTo(0, 0)
        

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
                        <LiView>Here is markdown =&gt; <ToHuman /></LiView>
                        {/* this is extensible */}
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
                        {/* this is extensiable */}
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