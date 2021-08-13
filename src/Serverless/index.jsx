import React from 'react';
import { ToHome, ToRepos, ToHuman } from '@/Routes';
import { Container, ImageContainer, SearchButton, StyledImage, TextInput, UserInput } from './styles';
import axios from 'axios';
import { NavigationButtons } from '@/Components/Buttons';

const ServerlessApi = () => {

    const [query, setQuery] = React.useState("");
    const [current, setCurrent] = React.useState("");
    const [images, setImages] = React.useState(null);
    const [danger, setDanger] = React.useState(false);

    const getImages = async ({ query }) => {
        const api = "https://lessapi.minlaxz.workers.dev/api/images"
        // const resp = 
        await axios.post(`${api}`, {
            headers: { 'Content-type': 'application/json;charset=UTF-8' },
            query: query
        }).then(res => res.data).catch(err => setCurrent(JSON.stringify(err.message)))
    }

    const search = async () => {
        setImages(null)
        setCurrent("Pwease wait 👻 ... ")
        const results = await getImages({ query: query });
        setImages(results);
    }

    React.useEffect(() => {
        console.log(query);
        const offensive = ["fuck", "sex", "nude"]
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
                <TextInput type="text" placeholder="Search images" onChange={e => setQuery(e.target.value)} />
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