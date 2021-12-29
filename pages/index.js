import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '@/styles/utils.module.css'
import styles from '@/styles/Home.module.css'
import FeedbackForm from 'components/feedback'

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
          style={{ fontSize: "18px" }}>Hello, I am a backend web developer</h4>
        <p
          style={{ fontSize: "14px" }}>
          @
          <a
            target={`_blank`}
            rel='noopener noreferrer'
            href='https://engineerforce.io'
          >
            engineerforce.io&#8599;
          </a>
        </p>
      </section>
      <code
        style={{
          fontSize: "14px",
        }}> Use to create stuffs 🚀  by reading documentations 🗒️ and fixed bugs 🐛 by following discussions and thoughts 💭 </code>
      <br />
      <p
        style={{ fontSize: "16px" }}>
        Source code for {' '}
        <a
          target={`_blank`}
          rel='noopener noreferrer'
          href='https://github.com/minlaxz/minlaxz.github.io'>
          this&#8599;
        </a>
      </p>

      <p>OpenPGP ID:
        <a
          href='https://keys.openpgp.org/search?q=minminlaxz%40gmail.com'
          target={`_blank`}
          rel="noopener noreferrer">
          {' '}EA179537523B034D&#8599;
        </a>
      </p>


      <hr />

      <FeedbackForm />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/images/vercel-triangle-black.svg"
              alt="Vercel Logo"
              width={25}
              height={25} />
          </span>
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/images/react-logo.svg"
              alt="ReactJS Logo"
              width={30}
              height={30} />
          </span>
        </a>
        <a
          href="https://redux-toolkit.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/images/redux.svg"
              alt="Redux Logo"
              width={30}
              height={30} />
          </span>
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/images/nextjs-black-logo.svg"
              alt="NextJS Logo"
              width={48}
              height={40} />
          </span>
        </a>
      </footer>
    </Layout>
  )
}
