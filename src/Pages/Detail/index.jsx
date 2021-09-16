import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ToHome, ToRepos } from '@/Routes';
import { NormalContainer } from '@/Components/Containers';
import { PreTag } from './styles';

const RepoDetail = () => {
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
            <NormalContainer>
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
            </NormalContainer>
        )
    } else {
        return (
            <>
                <NormalContainer>
                    <p>Fetching.....</p>
                    <ToRepos />
                    <ToHome />
                </NormalContainer>
            </>
        )
    }


}

export default RepoDetail;