import React, { useContext} from 'react'
import { Card, Button, Form, Col, Row } from 'react-bootstrap'
import { CartContext } from '../CartContext'


function ProductCard(props) {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (

    <div className='product-card'>
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      { productQuantity > 0 ?
        <>
          <button onClick={() => cart.removeOneFromCart(product.id)} >-</button>
          <div>
            In cart: {productQuantity}
          </div>
          <button onClick={() => cart.addOneToCart(product.id)} >+</button>
          <button onClick={() => cart.deleteFromCart(product.id)} >Delete</button>
        </> 
        :
        <>
         <button onClick={() => cart.addOneToCart(product.id)} >Add One to Cart</button>
        </>
      }
    </div>
  )
}

export default ProductCard