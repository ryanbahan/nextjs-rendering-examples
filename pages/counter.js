import Head from 'next/head'
import { useState, useEffect } from 'react'
import { styles } from '../src/utils'
import Counter from '../src/components/Counter'

export default function Home() {

    return (
        <div className="container" style={styles}>
            <Head>
                <title>Counter example</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Counter />
            </main>
        </div>
    )
}
