import Head from 'next/head'
import FastersGrid from '../components/FastersGrid'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Site onde e possível adicionar uma evento na agenda. "
        />
        <meta name="keywords" content="Site, Agenda, Fasters. " />
        <link rel="icon" href="https://www.fasters.com.br/icon.png" />
        <title>Fasters</title>
      </Head>
      <FastersGrid />
    </>
  )
}
