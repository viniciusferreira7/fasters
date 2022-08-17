import Head from 'next/head'
import FastersGrid from '../components/FastersGrid'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="https://www.fasters.com.br/icon.png" />
        <title>Fasters</title>
      </Head>
      <FastersGrid />
    </>
  )
}
