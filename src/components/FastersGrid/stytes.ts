import styled from 'styled-components'

export const FastersGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'aside header'
    'aside main';

  max-width: 90rem;

  aside {
    grid-area: aside;
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  @media screen and (max-width: 768px) {
    grid-template-areas:
      'header header'
      'aside main';
  }
`
