import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import '../pages/Shirts.css'
import CheckoutModal from '../pages/CheckoutModal'
import Button from 'react-bootstrap/Button';



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
      <div onClick={() => cart.addOneToCart(product.id)} ><CheckoutModal /></div>
        { productQuantity > 0 ?
          <>
            <Button onClick={() => cart.removeOneFromCart(product.id)}  >Remove</Button>
          </> 
          :
          <>
            <CheckoutModal />
          </>
        }
      </div>
    </div>
  )
}

export default ProductCard