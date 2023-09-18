<script setup>
    import { getProducts, getProductsGuaranteeStart, getProductsGuaranteeEnd, getProductsPrice } from '@/use/productsUtils';
    import {getFilterData, setFilterData, specificationFilter, typeFilter} from '@/use/filterUtils'
</script>

<template>
    <div class="product">
        <div class="product__header">
            <div class="product__header_title">
                Продукты
            </div>

            <div class="dropdown">
                <div class="name">
                    Спецификация:
                </div>
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ specificationFilter  }}
                </button>
                <ul class="dropdown-menu">
                    <li v-for="(specificationValue, key) in getFilterData().specifications" :key="key">
                        <button @click="setFilterData('specification', specificationValue)" class="dropdown-item" href="#">
                            {{ specificationValue }}
                        </button>
                    </li>
                </ul>
            </div>

            <div class="dropdown">
                <div class="name">
                    Тип:
                </div>
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ typeFilter }}
                </button>
                <ul class="dropdown-menu">
                    <li v-for="(typeValue, key) in getFilterData().types" :key="key">
                        <button @click="setFilterData('type', typeValue)" class="dropdown-item">
                            {{ typeValue }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <ul class="list-group">
            <ListItem v-for="product in getProducts(specificationFilter, typeFilter)" :key="product.id">
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

        .dropdown{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .name{
                color: #90A4AE;
                margin: 0 15px;
            }
            .dropdown-toggle{
                display: flex;
                justify-content: space-between;
                color: #2C3C44;
                font-weight: bold;
                align-items: center;
                background-color: white;
                text-align: left;
                border: 1px solid #90A4AE;
                width: 350px;
                height: 30px;
                &:after{
                    color: #90A4AE;
                }
            }
        }
        .unavailable{
            color:#2C3C44;
        }
        .available{
            color:#CDDC39;
        }
    }
</style>
