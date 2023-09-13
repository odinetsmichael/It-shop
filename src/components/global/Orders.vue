<script setup>
    import {orders} from '../../store/front-end-data.json';
    import {products} from '../../store/front-end-data.json';
    // import axios from 'axios';

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
            <ListItem v-for="order in getOrders()" :key="order.id">
                <div class="row d-flex align-items-center">
                    <a class="order-link col-4" href="#">
                        {{order.title}}
                    </a>
                    <div class="col-2 d-flex justify-content-around align-items-center">
                        <ButtonMenu/>
                        <div>
                            {{  getOrderProducts(order.id).length }}
                            <div>Продукта</div>
                        </div>  

                    </div>
                    <div class="col-3">
                        {{  order.date }}
                    </div>
    
                    <div class="col-2">
                        {{ getProductsPrice(order.id).usdPrice }}$
                        {{ getProductsPrice(order.id).uahPrice }}UAH
                    </div>

                    <ButtonDelete class="col-1" @click="deleteOrder(order.id)"/>
                </div>
            </ListItem>
        </ul>
    </div> 
</template>

<style scoped lang="scss">
.order-list{
    ul{
        font-size: 22px;
        font-weight: normal;
        color: #546E7A;
    }
}

</style>
