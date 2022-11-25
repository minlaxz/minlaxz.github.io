import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Authentication() {
 const { data: session, status } = useSession();
 const testCallResolver = async () => {
  let res = await fetch("/api/testcall", {
   method: "GET",
  });
  if (res.ok) {
  }
 };
 if (status === "authenticated") {
  return (
   <>
    <p>Signed in as {session.user.email}</p>
    <button onClick={(e) => signOut()}>Sign out button</button>
    <br />
    <Link href="/api/auth/signout">
     <a>Sign out link</a>
    </Link>
    <br />
      <div style={{ maxWidth: "100%", overflow: "auto" }}>
        <strong>Session:</strong>
     <pre style={{ fontSize: "12px", whiteSpace: "pre" }}>
      {JSON.stringify(session)}
     </pre>
    </div>
   </>
  );
 }

 return (
  <>
   <Link href="/api/auth/signin">
   <a>Sign in link</a>
     </Link>
     <br/>
     <button onClick={() => signIn("google")}>
       Sign in with Google.
     </button>
   </>
   
 );
}
