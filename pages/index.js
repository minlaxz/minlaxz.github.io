import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Software Developer ...</p>
        <code style={{ fontSize: "14px" }}> Use to create stuffs 🚀  by reading documentations 🗒️ and fixed bugs 🐛 by following discussions and thoughts 💭 </code>
        <br />
        <p>
          <small>Here is my OpenPGP ID:
            <a
              href='https://keys.openpgp.org/search?q=minminlaxz%40gmail.com'
              target={`_blank`}
              rel="noopener noreferrer">
              {' '}D047EEF6CCB71C5D&#8599;
            </a>
          </small>
        </p>
      </section>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/vercel-triangle-black.svg" alt="Vercel Logo" width={28} height={28} />
          </span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/react-logo.svg" alt="ReactJS Logo" width={30} height={30} />
          </span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/nextjs-black-logo.svg" alt="NextJS Logo" width={48} height={30} />
          </span>
        </a>
      </footer>
    </Layout>
  )
}
