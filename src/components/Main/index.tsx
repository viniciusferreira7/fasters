import DayEvents from '../DayEvents'
import EventSheet from '../EventSheet'
import { MainContainer } from './styles'

export default function Main() {
  return (
    <MainContainer>
      <DayEvents />
      <EventSheet />
    </MainContainer>
  )
}
