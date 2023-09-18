import { createApp } from 'vue'
import App from './App.vue'
import  globalComponents  from './components/global/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router/router'

const app = createApp(App);

app.use(router);
app.use(globalComponents);

app.mount('#app')


