import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import CartProduct from '../components/CartProduct'
import "./CheckOut.css"
import Icon from '@mdi/react';
import { mdiArrowLeftBold } from '@mdi/js';



function CheckOut() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let cartTotal = cart.getTotalCost().toFixed(2)

  return (
    <div className='checkout-page'>
       
    </div>
  )
}

export default CheckOut