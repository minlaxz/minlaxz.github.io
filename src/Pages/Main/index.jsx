import React, { Suspense } from 'react';
import { lazy } from '@loadable/component'
import styled from 'styled-components';

// Redux
import { useDispatch } from 'react-redux';
import { getLastCommitOnMain } from '@/actions/generalActions';
import store from '@/Store';

import { useMediaQuery } from '@/Hooks/useMediaQuery';
import TikTik from '@/Components/Clock';
import { NormalContainer } from '@/Components/Containers';
import { SourceProP, Pre, Loading } from '@/Components/Views';
import { Alink } from '@/Components/Units';

import { DamnImage, DamnImage2, Border } from './styles';
import { toast } from 'react-toastify';
import { ToAbout } from '@/Routes/';

const BuildWith = lazy(() => import('./BuildWith'));
const SourceVersion = lazy(() => import('@/Components/SVC'));
const AvailableRoutes = lazy(() => import('./AvailableRoutes'));
const ReduxContainer = lazy(() => import('./ReduxContainer'));
const Backends = lazy(() => import('../Main/Backends'));

const GeneralContainer = styled.div`
width: ${props => props.width};
`;


const Main = () => {
    let isScreenWide = useMediaQuery('(min-width: 768px)');
    const dispatch = useDispatch();
    React.useEffect(() => {
        const state = store.getState().lastCommit.sha !== '';
        !state && dispatch(getLastCommitOnMain());
        state && toast.success(`phew... won't dispatch again, already have a state.`, {
            icon: '😌'
        });
    }, []);
    return (
        <NormalContainer
            flow={isScreenWide ? 'row' : 'column'}
            justifyContent={isScreenWide ? "space-evenly" : "flex-start"}
            alignItems={isScreenWide ? "flex-start" : "center"}
            height="100%">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <SourceProP fontSize="15px" fontWeight="bolder"> minlaxz = (&nbsp;) =&gt; async dispatch =&gt; 🚀 </SourceProP>
                <div>
                    <p>Here is <Alink to={`https://github.com/minlaxz`} text={`My Github`} /></p>
                    <code style={{ fontSize: "13px" }} className="animate__animated animate__flipInX">Welcome to my universe. <TikTik /></code>
                    <SourceProP fontSize="14px">This is an automated profile.</SourceProP>
                </div>
                <div style={{ maxWidth: "100%" }}>
                    {/* bug fix: shorten the text to work space-evenly */}
                    <p style={{ margin: '10px', padding: '10px', fontFamily: 'serif' }}>
                        My name is <b>Min Min Latt</b>, &nbsp;
                        <span>
                            a self-taught software developer.
                        </span>
                    </p>
                    <p style={{ margin: '10px', padding: '10px', fontFamily: 'monospace' }}>
                        Use to create stuffs 🚀
                        by reading documentations 🗒️
                        and fixed bugs 🐛 by following discussions and thoughts 💭.
                    </p>
                </div>

                <DamnImage
                    src="https://raw.githubusercontent.com/minlaxz/minlaxz/devcard/devcard.svg"
                    alt="Dev Card"
                />
                <Border>
                    <Pre>You would visit to me with <Alink to="https://git.io/minlaxz" text="git.io/minlaxz"></Alink> if this url <u style={{ color: "hotpink" }}>{window.location.hostname}</u> is <b>long</b> to remember for you 🥴</Pre>
                </Border>
                <p>Source Code is hosted <Alink to="https://github.com/minlaxz/minlaxz.github.io" text="here" /></p>
                <Suspense fallback={<Loading />}>
                    <SourceVersion />
                    <ReduxContainer />
                    <BuildWith />
                    <AvailableRoutes />
                    <Backends />
                </Suspense>
                <div style={{ border: '2px dotted khaki' }}>
                    <small>Well, actually I am the last one 🤓 not to distrurb you.</small>
                    <ToAbout />
                </div>
            </div>

            <DamnImage2
                src="https://raw.githubusercontent.com/minlaxz/minlaxz/github-metrics/github-metrics.svg"
                alt="Github Metrics"
            />
        </NormalContainer>
    )
}

export default Main;