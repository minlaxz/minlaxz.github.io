import React from 'react';
import { Alink } from '@/Components/Units';
import { DivUl, UlView, LiView } from './styles';


export default () => (
    <DivUl className="animate__animated animate__flipInX animate__faster animate__delay-2s">
        This on other domain and backends ...
        <UlView>
            <LiView>
                <Alink to="https://minlaxz.github.io" text="Deploy with Github Pages" />
                {
                    window.location.hostname === 'minlaxz.github.io' ? <span>
                        &nbsp; you're currently viewing
                    </span> : <span> &nbsp; Viewing on {window.location.hostname}</span>
                }
            </LiView>
            <LiView>
                <Alink to="https://gh-minlaxz.pages.dev" text="Deploy with Cloudflare Pages (not yet)" />
            </LiView>
            <LiView>
                <Alink to="https://api.octocat.tk" text="Serverless Backend" />
            </LiView>
            <LiView>
                <Alink to="https://microapi.octocat.tk" text="NodeJS Backend" />
            </LiView>
            <LiView>
                <Alink to="https://github.com/minlaxz/easy-rest" text="Main Backend (Currently building)" />
            </LiView>

            {/* this is extensiable */}
        </UlView>
    </DivUl>
)