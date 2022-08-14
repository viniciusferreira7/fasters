import { Calendar } from 'react-calendar'
import { CalendarEventContainer } from './styles'

export default function CalendarEvent() {
  return (
    <CalendarEventContainer>
      <Calendar locale="en-US" />
    </CalendarEventContainer>
  )
}
