import { IconContainer, InputContainer, SearchInputContainer } from './styles'

import { BiUser } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { ChangeEvent, useContext } from 'react'
import { Context } from '../../contexts/EventsProvider'
import { Types } from '../../contexts/reducer'

export default function SearchInput() {
  const { dispatch } = useContext(Context)

  function handleSearchEvent(event: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: Types.FIlter, payload: { title: event.target.value } })
  }

  return (
    <SearchInputContainer>
      <InputContainer>
        <FiSearch />
        <input
          type="text"
          placeholder="Search task, event, calendar "
          onChange={handleSearchEvent}
        />
      </InputContainer>

      <IconContainer>
        <BsBell size={20} />
      </IconContainer>

      <IconContainer>
        <BiUser size={22} />
      </IconContainer>
    </SearchInputContainer>
  )
}
