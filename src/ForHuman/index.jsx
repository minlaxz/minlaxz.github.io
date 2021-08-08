import React from 'react';
import Markdown from 'markdown-to-jsx';
import * as data from './data';
import { ToHome, ToRepos } from '../routes';
import { MainView, HeadView, IconsView, DivSpan, DamnImage } from './styles';
import axios from 'axios';

/**
 * Individual icon
 * @param {string} markdown
*/
const Icon = ({ markdown }) => (
    <DivSpan>
        <Markdown>
            {markdown}
        </Markdown>
    </DivSpan>
)

/**
 * Heading with icon
 * @param {string} name Name of array to render
*/
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

const ForHuman = () => {
    React.useEffect(() => {
        window.document.title = "minlaxz | markdown"
    }, []);
    
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

            <DamnImage
                src="https://metrics.lecoq.io/minlaxz"
                alt="Github Metrics"
            />

            <DamnImage
                src="https://github-readme-streak-stats.herokuapp.com/?user=minlaxz"
                alt="Github Streak Stats"
            />



        </MainView>
    );
}

export default ForHuman;