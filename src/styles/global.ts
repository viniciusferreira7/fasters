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

  body, input, textarea, button {
    font-size:1rem ;
    font-family: 'DM Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
