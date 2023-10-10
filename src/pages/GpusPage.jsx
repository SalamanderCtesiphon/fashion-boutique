import React from 'react'
import { productsArray } from '../ProductStore'

import ProductCard from '../components/ProductCard'

function GpusPage(props) {
  const tempArray = productsArray.filter((product) =>{
    return product.category === "gpus"
  })
  return (
    <>
      <section className='category-page'>
        <h1 align='center' className='dep-title' >Video Cards</h1>
        <div className='prod-cards'>
          {tempArray.map((product, idx) => (
            <div key={idx}>
              <ProductCard product={product}></ProductCard>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default GpusPage