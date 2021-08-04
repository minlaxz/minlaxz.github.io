import React from 'react';
import styles from './Home.module.css';
import { ToRepos, ToTech } from '../routes';
import TikTik from '../Clock';
import { Alink } from '../Units';
// A simple home component
const Home = () => {
    return (
        <>
            <div className={`${styles.root_container}`}>
                <h3>Hello, world!</h3>
                <code className={`${styles.universe}`}>Welcome to my universe. <TikTik /></code>
                <p>Source Code is hosted <Alink to="https://github.com/minlaxz/minlaxz.github.io" text="here" /></p>
                <p>View<ToRepos linkClass={`${styles.to_repos}`} /> <span><small>yep it is uesEffect</small></span></p>
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