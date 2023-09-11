import Header from './Header.vue'
import TopMenu from './TopMenu.vue'

const components = [
    {name: 'Header', component: Header },
    {name: 'TopMenu', component: TopMenu }
]

export default {
    install (app) {
        components.forEach(({ name, component }) =>{
            app.component(name, component)
        })
    }
}