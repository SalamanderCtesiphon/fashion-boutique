import { useState } from 'react';
import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import CartProduct from '../components/CartProduct'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Icon from '@mdi/react';
import { mdiArrowLeftBold } from '@mdi/js';


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
      
      {productsCount > 0 ?
        <></>
        :
        <>
        <Button variant="primary" onClick={handleShow} >
          Add to Cart
        </Button>
        </>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Check Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ?
            <>
              <h3 className='page-head'><a id="link-back" href='/categories'><Icon path={mdiArrowLeftBold} size={1} />Return to shopping</a></h3>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
              ))}

              <h1 className='total'>Total: {USDollar.format(cartTotal)}</h1>

              <div className='buy-btn' onClick={() => alert("we are currently working to implement a payment service")}>
                Purchase Items!
              </div>
            </>
            :
            <>
            <h1>There Are No Items In Your Cart</h1> 
            <a className="navLinks" href='categories'>Back to Shopping</a>
            </> 
            }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckoutModal;