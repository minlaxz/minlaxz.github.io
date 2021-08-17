import React from 'react';
import axios from 'axios';

const SourceVersion = () => {

    const [checksum, setChecksum] = React.useState("");
    const repo = 'minlaxz.github.io';
    const user = 'minlaxz';
    const branch = 'main';

    React.useEffect(() => {
        const endpoint = process.env.NODE_ENV === "development" ? "http://localhost:3001/api/v1/github/lastcommit" : "https://microapi.octocat.tk/api/v1/github/lastcommit"
        const fetchSha = async () => {
            await axios.get(`${endpoint}`, {
                headers: { 'Content-type': 'application/json' },
                params: {
                    repo, user, branch

                }
            }).then(response => setChecksum(response.data.data)).catch(err => console.log(err));
        };
        fetchSha();
    }, []);

    return (
        <span style={{ color: 'red' }}>
            <small>
                <a href={`https://github.com/minlaxz/${repo}/commit/${checksum}`} rel="noopener noreferrer" target="_blank">
                    CHECKSUM : {checksum}
                </a>
            </small>
        </span>
    );
}

export default SourceVersion;