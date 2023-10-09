import React from 'react'
import ObjectdeArt from '../images/Vector.svg'

function Home() {
  return (
    <div className='home-page'>
      <h1 className='title-header'>ElectroDepot Computer Components</h1>
      <img src={ObjectdeArt} alt='product' className='hero-img'></img>
    </div>
  )
}

export default Home