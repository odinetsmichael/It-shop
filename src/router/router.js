import { createRouter, createWebHashHistory } from "vue-router";
import Orders from '../components/global/Orders.vue'
import Products from '../components/global/Products.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/orders', component: Orders},
        {path: '/products', component: Products},
    ]
})