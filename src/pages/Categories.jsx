import React from 'react'
import './Categories.css'

function Categories() {
  return (
    <div className='category-page'>
      <h3>Components</h3>
      <div className='category-display'>
        <div className='category-card'>
          <div id='shirts'></div>
          <a href='/motherboards'className='nav-link'>Motherboards</a>
        </div>
        <div className='category-card'>
          <div id='pants'></div>
          <a href='/pants' className='nav-link'>CPUs</a>
        </div>
        <div className='category-card'>
          <div id='shoes'></div>
          <a href='/shoes' className='nav-link'>GPUs</a>
        </div>
        <div className='category-card'>
          <div id='memory'></div>
          <a href='/shoes' className='nav-link'>Memory</a>
        </div>
      </div>
    </div>
  )
}

export default Categories