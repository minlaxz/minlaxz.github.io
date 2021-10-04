import React from 'react';
import { Link } from 'react-router-dom';

import { ToHome, ToHuman } from '@/Routes';
import { Alink } from '@/Components/Units';
import { NavigationButtons } from '@/Components/Buttons';
import { Container, UlView, LiView } from './styles';

import { useFetch } from '@/Hooks/useFetch';


const Repos = () => {
    const { data, error, loading } = useFetch('https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10');

    if (error) (<p>Error : {error.message}</p>)

    return (
        <Container>
            <NavigationButtons>
                <ToHome cusName="Back to Home 🏡" />
                <ToHuman cusName="Go to markdown 🥶" />
            </NavigationButtons>
            {
                loading ?
                    <p>
                        If this too long to response please <b>refresh</b> ...
                    </p>
                    :
                    <>
                        <p>
                            <b style={{ fontFamily: "cursive" }}>Recently updated repositories ...</b>
                        </p>
                        <UlView>
                            {
                                data.map((repo) => {
                                    return (
                                        <React.Fragment key={repo.id}>
                                            <LiView >{repo.name} <Alink to={repo.html_url} text="View on github" />
                                                <p>{`${repo.description}`.slice(0, 250)}...</p>
                                                <small>Size : {repo.size}Kb, Language: {repo.language}</small>
                                                &nbsp;
                                                <Link to={`/repos/${repo.name}`}>Detail </Link> =&gt;
                                            </LiView>
                                            <hr />
                                        </React.Fragment>

                                    )
                                })
                            }
                        </UlView>
                    </>
            }
        </Container>
    );
}

export default Repos;