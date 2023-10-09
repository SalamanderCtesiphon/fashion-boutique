import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from '../ProductStore'


function CartProduct(props) {
  const cart = useContext(CartContext)
  const quantity = props.quantity
  const productData = getProductData(props.id)

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let subTotal = (quantity * productData.price).toFixed(2) 

  return (
    <>
      <div className='checkout-card'>
        <img src={productData.image} alt="product" className='checkout-image'></img>
        <div className='cc-sub-section'>
          <div>Product Name:</div>
          <h3>{productData.title.slice(0, 10)}...</h3>
        </div>
        <div className='cc-sub-section-two'>
          <p>total:  {quantity}</p>
        </div>
        <div className='cc-sub-section-three'>
          <div>Sub Total:</div>
          <p>{ USDollar.format(subTotal)}</p>
        </div>
        <button className="dlt-btn" onClick={() => cart.deleteFromCart(cart.id)}>Remove</button>
      </div>
    </>
  )
}

export default CartProduct