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
        
        <div class="order__header">
            <div class="order__add"></div>
            <div class="order__title">
                Приходы / {{ orderUtil.getOrders().length }}
            </div>
        </div>

        <ul class="list__group">
            <ListItem 
                v-for="order in orderUtil.getOrders()" 
                :key="order.id"
                class="list__item"
            >
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

                    <div class="date">
                        <div class="date__month">
                            {{ orderUtil.orderMonthFormate( order.date) }}
                        </div>
                        <div class="date__full">
                            {{ orderUtil.orderDateFormate( order.date) }}
                        </div>
                    </div>
    
                    <div class="col-2">
                        <div class="usd-price" v-if="productsUtil.getOrderProductsPrice(order.id).usdPrice">
                            {{ productsUtil.getOrderProductsPrice(order.id).usdPrice }}$
                        </div>
                        <div class="uah-price" v-if="productsUtil.getOrderProductsPrice(order.id).uahPrice">
                            {{ productsUtil.getOrderProductsPrice(order.id).uahPrice }}UAH
                        </div>
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

    &__header{
        @include main-header;
        
    }
    &__add{
        @include big-add-button;
    }
    &__title{
        @include main-title;
        margin-bottom: 15px;
        margin-left: 20px;
    }
    &__name{
        white-space: nowrap;
        overflow: hidden; 
        text-overflow: ellipsis; 
    }
    .list__item{
        background-color: transparent;
    }
    .date{
        &__full{
            text-align: center;
            font-size: 18px;
        }
        &__month{
            text-align: center;
            font-size: 12px;
        }
    }
    .button-menu{
        margin-right: 15px;
    }
    .uah-price{
        font-size: 18px;
    }
    .usd-price{
        font-size: 12px;
    }
    .group-link{
        text-decoration: none;
        color: #2C3C44;
    }
}

</style>
