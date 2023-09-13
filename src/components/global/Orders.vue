<script setup>
    import {orders} from '../../store/front-end-data.json';
    import {products} from '../../store/front-end-data.json';
    import axios from 'axios';

    const getOrders = function () {
        let ordersList = []; 
        // ordersList = await axios.get('http://host:port/api/orders');
        ordersList = orders;
        return ordersList;
    }

    const getOrderProducts = function (ordersId){
        const productsList = products;
        return productsList.filter((product) => {
            return product.order == ordersId;
        })
    }

    const getProductsPrice = function (ordersId){
        const products = this.getOrderProducts(ordersId);
        let usdPrice = 0;
        let uahPrice = 0;
        for (let i = 0; i < products.length; i++){
            for (let j = 0; j < products[i].price.length; j++){
                if (products[i].price[j].symbol == 'USD') {
                    usdPrice = usdPrice + products[i].price[j].value;
                } else if (products[i].price[j].symbol == 'UAH'){
                    uahPrice = uahPrice + products[i].price[j].value;
                }
            }
        }
        return {usdPrice: usdPrice, uahPrice: uahPrice};
    }

    const deleteOrder = function (ordersId){
        console.log(`delete order ${ordersId}`);
        // await axios.delete(`http://host:port/api/orders/${ordersId}`);
    }

</script>

<template>
    <div class="order-list">
        <ul class="list-group">
            Приходы
            <li class="list-group-item" v-for="order in getOrders()" :key="order.id">
                <a class="order-link" href="#">{{order.title}}</a>
                <div>
                    {{  getOrderProducts(order.id).length }}
                </div>
                <div>
                    {{  order.date }}
                </div>

                <div>
                    {{ getProductsPrice(order.id).uahPrice }}
                </div>
                <div>
                    {{ getProductsPrice(order.id).usdPrice }}
                </div>
                <button @click="deleteOrder(order.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
            </li>
        </ul>
    </div> 
</template>

<style scoped lang="scss">
.order-list{
    ul{
        font-size: 32px;
        font-weight: bold;
        .list-group-item{
            padding: 15px;
            border-radius: 4px;
            border: 2px solid #CFD8DC;
            margin-top: 15px;
            .order-link{
                font-size: 22px;
                font-weight: normal;
                color: #546E7A;
                padding-left: 15px;
            }
        }
    }
}

</style>
