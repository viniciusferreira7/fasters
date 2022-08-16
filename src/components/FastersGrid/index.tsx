import { useContext, useEffect } from 'react'
import { Context, initialState } from '../../contexts/EventsProvider'
import { Types } from '../../contexts/reducer'
import Header from '../Header'
import Main from '../Main'
import SideBar from '../SideBar'

import { FastersGridContainer } from './stytes'

export default function FastersGrid() {
  const { state, dispatch } = useContext(Context)

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem('state'))) {
  //     dispatch({
  //       type: Types.INIT,
  //       payload: JSON.parse(localStorage.getItem('state')),
  //     })
  //   }
  // }, [])

  // useEffect(() => {
  //   if (state !== initialState) {
  //     localStorage.setItem('state', JSON.stringify(state.events))
  //   }
  // }, [state])
  return (
    <FastersGridContainer>
      <SideBar />
      <Header />
      <Main />
    </FastersGridContainer>
  )
}
