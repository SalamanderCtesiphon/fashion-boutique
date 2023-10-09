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
    {tempArray.map((product, idx) => (
        <ProductCard product={product}></ProductCard>
      ))}
  </>
  )
}

export default Shirts