import styled from "styled-components";
import React from 'react';
import { textNav } from "@/Components/ToggleableStuff";


export const UlView = styled.ul`
list-style-type: lower-greek;
`;

export const LiView = styled.li`
font-size: 15px;
margin: 0.2em;
padding: 0.2em;
`;

export const DivUl = styled.div`
margin: 0.5em;
padding: 0.5em;
`;

export const SourceProP = styled.p`
font-family: 'Source Code Pro', monospace;
font-size: ${props => props.fontSize || `16px`};
font-weight: ${props => props.fontWeight || `normal`};
`;

export const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    `;

export const Card = styled.article`
	flex: 0 1 20%;
    @media only screen and (max-width: 1024px) {
        flex: 0 1 100%;
    }
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	margin: 2em;
    padding: 1.5em;
    border: 1px solid #e6e6e6;
    `;

export const CardHead = styled.h4`
	margin-top: 0;
	margin-bottom: .5em;
	font-weight: bold;
    color: ${textNav};
`;

export const CardBody = styled.div`
    font-size: 80%;
`;

export const Pre = styled.pre`
white-space: pre-wrap;
font-size: 0.8rem;
min-width: 0;
`;

export const CardContent = (props) => {
    return (
        <span>
            <UlView>
                {
                    props.content.map((item, index) => {
                        return (
                            <LiView key={index}>
                                {item.head}
                                <Pre>{item.command}</Pre>
                            </LiView>
                        )
                    })
                }
            </UlView>
        </span>
    )
}