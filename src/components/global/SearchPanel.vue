<script setup>
</script>

<template>
    <input 
        class="search-panel" 
        type="text"
        placeholder="Поиск"
    >
</template>

<style scoped lang="scss"> 
@import '@/assets/main.scss'; 

input{
    width: 350px;
    color: $title-black;
    padding: 2px 10px;
    background-color: $bg-grey;
    border: 1px solid #e1e2e4;;
    border-radius: 4px;
}
input::placeholder {
    color: $title-black;
    font-weight: bold;
}

</style>
