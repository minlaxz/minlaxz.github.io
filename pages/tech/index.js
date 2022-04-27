import Layout from '@/components/layout'

export default function About() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                scrollbarColor: '#6969dd #e0e0e0',
                scrollbarWidth: 'thin'
            }}
            className="section"
        >
            <Layout
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    backgroundColor: 'var(--muted-soft-color)',
                    padding: '1em',
                }}
            >
                <ul>
                    DevOps
                    <li><pre>docker</pre></li>
                    <li><pre>podman</pre></li>
                    <li><pre>k3s</pre></li>
                    <li><pre>minikube</pre></li>
                </ul>
                <ul>
                    Programming
                    <li><pre>JavaScript</pre></li>
                    <li><pre>TypeScript</pre></li>
                    <li><pre>Python</pre></li>
                    <li><pre style={{ color: 'purple' }}>Reading ...</pre></li>
                </ul>
                <ul>
                    Frontend
                    <li><pre>React</pre></li>
                    <li><pre>Next.js</pre></li>
                    <li><pre>Gatsby</pre></li>
                    <li><pre>GraphQL</pre></li>
                    <li><pre>Apollo</pre></li>
                    <li><pre>Styled Components</pre></li>
                    <li><pre>Material UI</pre></li>
                    <li><pre>Bootstrap</pre></li>
                    <li><pre>Materialize</pre></li>
                    <li><pre style={{ color: 'purple' }}>Any ...</pre></li>
                </ul>

                <p>
                    <pre>
                        if i got more time, i would like to revise this.
                    </pre>
                </p>
            </Layout>
        </div>
    )
}