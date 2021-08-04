import React from 'react';
import { ToHome } from '../routes';

const Repos = () => {
    React.useEffect(() => {
        window.document.title = 'minlaxz | Repos';
    }, []);
    return (
        <>
            This is repos route.
            <ToHome />
        </>
    );
}

export default Repos;