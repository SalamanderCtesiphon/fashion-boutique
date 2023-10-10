import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import CheckoutModal from '../pages/CheckoutModal'



function NavbarComponent() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length

  return (
    <>
      <div className='header'>
        <a className="navLinks title" href='/'>ElectroDepot</a>
        <ul className='navLinks'>
          <li><a href='/motherboards'>Motherboards</a></li>
          <li><a href='/cpus'>CPUs</a></li>
          <li><a href='/gpus'>GPUs</a></li>
          <li><a href='/memory'>Memory</a></li>
        </ul>
        <div className='shopping-cart'>
          <CheckoutModal />
          { productsCount > 0 ? 
            <div className='product-count'>{productsCount}</div>
            :
            <></>
          }
        </div>
       </div>
    </>
  )
}

export default NavbarComponent