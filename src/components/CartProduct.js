import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from '../ProductStore'

function CartProduct(props) {
  const cart = useContext(CartContext)
  const id = props.id
  const quantity = props.quantity
  const productData = getProductData(id)

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let subTotal = (quantity * productData.price).toFixed(2) 

  return (
    <>
      <div className='checkout-card'>
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>{ USDollar.format(subTotal)}</p>
        <div onClick={() => cart.deleteFromCart(id)}>Remove</div>
      </div>
    </>
  )
}

export default CartProduct