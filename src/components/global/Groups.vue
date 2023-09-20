<script setup>
    import { orderUtil } from '@/use/orderUtils';
    import { productsUtil } from '@/use/productsUtils';
    import {ref} from 'vue';
    
    let productVisible = ref(false);
    let orderItem = ref(undefined);

    function isProductVisible(id) {
        productVisible.value = true;
        orderItem.value = orderUtil.getOrderById(id);
        return productVisible;
    } 
</script>

<template>
    <div class="groups">
        <div class="groups__title">
            Группы
        </div>
        <div class="row">
            <div class="groups__orders col-4">
                <ul class="list-group">
                    <ListItem  v-for="order in orderUtil.getOrders()"
                               :key="order.id" 
                               class="list-item"
                               @click="isProductVisible(order.id)"
                    >
                        <div class="d-flex align-items-center">
    
                            <div class="d-flex align-items-center">
                                <ButtonMenu class="button-menu"/>
                                <div class="products-count">
                                    {{ productsUtil.getOrderProducts(order.id).length }}
                                    <div>Продукта</div>
                                </div>  
                            </div>
    
                            <div class="d-flex justify-content-center">
                                {{  order.date.slice(0,10) }}
                            </div>
                            
                        </div>
                    </ListItem>
                </ul>
            </div>
    
            <div v-if="productVisible" class="groups__products col-8">
                <div class="order-name">
                    {{ orderItem.title }}
                </div>
                <AddButton/>
                <div>
                    <ul class="list-product">
                        <ListItem  
                            v-for="product in orderItem.products"
                            :key="product.id" 
                            class="list-item"
                        >

                            <div class="d-flex align-items-center justify-content-between">

                                <img class="image" :src="product.photo" alt="photo">

                                <OrderLink class="product__name" href="#">
                                    {{product.title}}
                                </OrderLink>

                                <div class="product__status available" v-if="product.status == 'free' ">свободен</div>
                                <div class="product__status unavailable " v-else>В ремонте</div>

                                <ButtonDelete/>
                            </div>

                        </ListItem>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss"> 
@import '@/assets/main.scss'; 
.groups{
    &__title{
        font-size: 32px;
        color: #2C3C44;
        font-weight: bold;
        margin-bottom: 30px;
    }

    &__orders{
        width: 35%;
        .button-menu{
            margin-right: 20px;
        }
        .products-count{
            margin-right: 40px;
        }
        .list-item{
            position: relative;
            &:hover{
                cursor: pointer;
                :after{
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    content: '>';
                    width: 10%;
                    font-size: 36px;
                    font-weight: bold;
                    height: 100%;
                    right: 0;
                    top: 0;
                    background-color: #CFD8DC;
                }
            }
        }
    }

    &__products {
        background-color: white;
        height: 100%;
        width: 65%;
        .order-name{
            font-weight: bold;
            width: 100%;
            font-size: 24px;
            color:#2C3C44;
            padding: 30px;
            white-space: nowrap;
            overflow: hidden; 
            text-overflow: ellipsis; 
        }
        .image{
            margin-right: 25px;  
            object-fit: cover;
            width: 100px;
        }
        .unavailable{
            color:#2C3C44;
        }
        .available{
            color:#CDDC39;
        }
    }
}
</style>
