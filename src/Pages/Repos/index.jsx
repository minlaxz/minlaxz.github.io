import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { ToHome, ToHuman } from '@/Routes';
import { Alink } from '@/Components/Units';
import { NavigationButtons } from '@/Components/Buttons';
import { Container, UlView, LiView } from './styles';
// import produce from 'immer';

// const isOutdated = (timestamp) => {
//     const diff = (Date.now() - timestamp) / 1000;
//     console.log(diff)
//     return diff > 10; // 2 hours
// }

const Repos = () => {
    const [repos, setRepos] = React.useState(null);
    // const [localRepos, setLocalRepos] = React.useState(null);

    React.useEffect(() => {
        const fetchRecentRepos = async () => {
            const response = await axios.get('https://api.github.com/users/minlaxz/repos?sort=updated&per_page=10');
            setRepos(response.data);
            console.log('fetched repos ... ');
        }
        window.document.title = 'minlaxz | Repos';
        fetchRecentRepos();
    }, [setRepos]);

    return (
        <Container>
            Recently updated repositories ...
            <NavigationButtons>
                <ToHome cusName="Back to Home 🏡" />
                <ToHuman cusName="Go to markdown 🥶" />
            </NavigationButtons>
            {
                repos ?
                    <UlView>
                        {
                            repos.map((repo) => {
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
                    :
                    <p>
                        If this too long to response please <b>refresh</b> ...
                    </p>
            }
        </Container>
    );
}

export default Repos;