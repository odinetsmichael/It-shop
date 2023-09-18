import { orders } from '../store/front-end-data.json';
import { productsUtil } from '../use/productsUtils';

export const getOrders = function () {
  let ordersList = [];
  ordersList = orders;
  return ordersList;
}    

export let getOrderById = function (id){
  let order = orders.find(o => o.id == id);
  return  { 
    title: order.title, 
    products : productsUtil.getOrderProducts(id)
  };
}
  
  