import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  };
  html,body{
    background: linear-gradient(90deg,#69b7eb,#b3dbd3,#f4d6db);
    font-size: 1.1rem;
    font-family: 'Quicksand', sans-serif;
    min-height: 100%;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
