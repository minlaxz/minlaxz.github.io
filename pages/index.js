import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '@/styles/utils.module.css'
import { FeedbackForm, Footer, Quote } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '@/hooks/useMediaQuery'
import Linkbutton from 'components/linkbutton'
import { testCall } from '@/api/testCall'

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const { isDarkModeEnabled } = useSelector(state => state.darkmode);
  const { response, error, loading } = useSelector(state => state.testCall);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(testCall());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        overflow: 'hidden',
      }}
    >

      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p
            style={{
              fontFamily: 'Sora',
              fontSize: '1rem',
            }}>
            Hi, I am a developer {' '}
            <span
              style={{
                fontSize: "14px",
                color: '#1E75BC'
              }}>
              @
              <a
                target={`_blank`}
                rel='noopener noreferrer'
                href='https://engineerforce.io'
              >
                engineerforce.io &#8599;
              </a>
            </span>
          </p>
        </section>

        <Quote />

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
          style={{ color: 'white', textAlign: 'center' }}>
          Django backend is containerized using <span style={{ color: '#38B7ED' }}>Docker</span> and hosted on <a href="https://fly.io" style={{ color: 'hotpink' }} target={`_blank`}
            rel='noopener noreferrer'>fly.io a (PAAS)</a> which give me an ID of =&gt; &nbsp;
          <b style={{color:'red'}}>
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
        <small style={{ marginTop: '10px' }}>
          Yo may know that, this is not about design, but this is likely <br />
          <b>to be about Design Context which can't be seen.</b>
          &nbsp; FYI: this is totally detaching from Heroku.
        </small>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1em",
          }}
        >
          <Linkbutton
            href='https://github.com/minlaxz'
            text='Github &#8599;'
            firstSpanSx={{
              borderRadius: '0.5rem',
            }}
            secondSpanSx={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
            }}
            firstSpanBg={`bg-slate-600`}
          />
          <Linkbutton
            isExternal={false}
            href='/about'
            text='about me →'
            firstSpanSx={{
              borderRadius: '0.5rem',
            }}
            secondSpanSx={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
            }}
            firstSpanBg={`bg-cyan-700`}
          />
        </div>
        <hr />
        <FeedbackForm />
        <Footer />
      </Layout>
    </div>
  )
}
