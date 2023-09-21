<script setup>
    import { productsUtil } from '@/use/productsUtils';
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
            <ListItem v-for="product in productsUtil.getProducts(specificationFilter, typeFilter)" :key="product.id">
                <div class="d-flex align-items-center">

                    <img class="product__image" :src="product.photo" alt="photo">

                    <OrderLink class="product__name" href="#">
                        {{product.title}}
                    </OrderLink>

                    <div class="product__status available" v-if="product.status == 'free' ">свободен</div>
                    <div class="product__status unavailable " v-else>В ремонте</div>

                    <div class="product__guarantee">
                        <div class="d-flex justify-content-center">с {{ productsUtil.getProductsGuaranteeStart(product.guarantee) }}</div>
                        <div  class="d-flex justify-content-center" >по {{ productsUtil.getProductsGuaranteeEnd(product.guarantee) }}</div>
                    </div>

                    <div class="product__isused">
                        <div class="product__new" v-if="product.isNew == 0">новый</div>
                        <div class="product__used" v-else>б/у</div>
                    </div>

                    <div class="product__price">
                        <div class="usd">{{ productsUtil.getProductsPrice(product.price).usdPrice.value }} $</div>
                        <div class="uah">{{ productsUtil.getProductsPrice(product.price).uahPrice.value }} UAH</div>
                    </div>

                </div>
            </ListItem>
        </ul>
    </div> 
</template>

<style scoped lang="scss"> 
@import '@/assets/main.scss'; 
    .product{
        &__header{
            margin-bottom: 20px;
            display: flex;
            justify-content: left;
            align-items: end;
            &_title{
                @include main-title;
                
            }
        }
        &__isused{
            display: flex;
            justify-content: center;
            width: 15%;
        }
        &__status{
            display: flex;
            justify-content: center;
            width: 15%;
        }
        &__guarantee{
            width: 20%;
        }
        &__price{
            width: 20%;
            height: 100%;
            
            .usd{
                display: flex;
                justify-content: center;
                height: max-content;
                font-size: 16px;
            }
            .uah{
                display: flex;
                justify-content: center;
                height: max-content;
                font-size: 24px;
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
