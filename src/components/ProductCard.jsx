import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

import '../pages/Shirts.css'
import CheckoutModal from '../pages/CheckoutModal'

function ProductCard(props) {
  const cart = useContext(CartContext)
  const product = props.product 
  const id = props.id

  return (

    <div className='product-card'>
      <div className='card-container1'>
        <h3 className='card-title'>{product.title}</h3>
        <img src={product.image} alt='product' className='product-image'></img>
      </div>
      <div className='card-container'>
      <p className='product-price'>Price: ${product.price}</p>
      <CheckoutModal />
      <button onClick={() => cart.addOneToCart(id)} >
        Add one to Cart
      </button>
        
      </div>
    </div>
  )
}

export default ProductCard