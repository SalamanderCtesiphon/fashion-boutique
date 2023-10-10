import React from 'react'

import '../pages/Shirts.css'
import CheckoutModal from '../pages/CheckoutModal'

function ProductCard(props) {
  const product = props.product

  return (

    <div className='product-card'>
      <div className='card-container1'>
        <h3 className='card-title'>{product.title}</h3>
        <img src={product.image} alt='product' className='product-image'></img>
      </div>
      <div className='card-container'>
      <p className='product-price'>Price: ${product.price}</p>
      <CheckoutModal />
        
      </div>
    </div>
  )
}

export default ProductCard