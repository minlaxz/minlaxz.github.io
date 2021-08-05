import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    let { name } = useParams();
    return (
        <>
            <h3>ID: {name}</h3>
        </>
    );
}

export default Detail;