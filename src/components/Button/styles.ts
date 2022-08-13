import styled from 'styled-components'

interface StatusProps {
  selected: boolean
}

export const ButtonContainer = styled.button<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  width: 13.5rem;
  height: 3rem;

  font-weight: 500;
  line-height: 1.3rem;

  color: ${(props) =>
    props.selected ? props.theme['green-300'] : props.theme['blue-800']};
  background-color: ${(props) =>
    props.selected ? props.theme['green-100'] : props.theme['white-100']};
  border: 0;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    color: ${(props) => !props.selected && props.theme['green-300']};
  }
`
