import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import EventCreationModal from '../EventCreationModal'

import { CreateEventButtonContainer, CreateEventContainer } from './styles'

export default function CreateEventButton() {
  const [showModal, setShowModal] = useState(false)

  function handleShowModal() {
    setShowModal((showModal) => !showModal)
  }

  return (
    <CreateEventContainer>
      <CreateEventButtonContainer onClick={handleShowModal}>
        <AiOutlinePlus />
        Create Event
      </CreateEventButtonContainer>
      <EventCreationModal showModal={showModal} setShowModal={setShowModal} />
    </CreateEventContainer>
  )
}
