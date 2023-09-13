import { createApp } from 'vue'
import App from './App.vue'
import  globalComponents  from './components/global/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router'
// import * as socketIo from 'socket.io'

// const socketIo = require('socket.io');

const app = createApp(App);

app.use(router);
app.use(globalComponents);

app.mount('#app')

// const io = socketIo(server);

// let activeSessions = 0;

// io.on('connection', (socket) => {
//   activeSessions++;
//   io.emit('updateSessions', activeSessions); // Отправляем количество активных сессий всем клиентам
//   console.log('Новое подключение');

//   socket.on('disconnect', () => {
//     activeSessions--;
//     io.emit('updateSessions', activeSessions); // Отправляем обновленное количество активных сессий всем клиентам
//     console.log('Подключение разорвано');
//   });
// });

