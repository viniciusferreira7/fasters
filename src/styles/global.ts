import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  ::-webkit-scrollbar{
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['green-100']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['green-300']};
  }

  html {
    @media screen and (max-width: 768px) {
      font-size:36px;
    }
  }

  body, input, textarea, button {
    font-size:1rem ;
    font-family: 'DM Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
