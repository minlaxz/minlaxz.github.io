import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToHome, ToRepos } from '../routes';
// import { Alink } from '../Units';
import styled from 'styled-components';


const MainView = styled.div`
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: #fff;

`;

const PreTag = styled.pre`
    white-space: pre-wrap;
    /* word-break: break-all; */
    text-align: center;
`;


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
            setDetail({name});           
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
                    <span>
                        <ToRepos cusName="Back 🔙" />
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <ToHome cusName="Hommmme 🏠" />
                    </span>
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