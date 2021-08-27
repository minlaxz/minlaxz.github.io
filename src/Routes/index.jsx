import React from 'react';
import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import { MarkdownInRoute } from './styles';
import Home from '@/Pages/Home';
import About from '@/Pages/About';
import OtherSite from '@/Pages/OtherSite';
import Oops from '@/Pages/Oops';
import Repos from '@/Pages/Repos';
import ForHuman from '@/Pages/ForHuman';
import RepoDetail from '@/Components/Detail';
import ServerlessApi from '@/Serverless';
import LinkShortener from '@/Pages/ShortLink';
import Login from '@/Pages/Login';
import SignUp from '@/Pages/Signup';

const SwitchedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/othersites" component={OtherSite} />
            <Route exact path="/repos" component={Repos} />
            <Route path="/repos/:name" component={RepoDetail} />
            <Route exact path="/forhuman" component={ForHuman} />
            <Route exact path="/serverless" component={ServerlessApi} />
            <Route exact path="/shortlink" component={LinkShortener} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
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
