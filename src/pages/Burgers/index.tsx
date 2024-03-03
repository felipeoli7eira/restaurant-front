import React from 'react'
import pageSettings from '../../utils/pageSettings'

const Burgers: React.FC = () => {
  pageSettings(
    'ReBurgers - Hambúrguer, Bauru ou Vegano?',
    'Deliciosos hambúrgueres artesanais: suculentos, grelhados e servido com queijo derretido. Experimente nosso menu de hambúrgueres premium.'
  )

  return <h1>Burgers</h1>
}

export default Burgers
