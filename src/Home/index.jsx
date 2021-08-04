import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={`${styles.root_container}`}>
            <h3>Hello, world!</h3>
            <code style={{ fontSize: '13px' }}>Welcome to my universe. </code>
        </div>
    );
}

export default Home;