import React from 'react';
import { Alink } from '@/Components/Units';
import { repo } from '@/Constants/repo';
import { useSelector } from 'react-redux';

const SourceVersion = () => {

    const lastCommitData = useSelector(state => state.lastCommit)

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
                lastCommitData.error
                    ? <span style={{ color: "red" }}>{lastCommitData.error}</span>
                    : lastCommitData.loading
                        ? <span style={{ color: "orange" }}>Fetching last commit SHA...</span>
                        :
                        <Alink
                            to={`https://github.com/minlaxz/${repo}/commit/${lastCommitData.sha}`}
                            text={`${lastCommitData.sha.slice(0, 7)}`} />
            }
        </div>
    )
}

export default SourceVersion;