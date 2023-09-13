<script setup>
    // import axios from 'axios';
    import { getOrders} from '../../use/orderUtils';
    import {getOrderProducts, getProductsPrice } from '../../use/productsUtils';
    import {ref} from 'vue';
    const isInfoPopupVisible = ref(false);
    
    function showConfirmationWindow() {
        isInfoPopupVisible.value = true;
    }
</script>

    <template>
        <div class="order-list">
        <div class="order-title">
            Приходы
        </div>
        <ul class="list-group">
            <ListItem v-for="order in getOrders()" :key="order.id">
                <div class="row d-flex align-items-center">
                    <OrderLink class="col-4" href="#">
                        {{order.title}}
                    </OrderLink>
                    <div class="col-2 d-flex justify-content-around align-items-center">
                        <ButtonMenu/>
                        <div>
                            {{ getOrderProducts(order.id).length }}
                            <div>Продукта</div>
                        </div>  

                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        {{  order.date }}
                    </div>
    
                    <div class="col-2">
                        {{ getProductsPrice(order.id).usdPrice }}$
                        {{ getProductsPrice(order.id).uahPrice }}UAH
                    </div>

                    <ButtonDelete class="col-1" @click="showConfirmationWindow" />
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
.order-list{
    .order-title{
        font-size: 32px;
        color: #2C3C44;
        font-weight: bold;
        margin-bottom: 30px;
    }
}

</style>
