import { type } from 'os'
import { useContext } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import { Context } from '../../contexts/EventsProvider'
import { Types } from '../../contexts/reducer'

import { EventCardContainer, TimeIconContainer } from './styles'

interface EventProps {
  event: {
    id: number
    date: string
    time: string
    title: string
    locale: string
    description: string
  }
}

export default function EventCard({ event }: EventProps) {
  const { dispatch } = useContext(Context)

  function handleCloseEvent() {
    dispatch({ type: Types.Delete, payload: { id: event.id } })
  }

  return (
    <EventCardContainer>
      <AiFillCloseCircle size={18} onClick={handleCloseEvent} />
      <h4>{event.title}</h4>
      <p>{event.date}</p>
      <TimeIconContainer>
        <BsClock size={20} />
        <p>{event.time}</p>
      </TimeIconContainer>
      <p>Cidade: {event.locale}</p>
      <p>{event.description}</p>
    </EventCardContainer>
  )
}
