import React from 'react';
import axios from 'axios';

const SourceVersion = () => {

    const [checksum, setChecksum] = React.useState("");
    const repo = 'minlaxz.github.io';

    React.useEffect(() => {
        const endpoint = process.env.NODE_ENV === "development" ? "http://localhost:8787/api/github/lastcommit" : "https://lessapi.minlaxz.workers.dev/api/github/lastcommit"
        const fetchSha = async () => {
            await axios.get(`${endpoint}`, {
                headers: { 'Content-type': 'application/json' },
                params: {
                    repo: repo /* { repo } but want some verbose */
                }
            }).then(response => setChecksum(response.data)).catch(err => console.log(err));
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