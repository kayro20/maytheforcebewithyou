import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Container from './components/index'

const theme = createMuiTheme({
  palette: {
    iclinic: '#2C97D1',
    luke: '#FBFE63',
    vader: '#2B2B2B',
    gray: '#2A2A2A',
    white: '#FFFFFF'
  }
})

const Wrapper = () =>
  <ThemeProvider theme={theme}>
    <Container />
  </ThemeProvider>

const wrapper = document.getElementById("root")
wrapper ? ReactDOM.render(<Wrapper />, wrapper) : false
