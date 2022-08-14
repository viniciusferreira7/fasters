import { AiOutlinePlus } from 'react-icons/ai'

import { CreateEventButtonContainer, CreateEventContainer } from './styles'

export default function CreateEvent() {
  return (
    <CreateEventContainer>
      <CreateEventButtonContainer>
        <AiOutlinePlus />
        Create Event
      </CreateEventButtonContainer>
    </CreateEventContainer>
  )
}
