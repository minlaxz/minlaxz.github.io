import React from 'react';
import { Redirect, Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import Home from '../Home';
import Oops from '../Oops';
import Repos from '../Repos';

const SwitchedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/repos" component={Repos} />
            <Route component={Oops} />
        </Switch>
    )
}

export const ToHome = () => {
    return (
        <Link to="/">Home 🏠</Link>
    )
}

export const ToRepos = ({linkClass}) => {
    return (
        <Link to="/repos"className={linkClass}>Here is my repos 🤓</Link>
    )
}

export default SwitchedRoutes;
