import styled from 'styled-components'

export const DayEventsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 19.93rem;

  margin-left: 2rem;
`

export const NextEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  min-width: 20.5rem;
  max-height: 23.25rem;

  overflow-y: auto;

  & > p {
    margin-top: 3rem;

    text-align: center;
    color: ${(props) => props.theme['gray-300']};
    font-size: 1.3rem;
  }
`
