import React from 'react';

const Home = React.lazy(() => import('@/Pages/Home'));
const About = React.lazy(() => import('@/Pages/About'));
const Other = React.lazy(() => import('@/Pages/Other'));
const Repos = React.lazy(() => import('@/Pages/Repos'));
const ForHuman = React.lazy(() => import('@/Pages/ForHuman'));
const RepoDetail = React.lazy(() => import('@/Pages/Detail'));
const ServerlessApi = React.lazy(() => import('@/Pages/Serverless'));
const LinkShortener = React.lazy(() => import('@/Pages/ShortLink'));
const Login = React.lazy(() => import('@/Pages/Login'));
const SignUp = React.lazy(() => import('@/Pages/Signup'));
const Dashboard = React.lazy(() => import('@/Pages/Dashboard'))

const Pages = [
    { name: "home", r: <Home /> },
    { name: "about", r: <About /> },
    { name: "other", r: <Other /> },
    { name: "repos", r: <Repos /> },
    { name: "forhuman", r: <ForHuman /> },
    { name: "repodetail", r: <RepoDetail /> },
    { name: "serverless", r: <ServerlessApi /> },
    { name: "shortlink", r: <LinkShortener /> },
    { name: "login", r: <Login /> },
    { name: "signup", r: <SignUp /> },
    { name: "dashboard", r: <Dashboard /> },
]

export default Pages;