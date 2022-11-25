export default function ApiExamplePage() {
  return (
    <div>
      <h1>API Example</h1>
      <p>The examples below show responses from the test API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/test/session</p>
      <iframe src="/api/test/session" style={{width:"100%", height: "200px"}} />
      <h2>JSON Web Token</h2>
      <p>/api/test/jwt</p>
      <iframe src="/api/test/jwt" style={{width:"100%", height: "400px"}} />
    </div>
  )
}