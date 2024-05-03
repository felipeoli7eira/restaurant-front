// import AppBrand from '../../components/AppBrand'
import Sidebar from '../../components/Sidebar'
import { Container } from './design'

import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <Container className='w-full h-screen flex'>
      <Sidebar />

      <section className='app-outlet app-content flex-1 flex flex-column p-5 h-full overflow-y-auto gap-3'>
        {/* <AppBrand /> */}

        <Outlet />
      </section>
    </Container>
  )
}
