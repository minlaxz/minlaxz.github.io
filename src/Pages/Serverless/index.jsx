import React from 'react';
import axios from 'axios';

import { ToHome, ToRepos, ToHuman } from '@/Routes';
import { NavigationButtons } from '@/Components/Buttons';
import { Container, ImageContainer, SearchButton, StyledImage, TextInput, UserInput } from './styles';

const ServerlessApi = () => {

    const [query, setQuery] = React.useState("");
    const [current, setCurrent] = React.useState("");
    const [images, setImages] = React.useState(null);
    const [danger, setDanger] = React.useState(false);

    const getImages = async ({ query }) => {
        try {
            const endpoint = process.env.NODE_ENV === "development" ? "http://localhost:8787/api/images" : "https://api.octocat.tk/api/images"
            const resp = await axios.post(`${endpoint}`, {
                headers: { 'Content-type': 'application/json;charset=UTF-8' },
                query: query
            })
            return resp.data;
        } catch (e) {
            setCurrent(JSON.stringify(e.message));
            return;
        }
    }

    const search = async () => {
        setImages(null)
        setCurrent("Pwease wait 👻 ... ")
        const results = await getImages({ query: query });
        setImages(results);
    }

    React.useEffect(() => {
        console.log(query);
        const offensive = ["fuck", "sex", "nude", "porn", "simp"]
        offensive.includes(query) ? setDanger(true) : setDanger(false); /* 👻 */
    }, [query]);

    return (
        <Container>
            <h3>You're gonna make serverless api request 👻</h3>
            {/* Render images in responsive size */}
            <NavigationButtons>
                <ToHome cusName="Return Home 😭" />
                <ToHuman cusName="To markdown 🥶" />
                <ToRepos cusName="To Repos 📑" />
            </NavigationButtons>
            <UserInput>
                <TextInput type="text" placeholder="Search any images" onChange={e => setQuery(e.target.value)} />
                <SearchButton danger={danger} onClick={search}>{`Search ${query} images`}</SearchButton>
            </UserInput>
            <ImageContainer>
                {images ?
                    images.map(image => (
                        <a key={image.id} href={`https://unsplash.com/photos/${image.id}`} target="_blank" rel="noopener noreferrer">
                            <StyledImage src={image.src} alt={image.alt} />
                        </a>
                    ))
                    :
                    <p>{current}</p>
                }
            </ImageContainer>
        </Container>
    );
}

export default ServerlessApi;