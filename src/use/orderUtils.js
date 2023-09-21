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

  function orderDateFormate(date){
    let orderDate = new Date(date);
    let year = orderDate.getFullYear();
    let month = orderDate.toLocaleString('ru-US', { month: 'short' }).slice(0, -1);
    month = month.charAt(0).toUpperCase() + month.slice(1);

    let day = orderDate.getDate();
    let formattedDay = (day < 10) ? "0" + day : day.toString();

    return `${formattedDay}/${month}/${year}`
  }

  function orderMonthFormate(date) {
    const orderDate = new Date(date);
    const monthIndex = orderDate.getMonth() + 1; 
    return monthIndex < 10 ? `0${monthIndex}/12` : monthIndex;
  }


  return {
    getOrders: getOrders,
    getOrderById: getOrderById,
    orderDateFormate: orderDateFormate,
    orderMonthFormate: orderMonthFormate,
  };

}();


  
  