import Link from "next/link"

function Error({ statusCode }) {
    return (
        <p>
            {
                statusCode
                    ?
                    statusCode >= 500
                        ?
                        `This is my fault, ${statusCode} occurred on server 👻`
                        :
                        `🍑 Okay, this is your fault, keep calm and return to / , bro!`
                    :
                    'An error occurred on client'
            }
        </p>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res?.statusCode || err?.statusCode
    return { statusCode }
}

export default Error