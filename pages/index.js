import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { changeMessage, changeName } from 'app/features/feedback'

import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '@/styles/utils.module.css'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const dispatch = useDispatch()
  const { name, message } = useSelector(state => state.feedback)

  const [showMessage, setShowMessage] = React.useState(false)
  const [appMessage, setAppMessage] = React.useState('')

  // const [preState, setPreState] = React.useState({
  //   name: '',
  //   message: ''
  // })
  // const handleChange = (prop) => (event) => {
  //   setPreState({ ...preState, [prop]: event?.target?.value });
  // };

  const handlePostMessage = async () => {
    setShowMessage(true)
    setAppMessage('Sending...')

    let res = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ name, message })
    })
    if (res.ok) {
      setAppMessage('Message sent!')
      /* auto set false after 3 seconds */
      setTimeout(() => {
        setShowMessage(false)
      }, 3e3)
      dispatch(changeName(''))
      dispatch(changeMessage(''))
    }
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h4>I am a Software Developer ...</h4>
        <code
        style={{ 
          fontSize: "14px",
        }}> Use to create stuffs 🚀  by reading documentations 🗒️ and fixed bugs 🐛 by following discussions and thoughts 💭 </code>
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

      <hr />
      <div className={styles.mainForm}>
        <h4>Message 💬 me <span style={{ color: 'dodgerblue' }}>privately</span> about <span style={{ color: 'darkorange' }}> thoughts 💭</span>.</h4>
        <input
          className={styles.nameField}
          type="text"
          placeholder='Your Name'
          value={name}
          onChange={e => dispatch(changeName(e.target.value))}
        />
        <textarea
          placeholder='Message'
          type="text"
          className={styles.messageField}
          value={message}
          onChange={e => dispatch(changeMessage(e.target.value))}
        />
        <button
          className={styles.submitButton}
          type="button"
          onClick={() => handlePostMessage()}
        > Send
        </button>
        {
          showMessage && <small>{appMessage}</small>
        }
      </div>
      {
        console.log('WEBHOOK: ' + process.env.SLACK_WEBHOOK)
      }

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
