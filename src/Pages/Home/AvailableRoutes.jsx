import React from 'react';
import { ToRepos, ToHuman, ToOther, ToServerless, ToLinkShortener, ToLogin } from '@/Routes/';
import { DivUl, UlView, LiView } from './styles';

export default () => (
    <DivUl className="animate__animated animate__flipInX animate__faster animate__delay-1s">Available routes:
        <UlView>
            <LiView>View my =&gt;<ToRepos cusName="Repo List 🥶" /></LiView>
            <LiView>Here is markdown =&gt; <ToHuman /></LiView>
            <LiView>Currently I've some challenges =&gt; <ToOther cusName="Problems" /></LiView>
            <LiView>Serverless Api Calls =&gt; <ToServerless /></LiView>
            <LiView>Link shortener =&gt; <ToLinkShortener /></LiView>
            <LiView>I challenge <b>U</b> to test my login system =&gt; <ToLogin /></LiView>
            {/* this is extensible */}
        </UlView>
    </DivUl>
)