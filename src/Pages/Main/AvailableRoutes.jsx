import React from 'react';
import { ToRepos, ToHuman, ToOther, ToServerless, ToLinkShortener, ToLogin, ToCheatsheets } from '@/Routes/';
import { DivUl, UlView, LiView } from '@/Components/Views';

export default () => (
    <DivUl className="animate__animated animate__flipInX animate__faster animate__delay-1s">Available routes:
        <UlView>
            <LiView>View my =&gt;<ToRepos cusName="Repo List 🥶" /></LiView>
            <LiView>How I renderd =&gt; <ToHuman /></LiView>
            <LiView>Check <b style={{ fontFamily: "cursive" }}>React</b> Life Cycles =&gt; <ToOther cusName="Hmmm" /></LiView>
            <LiView>Serverless Api Calls =&gt; <ToServerless /></LiView>
            <LiView>Link shortener =&gt; <ToLinkShortener /></LiView>
            <LiView>I challenge <b>U</b> to test my login system =&gt; <ToLogin /></LiView>
            <LiView>Development =&gt; <ToCheatsheets /></LiView>
            {/* this is extensible */}
        </UlView>
    </DivUl>
)