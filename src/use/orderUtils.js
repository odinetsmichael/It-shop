import { orders } from '../store/front-end-data.json';

export const getOrders = function () {
  let ordersList = [];
  ordersList = orders;
  return ordersList;
}    
  
  