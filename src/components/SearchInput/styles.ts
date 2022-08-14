import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  display: flex;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.68rem;

  width: 28.75rem;
  padding: 1.12rem 0 1.12rem 1.12rem;

  background-color: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-300']};

  border-radius: 12px;
  border: 1px solid transparent;

  &:hover svg {
    color: ${(props) => props.theme['green-300']};
  }

  input {
    flex: 1;
    border: 0;
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.5rem;
  height: 3.5rem;

  background-color: ${(props) => props.theme['gray-100']};
  border: 1px solid transparent;

  &:hover {
    color: ${(props) => props.theme['green-300']};
    border: 1px solid ${(props) => props.theme['green-300']};
  }
`
