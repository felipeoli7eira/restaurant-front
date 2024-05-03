import React, { useEffect, useState } from 'react'
import pageSettings from '../../utils/pageSettings'
import SnackStructure from '../../components/SnackStructure'
import { getDesserts } from '../../services/http'

const Desserts: React.FC = () => {
  pageSettings(
    'ReDesserts - Sobremesas',
    'Deliciosas sobremesas artesanais: experimente nossos doces irresistíveis, desde tortas e bolos até sorvetes e pudins. Satisfaça seu paladar com as melhores opções de sobremesa!'
  )

  const [desserts, setDesserts] = useState([])

  useEffect(() => {
    (async () => {
      const request = await getDesserts()
      setDesserts(request.data)
    })()
  }, [])

  return (
    <SnackStructure data={desserts} />
  )
}

export default Desserts
