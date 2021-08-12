import React from 'react';
import { ToHome, ToRepos, ToHuman } from '../routes';
import { Container, ImageContainer, SearchButton, StyledImage, TextInput, UserInput } from './styles';
import axios from 'axios';

const getImages = async ({ query }) => {
    const api = "https://lessapi.minlaxz.workers.dev"
    const resp = await axios.post(`${api}`, {
        headers: { 'Content-type': 'application/json;charset=UTF-8' },
        query: query
    });
    return resp.data;
}

const ServerlessApi = () => {

    const [query, setQuery] = React.useState("");
    const [images, setImages] = React.useState([]);

    const search = async () => {
        const results = await getImages({ query: query });
        setImages(results);
    }

    return (
        <Container>
            <h3>You're gonna make serverless api request 👻</h3>
            {/* Render images in responsive size */}
            <div style={{ display: 'flex', width: "100vw", flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '1em' }}>
                <ToHome cusName="Return Home 😭" />
                <ToHuman cusName="To markdown 🥶" />
                <ToRepos cusName="To Repos 📑" />
            </div>
            <UserInput>
                <TextInput type="text" placeholder="Search images" onChange={e => setQuery(e.target.value)} />
                <SearchButton onClick={search}>{`Search ${query} images`}</SearchButton>
            </UserInput>
            <ImageContainer>
                {
                    images.map(image => (
                        <a key={image.id} href={`https://unsplash.com/photos/${image.id}`} target="_blank" rel="noopener noreferrer">
                            <StyledImage src={image.src} alt={image.alt} />
                        </a>
                    ))
                }
            </ImageContainer>
        </Container>
    );
}

export default ServerlessApi;