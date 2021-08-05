import React from 'react';
import styles from './Repos.module.css';
import { ToHome } from '../routes';

const Repo = () => {
    return (
        <>
        </>
    )
}

const Repos = () => {
    React.useEffect(() => {
        window.document.title = 'minlaxz | Repos';
    }, []);
    return (
        <div className={`${styles.root}`}>
            This is repos route.
            <ToHome />
        </div>
    );
}

export default Repos;