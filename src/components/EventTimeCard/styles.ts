import styled from 'styled-components'

interface PositionProps {
  positionTopHours: number
  positionTopMinutes: number
  heightHours: number
  heightMinutes: number
}

export const EventTimeCardContainer = styled.div<PositionProps>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  overflow-y: auto;

  width: 28rem;
  max-width: 31rem;
  height: ${(props) =>
    props.heightHours +
    props.heightMinutes -
    props.positionTopHours -
    props.positionTopMinutes}rem;
  padding-top: 1rem;
  padding-left: 1rem;

  position: absolute;
  z-index: 1;
  top: ${(props) => props.positionTopHours + props.positionTopMinutes}rem;

  @media screen and (max-width: 768px) {
    width: 10rem;
    max-width: 100%;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    overflow-x: auto;
  }
`
