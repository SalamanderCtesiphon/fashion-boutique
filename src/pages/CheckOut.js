import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
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

              <div>
                Purchase Items!
              </div>
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