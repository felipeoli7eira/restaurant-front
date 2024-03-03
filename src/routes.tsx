import { Routes, Route } from 'react-router-dom'

// pages import
import MainPage from './pages/Main'
import BurgersPage from './pages/Burgers'
import Pizzas from './pages/Pizzas'
import Drinks from './pages/Drinks'
import Desserts from './pages/Desserts'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='' element={<BurgersPage />} />
        <Route path='pizzas' element={<Pizzas />} />
        <Route path='drinks' element={<Drinks />} />
        <Route path='desserts' element={<Desserts />} />
      </Route>
    </Routes>
  )
}
