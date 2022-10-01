import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '@/styles/utils.module.css'
import themeStyles from '@/styles/theme.module.css'
import LinkButton from '@/components/linkbutton'
import { Toggler } from '@/components'
import ProfilePhoto from '@/components/profilePhoto'

import { useSelector } from 'react-redux'

const name = 'Min Min Latt'
export const siteTitle = 'Min Min Latt Portfolio'

const Layout = ({ children, home }) => {
    const { isDarkModeEnabled } = useSelector(state => state.darkmodeReducer)

    return (
        <div
        // className={
        //     isDarkModeEnabled ?
        //         `${styles.container} ${themeStyles.dark}` :
        //         `${styles.container} ${themeStyles.light}`
        // }
        // style={{
        //     backgroundColor: isDarkModeEnabled ? 'var(--black)' : 'var(--gray-soft)',
        //     // borderRadius: '0.5rem',
        //     // width:'100%',
        //     // position: 'absolute',
        //     // zIndex: 1,
        //     // opacity: 0.75,
        // }}
        >
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
                        <ProfilePhoto
                            myName={name}
                            isHome={home}
                            className={{ profileImage: utilStyles.borderCircle }}
                            path="/images/profile.jpg"
                        />
                        <h1
                            className="text-3xl font-bold mt-3"
                            style={{ fontFamily: 'Sora' }}
                        >
                            {name}
                        </h1>
                        <Toggler />
                    </>

                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <ProfilePhoto
                                    myName={name}
                                    isHome={home}
                                    className={{ profileImage: utilStyles.borderCircle }}
                                    path="/images/profile.jpg"
                                />
                            </a>
                        </Link>
                        <Toggler />
                        <h2
                            className={utilStyles.headingLg}
                        >
                            <Link href="/">
                                <a
                                    className={utilStyles.colorInherit}
                                >
                                    {name}
                                </a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {
                !home && (
                    <LinkButton href='/' text='← Back to home' />
                )
            }
        </div>
    )
}

export default Layout