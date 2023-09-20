<template>
  <div class="top-menu d-flex justify-content-between">

    <div class="date-wrapper">
      <div>Today</div>
      <span class="date">{{ formattedDate }} </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
      </svg>
      <span>{{ formattedTime }}</span>


    </div>

    <SessionCounter/>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const currentDateTime = ref(new Date());

    const formattedDate = computed(() => {
      const date = currentDateTime.value.getDate();
      const month = currentDateTime.value.toLocaleString('en-US', { month: 'short' });
      const year = currentDateTime.value.getFullYear();
      return `${date} ${month} ${year}`;
    });

    const formattedTime = computed(() => {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      return currentDateTime.value.toLocaleString('en-US', options);
    });

    const updateDateTime = () => {
      setInterval(() => {
        currentDateTime.value = new Date();
      }, 1000);
    };

    onMounted(() => {
      updateDateTime();
    });

    return {
      formattedDate,
      formattedTime,
    };
  },
};
</script>

<style scoped lang="scss"> 
@import '@/assets/main.scss'; 
.top-menu{
  width: 20%;
  svg{
    margin: 0 10px;
    fill: green;
  }
}
</style>