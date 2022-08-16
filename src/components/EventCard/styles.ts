import styled from 'styled-components'

export const EventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  width: 19.75rem;
  padding: 0.75rem 1rem 0.875rem 1rem;

  background-color: ${(props) => props.theme['white-100']};

  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 8px;

  & + & {
    margin-bottom: 0.125rem;
  }

  h5 {
    font-size: 1rem;
  }

  & > p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4rem;
    color: ${(props) => props.theme['gray-500']};
  }

  & > p:nth-of-type(2) {
    font-size: 0.8rem;
    color: ${(props) => props.theme['orange-400']};
  }
  & > p:last-child {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.8rem;
  }
`

export const IconDeleteEditContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 0.4rem;

  svg {
    color: ${(props) => props.theme['blue-500']};

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['green-300']};
    }
  }
`

export const TimeIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  margin-top: 0.875rem;

  color: ${(props) => props.theme['green-300']};

  svg {
    margin-right: 0.525rem;
  }

  p {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.05rem;
  }
`
