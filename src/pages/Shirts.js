import React from 'react'
import { productsArray } from '../ProductStore'
import ProductCard from '../components/ProductCard'
import './Shirts.css'

function Shirts() {
  const tempArray = productsArray.filter((product) =>{
    return product.category === "tops"
  })

  return (
    <>
    <div className='shirt-department'>
      <h1 align='center' className='p-3' >Welcome to the Shirt Department</h1>
      <div className='sub-title'>
        <a href='/pants' className='navLinks' >Pants department</a>
        <a href='/shoes' className='navLinks' >Shoe department</a>
      </div>
      <div className='department-page'>
        {tempArray.map((product, idx) => (
            <ProductCard product={product}></ProductCard>
          ))}
      </div>
    </div>
  </>
  )
}

export default Shirts