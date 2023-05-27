import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <span>
            <Link href="/">
              home
              &nbsp;
              <code className={styles.code}>/about</code>
            </Link>
          </span>
        </p>
      </div>
    </main>
  )
}
