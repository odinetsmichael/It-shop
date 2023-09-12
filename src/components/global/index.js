import Header from './Header.vue'
import TopMenu from './TopMenu.vue'
import NavigationMenu from './NavigationMenu.vue'
import Orders from './Orders.vue'
import Products from './Products.vue'

const components = [
    {name: 'Header', component: Header },
    {name: 'TopMenu', component: TopMenu },
    {name: 'NavigationMenu', component: NavigationMenu },
    {name: 'Orders', component: Orders },
    {name: 'Products', component: Products }
]

export default {
    install (app) {
        components.forEach(({ name, component }) =>{
            app.component(name, component)
        })
    }
}