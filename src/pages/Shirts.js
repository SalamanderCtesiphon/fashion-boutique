import React from 'react'
import { productsArray } from '../ProductStore'
import ProductCard from '../components/ProductCard'
import { Row, Col } from 'react-bootstrap'
import './Shirts.css'

function Shirts() {
  const tempArray = productsArray.filter((product) =>{
    return product.category === "tops"
  })

  return (
    <>
    <h1 align='center' className='p-3' >Welcome to the Shirt Department</h1>
    <Row>
      <Col><a href='/pants' className='navLinks' >Pants department</a></Col>
      <Col><a href='/shoes' className='navLinks' >Shoe department</a></Col>
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

export default Shirts