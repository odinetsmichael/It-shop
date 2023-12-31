import { productsConst } from '../constants/productPageConst';
import { products } from '../store/front-end-data.json';



export let productsUtil = function () {

    const getProducts = function (specification, type) {
    let productsList = [];
    
    if (specification != productsConst.FilterDefault && type != productsConst.FilterDefault ){
      productsList = products.filter(p => p.specification == specification && p.type == type);
    }
    else if(specification != productsConst.FilterDefault){
      productsList = products.filter(p => p.specification === specification);
    }
    else if (type != productsConst.FilterDefault){
      productsList = products.filter(p => p.type === type);
    }
    else{
      productsList = products;
    }
      
    return productsList;
  }
  // getProductsByOrderId
  const getOrderProducts = function (orderId) {
    return products.filter(product =>  product.order == orderId);
  }

  const getProductsGuaranteeStart = function (guarantee){
  if(guarantee){
    return guarantee.start.slice(0,10);
  }
  }
  const getProductsGuaranteeEnd = function (guarantee){
    if(guarantee){
    return guarantee.end.slice(0,10);
    }
  }
    
  const getOrderProductsPrice = function (ordersId) {
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

  const getProductsPrice = function(price) {

    let defaultPrice = price.find(p => p.isDefault == 1);
    let secondPrice =  price.find(p => p.isDefault == 0);
    let resp = { usdPrice: secondPrice, uahPrice: defaultPrice };

    return resp;
  }

  return {
    getProducts : getProducts,
    getOrderProducts : getOrderProducts,
    getProductsGuaranteeStart : getProductsGuaranteeStart,
    getProductsGuaranteeEnd : getProductsGuaranteeEnd,
    getOrderProductsPrice : getOrderProductsPrice,
    getProductsPrice : getProductsPrice
  };
  
}();
