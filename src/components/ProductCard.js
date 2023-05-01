import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import '../pages/Shirts.css'
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';




function ProductCard(props) {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (

    <div className='product-card'>
      { productQuantity > 0 ?
        <Icon className="close-icon" path={mdiClose} size={2} onClick={() => cart.deleteFromCart(product.id)}/>   
        :
        <></>
      }
      <img src={product.image} alt='product' className='product-image'></img>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      { productQuantity > 0 ?
        <>
          <div className='adjust-item'>
            <div className='increment' onClick={() => cart.removeOneFromCart(product.id)} >-</div>
            <div>
              In cart: {productQuantity}
            </div>
            <div className='increment' onClick={() => cart.addOneToCart(product.id)} >+</div>
          </div>
        </> 
        :
        <>
         <div className='nav-link' onClick={() => cart.addOneToCart(product.id)} >Add One to Cart</div>
        </>
      }
    </div>
  )
}

export default ProductCard