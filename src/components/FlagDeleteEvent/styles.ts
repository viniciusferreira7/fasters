import styled from 'styled-components'

export const FlagDeleteEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 25rem;
  height: 10rem;
  padding: 1rem;

  position: relative;
  z-index: 10;

  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['orange-400']};

  background-color: ${(props) => props.theme['white-orange']};
  box-shadow: 0 5px 16px ${(props) => props.theme['gray-200']};

  & > svg {
    position: relative;
    right: -10rem;

    color: ${(props) => props.theme['orange-400']};

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['blue-800']};
    }
  }

  & > p {
    font-weight: 700;
    color: ${(props) => props.theme['orange-400']};
  }

  & > button {
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    width: 9rem;
    height: 2rem;

    font-size: 0.87rem;
    font-weight: 400;

    background: ${(props) => props.theme['orange-400']};
    color: ${(props) => props.theme['white-100']};

    border-radius: 6px;
    border: 1px solid transparent;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['white-orange']};
      color: ${(props) => props.theme['orange-400']};
      border-color: ${(props) => props.theme['orange-400']};
    }
  }
`
