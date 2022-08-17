import styled from 'styled-components'

interface PositionProps {
  positionTopHours: number
  positionTopMinutes: number
}

export const EventTimeCardContainer = styled.div<PositionProps>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  width: 31rem;
  padding-left: 1rem;

  position: absolute;
  top: ${(props) => props.positionTopHours}rem;

  @media screen and (max-width: 768px) {
    width: 16rem;
    max-width: 100%;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
`
