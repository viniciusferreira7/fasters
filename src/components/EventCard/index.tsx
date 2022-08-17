import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import EditEventModal from '../EditEventModal'
import FlagDeleteEvent from '../FlagDeleteEvent'
import {
  EventCardContainer,
  IconDeleteEditContainer,
  TimeIconContainer,
} from './styles'

export interface EventProps {
  event: {
    id: number
    date: string
    timeStarts: string
    timeEnds: string
    title: string
    locale: string
    description: string
  }
}

export default function EventCard({ event }: EventProps) {
  // eslint-disable-next-line no-unused-vars

  const [openFlag, setOpenFlag] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  function handleOpenFlag() {
    setOpenFlag(true)
  }

  function handleOpenEdit() {
    setOpenEdit(true)
  }

  return (
    <>
      <EventCardContainer aria-label={event.title} title={event.title}>
        <IconDeleteEditContainer>
          <AiFillCloseCircle size={18} onClick={handleOpenFlag} />
          <FiEdit size={18} onClick={handleOpenEdit} />
        </IconDeleteEditContainer>
        <h4>{event.title}</h4>
        <p>{event.date}</p>
        {event.timeStarts || event.timeEnds ? (
          <TimeIconContainer>
            <BsClock size={20} />
            <p>{event.timeStarts}</p>
            <span>-</span>
            <p>{event.timeEnds}</p>
          </TimeIconContainer>
        ) : null}
        <p>{event.locale}</p>
      </EventCardContainer>
      {openFlag ? (
        <FlagDeleteEvent
          openFlag={openFlag}
          setOpenFlag={setOpenFlag}
          event={event.id}
        />
      ) : null}
      {openEdit ? (
        <EditEventModal
          edit={event}
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
        />
      ) : null}
    </>
  )
}
