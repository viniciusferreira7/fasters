import Header from '../Header'
import Main from '../Main'
import SideBar from '../SideBar'

import { FastersGridContainer } from './stytes'

export default function FastersGrid() {
  return (
    <FastersGridContainer>
      <SideBar />
      <Header />
      <Main />
    </FastersGridContainer>
  )
}
