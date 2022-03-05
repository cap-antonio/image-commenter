import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'

import { FileHandler } from './components'
import { theme, globalStyles } from './theme'

const App = () => (
  <>
    {globalStyles}
    <ThemeProvider theme={theme}>
      <FileHandler />
    </ThemeProvider>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
