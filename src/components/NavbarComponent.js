import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import search from '../search_FILL0_wght400_GRAD0_opsz48.svg'



function NavbarComponent() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length

  return (
    <>
      <div className='header'>
      <a className="navLinks title" href='/'>Fashion Apparel</a>
      <div id='search' >
        <input onChange={() => console.log('hi')} placeholder='search site'></input>
        <button>seacrch</button>
        <div className='drop-down'>
          <a className='list-item' href='/shoes'><img className="search-icon" src={search} alt='search icon'></img>Shoes</a>
          <a className='list-item' href='/shirts'><img className="search-icon" src={search} alt='search icon'></img>Shirts</a>
          <a className='list-item' href='/pants'><img className="search-icon" src={search} alt='search icon'></img>Pants</a>
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