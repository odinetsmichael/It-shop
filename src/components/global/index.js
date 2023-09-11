import Header from './Header.vue'
import TopMenu from './TopMenu.vue'
import LeftMenu from './LeftMenu.vue'

const components = [
    {name: 'Header', component: Header },
    {name: 'TopMenu', component: TopMenu },
    {name: 'LeftMenu', component: LeftMenu }
]

export default {
    install (app) {
        components.forEach(({ name, component }) =>{
            app.component(name, component)
        })
    }
}