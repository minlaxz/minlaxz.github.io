import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToHome, ToRepos } from '../routes';
import { MainView, PreTag } from './styles';

const Detail = () => {
    let { name } = useParams();
    const [detail, setDetail] = React.useState(null);
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://api.github.com/repos/minlaxz/${name}`);
            setDetail(res.data);
        }
        if (name !== 'minlaxz') {
            // not a personal repo make a request
            fetchData();
        } else {
            // a personal repo, do not fetch
            setDetail({ name });
        }

    }, []);

    if (detail) {
        return (
            <>
                <MainView>
                    {detail.name === 'minlaxz' ? (<pre>This is personal repo</pre>) : (
                        <>
                            <pre>Name : {detail.name}</pre>
                            <pre>Forked : {detail.fork ? `True` : `False`}</pre>
                            <PreTag>Description : {detail.description}</PreTag>
                            <pre>Language : {detail.language}</pre>
                            <pre>Repo Size : {detail.size} Kb</pre>
                            <PreTag>GithubURL : {<a href={detail.html_url}>{detail.html_url}</a>}</PreTag>
                            <pre>Website : {<a href={detail.homepage}>{detail.homepage}</a> || `Not provided.`}</pre>
                        </>
                    )
                    }
                    <hr />
                    <div style={{ display: 'flex', width: "100vw", flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '1em' }}>
                        <ToRepos cusName="Back to Repo List 👻" />
                        <ToHome cusName="Go to Home 🏡" />
                    </div>
                </MainView>
            </>
        )
    } else {
        return (
            <>
                <p>Fetching...</p>
                <ToRepos />
                <ToHome />
            </>
        )
    }


}

export default Detail;