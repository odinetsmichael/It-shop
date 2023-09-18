<script setup>
</script>

<template>
    <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.dropdown-toggle{
    display: flex;
    justify-content: space-between;
    color: #2C3C44;
    font-weight: bold;
    align-items: center;
    background-color: white;
    text-align: left;
    border: 1px solid #90A4AE;
    width: 350px;
    &:after{
        color: #90A4AE;
    }
}
</style>
