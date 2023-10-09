import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';



function NavbarComponent() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length

  return (
    <>
      <div className='header'>
        <a className="navLinks title" href='/'>ElectroDepot</a>
        <ul className='navLinks'>
          <li><a href='/motherboards'>Motherboards</a></li>
          <li><a href='/categories'>CPUs</a></li>
          <li><a href='/categories'>GPUs</a></li>
          <li><a href='/categories'>Memory</a></li>
        </ul>
        <div className='shopping-cart'>
          <a className="navLinks" href='checkout'><Icon path={mdiCart} size={1.2} /></a>
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