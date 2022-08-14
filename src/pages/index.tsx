import Head from 'next/head'
import TimeEvent from '../components/TimeEvent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fasters</title>
      </Head>
      {/* <SideBar /> */}
      {/* <Header /> */}
      {/* <DayEvents /> */}
      <TimeEvent />
    </>
  )
}
