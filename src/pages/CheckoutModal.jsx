import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext'
import CartProduct from '../components/CartProduct'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';


function CheckoutModal(props) {
  const [show, setShow] = useState(false);
  const cart = useContext(CartContext)
  const productsCount = cart.items.length

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let cartTotal = cart.getTotalCost().toFixed(2)


  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true) 
  };
  

  return (
    <> 
      <button  onClick={handleShow} id='shopping-cart'><Icon path={mdiCart} size={1.2} /></button>    
      <Modal 
        className="modal"
        size="lg"
        show={show} 
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Check Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ?
            <>
              <div className='check-out-card'>
                {cart.items.map((currentProduct, idx) => (
                  <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} currentProduct={currentProduct}></CartProduct>
                ))}
              </div>
            </>
            :
            <>
            <h1>There Are No Items In Your Cart</h1> 
            <a className="navLinks" href='categories'>Back to Shopping</a>
            </> 
            }
          <h1 className='total'>Total: {USDollar.format(cartTotal)}</h1>
        </Modal.Body>
        <Modal.Footer id='modal-footer'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Purchase Items!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckoutModal;