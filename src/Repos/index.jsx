import React from 'react';
import styles from './Repos.module.css';
import { ToHome } from '../routes';
import axios from 'axios';
import { Alink } from '../Units';
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
        // const domain = window.location.hostname;
        // const domain = 'minlaxz.github.io'
        // const minlaxzData = JSON.parse(localStorage.getItem(domain)) || {}; // {} for jumpers 🤣
        // if (minlaxzData.lastVisitedTime) {
        //     if (isOutdated(minlaxzData.lastVisitedTime)) {
        //         // data is out of date // fetch data
        //         fetchRecentRepos().then(() => {
        //             // patch object without mutating it
        //             const newData = produce(minlaxzData, draft => {
        //                 draft.repos = repos;
        //             });
        //             // set local storage
        //             localStorage.setItem(domain, JSON.stringify(newData));
        //         })

        //     } else {
        //         // data is up to date // do nothing
        //     }
        // } else {
        //     // home page jumpers 🤣 // fetch data
        //     fetchRecentRepos().then(() => {
        //         const data = {
        //             lastVisitedTime: Date.now(),
        //             repos: repos
        //         }
        //         // set local storage
        //         localStorage.setItem(domain, JSON.stringify(data));
        //     })

        // }

        // const localData = JSON.stringify(localStorage.getItem(domain))
        // setLocalRepos(localData.repos)
    }, []);





    return (
        <div className={`${styles.root}`}>
            Recently updated repositories ...
            <ToHome />
            {
                repos ?
                    <ul>
                        {
                            repos.map((repo) => {
                                return (
                                    <React.Fragment key={repo.id}>
                                        <li >{repo.name} <Alink to={repo.html_url} text="View" />
                                            <p>{repo.description}</p>
                                            <small>Size : {repo.size}Kb, Language: {repo.language}, Issue: {repo.open_issues}</small>
                                        </li>
                                        <hr />
                                    </React.Fragment>

                                )
                            })
                        }
                    </ul>
                    :
                    <p>
                        Fetching repos...
                    </p>
            }

        </div>
    );
}

export default Repos;