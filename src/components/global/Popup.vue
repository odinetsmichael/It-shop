<script setup>
</script>

<template>
    <div class="popup">
        <div class="popup__header">
            popup-header
        </div>
        <div class="popup__content">
            <slot></slot>
        </div>
        <div class="popup-footer">
            popup-footer
        </div>
    </div>
</template>

<style scoped lang="scss">  
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
  .popup[hidden] {
    display: none;
  }

</style>
