import React from 'react'
import pageSettings from '../../utils/pageSettings'

const Drinks: React.FC = () => {
  pageSettings(
    'ReDrinks - Refrigerantes, sucos naturais ou alcoolicas?',
    'Refresque-se com nossas bebidas exclusivas: desde coquetéis artesanais até sucos naturais. Descubra sabores únicos e hidrate-se com o melhor da nossa seleção de bebidas!'
  )

  return <h1>Drinks</h1>
}

export default Drinks
