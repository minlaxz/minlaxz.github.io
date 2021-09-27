import React from 'react';
import produce from 'immer';

import ContainerOne from './ContainerOne';
import ContainerTwo from './ContainerTwo';

// Redux
import { useDispatch } from 'react-redux';
import { getUsers } from '@/actions/userActions';
import { getLastCommitOnMain } from '@/actions/generalActions';

// A simple home component
const Home = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        window.document.title = 'minlaxz | Home'
        // if it is redirected from markdown component, 
        // need to scroll top otherwise it will be empty view
        // cuz I set total view height to 100vh + 100vh to hide ContainerTwo
        window.scrollTo(0, 0)

        dispatch(getUsers());
        dispatch(getLastCommitOnMain());

        const domain = window.location.hostname;
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
            <ContainerOne />
            <ContainerTwo />
        </>
    );
}

// let's add clock to the home page


export default Home;