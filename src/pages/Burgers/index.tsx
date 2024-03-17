import React from 'react'
import pageSettings from '../../utils/pageSettings'
import SnackStructure from '../../components/SnackStructure'

const Burgers: React.FC = () => {
  pageSettings(
    'ReBurgers - Hambúrguer, Bauru ou Vegano?',
    'Deliciosos hambúrgueres artesanais: suculentos, grelhados e servido com queijo derretido. Experimente nosso menu de hambúrgueres premium.'
  )

  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description:
        'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra bacon',
      description:
        'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ]

  return (
    <SnackStructure data={data} />
  )
}

export default Burgers
