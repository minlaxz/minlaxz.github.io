import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMessage, changeName } from 'app/features/feedback'
import styles from '@/styles/Home.module.css'

const FeedbackForm = () => {
    const dispatch = useDispatch()
    const { name, message } = useSelector(state => state.feedback)

    const [showMessage, setShowMessage] = React.useState(false)
    const [appMessage, setAppMessage] = React.useState('')

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
        <div className={styles.mainForm}>
            <h4>Message 💬 me <span style={{ color: 'dodgerblue' }}>privately</span> about <span style={{ color: 'darkorange' }}> thoughts 💭</span>.</h4>
            <input
                className={styles.nameField}
                type="text"
                placeholder='Your Name or Email'
                value={name}
                onChange={e => dispatch(changeName(e.target.value))}
            />
            <small
                style={{
                    marginLeft: '0.5vw',
                    fontFamily: 'monospace',
                    fontSize: '0.8em',
                }}
            >
                Email is better, so I can reply to you 😄, thoughts</small>
            <textarea
                placeholder='Any Message, to my Slack channel'
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
    )
}

export default FeedbackForm