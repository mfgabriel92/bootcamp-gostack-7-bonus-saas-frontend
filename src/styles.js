import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    box-sizing: border-box;
    color: #fff;
    background: #252525;
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  input, textarea, button {
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
`
