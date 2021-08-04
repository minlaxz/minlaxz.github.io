import React from 'react';
import styles from './Tech.module.css';
import { Alink } from '../Units';
import { ToHome } from '../routes';

const TechList = () => {
    React.useEffect(() => {
        window.document.title = 'minlaxz | About';
    }, []);
    return (
        <div>
            <ul className={`${styles.ulstyles}`}>
                <li><Alink to="https://reactjs.org" text="React" /></li>
                <pre>Javascript Frontend Framework</pre>
                <li><Alink to="https://github.com/minlaxz/minlaxz.github.io/blob/ac1740f95bceac92041a74184bb2d928755e91a5/CNAME#L1" text="CNAME" /></li>
                <pre>pointing to minlaxz.github.io</pre>
                <li><Alink to="https://github.com/minlaxz/minlaxz.github.io/blob/main/.github/workflows/deploy-pages-on-pr-to-main.yml" text="CI (github actions)" /></li>
                <pre>Continuos Integration and Deployment</pre>
                <li><Alink to="https://github.com/css-modules/css-modules" text="CSS Modules" /></li>
                <pre>CSS as Modules</pre>
                <li><Alink to="https://github.com/vitejs/vite" text="Vite is fast" /></li>
                <pre>Vite as build tool</pre>
            </ul>
            <ToHome />
        </div>
    );
}

export default TechList;