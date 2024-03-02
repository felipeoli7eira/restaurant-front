import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

// prime
import { PrimeReactProvider } from 'primereact/api'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeicons/primeicons.css'

export default function App() {
  return (
    <BrowserRouter>
      <PrimeReactProvider>
        <Theme>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </Theme>
      </PrimeReactProvider>
    </BrowserRouter>
  )
}
