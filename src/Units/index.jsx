import React from 'react';
import './Units.module.css';

export const Alink = ({ to, text }) => {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer">{text}
            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "16px", width: "16px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
    )
}
