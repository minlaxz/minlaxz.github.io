import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '@/styles/utils.module.css'
import { Footer } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '@/hooks/useMediaQuery'
import Linkbutton from 'components/linkbutton'
import { testCall } from '@/api/testCall'
import HomeQuote from 'components/homeQuote'

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const { isDarkModeEnabled } = useSelector(state => state.darkmodeReducer);
  const { response, error, loading } = useSelector(state => state.testCall);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(testCall());
  }, [dispatch]);

  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <HomeQuote styles={{ headingMd: utilStyles.headingMd }} />
        <small>
        { isDarkModeEnabled ? ` Dark ` : ` Light ` } Mode on.
        </small>
        <br />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "1em",
          }}
        >
          <a
            href="https://keys.openpgp.org/search?q=minminlaxz%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{
              display: 'inline-block',
              verticalAlign: 'middle'
            }}>
              <Image
                src="/images/lock-and-key.svg"
                alt="OpenPGP ID"
                width={30}
                height={30} />
            </div>
            <span style={{ fontSize: "12px" }}>
              {' '}Digital Sign: EA179537 &#8599;
            </span>
          </a>
          <a
            href="https://github.com/minlaxz/minlaxz.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{
              display: 'inline-block',
              verticalAlign: 'middle'
            }}>
              <Image
                src="/images/source-code.svg"
                alt="Source Code"
                width={35}
                height={35} />
            </div>
            <span style={{ fontSize: "12px" }}>
              {' '}Source code &#8599;
            </span>
          </a>
        </div>
        <small
          style={{ color: "white", textAlign: "center" }}>
          Django backend is containerized using <span style={{ color: "#38B7ED" }}>Docker</span> and hosted on <a href="https://fly.io" style={{ color: "hotpink" }} target="_blank"
            rel='noopener noreferrer'>fly.io a (PAAS)</a> which give me an ID of =&gt; &nbsp;
          <b style={{ color: 'red' }}>
            {
              loading
                ? <span> Loading ... </span>
                : response
                  ? `${response.message}`
                  : <span>Backend Not Ready Yet!</span>
            }
          </b>
        </small>
        <br />
        <small style={{ marginTop: "10px" }}>
          I know the design is terrible, but this actually<br />
          <b>included some design which can&apos;t be seen.</b>
          &nbsp; FYI: this is totally detaching from Heroku.
        </small>
        <div
          style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "space-evenly",
            alignItems: "flex-end",
            alignContent: "flex-start",
            margin: "0.2em",
            height: "15vh"
          }}
        >
          <Linkbutton
            href='https://github.com/minlaxz'
            text='Github &#8599;'
            firstSpanSx={{
              borderRadius: '0.2rem',
            }}
            secondSpanSx={{
              padding: '0.2rem 0.4rem',
              borderRadius: '0.2rem',
            }}
            firstSpanBg={`bg-slate-500`}
          />
          <Linkbutton
            isExternal={false}
            href='/sendmessage'
            text='Message &#8594;'
            firstSpanSx={{
              borderRadius: '0.2rem',
            }}
            secondSpanSx={{
              padding: '0.2rem 0.4rem',
              borderRadius: '0.2rem',
            }}
            firstSpanBg={`bg-purple-600`}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            alignContent: "flex-start",
            margin: "0.5em",
            marginBottom: "3ch",
            height: "15vh"
          }}
        >
          <Linkbutton
            isExternal={false}
            href='/about'
            text='about &#8594;'
            firstSpanSx={{
              borderRadius: '0.2rem',
            }}
            secondSpanSx={{
              padding: '0.2rem 0.4rem',
              borderRadius: '0.2rem',
            }}
            firstSpanBg={`bg-cyan-600`}
          />
          <Linkbutton
            isExternal={false}
            href='/blog'
            text='blog &#8594;'
            firstSpanSx={{
              borderRadius: '0.2rem',
            }}
            secondSpanSx={{
              padding: '0.2rem 0.4rem',
              borderRadius: '0.2rem',
            }}
            firstSpanBg={`bg-yellow-600`}
          />
        </div>
        <hr />
        {/* <FeedbackForm /> */}
        <Footer />
        <div style={{ width: "100%", textAlign: 'center', marginTop: '100vh', marginBottom: '40vh' }}>
          <small>
            👻
          </small>
        </div>
      </Layout>
    </div>
  )
}
