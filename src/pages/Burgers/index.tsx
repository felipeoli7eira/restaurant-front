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
      description: 'Delicioso hambúrguer artesanal: suculento, grelhado na perfeição e servido com queijo derretido e acompanhamentos frescos. Experimente nosso menu de hambúrgueres premium!',
      price: 34.0,
      image: 'https://i.imgur.com/cwG9E2f.jpeg'
    },
    {
      id: 2,
      snack: 'burger',
      name: '4 Queojos',
      description: 'Delicioso hambúrguer artesanal: suculento, grelhado na perfeição e servido com queijo derretido e acompanhamentos frescos. Experimente nosso menu de hambúrgueres premium!',
      price: 34.0,
      image: 'https://i.imgur.com/cwG9E2f.jpeg'
    },
    {
      id: 3,
      snack: 'burger',
      name: '4 Queojos',
      description: 'Delicioso hambúrguer artesanal: suculento, grelhado na perfeição e servido com queijo derretido e acompanhamentos frescos. Experimente nosso menu de hambúrgueres premium!',
      price: 34.0,
      image: 'https://i.imgur.com/cwG9E2f.jpeg'
    },

    {
      id: 4,
      snack: 'burger',
      name: '4 Queojos',
      description: 'Delicioso hambúrguer artesanal: suculento, grelhado na perfeição e servido com queijo derretido e acompanhamentos frescos. Experimente nosso menu de hambúrgueres premium!',
      price: 34.0,
      image: 'https://i.imgur.com/cwG9E2f.jpeg'
    },

    {
      id: 5,
      snack: 'burger',
      name: '4 Queojos',
      description: 'Delicioso hambúrguer artesanal: suculento, grelhado na perfeição e servido com queijo derretido e acompanhamentos frescos. Experimente nosso menu de hambúrgueres premium!',
      price: 34.0,
      image: 'https://i.imgur.com/cwG9E2f.jpeg'
    },

    {
      id: 6,
      snack: 'burger',
      name: '4 Queojos',
      description: 'Delicioso hambúrguer artesanal: suculento, grelhado na perfeição e servido com queijo derretido e acompanhamentos frescos. Experimente nosso menu de hambúrgueres premium!',
      price: 34.0,
      image: 'https://i.imgur.com/cwG9E2f.jpeg'
    },

    {
      id: 7,
      snack: 'burger',
      name: '4 Queojos',
      description: 'Delicioso hambúrguer artesanal: suculento, grelhado na perfeição e servido com queijo derretido e acompanhamentos frescos. Experimente nosso menu de hambúrgueres premium!',
      price: 34.0,
      image: 'https://i.imgur.com/cwG9E2f.jpeg'
    },
  ]

  return (
    <SnackStructure data={data} />
  )
}

export default Burgers
