<script setup>
    import { getProducts, getProductsGuarantee } from '../../use/productsUtils';
</script>

<template>
    <div class="product">
        <div class="product__title">
            Продукты
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
                        <div>с {{ getProductsGuarantee(product.id) }}</div>
                        <div>по</div>
                    </div>
                </div>
            </ListItem>
        </ul>
    </div> 
</template>

<style scoped lang="scss">
    .product{
        &__title{
            font-size: 32px;
            color: #2C3C44;
            font-weight: bold;
            margin-bottom: 30px;
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
