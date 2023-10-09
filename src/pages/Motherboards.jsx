import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import { productsArray } from '../ProductStore'

import ProductCard from '../components/ProductCard'
import { Col } from 'react-bootstrap'

function Motherboards(props) {
  const tempArray = productsArray.filter((product) =>{
    return product.category === "motherboards"
  })


  return (
    <>
      <section className='category-page'>
        <h1 align='center' className='dep-title' >Motherboards</h1>
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

export default Motherboards