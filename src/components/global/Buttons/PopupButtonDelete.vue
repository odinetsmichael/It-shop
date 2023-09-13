<script setup>
</script>

<template>
    <button class="popup-button__delete">
        <ButtonDelete/>
        <span>Удалить</span>
    </button>
</template>

<style scoped lang="scss">  
    .popup-button__delete{
        transition: 0.4s ease-in-out;
        border-radius: 40px;
        border: none;
        background-color: #FFFF;
        width: 160px;
        height: 50px;
        color: #E8364F;
        align-items: center;
        display: flex;
        justify-content: center;
        span{
            margin-left: 5px;
            font-weight: bold;
            font-size: 16px;
            text-transform: uppercase;
        }
        svg{
            fill: #E8364F;
        }

        &:hover{
            background-color: #E8364F;
            color: #FFFF;
            svg{
                fill:#FFFF !important;
            }
        }
    }
</style>