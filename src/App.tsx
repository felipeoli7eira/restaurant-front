import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { PrimeReactProvider } from 'primereact/api'
import { Button } from 'primereact/button'

import "primereact/resources/themes/lara-light-cyan/theme.css";


export default function App() {
  return (
    <Button label="Check" icon="pi pi-check" />
    // <BrowserRouter>
    //   <PrimeReactProvider>
    //     <Theme>
    //       <AppRoutes />
    //       <GlobalStyle />
    //       <Normalize />
    //     </Theme>
    //   </PrimeReactProvider>
    // </BrowserRouter>
  )
}
