import React, { useEffect, useState } from 'react'
import pageSettings from '../../utils/pageSettings'
import SnackStructure from '../../components/SnackStructure'
import { getBurgers } from '../../services/http'

const Burgers: React.FC = () => {
  pageSettings(
    'ReBurgers - Hambúrguer, Bauru ou Vegano?',
    'Deliciosos hambúrgueres artesanais: suculentos, grelhados e servido com queijo derretido. Experimente nosso menu de hambúrgueres premium.'
  )

  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    (async () => {
      const request = await getBurgers()
      setBurgers(request.data)
    })()
  }, [])

  return (
    <SnackStructure data={burgers} />
  )
}

export default Burgers
