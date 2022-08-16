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

  & > div:nth-child(2) {
    animation: changeBackgroundColor 10s;

    p,
    svg,
    span {
      animation: changeBackgroundColor 10s;
      border-color: 0;
    }

    @keyframes changeBackgroundColor {
      0% {
        background-color: ${(props) => props.theme['orange-400']};
        color: ${(props) => props.theme['white-orange']};
      }
      50% {
        border-color: ${(props) => props.theme['orange-400']};
        background-color: ${(props) => props.theme['white-orange']};
        color: ${(props) => props.theme['white-orange']};
      }
      100% {
        border-color: ${(props) => props.theme['white-orange']};
        background-color: ${(props) => props.theme['white-100']};
      }
    }
  }

  & > p {
    margin-top: 3rem;

    text-align: center;
    color: ${(props) => props.theme['gray-300']};
    font-size: 1.3rem;
  }
`
