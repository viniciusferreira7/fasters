import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import FlagDeleteEvent from '../FlagDeleteEvent'
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
  const [openFlag, setOpenFlag] = useState(false)

  function handleOpenFlag() {
    setOpenFlag(true)
  }

  return (
    <>
      <EventCardContainer>
        <AiFillCloseCircle size={18} onClick={handleOpenFlag} />
        <h4>{event.title}</h4>
        <p>{event.date}</p>
        <TimeIconContainer>
          <BsClock size={20} />
          <p>{event.time}</p>
          <p>{event.date}</p>
        </TimeIconContainer>
        <p>Cidade: {event.locale}</p>
        <p>{event.description}</p>
      </EventCardContainer>
      {openFlag ? (
        <FlagDeleteEvent
          openFlag={openFlag}
          setOpenFlag={setOpenFlag}
          event={event.id}
        />
      ) : null}
    </>
  )
}
