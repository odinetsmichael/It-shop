import Header from './Header.vue'
import TopMenu from './TopMenu.vue'
import NavigationMenu from './NavigationMenu.vue'
import Orders from './Orders.vue'
import Products from './Products.vue'
import Overview from './Overview.vue';
import SessionCounter from './SessionCounter.vue';
import ListItem from './ListItem.vue';
import OrderLink from './OrderLink.vue';
import Popup from './Popup.vue';
import PopupButtonDelete from './Buttons/PopupButtonDelete.vue';
import PopupButtonCancel from './Buttons/PopupButtonCancel.vue';
import ButtonDelete from './Buttons/ButtonDelete.vue';
import ButtonMenu from './Buttons/ButtonMenu.vue';
import AddButton from './Buttons/AddButton.vue';




const components = [
    {name: 'Header', component: Header },
    {name: 'TopMenu', component: TopMenu },
    {name: 'NavigationMenu', component: NavigationMenu },
    {name: 'Orders', component: Orders },
    {name: 'Products', component: Products },
    {name: 'Overview', component: Overview },
    {name: 'SessionCounter', component: SessionCounter },
    {name: 'ListItem', component: ListItem },
    {name: 'OrderLink', component: OrderLink },
    {name: 'Popup', component: Popup },
    {name: 'PopupButtonDelete', component: PopupButtonDelete },
    {name: 'PopupButtonCancel', component: PopupButtonCancel },
    {name: 'ButtonDelete', component: ButtonDelete },
    {name: 'ButtonMenu', component: ButtonMenu },
    {name: 'AddButton', component: AddButton },
]


export default {
    install (app) {
        components.forEach(({ name, component }) =>{
            app.component(name, component)
        })
    }
}