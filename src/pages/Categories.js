import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import shirts from '../images/nimble-made-hMMXhKSZk7k-unsplash.jpg'
import pants from '../images/lan-deng-quddu_dZKkQ-unsplash.jpg'
import shoes from '../images/riyan-ong-j1PxAa2U-T4-unsplash.jpg'

function Categories() {
  return (
    <div>
      <h1>Categories</h1>
      <Row xs={1} md={3} className='g-4'>
        <Card bg='dark' variant='dark'>
          <Card.Body>
            <Card.Img variant='top'style={{height: '500px', width: '300px', objectFit: 'cover',
              backgroundPosition: 'center' }} src={shirts}></Card.Img>
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
      </Row>
    </div>
  )
}

export default Categories