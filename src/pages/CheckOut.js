import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import CartProduct from '../components/CartProduct'
import "./CheckOut.css"

function CheckOut() {
  const cart = useContext(CartContext)
  const productsCount = cart.items.length

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let cartTotal = cart.getTotalCost().toFixed(2)

  return (
    <div className='checkout-page'>
         {productsCount > 0 ?
            <>
              <h3>Items in your cart:</h3>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
              ))}

              <h1>Total: {USDollar.format(cartTotal)}</h1>

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