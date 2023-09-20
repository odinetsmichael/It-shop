<script setup>
    // import axios from 'axios';
    import { orderUtil } from '@/use/orderUtils';
    import { productsUtil } from '@/use/productsUtils';
    import {isInfoPopupVisible} from '@/constants/popupPageConst'

    function showConfirmationWindow() {
        isInfoPopupVisible.value = true;
    }  

</script>

<template>
    <div class="order">
        <div class="order__title">
            Приходы
        </div>
        <ul class="list__group">
            <ListItem v-for="order in orderUtil.getOrders()" :key="order.id">
                <div class="d-flex align-items-center justify-content-between">
                    <OrderLink class="order__name" href="#">
                        {{order.title}}
                    </OrderLink>

                    <div class="d-flex align-items-center">
                        <a class="group-link" href="#/groups">
                            <ButtonMenu class="button-menu"/>
                        </a>

                        <div>
                            {{ productsUtil.getOrderProducts(order.id).length }}
                            <div>Продукта</div>
                        </div>  
                    </div>

                    <div class="d-flex justify-content-center">
                        {{  order.date.slice(0,10) }}
                    </div>
    
                    <div class="col-2">
                        {{ productsUtil.getOrderProductsPrice(order.id).usdPrice }}$
                        {{ productsUtil.getOrderProductsPrice(order.id).uahPrice }}UAH
                    </div>

                    <ButtonDelete class="button-delete" @click="showConfirmationWindow" />
                    <Popup v-if="isInfoPopupVisible">
                        {{order.title}}
                    </Popup>
                    <!-- @click="deleteOrder(order.id)" -->
                </div>
            </ListItem>
        </ul>
    </div> 
</template>

<style scoped lang="scss"> 
@import '@/assets/main.scss'; 
.order{
    &__title{
        font-size: 32px;
        color: #2C3C44;
        font-weight: bold;
        margin-bottom: 30px;
    }
    &__name{
        white-space: nowrap;
        overflow: hidden; 
        text-overflow: ellipsis; 
    }
    .button-menu{
        margin-right: 15px;
    }
    .group-link{
        text-decoration: none;
        color: #2C3C44;
    }
}

</style>
