import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: 73.25rem;
  height: 8.68rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-200']};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    width: 40rem;
    max-width: 100%;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`

export const TitleEventDateContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  margin-right: 7.18rem;
  margin-left: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-weight: 400;
    color: ${(props) => props.theme['gray-300']};
  }
`
