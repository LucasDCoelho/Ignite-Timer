import { ThemeProvider, StyleSheetManager } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Router'
import isPropValid from '@emotion/is-prop-valid'

import { CycleContextProvider } from './contexts/CycleContext'

export function App() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CycleContextProvider>
            <Router />
          </CycleContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </StyleSheetManager>
  )
}
