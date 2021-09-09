import React from 'react';
import produce from 'immer';

import TikTik from '@/Components/Clock';
import { Alink } from '@/Components/Units';
import SourceVersion from '@/Components/SVC';

import { ToRepos, ToHuman, ToOther, ToServerless, ToAbout, ToLinkShortener, ToLogin } from '@/Routes/';
import { ContainerOne, ContainerTwo, UlView, LiView, DivUl, Pre, ReduxContainer, Border } from './styles';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '@/actions/pointActions';
import { getUsers } from '@/actions/userActions';

// A simple home component
const Home = () => {
    const dispatch = useDispatch();

    const points = useSelector(state => state.pointss);
    const user = useSelector(state => state.user);
    const authUser = useSelector(state => state.authUser);

    const [token, setToken] = React.useState(null);

    React.useEffect(() => {
        window.document.title = 'minlaxz | Home'

        dispatch(getUsers());

        const domain = window.location.hostname;
        const minlaxzData = localStorage.getItem(domain);
        const data = JSON.parse(localStorage.getItem("ggwp_user"));


        // if it is redirected from markdown component, 
        // need to scroll top otherwise it will be empty view
        // cuz I set total view height to 100vh + 100vh to hide ContainerTwo
        window.scrollTo(0, 0)

        if (minlaxzData) { // visted user
            const newState = produce(JSON.parse(minlaxzData), (draft) => {
                draft.lastVisitedTime = Date.now()
            })
            localStorage.setItem('minlaxz.github.io', JSON.stringify(newState));
        } else { // new user
            const data = {
                lastVisitedTime: Date.now()
            }
            localStorage.setItem('minlaxz.github.io', JSON.stringify(data));
        }

        data && setToken(data.token)

    }, []);

    return (
        <>
            <ContainerOne>
                <h3 className="animate__animated animate__flipInX animate__slower">Hello, world! ((👻) =&gt; (minlaxz)) </h3>
                <code style={{ fontSize: "13px" }} className="animate__animated animate__flipInX">Welcome to my universe. <TikTik /></code>
                <Border>
                    <Pre>You would visit to me with <Alink to="https://git.io/minlaxz" text="git.io/minlaxz"></Alink> if this url <u style={{ color: "hotpink" }}>{window.location.hostname}</u> is <b>long</b> to remember for you 🥴</Pre>
                </Border>
                <Pre className="animate__animated animate__flipInX animate__faster animate__delay-1.5s">I am a so much responsive page! 👻</Pre>
                <p>Source Code is hosted <Alink to="https://github.com/minlaxz/minlaxz.github.io" text="here" /></p>
                <DivUl className="animate__animated animate__flipInX animate__faster animate__delay-1s">Available routes:
                    <UlView>
                        <LiView>View my =&gt;<ToRepos cusName="Repo List 🥶" /></LiView>
                        <LiView>Here is markdown =&gt; <ToHuman /></LiView>
                        <LiView>Other sites =&gt; <ToOther /></LiView>
                        <LiView>Serverless Api Calls =&gt; <ToServerless /></LiView>
                        <LiView>Link shortener =&gt; <ToLinkShortener /></LiView>
                        <LiView>Test Login System =&gt; <ToLogin /></LiView>
                        {/* this is extensible */}
                    </UlView>
                </DivUl>
                <DivUl className="animate__animated animate__flipInX animate__faster animate__delay-2s">
                    Other sites and backends ...
                    <UlView>
                        <LiView>
                            <Alink to="https://minlaxz.github.io" text="with Github Pages" />
                            {
                                window.location.hostname === 'minlaxz.github.io' ? <span>
                                    &nbsp; you're currently viewing
                                </span> : <span>...</span>
                            }
                        </LiView>
                        <LiView>
                            <Alink to="https://gh-minlaxz.pages.dev" text="with Cloudflare Pages (not yet)" />
                        </LiView>
                        <LiView>
                            <Alink to="https://api.octocat.tk" text="CF backend 👻 (using workers)" />
                        </LiView>
                        <LiView>
                            <Alink to="https://microapi.octocat.tk" text="Deta backend 👻 (using express)" />
                        </LiView>
                        {/* this is extensiable */}
                    </UlView>
                </DivUl>

                <div style={{
                    width: "80%",
                    textAlign: "center",
                    padding: "10px",
                    fontSize: "14px",
                }}
                    className="animate__animated animate__flipInX animate__faster animate__delay-4s">
                    <b>React</b> with <b>Redux</b> and <b>Vite</b> as build tool, hosted on <b>Github Pages</b> with <b>actions</b> on <b>push</b> on <b>main</b>, SSL/TLS by <b>Cloudflare</b> with <b>proxies</b>.
                </div>
                <SourceVersion />
                <ReduxContainer>
                    <div>
                        <p>This is about <b>Redux</b> state management</p>
                        <button onClick={() => dispatch(increment())}>+</button>
                        &nbsp; {points.value} &nbsp;
                        <button onClick={() => dispatch(decrement())}>-</button>
                    </div>
                    <div>
                        {
                            user?.users[0]?.name ?? [].toString()
                        }
                    </div>
                    <code style={{ fontSize: "11px" }}>
                        {
                            authUser.userState.token || token
                                ? `Logged in`
                                : `Logged out`
                        }
                    </code>
                </ReduxContainer>
            </ContainerOne>

            <ContainerTwo>
                <div style={{ border: '2px dotted khaki' }}>
                    <small>Well, actually I am hiding 🤓 not to distrurb you.</small>
                    <ToAbout />
                </div>

            </ContainerTwo>
        </>
    );
}

// let's add clock to the home page


export default Home;