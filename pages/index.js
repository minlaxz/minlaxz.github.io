import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Min Min Latt | Portfolio</title>
        <meta name="description" content="Min Min Latt, minlaxz portfolio site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='mainContainer'>
        <h3>
          Hello, world!
        </h3>
        <p>
          My name is Min Min Latt, and I am a software developer.
        </p>
        <code>OpenPGP ID:
          <a
            href='https://keys.openpgp.org/search?q=minminlaxz%40gmail.com'
            rel='noopener noreferer'
            target={`_blank`}
          >D047EEF6CCB71C5D</a></code>
        <style jsx>{`
          .mainContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }
          `}</style>
      </div>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
