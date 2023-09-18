<script setup>

</script>

<template>
    <div class="overlay"></div>
    <div class="popup">
        <div class="popup__header">
            Вы уверены что хотите удалить этот приход?
        </div>
        <div class="popup__content">
            <slot></slot>
        </div>
        <div class="popup__footer">
            <PopupButtonCancel/>
            <PopupButtonDelete/>
        </div>
    </div>
</template>

<style scoped lang="scss">  

.overlay {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(70, 90, 108, 0.4);
    z-index: 999;
}
.popup {
    padding: 0;
    height: max-content;
    width: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 32px 60px -5px rgba(0,0,0,0.1);
    z-index: 1000;
    &__header{
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 20px;
        font-size: 24px;
        font-weight: bold;
        color: #2C3C44;
        border-bottom: 1px solid #F0F3F5;
    }
    &__footer{
        width: 100%;
        padding: 30px;
        display: flex;
        justify-content: right;
        align-items: center;
        background-color: #87BF48;
    }
    &__content{
        display: flex;
        justify-content: center ;
        align-items: center;
        padding: 20px;
    }
  }
  .popup[hidden] {
    display: none;
  }


</style>
