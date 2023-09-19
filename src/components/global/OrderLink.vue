<script setup>
</script>

<template>
    <a class="order-link" href="#">
        <slot></slot>
    </a>
</template>

<style scoped lang="scss">  
.order-link{
    width: 40%;
    transition: 0.4s ease-in-out;
    color: #546E7A;
    &:hover{
        opacity: 0.7;
    }
}
</style>