import { useState } from 'react'
import { Rotate as HamburgerMenu } from 'hamburger-react'

// menu icons imports
import BurguerIcon from './../../assets/icons/burger.png'
import PizzaIcon from './../../assets/icons/pizza.png'
import MilkShakeIcon from './../../assets/icons/drink.png'
import DessertsIcon from './../../assets/icons/ice-cream.png'

// styled components
import { Aside } from './design'
import { NavLink } from 'react-router-dom'

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
        <ul className='h-full flex flex-column justify-content-center gap-3 pl-0'>
          <li>
            <NavLink to={''} className='relative flex align-items-center gap-5 no-underline px-3'>
              <img src={BurguerIcon} alt='Icone de hamburguer' />
              <span className={
                'text-base font-normal transition-colors transition-linear '
                .concat(
                  isMenuOpen ? 'show-menu-description': 'hide-menu-desciption'
                )
              }>
                Hambúrgueres
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to={'pizzas'} className='relative flex align-items-center gap-5 no-underline px-3'>
              <img src={PizzaIcon} alt='Icone de pizza' />
              <span className='text-base font-normal transition-colors transition-linear'>
                Pizzas
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to={'drinks'} className='relative flex align-items-center gap-5 no-underline px-3'>
              <img src={MilkShakeIcon} alt='Icone de copo de milkshake' />
              <span className='text-base font-normal transition-colors transition-linear'>
                Bebidas
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to={'desserts'} className='relative flex align-items-center gap-5 no-underline px-3'>
              <img src={DessertsIcon} alt='Icone de sorvete' />
              <span className='text-base font-normal transition-colors transition-linear'>
                Sobremesas
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Aside>
  )
}

export default Sidebar
