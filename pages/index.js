import * as React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "@/styles/utils.module.css";
import homeStyles from "@/styles/Home.module.css";
import { Footer, GPG_SourceCode, ServerQuote, HomeQuote } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import Linkbutton from "@/components/linkbutton";
// import { testCall } from "@/api/testCall";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Home() {
 const { isDarkModeEnabled } = useSelector((state) => state.darkmodeReducer);
 const isDesktop = useMediaQuery("(min-width: 960px)");

 const dispatch = useDispatch();

 const getServerMessage = async () => {
  let res = await fetch("/api/testcall", {
   method: "GET",
  });
  if (res.ok) {
   console.log(res);
  } else {
  }
 };

 React.useEffect(() => {
  getServerMessage();
 }, [dispatch]);

 return (
  <div
   className={
    isDarkModeEnabled ? homeStyles.claymophismdark : homeStyles.claymophism
   }
   style={{ padding: isDesktop ? "3em 2em 1em 2em" : "3em 1em 1.5em 1em" }}
  >
   <Layout home>
    <Head>
     <title>{siteTitle}</title>
    </Head>
    <HomeQuote styles={{ headingMd: utilStyles.headingMd }} />
    <br />
    <div>
     <GPG_SourceCode />
    </div>
    <ServerQuote />
    <br />
    <small style={{ marginTop: "10px" }}>
     I know the design is terrible, but this actually
     <b> included some design which can&apos;t be seen.</b>
    </small>
    <div
     style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "flex-end",
      alignContent: "flex-start",
      margin: "0.2em",
      height: "15vh",
     }}
    >
     <Linkbutton
      href="https://github.com/minlaxz"
      text="Github &#8599;"
      firstSpanSx={{
       borderRadius: "0.2rem",
      }}
      secondSpanSx={{
       padding: "0.2rem 0.4rem",
       borderRadius: "0.2rem",
      }}
      firstSpanBg={`bg-slate-500`}
     />
     <Linkbutton
      isExternal={false}
      href="/sendmessage"
      text="Message &#8594;"
      firstSpanSx={{
       borderRadius: "0.2rem",
      }}
      secondSpanSx={{
       padding: "0.2rem 0.4rem",
       borderRadius: "0.2rem",
      }}
      firstSpanBg={`bg-purple-600`}
     />
    </div>
    <div
     style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      alignContent: "flex-start",
      margin: "0.5em",
      marginBottom: "3ch",
      height: "20vh",
     }}
    >
     <Linkbutton
      isExternal={false}
      href="/about"
      text="about &#8594;"
      firstSpanSx={{
       borderRadius: "0.2rem",
      }}
      secondSpanSx={{
       padding: "0.2rem 0.4rem",
       borderRadius: "0.2rem",
      }}
      firstSpanBg={`bg-cyan-600`}
     />
     <Linkbutton
      isExternal={false}
      href="/account"
      text="Account &#8594;"
      firstSpanSx={{
       borderRadius: "0.2rem",
      }}
      secondSpanSx={{
       padding: "0.2rem 0.4rem",
       borderRadius: "0.2rem",
      }}
      firstSpanBg={`bg-yellow-600`}
     />
     <Linkbutton
      isExternal={false}
      href="/blog"
      text="blog &#8594;"
      firstSpanSx={{
       borderRadius: "0.2rem",
      }}
      secondSpanSx={{
       padding: "0.2rem 0.4rem",
       borderRadius: "0.2rem",
      }}
      firstSpanBg={`bg-yellow-600`}
     />
    </div>
    <hr />
    {/* <FeedbackForm /> */}
    <Footer />
    <div
     style={{
      width: "100%",
      textAlign: "center",
      marginTop: "100vh",
      marginBottom: "40vh",
     }}
    >
     <small>👻</small>
    </div>
   </Layout>
  </div>
 );
}
