import React from 'react'
import pageSettings from '../../utils/pageSettings'
import SnackStructure from '../../components/SnackStructure'

const Pizzas: React.FC = () => {
  pageSettings(
    'RePizzas',
    'Pizzas artesanais e saborosas: experimente nossas deliciosas pizzas feitas com ingredientes frescos e massa crocante. Peça agora e saboreie a melhor pizza da cidade!'
  )

  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Calabresa',
      description:
        'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
      price: 25,
      image: 'https://i.imgur.com/5rjJGkV.jpg',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Portuguesa',
      description:
        'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
      price: 28.5,
      image: 'https://i.imgur.com/WCoyGoI.png',
    },
  ]

  return (
    <SnackStructure data={data} />
  )
}

export default Pizzas
