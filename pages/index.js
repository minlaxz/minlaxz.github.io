import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '@/styles/utils.module.css'
import { FeedbackForm, Footer, Quote } from 'components'

export default function Home() {
  // const [preState, setPreState] = React.useState({
  //   name: '',
  //   message: ''
  // })
  // const handleChange = (prop) => (event) => {
  //   setPreState({ ...preState, [prop]: event?.target?.value });
  // };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h4
          style={{
            fontSize: "18px"
          }}>
          Hello, I am a backend web developer
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
      <a
        href='https://minlaxz.github.io'
        target='_blank'
        rel='noopener noreferrer'
      >
        Another website &#8599;
      </a>
      <hr />
      <FeedbackForm />
      <Footer />
    </Layout>
  )
}
