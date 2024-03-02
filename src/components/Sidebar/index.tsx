import { useState } from 'react'
import { Rotate as HamburgerMenu } from 'hamburger-react'

// menu icons imports
import BurguerIcon from './../../assets/icons/burger.png'
import PizzaIcon from './../../assets/icons/pizza.png'
import MilkShakeIcon from './../../assets/icons/drink.png'
import IceCreamIcon from './../../assets/icons/ice-cream.png'

// styled components
import { Aside } from './design'

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOPen] = useState<boolean>(false)

  return (
    <Aside
      data-open={isMenuOpen}
      className='bg-red-500 flex flex-column align-items-center overflow-hidden py-5 transition-all transition-duration-200'
    >
      <div className="menu-hamburger-container">
        <HamburgerMenu toggled={isMenuOpen} toggle={setIsMenuOPen} size={25} />
      </div>

      <nav className='flex-1 w-full h-full'>
        <ul className='h-full flex flex-column justify-content-center gap-4 pl-0'>
          <li>
            <a href='#' className='relative flex align-items-center gap-5 no-underline px-3 active'>
              <img src={BurguerIcon} alt='Icone de hamburguer' />
              <span className={
                'text-base font-normal transition-colors transition-linear'
                .concat(
                  isMenuOpen ? ' show-menu-description': ' hide-menu-desciption'
                )
              }>
                Hambúrgueres
              </span>
            </a>
          </li>

          <li>
            <a href='#' className='relative flex align-items-center gap-5 no-underline px-3'>
              <img src={PizzaIcon} alt='Icone de pizza' />
              <span className='text-base font-normal transition-colors transition-linear'>
                Pizzas
              </span>
            </a>
          </li>

          <li>
            <a href='#' className='relative flex align-items-center gap-5 no-underline px-3'>
              <img src={MilkShakeIcon} alt='Icone de copo de milkshake' />
              <span className='text-base font-normal transition-colors transition-linear'>
                Bebidas
              </span>
            </a>
          </li>

          <li>
            <a href='#' className='relative flex align-items-center gap-5 no-underline px-3'>
              <img src={IceCreamIcon} alt='Icone de sorvete' />
              <span className='text-base font-normal transition-colors transition-linear'>
                Sobremesas
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </Aside>
  )
}

export default Sidebar
