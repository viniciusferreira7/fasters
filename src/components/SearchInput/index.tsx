import { IconContainer, InputContainer, SearchInputContainer } from './styles'

import { BiUser } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'

export default function SearchInput() {
  return (
    <SearchInputContainer>
      <InputContainer>
        <FiSearch />
        <input type="text" placeholder="Search task, event, calendar " />
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
