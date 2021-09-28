import React, { Suspense } from 'react';
import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';

import { MarkdownInRoute } from './styles';
import Pages from './data';
import Oops from '@/Pages/Oops';

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
            <Route exact path="/" render={() => <ActualPage type="home" />} />
            <Route exact path="/about" render={() => <ActualPage type="about" />} />
            <Route exact path="/other" render={() => <ActualPage type="other" />} />
            <Route exact path="/repos" render={() => <ActualPage type="repos" />} />
            <Route path="/repos/:name" render={() => <ActualPage type="repodetail" />} />
            <Route exact path="/forhuman" render={() => <ActualPage type="forhuman" />} />
            <Route exact path="/serverless" render={() => <ActualPage type="serverless" />} />
            <Route exact path="/shortlink" render={() => <ActualPage type="shortlink" />} />
            <Route exact path="/login" render={() => <ActualPage type="login" />} />
            <Route exact path="/signup" render={() => <ActualPage type="signup" />} />
            <Route exact path="/dashboard" render={() => <ActualPage type="dashboard" />} />
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
            &nbsp; <Link to="/other" className={linkClass}>{cusName || `Other`}</Link>
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
