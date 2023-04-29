const productsArray = [
  {
    id: '1',
    title: 'Coffee',
    price: 4.99
  },
  {
    id: '2',
    title: 'Sunglasses',
    price: 9.99
  },
  {
    id: '1',
    title: 'Camera',
    price: 39.99
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