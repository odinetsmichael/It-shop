<script setup>
</script>

<template>
    <li class="list-item">
        <slot>

        </slot>
    </li>
</template>

<style scoped lang="scss">  
.list-item{
    padding: 0 30px;
    margin-top: 15px;
    list-style-type: none;
    width: 100%;
    border-radius: 4px;
    border: 2px solid #CFD8DC;
    font-size: 22px;
    font-weight: normal;
    color: #546E7A;
}
</style>