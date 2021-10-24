import React from 'react';
import { lazy } from '@loadable/component';

const Home = lazy(() => import('@/Pages/Home'));
const About = lazy(() => import('@/Pages/About'));
const Other = lazy(() => import('@/Pages/Other'));
const Repos = lazy(() => import('@/Pages/Repos'));
const ForHuman = lazy(() => import('@/Pages/ForHuman'));
const RepoDetail = lazy(() => import('@/Pages/Detail'));
const ServerlessApi = lazy(() => import('@/Pages/Serverless'));
const LinkShortener = lazy(() => import('@/Pages/ShortLink'));
const Login = lazy(() => import('@/Pages/Login'));
const SignUp = lazy(() => import('@/Pages/Signup'));
const Dashboard = lazy(() => import('@/Pages/Dashboard'));
const CheatSheets = lazy(() => import('@/Pages/CheatSheets'));
const GitCS = lazy(() => import('@/Pages/CheatSheets/GitCS'));

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
    { name: "cheatsheets", r: <CheatSheets /> },
    { name: "gitcs", r: <GitCS /> },
]

export default Pages;