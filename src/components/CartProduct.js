import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from '../ProductStore'

function CartProduct(props) {
  const cart = useContext(CartContext)
  const id = props.id
  const quantity = props.quantity
  const productData = getProductData(id)

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${ (quantity * productData.price).toFixed(2) }</p>
      <div onClick={() => cart.deleteFromCart(id)}>Remove</div>
      <hr></hr>
    </>
  )
}

export default CartProduct