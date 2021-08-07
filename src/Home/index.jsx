import React from 'react';
import styles from './Home.module.css';
import { ToHuman, ToRepos, ToTech } from '../routes';
import TikTik from '../Clock';
import { Alink } from '../Units';
import produce from 'immer';
// A simple home component
const Home = () => {
    React.useEffect(() => {
        window.document.title = 'minlaxz | Home'

        const domain = window.location.hostname;
        // const domain = 'minlaxz.github.io'
        const minlaxzData = localStorage.getItem(domain);

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
            <div className={`${styles.root_container}`}>
                <h3>Hello, world! 👻 &lt;= minlaxz </h3>
                <code className={`${styles.universe}`}>Welcome to my universe. <TikTik /></code>
                <p>Source Code is hosted <Alink to="https://github.com/minlaxz/minlaxz.github.io" text="here" /></p>
                <p>View<ToRepos linkClass={`${styles.to_repos}`} /> <span><small>yep it is uesEffect</small></span></p>
                <p>View how I rendered <ToHuman /></p>
                <ul>
                    This page is also avaiable at...
                    <li>
                        <Alink to="https://minlaxz.github.io" text="on Github Pages" />
                        {
                            window.location.hostname === 'github.minlaxz.me' ? <span>
                                Currently viewing
                            </span> : <span></span>
                        }
                    </li>
                    <li>
                        <Alink to="https://gh-minlaxz.pages.dev" text="on Cloudflare Pages (not yet)" />
                    </li>
                </ul>
                <small style={{ width: "80%", textAlign: "center", padding: "10px", fontSize: "14px" }}>
                    Reactjs with Vite build tool, hosted on github pages with actions, SSL/TLS by Cloudflare with proxies.
                </small>
            </div>

            <div className={`${styles.hidden_container}`}>
                <div style={{ border: '2px dotted khaki' }}>
                    <small>Well, actually I am hiding 🤓 not to distrurb you.</small>
                    <ToTech />
                </div>

            </div>
        </>
    );
}

// let's add clock to the home page


export default Home;