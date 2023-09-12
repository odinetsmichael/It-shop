<script setup>
import {orders} from '../../store/front-end-data.json';
const ordersList = orders;
</script>

<template>
    <ul>
        <li v-for="order in ordersList" :key="order.id">
            {{order.title}}
        </li>
    </ul>
</template>

<style scoped>
</style>
