import { useContext, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { Context } from '../../contexts/EventsProvider'
import EditEventModal from '../EditEventModal'
import FlagDeleteEvent from '../FlagDeleteEvent'
import {
  EventCardContainer,
  IconDeleteEditContainer,
  TimeIconContainer,
} from './styles'

interface EventProps {
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
  const { state } = useContext(Context)

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
      <EventCardContainer>
        <IconDeleteEditContainer>
          <AiFillCloseCircle size={18} onClick={handleOpenFlag} />
          <FiEdit size={18} onClick={handleOpenEdit} />
        </IconDeleteEditContainer>
        <h4>{event.title}</h4>
        <p>{event.date}</p>
        <TimeIconContainer>
          <BsClock size={20} />
          <p>{event.timeStarts}</p>
          <span>-</span>
          <p>{event.timeEnds}</p>
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
