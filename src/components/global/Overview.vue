<script setup>


</script>

<template>
    <div class="overview"   >
        <slot></slot>
    </div>
</template>

<style scoped lang="scss"> 
@import '@/assets/main.scss'; 
.overview{
    background-color: #EEF1F3;
    position: relative;
    padding: 50px 70px;
    width: 100%;
    height: 100%;
}
</style>