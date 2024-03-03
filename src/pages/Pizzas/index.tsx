import React from 'react'
import pageSettings from '../../utils/pageSettings'

const Pizzas: React.FC = () => {
  pageSettings(
    'RePizzas',
    'Pizzas artesanais e saborosas: experimente nossas deliciosas pizzas feitas com ingredientes frescos e massa crocante. Peça agora e saboreie a melhor pizza da cidade!'
  )

  return <h1>Pizzas</h1>
}

export default Pizzas
