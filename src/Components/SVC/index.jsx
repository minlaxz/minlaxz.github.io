import React from 'react';
import axios from 'axios';

const SourceVersion = () => {

    const [checksum, setChecksum] = React.useState("");

    React.useEffect(() => {
        const fetchVersion = async () => await axios.get('https://api.github.com/repos/minlaxz/minlaxz.github.io/branches/main')
            .then(resp => setChecksum(resp.data.commit.sha)).catch(err => console.log(err));
        fetchVersion();
    }, []);

    return (
        <span style={{ color: 'red' }}>
            <small>
                <a href={`https://github.com/minlaxz/minlaxz.github.io/commit/${checksum}`} rel="noopener noreferrer" target="_blank">
                    CHECKSUM : {checksum}
                </a>
            </small>
        </span>
    );
}

export default SourceVersion;