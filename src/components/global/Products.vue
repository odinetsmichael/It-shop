<script setup>
    import { getProducts, getProductsGuaranteeStart, getProductsGuaranteeEnd, getProductsPrice } from '../../use/productsUtils';
</script>

<template>
    <div class="product">
        <div class="product__header">
            <div class="product__header_title">
                Продукты
            </div>
            <DropdownButton/>
        </div>
        <ul class="list-group">
            <ListItem v-for="product in getProducts()" :key="product.id">
                <div class="d-flex align-items-center">

                    <img class="product__image" :src="product.photo" alt="photo">

                    <OrderLink class="product__name" href="#">
                        {{product.title}}
                    </OrderLink>

                    <div class="product__status available" v-if="product.status == 'free' ">свободен</div>
                    <div class="product__status unavailable " v-else>В ремонте</div>

                    <div class="product__guarantee">
                        <div>с {{ getProductsGuaranteeStart(product.guarantee) }}</div>
                        <div>по {{ getProductsGuaranteeEnd(product.guarantee) }}</div>
                    </div>

                    <div class="product__unused" v-if="product.isNew == 0">новый</div>
                    <div class="product__used" v-else>б/у</div>

                    <div class="product__price">{{ getProductsPrice(product.price).uahPrice.value }}</div>
                    <div class="product__price">{{ getProductsPrice(product.price).usdPrice.value }}</div>
                </div>
            </ListItem>
        </ul>
    </div> 
</template>

<style scoped lang="scss">
    .product{
        &__header{
            display: flex;
            justify-content: left;
            align-items: end;
            &_title{
                font-size: 32px;
                color: #2C3C44;
                font-weight: bold;
                margin-right: 30px;
            }
        }

        &__image{
            margin-right: 25px;  
            object-fit: cover;
            width: 100px;
        }
        &__status{
            width: 10%;
            text-align: center;
            font-size: 18px;
        }
        .unavailable{
            color:#2C3C44;
        }
        .available{
            color:#CDDC39;
        }
    }
</style>
