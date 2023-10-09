import React from 'react'
import ObjectdeArt from '../images/Vector.svg'

function Home() {
  return (
    <div className='home-page'>
      <div className='title-header'>
        <h1 >ElectroDepot Computer Components</h1>
        <a href="/categories">View Component Departments</a>
      </div>
      <img src={ObjectdeArt} alt='product' className='hero-img'></img>
    </div>
  )
}

export default Home