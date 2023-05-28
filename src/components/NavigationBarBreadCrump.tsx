import Link from "next/link";
import styles from '@/page.module.css'

export default function NavigationLink({ highlighted="", notHighlited="" }) {
  return (
    <div className={styles.description}>
      <p>
        <span>
          <Link href="/">
            {notHighlited || null}
            &nbsp;
            <code className={styles.code}>{highlighted}/</code>
          </Link>
        </span>
      </p>
    </div>
  )
}