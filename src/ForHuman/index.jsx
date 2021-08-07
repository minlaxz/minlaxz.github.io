import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import * as data from './data';
import { ToHome, ToRepos } from '../routes';

const MainView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;  /*  100vh remove scroll bar but content will be hidden */
    @media only screen and (max-width: 600px) {
        height: 100%;
    }
`;

const HeadView = styled.div`
    display: flex;
    flex-flow: column;

    align-items: center;
    align-content: space-between;
`;

const IconsView = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        justify-content: space-evenly;
    }

`;

const DivSpan = styled.div`
    margin-top: 0.5em;
    padding: 0.5em;
    @media only screen and (max-width: 768px) {
        margin-top: 0.1em;
        padding: 0.1em;
    }

`;

const Icon = ({ markdown }) => (
    <DivSpan>
        <Markdown>
            {markdown}
        </Markdown>
    </DivSpan>
)

const HeadIcon = ({ name }) => (
    <>
        <HeadView>
            {
                data.Data.filter(heading => heading.name === name).map((filteredHeading, i) => (
                    <Markdown key={i}>{filteredHeading.r}</Markdown>
                ))
            }
        </HeadView>
        <IconsView>
            {
                data.Data.filter(heading => heading.name === name).map((filteredHeading) => filteredHeading.p.map((i, k) => (
                    <Icon markdown={i} key={k} />
                )))
            }
        </IconsView>
    </>
)

const DamnImage = styled.img`
    width: 30vw;
    @media only screen and (max-width: 1024px) {
        width: 50vw;
    }
    @media only screen and (max-width: 600px) {
        width: 100vw;
    }
`;

const ForHuman = () => {
    return (
        <MainView>
            <div style={{ display: 'flex', width: "100vw", flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '1em' }}>
                <ToHome cusName="Back to Home 🏡" />
                <ToRepos cusName="Go to Repo List 👻" />
            </div>
            <HeadView>
                <Markdown>
                    ### Howdy 😶‍🌫️ I am Min Min Latt (minlaxz) ☕
                </Markdown>
            </HeadView>
            <Markdown>
                🕸 Here is my website (building): [minlaxz.me](https://minlaxz.me)
            </Markdown>
            <HeadIcon name="connect" />
            <HeadIcon name="programming" />
            <HeadIcon name="others" />
            <HeadIcon name="osiot" />
            <DamnImage src="https://metrics.lecoq.io/minlaxz" alt="Github Metrics" />
            <DamnImage src="https://github-readme-streak-stats.herokuapp.com/?user=minlaxz" alt="Github Streak Stats" />
        </MainView>
    );
}

export default ForHuman;