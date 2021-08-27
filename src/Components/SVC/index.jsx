import React from 'react';
import axios from 'axios';
import { endpoint } from '@/api';
const SourceVersion = () => {

    const [checksum, setChecksum] = React.useState("");
    const repo = 'minlaxz.github.io';
    const user = 'minlaxz';
    const branch = 'main';

    React.useEffect(() => {
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