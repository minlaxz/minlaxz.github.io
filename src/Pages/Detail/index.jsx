import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ToHome, ToRepos } from '@/Routes';
import { NormalContainer } from '@/Components/Containers';
import { PreTag } from './styles';

import { useFetch } from '@/Hooks/useFetch';

const RepoDetail = () => {
    let { name } = useParams();
    const { data, error, loading } = useFetch(`https://api.github.com/repos/minlaxz/${name}`);

    if (error) console.log(error);

    if (loading) {
        return (
            <>
                <NormalContainer>
                    <p>Fetching.....</p>
                    <ToRepos />
                    <ToHome />
                </NormalContainer>
            </>
        )
    } else {
        return (
            <NormalContainer>
                {
                    data.name === 'minlaxz'
                        ? (<pre>This is personal repo</pre>)
                        : (
                            <>
                                <pre>Name : {data.name}</pre>
                                <pre>Forked : {data.fork ? `True` : `False`}</pre>
                                <PreTag>Description : {data.description}</PreTag>
                                <pre>Language : {data.language}</pre>
                                <pre>Repo Size : {data.size} Kb</pre>
                                <PreTag>GithubURL : {<a href={data.html_url}>{data.html_url}</a>}</PreTag>
                                <pre>Website : {<a href={data.homepage}>{data.homepage}</a> || `Not provided.`}</pre>
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

    }


}

export default RepoDetail;