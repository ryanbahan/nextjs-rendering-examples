import Head from 'next/head'
import { useState } from 'react'
import { fetchAdvice, styles } from '../src/utils'

// Advice API has a 5-second debounce in place, which is why you
// can't repeatedly click 'reset'. To disable this feature, you can disable
// the cache in your browser.

export default function Home({ newAdvice }) {
    console.log(newAdvice, "This value will never change")

    const [ advice, setAdvice ] = useState(newAdvice)

    const getNewAdvice = async () => {
        console.log('Now we are client-side rendering again!')
        const newAdvice = await fetchAdvice()
        setAdvice(newAdvice)
    }

    return (
        <div className="container" style={styles}>
            <Head>
                <title>Static Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>{ advice }</div>
                <button onClick={() => getNewAdvice()}>Reset</button>
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const newAdvice = await fetchAdvice()

    return {
        props: { newAdvice }
    }
}
