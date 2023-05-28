import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
        <h3 className={styles.center}>
          This is&nbsp;<b style={{ color: "slategray" }}>Min</b> &nbsp;who likes systems.
        </h3>
        <div className={styles.description}>
          <Link href="about">
            <p className={styles.code} style={{ color: "while" }}>/&nbsp;about/</p>
          </Link>
          <Link href="blog">
            <p className={styles.code} style={{ color: "purple" }}>/&nbsp;blog/</p>
          </Link>
          <Link href="certs">
            <p className={styles.code} style={{ color: "gold" }}>/&nbsp;certs/</p>
          </Link>
          <Link href="https://github.com/minlaxz/minlaxz.github.io" target='_blank'>
            <p className={styles.code} style={{ color: "silver" }}>/&nbsp;github/</p>
          </Link>
          {/* <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
        </div>


        {/* <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
      </main>
      <footer style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", padding: "1rem" }}>
        <pre>
          <i>
            latest commit: 1b696969/10:10:10
          </i>
        </pre>
      </footer>
    </>
  )
}
