import Header from './Header.vue'
import TopMenu from './TopMenu.vue'
import NavigationMenu from './NavigationMenu.vue'
import Orders from './Orders.vue'
import Products from './Products.vue'
import Overview from './Overview.vue';
import SessionCounter from './SessionCounter.vue';
import ButtonDelete from './Buttons/ButtonDelete.vue';
import ButtonMenu from './Buttons/ButtonMenu.vue';

const components = [
    {name: 'Header', component: Header },
    {name: 'TopMenu', component: TopMenu },
    {name: 'NavigationMenu', component: NavigationMenu },
    {name: 'Orders', component: Orders },
    {name: 'Products', component: Products },
    {name: 'Overview', component: Overview },
    {name: 'ButtonDelete', component: ButtonDelete },
    {name: 'ButtonMenu', component: ButtonMenu },
    {name: 'SessionCounter', component: SessionCounter }
]

export default {
    install (app) {
        components.forEach(({ name, component }) =>{
            app.component(name, component)
        })
    }
}