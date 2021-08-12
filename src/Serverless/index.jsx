import React from 'react';
import { ToHome, ToRepos, ToHuman } from '../routes';
import { Container } from './styles';

const ServerlessApi = () => {
    /** fetch using axios to serverless api
     * @param {string} query The query to be searched on `unsplash`
     * cuz this is a frontend app, i need to deal with CORS headers
    */


    return (
        <Container>
            <h3>You're gonna make serverless api request 👻</h3>
            {/* Render images in responsive size */}
            <div style={{ display: 'flex', width: "100vw", flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '1em' }}>
                <ToHome cusName="Return Home 😭" />
                <ToHuman cusName="To markdown 🥶" />
                <ToRepos cusName="To Repos 📑" />
            </div>
        </Container>
    );
}

export default ServerlessApi;