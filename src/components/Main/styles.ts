import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;

  width: 69.25rem;

  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    max-width: 18rem;
  }
`
