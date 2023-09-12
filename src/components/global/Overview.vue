<script setup>
    import {orders} from '../../store/front-end-data.json';
    const ordersList = orders;
</script>

<template>
    <div class="overview">
        <ul>
            <li v-for="order in ordersList" :key="order.id">
                {{order.title}}
            </li>
        </ul>
    </div>

</template>

<style scoped>
.overview{
    width: 100%;
    height: 100%;
}
</style>