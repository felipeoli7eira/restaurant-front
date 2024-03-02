import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* html, body, #root {
    min-height: 100%;
  } */

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    /* font-family: ${(props) => props.theme.fontFamily.sans}; */
    color: ${(props) => props.theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, textarea, button {
    font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  .roboto-thin {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: normal;
  }

  .roboto-thin-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: italic;
  }

  .roboto-light {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  .roboto-light-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: italic;
  }

  .roboto-regular {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .roboto-regular-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .roboto-medium {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  .roboto-medium-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: italic;
  }

  .roboto-bold {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .roboto-bold-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: italic;
  }

  .roboto-black {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: normal;
  }

  .roboto-black-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: italic;
  }
`
