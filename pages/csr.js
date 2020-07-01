import Head from 'next/head'
import { useState, useEffect } from 'react'
import { fetchAdvice, styles } from '../src/utils'

// Advice API has a 5-second debounce in place, which is why you
// can't repeatedly click 'reset'. To disable this feature, you can disable
// the cache in your browser.

export default function Home() {
  const [ advice, setAdvice ] = useState()

  useEffect(() => {
    getNewAdvice()
  }, [])

  const getNewAdvice = async () => {
    console.log('Client-side rendering!')
    const newAdvice = await fetchAdvice()
    setAdvice(newAdvice)
  }

  return (
    <div className="container" style={styles}>
      <Head>
        <title>Client-side Rendering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>{ advice }</div>
        <button onClick={() => getNewAdvice()}>Reset</button>
      </main>
    </div>
  )
}
