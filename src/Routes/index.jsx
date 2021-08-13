import React from 'react';
import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import Home from '@/Pages/Home';
import { MarkdownInRoute } from './styles';


const SwitchedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
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

export const ToServerless = ({ linkClass, cusName }) => {
    return (
        <span>
            &nbsp; <Link to="/serverless" className={linkClass}>{cusName || `Serverless API`}</Link>
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
