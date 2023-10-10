import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

import '../pages/Shirts.css'

function ProductCard(props) {
  const product = props.product 
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)
 

  return (

    <div className='product-card'>
      <div className='card-container1'>
        <h3 className='card-title'>{product.title}</h3>
        <img src={product.image} alt='product' className='product-image'></img>
      </div>
      <div className='card-container'>
      <p className='product-price'>Price: ${product.price}</p>
     
      <button onClick={() => cart.addOneToCart(product.id)} >
        Add one to Cart
      </button>
      <div>In Cart: {productQuantity}</div>
      <button onClick={() => cart.removeOneFromCart(product.id)}>Remove one</button>
      <button onClick={() => cart.deleteFromCart(product.id)}>Delete Item</button>
        
      </div>
    </div>
  )
}

export default ProductCard