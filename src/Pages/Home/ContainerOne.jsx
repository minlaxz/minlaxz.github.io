import React, { Suspense } from 'react';
import { lazy } from '@loadable/component'
import styled from 'styled-components';

import TikTik from '@/Components/Clock';
import { Alink } from '@/Components/Units';
import SourceVersion from '@/Components/SVC';
import Loading from '@/Components/Loading';

import { Pre, Border } from './styles';

const AvailableRoutes = lazy(() => import('./AvailableRoutes'))
const Backends = lazy(() => import('./Backends'));
const BuildWith = lazy(() => import('./BuildWith'));
const ReduxContainer = lazy(() => import('./ReduxContainer'));

const ContainerOne = styled.div`
margin: 0;
padding: 0;
height: 100%;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 812px) {
    height: 130%;
}
`;

export default () => (
    <ContainerOne>
        <h4 className="animate__animated animate__flipInX animate__slower">( minlaxz = (&nbsp;) =&gt; async dispatch =&gt; 👻 ) </h4>
        <code style={{ fontSize: "13px" }} className="animate__animated animate__flipInX">Welcome to my universe. <TikTik /></code>
        <Border>
            <Pre>You would visit to me with <Alink to="https://git.io/minlaxz" text="git.io/minlaxz"></Alink> if this url <u style={{ color: "hotpink" }}>{window.location.hostname}</u> is <b>long</b> to remember for you 🥴</Pre>
        </Border>
        <Pre className="animate__animated animate__flipInX animate__faster animate__delay-1.5s">I am a so much responsive page! 👻</Pre>
        <p>Source Code is hosted <Alink to="https://github.com/minlaxz/minlaxz.github.io" text="here" /></p>

        <Suspense fallback={<Loading />}>
            <AvailableRoutes />
            <Backends />
            <BuildWith />
            <SourceVersion />
            <ReduxContainer />
        </Suspense>
    </ContainerOne>
)