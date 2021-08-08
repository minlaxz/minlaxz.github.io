import React from 'react';
import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import Home from '../Home';
import Oops from '../Oops';
import Repos from '../Repos';
import TechList from '../Tech';
import Detail from '../Detail/index.jsx';
import ForHuman from '../ForHuman';
import OtherSite from '../OtherSite';
import { MarkdownInRoute } from './styles';

const SwitchedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/repos" component={Repos} />
            <Route exact path="/about" component={TechList} />
            <Route path="/repos/:name" component={Detail} />
            <Route exact path="/forhuman" component={ForHuman} />
            <Route exact path="/othersites" component={OtherSite} />
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

export const ToTech = ({ linkClass }) => {
    return (
        <span>
            &nbsp; <Link to="/about" className={linkClass}>Here</Link> is how this went through &nbsp; 🤔
        </span>
    )
}



export const ToHuman = ({ linkClass, cusName }) => {
    return (
        // <a><img></img></a>
        <Link to="/forhuman" className={linkClass}>
            <MarkdownInRoute label={cusName || `View Markdown`} />
        </Link>

    )
}



export default SwitchedRoutes;
