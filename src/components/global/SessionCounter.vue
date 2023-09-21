<template>
    <div class="session-counter"> Счетчик активных сессий: {{ sessionCounter }}</div>
</template>
  
<script>
  import { ref, onMounted } from 'vue';
  import io from 'socket.io-client';

  export default {
    setup() {
      const sessionCounter = ref(0);

      const socket = io();

      socket.on('updateSessions', (activeSessions) => {
        sessionCounter.value = activeSessions;
      });

      onMounted(() => {
        console.log('Компонент App монтирован.');
      });

      return {
        sessionCounter,
      };
    },
  };
</script>
  
<style scoped lang="scss"> 
  @import '@/assets/main.scss'; 
  .session-counter{
    width: 60%;
    font-size: 14px;
  }

</style>
  