import React from 'react';
import { Redirect, Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import Home from '../Home';
import Oops from '../Oops';
import Repos from '../Repos';
import TechList from '../Tech';
// import Detail from '../Detail';
import Detail from '../Detail/index.jsx';
import ForHuman from '../ForHuman';

const SwitchedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/repos" component={Repos} />
            <Route exact path="/about" component={TechList} />
            <Route path="/repos/:name" component={Detail} />
            <Route exact path="/forhuman" component={ForHuman} />
            <Route component={Oops} />
        </Switch>
    )
}

export const ToHome = ({ cusName }) => {
    return (
        <Link to="/">{cusName || `Home 🏠`}</Link>
    )
}

export const ToRepos = ({ linkClass, cusName }) => {
    return (
        <span>
            &nbsp; <Link to="/repos" className={linkClass}>{cusName || `repo list 🤓`}</Link>
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



export default SwitchedRoutes;
