import { products } from '../store/front-end-data.json';

export const getProducts = function () {
  let productsList = [];
  // ordersList = await axios.get('http://host:port/api/orders');
  productsList = products;
  return productsList;
}

export const getOrderProducts = function (ordersId) {
  const productsList = products;

  return productsList.filter((product) => {

    return product.order == ordersId;

  })
}

export const getProductsGuarantee = function (productId){

}
  
export const getProductsPrice = function (ordersId) {
  const products = getOrderProducts(ordersId);
  let usdPrice = 0;
  let uahPrice = 0;
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].price.length; j++) {
      if (products[i].price[j].symbol == 'USD') {
        usdPrice = usdPrice + products[i].price[j].value;
      } else if (products[i].price[j].symbol == 'UAH') {
        uahPrice = uahPrice + products[i].price[j].value;
      }
    }
  }
  return { usdPrice: usdPrice, uahPrice: uahPrice };
}