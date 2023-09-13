<script setup>
</script>

<template>
    <a class="order-link col-4" href="#">
        <slot></slot>
    </a>
</template>

<style scoped lang="scss">  
.order-link{
    transition: 0.4s ease-in-out;
    color: #546E7A;
    &:hover{
        opacity: 0.7;
    }
}
</style>