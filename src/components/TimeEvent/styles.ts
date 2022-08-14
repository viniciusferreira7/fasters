import styled from 'styled-components'

export const TimeEventContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 44.5rem;
  height: 47.125rem;
  padding-left: 2.5rem;

  border-left: 1px solid ${(props) => props.theme['gray-200']};

  overflow-y: auto;
`

export const BlockContainer = styled.div`
  display: flex;
  align-items: flex-start;

  width: 100%;
  height: 5rem;

  border: 1px solid ${(props) => props.theme['gray-200']};
  border-left: 0;
  border-right: 0;

  &:first-child {
    border-bottom: 0;
  }

  & + & {
    border-bottom: 0;
  }
`
export const HourContainer = styled.div`
  display: flex;
  justify-content: right;

  width: 10rem;
  height: 100%;
  padding: 1rem;

  font-size: 0.81rem;
  color: ${(props) => props.theme['gray-500']};
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 34.5rem;

  div {
    border-left: 1px solid ${(props) => props.theme['gray-200']};
    border-right: 0;

    height: 2.5rem;
  }

  div:first-child {
    border-bottom: 1px solid ${(props) => props.theme['gray-200']};
  }
`
