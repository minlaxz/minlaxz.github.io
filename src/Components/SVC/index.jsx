import React from 'react';
import { useFetch } from '@/Hooks/useFetch';

const SourceVersion = () => {
    const repo = 'minlaxz.github.io';
    const user = 'minlaxz';
    const branch = 'main';

    const { data, error, loading } = useFetch(`https://api.github.com/repos/${user}/${repo}/branches/${branch}`);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            Last Commit : {
                error
                    ? <span style={{ color: "red" }}>{error.message}</span>
                    : loading
                        ? <span style={{ color: "orange" }}>Fetching last commit SHA...</span>
                        :
                        <a href={`https://github.com/minlaxz/${repo}/commit/${data.commit.sha}`} rel="noopener noreferrer" target="_blank">
                            {`SHA: ${data.commit.sha}`}
                        </a>
            }
        </div>
    )
}

export default SourceVersion;