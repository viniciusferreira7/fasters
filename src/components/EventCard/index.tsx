import { BsClock } from 'react-icons/bs'

import { EventCardContainer, TimeIconContainer } from './styles'

export default function EventCard() {
  return (
    <EventCardContainer>
      <h4>Entrevista com RH lore</h4>
      <p>January 4, 2022</p>
      <TimeIconContainer>
        <BsClock size={20} />
        <p>08:00 - 09:30 AM</p>
      </TimeIconContainer>
    </EventCardContainer>
  )
}
