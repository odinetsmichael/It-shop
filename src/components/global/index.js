import Header from './Header.vue'
import TopMenu from './TopMenu.vue'
import NavigationMenu from './NavigationMenu.vue'
import Orders from './Orders.vue'
import Products from './Products.vue'
import Overview from './Overview.vue';
import SessionCounter from './SessionCounter.vue';

const components = [
    {name: 'Header', component: Header },
    {name: 'TopMenu', component: TopMenu },
    {name: 'NavigationMenu', component: NavigationMenu },
    {name: 'Orders', component: Orders },
    {name: 'Products', component: Products },
    {name: 'Overview', component: Overview },
    {name: 'SessionCounter', component: SessionCounter }
]

export default {
    install (app) {
        components.forEach(({ name, component }) =>{
            app.component(name, component)
        })
    }
}