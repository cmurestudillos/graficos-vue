<template>
  <div id="app">
    <NavbarComponent />
    <router-view class="container" />
    <FooterComponent />
  </div>
</template>

<script setup>
import NavbarComponent from './components/shared/navbar/NavbarComponent.vue';
import FooterComponent from './components/shared/footer/FooterComponent.vue';
</script>
