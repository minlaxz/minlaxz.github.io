import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMessage, changeName } from 'app/features/feedback'
import styles from '@/styles/Home.module.css'
import autoAnimate from '@formkit/auto-animate'

const FeedbackForm = () => {
    const parentRef = React.useRef(null)
    const dispatch = useDispatch()
    const { name, message } = useSelector(state => state.feedback)

    const [showMessage, setShowMessage] = React.useState(false)
    const [appMessage, setAppMessage] = React.useState('')

    React.useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef])

    const handlePostMessage = async () => {
        setShowMessage(true)
        if (name.length === 0 || message.length === 0) {
            setAppMessage('I know you\'re a little shy, but please fill out the forms!')
            setTimeout(() => {
                setShowMessage(false)
            }, 3e3)
            return
        }
        setAppMessage('Sending...')

        let res = await fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify({ name, message })
        })
        if (res.ok) {
            setAppMessage('Message sent, thank you!')
            /* auto set false after 3 seconds */
            setTimeout(() => {
                setShowMessage(false)
            }, 3e3)
            dispatch(changeName(''))
            dispatch(changeMessage(''))
        }
        else {
            setTimeout(() => {
                setShowMessage(false)
            }, 3e3)
            setAppMessage('Error!')
        }
    }
    return (
        <div className={styles.mainForm}>
            <p style={{padding:'1em'}}>Message me <span style={{ color: 'dodgerblue' }}>privately</span> your <span style={{ color: 'darkorange' }}> thoughts 💭</span>.</p>
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
            <div ref={parentRef}>
            {
                showMessage && <small style={{color:'hotpink'}}>{appMessage}</small>
            }
            </div>
            <div className={styles.animatted}></div>
        </div>
    )
}

export default FeedbackForm