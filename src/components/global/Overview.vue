<script setup>


</script>

<template>
    <div class="overview">

        <NavigationMenu/>

        <div class="page">
            <slot></slot>
        </div>

    </div>
</template>

<style scoped lang="scss"> 
@import '@/assets/main.scss'; 
.overview{
    display: flex;
    width: 100%;
    height: 100vh;
}
.page{
    width: 85%;
    background-color: $bg-grey;
    padding: 50px 70px;
}
</style>