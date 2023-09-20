import { orders } from '../store/front-end-data.json';
import { productsUtil } from '../use/productsUtils';

export let orderUtil = function() {

  const getOrders = function () {
    let ordersList = [];
    ordersList = orders;
    
    return ordersList;
  }    
  
  let getOrderById = function (id){

    let order = orders.find(o => o.id == id);

    return  { 
      title: order.title, 
      products : productsUtil.getOrderProducts(id)
    };
  }

  return {
    getOrders: getOrders,
    getOrderById: getOrderById,
  };

}();


  
  