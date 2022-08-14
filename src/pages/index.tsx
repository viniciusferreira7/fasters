import Head from 'next/head'
import DayEvents from '../components/DayEvents'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fasters</title>
      </Head>
      {/* <SideBar /> */}
      {/* <Header /> */}
      <DayEvents />
    </>
  )
}
