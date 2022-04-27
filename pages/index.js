import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '@/styles/utils.module.css'
import { FeedbackForm, Footer, Quote, Toggler } from 'components'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const { isDarkModeEnabled } = useSelector(state => state.darkmode)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: isDarkModeEnabled ? 'darkgray' : '#fafafa',
        overflow: 'hidden',
      }}
    >

      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <Toggler />
          <h4
            style={{
              fontSize: '1.5rem',
            }}>
            Hi, I am a dev
          </h4>
          <p
            style={{
              fontSize: "14px"
            }}>
            @
            <a
              target={`_blank`}
              rel='noopener noreferrer'
              href='https://engineerforce.io'
            >
              engineerforce.io &#8599;
            </a>
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
              {' '}PGP: EA179537 &#8599;
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1em",
          }}
        >
          <a
            href='https://minlaxz.github.io'
            target='_blank'
            rel='noopener noreferrer'
          >
            Another website &#8599;
          </a>
          <Link href='/about'>
            <a
              style={{
                textDecoration: 'underline',
                color: 'hotpink',
                ffontSize: '1.2em',
              }}
            >
              about →
            </a>
          </Link>
        </div>
        <hr />
        <FeedbackForm />
        <Footer />
      </Layout>
    </div>
  )
}
