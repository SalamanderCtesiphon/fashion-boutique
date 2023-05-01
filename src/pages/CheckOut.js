import React, { useContext, useState } from 'react'
import { Button, Navbar, Modal} from 'react-bootstrap'
import { CartContext } from '../CartContext'
import CartProduct from '../components/CartProduct'

function CheckOut() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length


  return (
    <div>
         {productsCount > 0 ?
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant='success'>
                Purchase Items!
              </Button>
            </>
          :
          <>
          <h1>There Are No Items In Your Cart</h1> 
          <a className="navLinks" href='categories'>Back to Shopping</a>
          </> 
          }
    </div>
  )
}

export default CheckOut