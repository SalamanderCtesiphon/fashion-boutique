import tShirts from './images/md-salman-tWOz2_EK5EQ-unsplash.jpg'
import shoes from './images/pexels-andre-moura-2562992.jpg'
import dressShirt from './images/nimble-made-N0ke5zChVBU-unsplash(1).jpg'

const productsArray = [
  {
    id: '1',
    title: 'T-Shirts',
    price: 14.99, 
    image: tShirts
  },
  {
    id: '2',
    title: 'Shoes',
    price: 109.99,
    image: shoes
  },
  {
    id: '3',
    title: 'Dress Shirt',
    price: 39.99,
    image: dressShirt
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