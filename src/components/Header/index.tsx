import CreateEventButton from '../CreateEventButton'
import SearchInput from '../SearchInput'
import { HeaderContainer, TitleEventDateContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <TitleEventDateContainer>
        <h2>Janeiro</h2>
        <p>Quinta-Feira - 4 de Jan - 2022</p>
      </TitleEventDateContainer>

      <div>
        <CreateEventButton />
        <SearchInput />
      </div>
    </HeaderContainer>
  )
}
