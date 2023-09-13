import { createRouter, createWebHashHistory } from "vue-router";
import Orders from '../components/global/Orders.vue'
import Products from '../components/global/Products.vue'
import Overview from '../components/global/Overview.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/orders', component: Orders, alias: '/'},
        {path: '/products', component: Products},
    ]
})