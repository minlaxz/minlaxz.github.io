import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
// import Link from 'next/link'
import Layout, { siteTitle } from '@/components/layout'
import styles from '@/styles/Home.module.css'
import utilStyles from '@/styles/utils.module.css'
import { countMinus, countPlus } from '@/app/features/counter'

export default function Home() {
  const dispatch = useDispatch()
  const value = useSelector(state => state.counter.value)
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
          <small>OpenPGP ID:
            <a
              href='https://keys.openpgp.org/search?q=minminlaxz%40gmail.com'
              target={`_blank`}
              rel="noopener noreferrer">
              {' '}EA179537523B034D&#8599;
            </a>
          </small>
        </p>
      </section>

      <div>
      <button
          onClick={() => {
            dispatch(countMinus())
          }}
        > - </button>
        {' '}
        simp counter : <span className={styles.counter}>{value}</span> (in-sync with storage)
        {' '}
        <button
          onClick={() => {
            dispatch(countPlus())
          }}
        > + </button>
      </div>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/vercel-triangle-black.svg" alt="Vercel Logo" width={25} height={25} />
          </span>
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/react-logo.svg" alt="ReactJS Logo" width={30} height={30} />
          </span>
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/nextjs-black-logo.svg" alt="NextJS Logo" width={48} height={40} />
          </span>
        </a>
      </footer>
    </Layout>
  )
}
