import { EventProps } from '../EventCard'
import { EventTimeCardContainer } from './styles'

export default function EventTimeCard({ event }: EventProps) {
  const positionTopValueBasedHour = {
    '01': 0,
    '02': 5,
    '03': 10,
    '04': 15,
    '05': 20,
    '06': 25,
    '07': 30,
    '08': 35,
    '09': 40,
    '10': 45,
    '11': 50,
    '12': 55,
    '13': 60,
    '14': 65,
    '15': 70,
    '16': 75,
    '17': 80,
    '18': 85,
    '19': 90,
    '20': 95,
    '21': 100,
    '22': 105,
    '23': 110,
  }

  const positionTopValueBasedMinutes = {
    '0': 45,
    '1': 45,
    '2': 45,
    '3': 45,
    '4': 45,
    '5': 45,
  }

  const test = '23'

  const getEventTime = event.date[0] + event.date[1]

  return (
    <EventTimeCardContainer
      positionTopHours={positionTopValueBasedHour[getEventTime]}
      positionTopMinutes={positionTopValueBasedMinutes['00']}
      aria-label={event.title}
      title={event.title}
    >
      <h2>{event.title}</h2>
      <span>{event.date}</span>
      <p>{event.description}</p>
    </EventTimeCardContainer>
  )
}
