import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../ProductStore'
import ProductCard from '../components/ProductCard'

function Pants() {
  const tempArray = productsArray.filter((product) =>{
    return product.category === "pants"
  })

  return (
    <>
      <h1 align='center' className='p-3' >Welcome to the Pants Department</h1>
      <Row>
        <Col><a href='/shoes' className='navLinks' >Shoe department</a></Col>
        <Col><a href='/shirts' className='navLinks' >Shirt department</a></Col>
      </Row>
      <Row xs={1} md={3} className='g-4'>
        {tempArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product}></ProductCard>
          </Col>
        ))}
        

      </Row>
    </>
  )
}

export default Pants