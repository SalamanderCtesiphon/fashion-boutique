import tShirts from './images/md-salman-tWOz2_EK5EQ-unsplash.jpg'
import shoes from './images/pexels-andre-moura-2562992.jpg'
import dressShirt from './images/nimble-made-N0ke5zChVBU-unsplash(1).jpg'
import fancyShoes from './images/jason-briscoe-tYGooMvu0hA-unsplash.jpg'
import blouse from './images/pexels-anj-namoro-2850487.jpg'
import sweater from './images/pexels-dom-j-45982.jpg'
import jeans from './images/matthew-moloney-5NPId7L1_p4-unsplash.jpg'

const productsArray = [
  {
    id: '1',
    title: 'T-Shirts',
    price: 14.99, 
    image: tShirts,
    category: 'tops'
  },
  {
    id: '2',
    title: 'Shoes',
    price: 109.99,
    image: shoes,
    category: 'footware'
  },
  {
    id: '3',
    title: 'Dress Shirt',
    price: 39.99,
    image: dressShirt,
    category: 'tops'
  },
  {
    id: '4',
    title: 'Dress Shoes',
    price: 148.99, 
    image: fancyShoes,
    category: 'footware'
  },
  {
    id: '5',
    title: 'Sweater Vest',
    price: 69.99,
    image: blouse,
    category: 'tops'
  },
  {
    id: '6',
    title: 'Sweater',
    price: 89.99,
    image: sweater,
    category: 'tops'
  },
  {
    id: '7',
    title: 'Jeans',
    price: 39.58,
    image: jeans,
    category: 'pants'
  }
]

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id)

  if(productData === undefined) {
    return undefined
  }

  return productData
}

export { productsArray, getProductData }