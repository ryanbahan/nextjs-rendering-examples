import Head from 'next/head'
import { useState} from 'react'
import { fetchAdvice, styles } from '../src/utils'

export default function Home({ newAdvice }) {
    console.log(newAdvice, "First request is server-rendered and won't change until page refresh")

    const [advice, setAdvice] = useState(newAdvice)

    const getNewAdvice = async () => {
        console.log('Now we are client-side rendering again!')
        const newAdvice = await fetchAdvice()
        setAdvice(newAdvice)
    }

    return (
        <div className="container" style={styles}>
            <Head>
                <title>Server-side Rendering</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>{advice}</div>
                <button onClick={() => getNewAdvice()}>Reset</button>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const newAdvice = await fetchAdvice()

    return {
        props: { newAdvice }
    }
}
