import { useSelector } from "react-redux";
import Image from "next/image";

export function GPG_SourceCode() {
 return (
  <div
   style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "1em",
   }}
  >
   <a
    href="https://keys.openpgp.org/search?q=minminlaxz%40gmail.com"
    target="_blank"
    rel="noopener noreferrer"
   >
    <div
     style={{
      display: "flex",
      alignItems: "center",
     }}
    >
     <Image
      src="/images/lock-and-key.svg"
      alt="OpenPGP ID"
      width={24}
      height={24}
     />
     &nbsp;
     <span style={{ fontSize: "12px" }}> Digital Sign: EA179537 &#8599;</span>
    </div>
   </a>
   <a
    href="https://github.com/minlaxz/minlaxz.github.io"
    target="_blank"
    rel="noopener noreferrer"
   >
    <div
     style={{
      display: "flex",
      alignItems: "center",
     }}
    >
     <Image
      style={{ verticalAlign: "middle" }}
      src="/images/source-code.svg"
      alt="Source Code"
      width={35}
      height={35}
     />
     &nbsp;
     <span style={{ fontSize: "12px" }}> Source code &#8599;</span>
    </div>
   </a>
  </div>
 );
}

export function ServerQuote() {
 const { response, error, loading } = useSelector((state) => state.testCall);
 return (
  <small style={{ color: "white", textAlign: "center" }}>
   Django backend is containerized using{" "}
   <span style={{ color: "#38B7ED" }}>Docker</span> and hosted on{" "}
   <a
    href="https://fly.io"
    style={{ color: "hotpink" }}
    target="_blank"
    rel="noopener noreferrer"
   >
    fly.io a (PAAS)
   </a>{" "}
   which give me an ID of =&gt; &nbsp;
   <b style={{ color: "red" }}>
    {loading ? (
     <span> Loading ... </span>
    ) : response ? (
     `${response.message}`
    ) : (
     <span>Backend Not Ready Yet!</span>
    )}
   </b>
  </small>
 );
}

const Quote = () => (
  <code
      style={{
          fontFamily: "Monolisa, Regular",
          fontSize: "13px",
          fontWeight: "bold",
      }}>
      <br />
      <span style={{
          color: 'palegoldenrod'
      }}>
          Welcome to my portfolio.
      </span><br /><br />
      I used to create stuffs 🚀  by reading documentations 🗒️ and fixed bugs 🐛 by following fair discussions and thoughts 💭
  </code>
)

export function HomeQuote(props) {
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

export {Quote};