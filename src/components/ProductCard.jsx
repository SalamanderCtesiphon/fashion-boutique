import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import '../pages/Shirts.css'
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import CheckoutModal from '../pages/CheckoutModal'




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
      <a className='nav-link' href='/checkoutmodal' >Add One to Cart</a>
      <CheckoutModal />
      {/*   { productQuantity > 0 ?
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
        } */}
      </div>
    
      { productQuantity > 0 ?
        <Icon className="close-icon" path={mdiClose} size={1} onClick={() => cart.deleteFromCart(product.id)}/>   
        :
        <></>
      }
    </div>
  )
}

export default ProductCard