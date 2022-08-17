import { EventProps } from '../EventCard'
import { EventTimeCardContainer } from './styles'

export default function EventTimeCard({ event }: EventProps) {
  const positionTopValueBasedHours = {
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
    '0': 0,
    '1': 0.83,
    '2': 1.66,
    '3': 2.5,
    '4': 3.33,
    '5': 4.17,
  }

  const heightValueBasedHours = {
    '01': 5,
    '02': 10,
    '03': 15,
    '04': 20,
    '05': 25,
    '06': 30,
    '07': 35,
    '08': 40,
    '09': 45,
    '10': 50,
    '11': 55,
    '12': 60,
    '13': 65,
    '14': 70,
    '15': 75,
    '16': 80,
    '17': 85,
    '18': 90,
    '19': 95,
    '20': 100,
    '21': 105,
    '22': 110,
    '23': 115,
  }

  const heightValueBasedMinutes = {
    '0': 0,
    '1': 0.83,
    '2': 1.66,
    '3': 2.5,
    '4': 3.33,
    '5': 4.17,
  }

  const getEvenStartHours = event.timeStarts[0] + event.timeStarts[1]
  const getEventStartMinutes = event.timeStarts[3]

  const getEventEndHours = event.timeEnds[0] + event.timeEnds[1]
  const getEventEndMinutes = event.timeEnds[3]

  return (
    <>
      {event.timeStarts || event.timeEnds ? (
        <EventTimeCardContainer
          positionTopHours={positionTopValueBasedHours[getEvenStartHours]}
          positionTopMinutes={
            positionTopValueBasedMinutes[getEventStartMinutes]
          }
          heightHours={heightValueBasedHours[getEventEndHours]}
          heightMinutes={heightValueBasedMinutes[getEventEndMinutes]}
          aria-label={event.title}
          title={event.title}
        >
          <h2>{event.title}</h2>
          <span>
            {event.date} - {event.timeStarts} - {event.timeEnds}
          </span>
          <p>{event.description}</p>
        </EventTimeCardContainer>
      ) : null}
    </>
  )
}
