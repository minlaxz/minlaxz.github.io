import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Footer = () => {
    return (
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
    )
}

export default Footer