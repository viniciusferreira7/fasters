import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  gap: 1.6rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2%;
  }
`

export const TitleEventDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-weight: 400;
    line-height: 1.3rem;

    color: ${(props) => props.theme['gray-300']};
  }
`
