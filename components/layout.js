import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '@/styles/utils.module.css'
import themeStyles from '@/styles/theme.module.css'

import { useSelector } from 'react-redux'

const name = 'Min Min Latt'
export const siteTitle = 'Min Min Latt Portfolio'

const Layout = ({ children, home }) => {
    const { isDarkModeEnabled } = useSelector(state => state.darkmode)

    return (
        <div className={
            isDarkModeEnabled ?
                `${styles.container} ${themeStyles.dark}` :
                `${styles.container} ${themeStyles.light}`
        }>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Min Min Latt's personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/**Min%20Min%20Latt**%20Portfolio.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Ffacebook%2Freact%40main%2Ffixtures%2Fdom%2Fpublic%2Freact-logo.svg&widths=250&widths=100&widths=150&heights=250&heights=100&heights=150`}
                />
                <meta name="og:title" content={siteTitle} />
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={`${name} Profile Image`}
                        />
                        <h1 className={utilStyles.headingXl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={`${name} Profile Image`}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Layout