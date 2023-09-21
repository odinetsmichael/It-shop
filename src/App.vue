<script setup>
</script>

<template>
  <div class="main">
    <Header/>
    <Overview>
      <router-view></router-view>
    </Overview>
  </div>
</template>

<style lang="scss">
  .main{
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
  }
</style>
