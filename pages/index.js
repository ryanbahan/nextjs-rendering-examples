import Head from 'next/head'
import Link from 'next/link'
import { styles } from '../src/utils'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Nextjs Examples</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={styles}>
                <Link href="/csr">
                    <a title="Client-side rendering">
                        Client-side rendering
                    </a>
                </Link>
                <Link href="/ssr">
                    <a title="Server-side rendering">
                        Server-side rendering
                    </a>
                </Link>
                <Link href="/ssg">
                    <a title="Static generation">
                        Static generation
                    </a>
                </Link>
                <Link href="/counter">
                    <a title="Counter example">
                        Counter example
                    </a>
                </Link>
            </main>
        </div>
    )
}
