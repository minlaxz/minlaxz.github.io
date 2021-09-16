import React from 'react';

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
const Dashboard = React.lazy(() => import('@/Pages/Dashboard'))

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
    { name: "dashboard", r: <Dashboard /> },
]

export default Pages;