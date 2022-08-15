import { useContext } from 'react'
import { Context } from '../../contexts/EventsProvider'
import CalendarEvent from '../CalendarEvent'
import EventCard from '../EventCard'
import { DayEventsContainer, NextEventContainer } from './styles'

export default function DayEvents() {
  const { state } = useContext(Context)

  const isStateEmpty = state.events.length === 0 && <p>Sem eventos...</p>

  return (
    <DayEventsContainer>
      <CalendarEvent />
      <NextEventContainer>
        <h3>Next Event</h3>
        {isStateEmpty}
        {state.events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </NextEventContainer>
    </DayEventsContainer>
  )
}
