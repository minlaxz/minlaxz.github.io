import React from 'react';
import { useFetch } from '@/Hooks/useFetch';
import { Alink } from '../Units';

const SourceVersion = () => {
    const repo = 'minlaxz.github.io';
    const user = 'minlaxz';
    const branch = 'main';

    const { data, error, loading } = useFetch(`https://api.github.com/repos/${user}/${repo}/branches/${branch}`);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
        }}>
            <small>
                Last Commit Sha on "Main": &nbsp;
            </small>
            {
                error
                    ? <span style={{ color: "red" }}>{error.message}</span>
                    : loading
                        ? <span style={{ color: "orange" }}>Fetching last commit SHA...</span>
                        :
                        <Alink
                            to={`https://github.com/minlaxz/${repo}/commit/${data.commit.sha}`}
                            text={`${data.commit.sha.slice(0, 7)}`} />
            }
        </div>
    )
}

export default SourceVersion;