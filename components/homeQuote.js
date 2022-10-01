export default function HomeQuote(props) {
    return (
        <>
            <section className={props.styles?.headingMd}>
                <p
                    style={{
                        fontFamily: 'Sora',
                        fontSize: '13px',
                    }}>
                    Hi, I am a developer {' '}
                    <span
                        style={{
                            fontSize: "14px",
                            color: '#1E75BC'
                        }}>
                        @
                        <a
                            target={`_blank`}
                            rel='noopener noreferrer'
                            href='https://engineerforce.io'
                        >
                            engineerforce.io &#8599;
                        </a>
                    </span>
                </p>
            </section>
            <code
                style={{
                    fontFamily: "Monolisa, Regular",
                    fontSize: "13px",
                    fontWeight: "bold",
                }}>
                <span style={{
                    color: 'palegoldenrod'
                }}>
                    Welcome to my portfolio.
                </span><br />
                I used to create stuffs 🚀  by reading documentations 🗒️ and fixed bugs 🐛 by following fair discussions and thoughts 💭
            </code>
        </>
    )
}