import React from 'react';
import styles from './Home.module.css';
import { ToRepos } from '../routes';
import TikTik from '../Clock';
// A simple home component
const Home = () => {
    return (
        <>
            <div className={`${styles.root_container}`}>
                <h3>Hello, world!</h3>
                <code className={`${styles.universe}`}>Welcome to my universe. <TikTik /></code>
                <ToRepos linkClass={`${styles.to_repos}`} />
            </div>

            <div className={`${styles.hidden_container}`}>
                <p>Well, actually I am hiding 🤓</p>
            </div>
        </>
    );
}

// let's add clock to the home page


export default Home;