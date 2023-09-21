<script setup>
</script>

<template>
    <div class="header-menu">
        <nav class="navbar navbar-light">
            <div class="container">
                <div class="logo">
                    <img src="../../icons/logo.png" alt="logo">
                     <span class="logo__name">INVENTORY</span>
                </div>
                <SearchPanel/>
                <TopMenu/> 
            </div>
        </nav>
    </div>
</template>

<style scoped lang="scss"> 
@import '@/assets/main.scss'; 
.header-menu{
    width: 100%;
    z-index: 1000;
    box-shadow: 12px 0 20px rgba(0, 0, 0, 0.1);
    .logo{
        &__name{
          color: $main-green; 
          font-weight: bold;     
        }
    }
}
</style>
