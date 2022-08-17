import styled from 'styled-components'

export const EventSheetContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 44.5rem;
  width: 100%;
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

  @media screen and (max-width: 768px) {
    width: 2rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 34.5rem;

  @media screen and (max-width: 768px) {
    width: 18rem;
    max-width: 100%;
  }

  & > div {
    border-left: 1px solid ${(props) => props.theme['gray-200']};
    border-right: 0;

    padding-left: 0.75rem;
    height: 2.5rem;
    position: relative;
  }

  & > div:first-child {
    border-bottom: 1px solid ${(props) => props.theme['gray-200']};
  }

  & > div > div:nth-child(1n + 4) {
    background-color: ${(props) => props.theme['white-orange']};
    color: ${(props) => props.theme['orange-400']};

    border: 0.5px solid ${(props) => props.theme['orange-400']};
    border-radius: 8px;
  }

  & > div > div:nth-child(2n + 3) {
    background-color: ${(props) => props.theme['green-100']};
    color: ${(props) => props.theme['green-300']};

    border: 0.5px solid ${(props) => props.theme['green-300']};
    border-radius: 8px;
  }

  & > div > div:nth-child(3n + 2) {
    background-color: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme['white-100']};

    border: 0.5px solid ${(props) => props.theme['blue-800']};
    border-radius: 8px;
  }

  & > div > div:nth-child(4n + 1) {
    background-color: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme['gray-500']};

    border: 0.5px solid ${(props) => props.theme['gray-500']};
    border-radius: 8px;
  }
`
