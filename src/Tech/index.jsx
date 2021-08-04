import React from 'react';
import styles from './Tech.module.css';
import { Alink } from '../Units';
import { ToHome } from '../routes';

const TechList = () => {
    return (
        <div className={styles.container}>
        Shhh, I'm a secret!
            <ul className={`${styles.ulstyles}`}>
                <li><Alink to="https://reactjs.org" text="React" /></li>
                <li><Alink to="https://example.com" text="CNAME" /></li>
                <li><Alink to="https://github.com/minlaxz/minlaxz.github.io/blob/main/.github/workflows/deploy-pages-on-pr-to-main.yml" text="CI (github actions)" /></li>
                <li><Alink to="https://example.com" text="CNAME" /></li>
                <li><Alink to="https://example.com" text="CNAME" /></li>
                <li><Alink to="https://example.com" text="CNAME" /></li>
            </ul>
            <ToHome />  
        </div>
    );
}

export default TechList;