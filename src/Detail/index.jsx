import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToHome, ToRepos } from '../routes';

const Detail = () => {
    let { name } = useParams();
    const [detail, setDetail] = React.useState(null);
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://api.github.com/repos/minlaxz/${name}`);
            setDetail(res.data);
        }
        fetchData();
    }, []);

    if (detail) {
        return (
            <>
                <pre>{detail.name}</pre>
                <ToRepos cusName="Back" />
                &nbsp;
                <ToHome cusName="Hommmme 🏠" />

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