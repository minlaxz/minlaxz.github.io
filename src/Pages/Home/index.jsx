import React from 'react';
import produce from 'immer';

import ContainerOne from './ContainerOne';
import ContainerTwo from './ContainerTwo';

// Redux
import { useDispatch } from 'react-redux';
import { getUsers } from '@/actions/userActions';
import { getLastCommitOnMain } from '@/actions/generalActions';

import store from '@/Store';
import { toast } from 'react-toastify';

// A simple home component
const Home = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        window.document.title = 'minlaxz | Home'
        // if it is redirected from markdown component, 
        // need to scroll top otherwise it would be empty view
        window.scrollTo(0, 0)

        // dispatch(getUsers());

        const state = store.getState().lastCommit.sha !== '';
        !state && dispatch(getLastCommitOnMain());
        state && toast.success(`phew... won't dispatch again, already have a state.`, {
            icon: '😌'
        });

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

export default Home;