<template>
    <div>
      <span>Счетчик активных сессий: {{ sessionCounter }}</span>
    </div>
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
  
  <style>
  /* Ваши стили здесь */
  </style>
  