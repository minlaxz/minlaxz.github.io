import React, { Suspense } from 'react';
import { Route } from 'react-router';
import { MarkdownInRoute } from './styles';
import { Link, Switch } from 'react-router-dom';

import Oops from '@/Pages/Oops';
const Home = React.lazy(() => import('@/Pages/Home'));
const About = React.lazy(() => import('@/Pages/About'));
const OtherSite = React.lazy(() => import('@/Pages/OtherSite'));
const Repos = React.lazy(() => import('@/Pages/Repos'));
const ForHuman = React.lazy(() => import('@/Pages/ForHuman'));
const RepoDetail = React.lazy(() => import('@/Components/Detail'));
const ServerlessApi = React.lazy(() => import('@/Serverless'));
const LinkShortener = React.lazy(() => import('@/Pages/ShortLink'));
const Login = React.lazy(() => import('@/Pages/Login'));
const SignUp = React.lazy(() => import('@/Pages/Signup'));

const Pages = [
    { name: "home", r: <Home /> },
    { name: "about", r: <About /> },
    { name: "othersites", r: <OtherSite /> },
    { name: "repos", r: <Repos /> },
    { name: "forhuman", r: <ForHuman /> },
    { name: "repodetail", r: <RepoDetail /> },
    { name: "serverless", r: <ServerlessApi /> },
    { name: "shortlink", r: <LinkShortener /> },
    { name: "login", r: <Login /> },
    { name: "signup", r: <SignUp /> },
]

const ActualPage = (props) => {
    return (
        Pages.filter(page => page.name === props.type).map(page => {
            return (
                <div key={props.type}>
                    <Suspense fallback={<div>Loading {props.type}...</div>}>
                        {page.r}
                    </Suspense>
                </div>
            )
        })
    )

}



const SwitchedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" render={props => <ActualPage type="home" {...props} />} />
            <Route exact path="/about" render={props => <ActualPage type="about" {...props} />} />
            <Route exact path="/othersites" render={props => <ActualPage type="othersites" {...props} />} />
            <Route exact path="/repos" render={props => <ActualPage type="repos" {...props} />} />
            <Route path="/repos/:name" render={props => <ActualPage type="repodetail" {...props} />} />
            <Route exact path="/forhuman" render={props => <ActualPage type="forhuman" {...props} />} />
            <Route exact path="/serverless" render={props => <ActualPage type="serverless" {...props} />} />
            <Route exact path="/shortlink" render={props => <ActualPage type="shortlink" {...props} />} />
            <Route exact path="/login" render={props => <ActualPage type="login" {...props} />} />
            <Route exact path="/signup" render={props => <ActualPage type="signup" {...props} />} />
            <Route component={Oops} />
        </Switch>
    )
}

export const ToHome = ({ cusName }) => {
    return (
        <Link to="/">
            {cusName || `Default Home 🏠`}
        </Link>
    )
}

export const ToRepos = ({ linkClass, cusName }) => {
    return (
        <span>
            &nbsp; <Link to="/repos" className={linkClass}>{cusName || `repo list 🤓`}</Link>
        </span>

    )
}

export const ToOther = ({ linkClass, cusName }) => {
    return (
        <span>
            &nbsp; <Link to="/othersites" className={linkClass}>{cusName || `Other websites`}</Link>
        </span>

    )
}

export const ToAbout = ({ linkClass }) => {
    return (
        <span>
            &nbsp; <Link to="/about" className={linkClass}>Here</Link> is how this went through &nbsp; 🤔
        </span>
    )
}

export const ToHuman = ({ linkClass, cusName }) => {
    return (
        <Link to="/forhuman" className={linkClass}>
            <MarkdownInRoute label={cusName || `View Markdown`} />
        </Link>

    )
}

export const ToServerless = ({ linkClass, cusName }) => {
    return (
        <span>
            &nbsp; <Link to="/serverless" className={linkClass}>{cusName || `Serverless API`}</Link>
        </span>
    )
}

export const ToLinkShortener = ({ linkClass, cusName }) => {
    return (
        <span>
            &nbsp; <Link to="/shortlink" className={linkClass}>{cusName || `LinkShortener API`}</Link>
        </span>
    )
}

export const ToLogin = ({ linkClass, cusName }) => {
    return (
        <span>
            &nbsp; <Link to="/login" className={linkClass}>{cusName || `Login`}</Link>
        </span>
    )
}


export const ToSignup = ({ linkClass, cusName }) => {
    return (
        <span>
            &nbsp; <Link to="/signup" className={linkClass}>{cusName || `Signup`}</Link>
        </span>
    )
}

export default SwitchedRoutes;
