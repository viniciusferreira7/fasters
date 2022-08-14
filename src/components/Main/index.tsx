import React from 'react'
import DayEvents from '../DayEvents'
import TimeEvent from '../TimeEvent'
import { MainContainer } from './styles'

export default function Main() {
  return (
    <MainContainer>
      <DayEvents />
      <TimeEvent />
    </MainContainer>
  )
}
