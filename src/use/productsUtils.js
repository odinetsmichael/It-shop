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

export const getProductsGuaranteeStart = function (guarantee){
 if(guarantee){
  return guarantee.start.slice(0,10);
 }
}
export const getProductsGuaranteeEnd = function (guarantee){
  if(guarantee){
   return guarantee.end.slice(0,10);
  }
 }
  
export const getOrderProductsPrice = function (ordersId) {
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

export const getProductsPrice = function(price) {
  let usdPrice = 0;
  let uahPrice = 0;
  if(price && price.symbol  == 'USD') {
    usdPrice = price.value
    console.log(usdPrice)
  }
  else if (price && price.symbol  == 'UAH') {
    uahPrice = price.value
    console.log(uahPrice)
  }
  return { usdPrice: usdPrice, uahPrice: uahPrice };
}