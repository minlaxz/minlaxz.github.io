import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Oops.module.css';

const Oops = () => {
    const location = useLocation();
    React.useEffect(() => {
        window.document.title = 'minlaxz | Oops!';
    }, []);
    return (
        <div className={`${styles.root_container}`}>
            <p className={`${styles.oops}`}>
                Oops 😯! Well this is embarassing.
            </p>
            <pre>Not weed on this {location.pathname}</pre>
            <Link to="/">Home is safe 🤓</Link>
        </div>
    );
}

export default Oops;