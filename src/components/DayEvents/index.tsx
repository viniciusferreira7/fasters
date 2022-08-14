import CalendarEvent from '../CalendarEvent'
import EventCard from '../EventCard'
import { DayEventsContainer, NextEventContainer } from './styles'

export default function DayEvents() {
  return (
    <DayEventsContainer>
      <CalendarEvent />
      <NextEventContainer>
        <h3>Next Event</h3>
        <EventCard />
        <EventCard />
        <EventCard />
      </NextEventContainer>
    </DayEventsContainer>
  )
}
