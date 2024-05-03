import React, { useEffect, useState } from 'react'
import pageSettings from '../../utils/pageSettings'
import SnackStructure from '../../components/SnackStructure'
import { getPizzas } from '../../services/http'

const Pizzas: React.FC = () => {
  pageSettings(
    'RePizzas',
    'Pizzas artesanais e saborosas: experimente nossas deliciosas pizzas feitas com ingredientes frescos e massa crocante. Peça agora e saboreie a melhor pizza da cidade!'
  )

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    (async () => {
      const request = await getPizzas()
      setPizzas(request.data)
    })()
  }, [])

  return (
    <SnackStructure data={pizzas} />
  )
}

export default Pizzas
