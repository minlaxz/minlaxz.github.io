import React from 'react';
import Markdown from 'markdown-to-jsx';

import { ToHome, ToRepos } from '@/Routes';
import { NavigationButtons } from '@/Components/Buttons';
import { MainView, HeadView, IconsView, DivSpan, DamnImage } from './styles';
import * as data from './data';
import { useSelector } from 'react-redux';

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
    const darkThemeEnabled = useSelector((state) => state.darkTheme.darkThemeEnabled);
    // const toastEnabled = useSelector((state) => state.toast.toastEnabled);

    React.useEffect(() => {
        window.document.title = "minlaxz | markdown"
    }, []);

    return (
        <MainView>
            <NavigationButtons>
                <ToHome cusName="Back to Home 🏡" />
                <ToRepos cusName="Go to Repo List 👻" />
            </NavigationButtons>
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
                // src="https://github-readme-streak-stats.herokuapp.com/?user=minlaxz"
                src={`https://github-readme-streak-stats.herokuapp.com?user=minlaxz&theme=github-${darkThemeEnabled?`dark`:`light`}&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&fire=DD2727&ring=B400DD&sideNums=4F78DD&dates=2ADD68&sideLabels=21C8DD&currStreakLabel=DD2727`}
                alt="Github Streak Stats"
            />
            <DamnImage
                src="https://raw.githubusercontent.com/minlaxz/minlaxz/github-metrics/github-metrics.svg"
                alt="Github Metrics"
            />
            <DamnImage
                src="https://raw.githubusercontent.com/minlaxz/minlaxz/devcard/devcard.svg"
                alt="Github Metrics"
            />
        </MainView>
    );
}

export default ForHuman;