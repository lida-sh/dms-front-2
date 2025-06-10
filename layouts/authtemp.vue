<template>
    <div class="flex flex-col items-center justify-center w-full h-screen back-login">
       <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.back-login {
background-image: url("/public/images/back-login.jpg");
background-size: 100% 100%;
}

</style>