<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/linea">
        <img src="../../../assets/img/logo.png" alt="Graficos" title="Graficos" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="nav-collapse"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="nav-collapse" class="collapse navbar-collapse" :class="{ show: isOpen }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/linea" active-class="active">Lineas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/barra" active-class="active">Barras</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/donut" active-class="active">Donut</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/radar" active-class="active">Radar</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>
