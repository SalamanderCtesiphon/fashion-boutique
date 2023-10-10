import motherboard from './images/pexels-jeremy-waterhouse-3665443.jpg'
import msipro from './images/13-144-551-01.jpg'
import msipro1 from './images/13-162-131-06.jpg'
import cpu1 from './images/19-113-793-03.png'

const productsArray = [
  {
    id: '19',
    title: 'GA-A55M-DS2 B650 SATA 6Gb/s Micro ATX PRO X670-P WIFI DDR5',
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
  },
  {
    id: '21',
    title: 'ASRock B650M Pro RS WiFi AM5 AMD B650 SATA 6Gb/s Micro ATX Motherboard',
    price: 124.99,
    image: msipro1,
    category: 'motherboards'
  },
  {
    id: '22',
    title: 'AMD Ryzen 7 7800X3D - Ryzen 7 7000 Series 8-Core 4.2 GHz Socket AM5 120W AMD Radeon',
    price: 399.00,
    image: cpu1,
    category: 'cpus'
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