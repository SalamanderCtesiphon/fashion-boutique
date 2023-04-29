import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../ProductStore'
import ProductCard from '../components/ProductCard'

function Shirts() {
  const tempArray = productsArray.filter((product) =>{
    return product.category === "tops"
  })

  return (
    <>
    <h1 align='center' className='p-3' >Welcome to the Shirt Department</h1>
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