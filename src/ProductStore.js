import tShirts from './images/md-salman-tWOz2_EK5EQ-unsplash.jpg'
import shoes from './images/pexels-andre-moura-2562992.jpg'
import dressShirt from './images/nimble-made-N0ke5zChVBU-unsplash(1).jpg'
import fancyShoes from './images/jason-briscoe-tYGooMvu0hA-unsplash.jpg'
import blouse from './images/pexels-anj-namoro-2850487.jpg'
import sweater from './images/pexels-dom-j-45982.jpg'
import jeans from './images/matthew-moloney-5NPId7L1_p4-unsplash.jpg'
import skinnyJeans from './images/engin-akyurt-ahs1R32GG9Y-unsplash.jpg'
import sweatPants from './images/engin-akyurt-oXYGKCYhQOI-unsplash.jpg'
import redPants from './images/engin-akyurt-RSm7GBuMqos-unsplash.jpg'
import bagPants from './images/clikcc-Ua-luh2pC5k-unsplash.jpg'
import ripPants from './images/mohammad-faruque-OSRb7gfZlxo-unsplash.jpg'
import shirtTie from './images/benjamin-rascoe-iNvK2Xmpx8o-unsplash.jpg'
import jackTie from './images/benjamin-rascoe-JXf2e0nb_-o-unsplash.jpg'
import classVans from './images/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg'
import runners from './images/usama-akram-kP6knT7tjn4-unsplash.jpg'
import joggers from './images/martin-katler-Y4fKN-RlMV4-unsplash.jpg'
import hightech from './images/eugene-chystiakov-b2uYNpBG7Ho-unsplash.jpg'
import motherboard from './images/pexels-jeremy-waterhouse-3665443.jpg'
import msipro from './images/13-144-551-01.jpg'

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
  },
  {
    id: '8',
    title: 'Skinny Jeans',
    price: 125.25,
    image: skinnyJeans,
    category: 'pants'
  },
  {
    id: '9',
    title: 'Sweat Pants',
    price: 12.89,
    image: sweatPants,
    category: 'pants'
  },
  {
    id: '10',
    title: 'Red Pants',
    price: 127.87,
    image: redPants,
    category: 'pants'
  },
  {
    id: '11',
    title: 'Baggy Jeans',
    price: 60.80,
    image: bagPants,
    category: 'pants'
  },
  {
    id: '12',
    title: 'Ripped Jeans',
    price: 260.80,
    image: ripPants,
    category: 'pants'
  },
  {
    id: '13',
    title: 'Shirt & Tie',
    price: 100.99,
    image: shirtTie,
    category: 'tops'
  },
  {
    id: '14',
    title: 'Jacket & Tie',
    price: 120.99,
    image: jackTie,
    category: 'tops'
  },
  {
    id: '15',
    title: 'Classic Vans',
    price: 40.99,
    image: classVans,
    category: 'footware'
  },
  {
    id: '16',
    title: 'Runners',
    price: 60.99,
    image: runners,
    category: 'footware'
  },
  {
    id: '17',
    title: 'Joggers',
    price: 60.99,
    image: joggers,
    category: 'footware'
  },
  {
    id: '18',
    title: 'Hi-Tek',
    price: 610.99,
    image: hightech,
    category: 'footware'
  },
  {
    id: '19',
    title: 'GA-A55M-DS2',
    price: 210.99,
    image: motherboard,
    category: 'motherboards'
  },
  {
    id: '20',
    title: 'MSI PRO PRO X670-P WIFI DDR5 AM5 AMD Ryzen™ 7000 Series SATA 6Gb/s ATX Motherboards',
    price: 198.99,
    image: msipro,
    category: 'motherboards'
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