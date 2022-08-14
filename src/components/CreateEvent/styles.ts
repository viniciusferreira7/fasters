import styled from 'styled-components'

export const CreateEventContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

export const CreateEventButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 9rem;
  height: 2.4rem;

  font-size: 0.87rem;
  font-weight: 400;

  background: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme['white-100']};

  border-radius: 6px;
  border: 1px solid transparent;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-100']};
    color: ${(props) => props.theme['green-300']};
    border-color: ${(props) => props.theme['green-300']};
  }
`
