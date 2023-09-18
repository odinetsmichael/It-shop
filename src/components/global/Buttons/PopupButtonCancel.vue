<script setup>
    import {isInfoPopupVisible} from '@/constants/popupPageConst';

    function closeConfirmationWindow() {
        isInfoPopupVisible.value = false;
    } 
</script>

<template>
    <button @click="closeConfirmationWindow()" class="popup-button__cancel">
        <span>Отменить</span>
    </button>
</template>

<style scoped lang="scss">  
    .popup-button__cancel{
        margin-right: 5px;
        transition: 0.4s ease-in-out;
        border-radius: 40px;
        border: none;
        background-color: transparent;
        width: 160px;
        height: 50px;
        color: #fff;
        align-items: center;
        display: flex;
        justify-content: center;
        span{
            margin-left: 5px;
            font-weight: bold;
            font-size: 16px;
            text-transform: uppercase;
        }

        &:hover{

            background-color: #5a7d31;
            color: #FFFF;
        }
    }
</style>