import { createMuiTheme } from '@material-ui/core/styles'

const light = createMuiTheme({
  palette: {
    primary: {
      main: '#283663'
    },
    secondary: {
      main: '#ffdd00'
    },
    success: {
      main: '#4caf50'
    },
    error: {
      main: '#ca2c0c'
    },
    background: {
      default: '#3a3a3a'
    }
  }
})

export default light
