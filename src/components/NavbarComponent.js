import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';



function NavbarComponent() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length


  return (
    <>
      <div className='header'>
      <a className="navLinks title" href='/'>Fashion Apparel</a>
      <form id='search'>
        <input></input>
        <button>seacrch</button>
      </form>
      <div className='shopping-cart'>
        { productsCount > 0 ? 
          <div className='product-count'>{productsCount}</div>
          :
          <></>
        }
        <a className="navLinks" href='checkout'><Icon path={mdiCart} size={1.5} /></a>
      </div>
       </div>
    </>
  )
}

export default NavbarComponent