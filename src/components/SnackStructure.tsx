import React from 'react'
import SnackPropsInterface from '../interfaces/snack/SnackPropsInterface'
import { Component, SnakcCard } from './design'
import { Button } from 'primereact/button'

const SnackStructure = ({ data }: SnackPropsInterface) => {
  const reais = (value: number) =>
    new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)

  return (
    <Component className=''>
      {data.map((item, index) => (
        <SnakcCard
          key={item.id}
          className='snack-card-wrapper shadow-1 border-round flex flex-column gap-3 pb-4'
        >
          <img
            src={item.image}
            alt={item.description}
            className='border-round cursor-pointer'
            onClick={() => console.log('...')}
          />

          <div className='flex justify-content-between align-items-center px-3'>
            <h3 className='text-secondary m-0 font-light text-right'>{reais(item.price)}</h3>
            <Button
              rounded
              icon='pi pi-plus'
              className='m-0 font-normal bg-red-600 border-red-600 hover:bg-red-500'
              label={''}
              size='small'
            ></Button>
          </div>
          <p className='m-0 text-xs font-light px-3'>{item.description}</p>
        </SnakcCard>
      ))}
    </Component>
  )
}

export default SnackStructure
