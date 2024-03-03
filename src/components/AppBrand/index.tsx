import React from 'react'

import Brand from '../../assets/icons/logo-project-example.png'
import './design.css'

const AppBrand = () => {
  return (
    <div id='app-brand' className='w-full flex'>
      <img src={Brand} width={70} alt='logo do app' />
    </div>
  )
}

export default AppBrand
