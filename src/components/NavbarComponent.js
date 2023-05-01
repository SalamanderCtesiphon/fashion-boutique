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
      <div id='search' >
        <input onChange={() => console.log('hi')}></input>
        <button>seacrch</button>
        <div className='drop-down'>
          <a className='list-item' href='/shoes'>Shoes</a>
          <a className='list-item' href='/shirts'>Shirts</a>
          <a className='list-item' href='/pants'>Pants</a>
        </div>
      </div>
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