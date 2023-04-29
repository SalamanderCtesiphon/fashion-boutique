import React, { useContext} from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'


function ProductCard(props) {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)
  console.log(cart.items)

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant='primary' onClick={() => cart.addOneToCart(product.id)} >Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard