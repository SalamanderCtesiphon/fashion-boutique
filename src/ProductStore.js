import motherboard from './images/pexels-jeremy-waterhouse-3665443.jpg'
import msipro from './images/13-144-551-01.jpg'
import msipro1 from './images/13-162-131-06.jpg'
import cpu1 from './images/19-113-793-03.png'
import cpu2 from './images/4dce83bee437f0f48a8d06d9b794bc889b74ee23c9480a3d203f896c356bfd52.jpg'
import cpu3 from './images/19-113-763-10.jpg'
import gpu1 from './images/gpu1.jpg'
import gpu2 from './images/gpu2.jpg'
import gpu3 from './images/gpu3.jpg'
import mem1 from './images/mem1.jpg'
import mem2 from './images/mem2.jpg'
import mem3 from './images/mem3.jpg'

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
  },
  {
    id: '23',
    title: 'Intel Core i7-12700KF - Core i7 12th Gen Alder Lake 12-Core (8P+4E) 3.6 GHz LGA 1700 125W',
    price: 289.99,
    image: cpu2,
    category: 'cpus'
  },
  {
    id: '24',
    title: 'AMD Ryzen Threadripper PRO 5995WX - Ryzen Threadripper PRO Chagall PRO (Zen 3) 64-Core 2.7 GHz Socket sWRX8 280W ',
    price: 5799.99,
    image: cpu3,
    category: 'cpus'
  },
  {
    id: '25',
    title: 'GIGABYTE Gaming GeForce RTX 4090 24GB GDDR6X PCI Express 4.0 x16 ATX Video Card',
    price: 1699.99,
    image: gpu1,
    category: 'gpus'
  },
  {
    id: '26',
    title: 'MSI Ventus GeForce RTX 4080 16GB GDDR6X PCI Express 4.0 Video Card RTX 4080 16GB VENTUS 3X OC',
    price: 1774.99,
    image: gpu2,
    category: 'gpus'
  },
  {
    id: '27',
    title: 'ASRock OC Formula Radeon RX 6900 XT 16GB GDDR6 PCI Express 4.0 ATX Video Card RX6900XT OCF 16G',
    price: 639.99,
    image: gpu3,
    category: 'gpus'
  },
  {
    id: '28',
    title: 'CORSAIR Vengeance RGB 32GB (2 x 16GB) 288-Pin PC RAM DDR5 6000 (PC5 48000) Desktop',
    price: 119.99,
    image: mem1,
    category: 'memory'
  },
  {
    id: '29',
    title: 'CORSAIR Vengeance 32GB (2 x 16GB) 288-Pin PC RAM DDR5 6000 (PC5 48000) Desktop',
    price: 87.99,
    image: mem2,
    category: 'memory'
  },
  {
    id: '30',
    title: 'G.SKILL Ripjaws V Series 16GB (2 x 8GB) 288-Pin PC RAM DDR4 3200 (PC4 25600) Desktop ',
    price: 39.99,
    image: mem3,
    category: 'memory'
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