import React, { useEffect, useState } from 'react'
import pageSettings from '../../utils/pageSettings'
import SnackStructure from '../../components/SnackStructure'
import { getDrinks } from '../../services/http'

const Drinks: React.FC = () => {
  pageSettings(
    'ReDrinks - Refrigerantes, sucos naturais ou alcoolicas?',
    'Refresque-se com nossas bebidas exclusivas: desde coquetéis artesanais até sucos naturais. Descubra sabores únicos e hidrate-se com o melhor da nossa seleção de bebidas!'
  )

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    (async () => {
      const request = await getDrinks()
      setDrinks(request.data)
    })()
  }, [])

  return (
    <SnackStructure data={drinks} />
  )
}

export default Drinks
