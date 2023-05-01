import React from 'react'
import './Categories.css'

function Categories() {
  return (
    <div className='category-page'>
      <h3>Categories</h3>
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

    {/*   <Row xs={1} md={3} className='g-4'>
        <Card bg='dark' variant='dark'>
          <Card.Body>
            <Card.Img variant='top'style={{}} src={shirts}></Card.Img>
            <Button sm="6" bg='dark' variant='dark' href='/shirts' className='mx-2'>Shirts</Button>
          </Card.Body>
        </Card>
        <Card bg='dark' variant='dark'>
          <Card.Body>
            <Card.Img variant='top'style={{height: '500px', width: '300px', objectFit: 'cover',
              backgroundPosition: 'center' }} src={pants}></Card.Img>
            <Button sm="6" bg='dark' variant='dark' href='/pants' className='mx-2'>Pants</Button>
          </Card.Body>
        </Card>
        <Card bg='dark' variant='dark'>
          <Card.Body>
            <Card.Img variant='top'style={{height: '500px', width: '300px', objectFit: 'cover',
              backgroundPosition: 'center' }} src={shoes}></Card.Img>
            <Button sm="6" bg='dark' variant='dark' href='/shoes' className='mx-2'>Shoes</Button>
          </Card.Body>
        </Card>
      </Row> */}
    </div>
  )
}

export default Categories