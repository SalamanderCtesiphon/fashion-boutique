import React, { useContext, useState } from 'react'
import { Button, Navbar, Modal} from 'react-bootstrap'
import { CartContext } from '../CartContext'
import CartProduct from './CartProduct'


function NavbarComponent() {
  const cart = useContext(CartContext)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productsCount = cart.items.length

  return (
    <>
      <Navbar  bg='dark' variant='dark'>
        <a className="navLinks" href='/'>Fashion Apparel</a>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={handleShow} bg='dark' variant='dark'>Cart {productsCount} Items</Button>
        </Navbar.Collapse>
        
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body >
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
          <h1>There Are No Items In Your Cart</h1>  
          }
        </Modal.Body>
      </Modal>

    </>
  )
}

export default NavbarComponent