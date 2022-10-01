import { FeedbackForm } from '@/components'
import Link from 'next/link'

export default function SendMessage() {
    return (
        <>
            <FeedbackForm />
            <Link href="/">
                <a>
                Back 🏡
                </a>
            </Link>
        </>
    )
}