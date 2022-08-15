import { useContext } from 'react'
import { Context } from '../../contexts/EventsProvider'
import CreateEventButton from '../CreateEventButton'
import SearchInput from '../SearchInput'
import { HeaderContainer, TitleEventDateContainer } from './styles'

export default function Header() {
  const { state } = useContext(Context)

  const year = state.date.toLocaleString('default', { year: 'numeric' })
  const nameMoth = state.date.toLocaleString('default', { month: 'long' })
  const shortMonthName = state.date.toLocaleString('default', {
    month: 'short',
  })
  const daysWeek = state.date.toLocaleString('default', { weekday: 'long' })
  const dayNumber = state.date.toLocaleString('default', { day: 'numeric' })

  return (
    <HeaderContainer>
      <TitleEventDateContainer>
        <h2>{nameMoth}</h2>
        <p>
          {daysWeek} - {dayNumber} de {shortMonthName} - {year}
        </p>
      </TitleEventDateContainer>

      <div>
        <CreateEventButton />
        <SearchInput />
      </div>
    </HeaderContainer>
  )
}
