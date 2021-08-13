import React from 'react';
import styled from "styled-components";

export const MarkdownImg = styled.img`
    width: 120px;
    @media only screen and (max-width: 768px) {
        width: 90px;
    }
    @media only screen and (max-width: 1024px) {
        width: 100px;
    }
`;

export const MarkdownInRoute = ({ label }) => {
    return (
        <MarkdownImg src={`https://img.shields.io/badge/${label}-000?style=social&logo=markdown&logoColor=black`} alt="Markdown" />
    )
}
