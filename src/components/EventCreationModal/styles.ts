import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  background-color: ${(props) => props.theme['blue-500']};
  opacity: 1;

  transform: all 300ms ease;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 21.625rem;
  height: 33.25rem;
  padding: 1rem;

  position: relative;
  z-index: 10;

  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['green-300']};

  background-color: ${(props) => props.theme['green-100']};
  box-shadow: 0 5px 16px ${(props) => props.theme['gray-200']};

  svg {
    color: ${(props) => props.theme['green-300']};
    font-size: 3rem;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['blue-500']};
    }
  }

  h2 {
    color: ${(props) => props.theme['green-300']};

    border-bottom: 3px solid ${(props) => props.theme['green-300']};

    padding: 0.2rem;
  }

  input,
  textarea {
    width: 15rem;

    padding: 0.5rem;

    color: ${(props) => props.theme['blue-800']};

    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 5px;
  }

  textarea {
    resize: none;
    height: 8rem;
  }

  button {
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    width: 9rem;
    height: 4.4rem;

    font-size: 0.87rem;
    font-weight: 400;

    background: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['white-100']};

    border-radius: 6px;
    border: 1px solid transparent;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['green-100']};
      color: ${(props) => props.theme['green-300']};
      border-color: ${(props) => props.theme['green-300']};
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
`

export const InfoTempContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['green-300']};

  div > img {
    width: 1rem;
    height: 1rem;
  }
`
