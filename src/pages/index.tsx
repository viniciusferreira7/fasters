import Head from 'next/head'
import FastersGrid from '../components/FastersGrid'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fasters</title>
      </Head>
      <FastersGrid />
    </>
  )
}
