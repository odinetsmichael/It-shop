import { createRouter, createWebHashHistory } from "vue-router";
import Orders from '../components/global/Orders.vue'
import Products from '../components/global/Products.vue'
import Groups from '../components/global/Groups.vue'
import Users from '../components/global/Users.vue'
import Settings from '../components/global/Settings.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/orders', component: Orders, alias: '/'},
        {path: '/products', component: Products},
        {path: '/Groups', component: Groups},
        {path: '/Users', component: Users},
        {path: '/Settings', component: Settings},
    ]
})