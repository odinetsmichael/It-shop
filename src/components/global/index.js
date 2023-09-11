import Header from './Header.vue'
import TopMenu from './TopMenu.vue'
import NavigationMenu from './NavigationMenu.vue'

const components = [
    {name: 'Header', component: Header },
    {name: 'TopMenu', component: TopMenu },
    {name: 'NavigationMenu', component: NavigationMenu }
]

export default {
    install (app) {
        components.forEach(({ name, component }) =>{
            app.component(name, component)
        })
    }
}