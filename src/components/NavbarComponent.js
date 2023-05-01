import React, { useContext} from 'react'
import { CartContext } from '../CartContext'

function NavbarComponent() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length


  return (
    <>
      <div className='header'>
      <a className="navLinks" href='/'>Fashion Apparel</a>
      <a className="navLinks" href='checkout'>{productsCount} items in cart</a>
      </div>
    </>
  )
}

export default NavbarComponent