import React from 'react';
import axios from 'axios';
import endpoint from '@/api';

const SourceVersion = () => {
    const [checksum, setChecksum] = React.useState("");
    const [timeout, setTimeout] = React.useState(false);

    const repo = 'minlaxz.github.io';
    const user = 'minlaxz';
    const branch = 'main';

    React.useEffect(() => {
        const fetchSha = async () => {
            await axios.get(`${endpoint}`, {
                headers: { 'Content-type': 'application/json' },
                params: {
                    repo, user, branch
                },
                timeout: 1000 * 5, // 5 sec
            })
                .then(response => setChecksum(response.data.data))
                .catch(err => {
                    setTimeout(true)
                    import.meta.env.MODE === "development" ? console.log(err) : console.log("API is down.")
                });
        };
        fetchSha();
    }, []);

    return (
        <span style={{ color: 'red' }}>
            <small>
                {
                    timeout
                        ?
                        <p>API is seem to be down.</p>
                        :
                        checksum
                            ?
                            <a href={`https://github.com/minlaxz/${repo}/commit/${checksum}`} rel="noopener noreferrer" target="_blank">
                                {`MD5: ${checksum}`}
                            </a>
                            :
                            <p>
                                Fetching latest checksum ...
                            </p>
                }
            </small>
        </span>
    );
}

export default SourceVersion;