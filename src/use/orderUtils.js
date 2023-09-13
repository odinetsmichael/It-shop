import { orders } from '../store/front-end-data.json';

export const getOrders = function () {
    let ordersList = [];
    // ordersList = await axios.get('http://host:port/api/orders');
    ordersList = orders;
    return ordersList;
  }    
  
    // const deleteOrder = function (ordersId){
    //     console.log(`delete order ${ordersId}`);
    //     await axios.delete(`http://host:port/api/orders/${ordersId}`);
    // }
  