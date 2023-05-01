import React from 'react'
import './Categories.css'

function Categories() {
  return (
    <div className='category-page'>
      <h3>Shop Categories:</h3>
      <div className='category-display'>
        <div className='category-card'>
          <div id='shirts'></div>
          <a href='/shirts'className='nav-link'>Shirts</a>
        </div>
        <div className='category-card'>
          <div id='pants'></div>
          <a href='/pants' className='nav-link'>Pants</a>
        </div>
        <div className='category-card'>
          <div id='shoes'></div>
          <a href='/shoes' className='nav-link'>Shoes</a>
        </div>
      </div>
    </div>
  )
}

export default Categories