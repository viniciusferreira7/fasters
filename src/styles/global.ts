import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-100']};
  }

  body, input, textarea, button {
    font-size:1rem ;
    font-family: 'DM Sans', sans-serif;
  }
`
