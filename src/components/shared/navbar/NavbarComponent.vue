<template>
  <b-navbar toggleable="lg" type="dark" class="bg-custom">
    <b-navbar-brand>
      <img src="../../../assets/img/logo.png" alt="Graficos" title="Graficos" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="item"><router-link to="/linea" active-class="active">Lineas</router-link></b-nav-item>
        <b-nav-item class="item"><router-link to="/barra" active-class="active">Barras</router-link></b-nav-item>
        <b-nav-item class="item"><router-link to="/donut" active-class="active">Donut</router-link></b-nav-item>
        <b-nav-item class="item"><router-link to="/radar" active-class="active">Radar</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BNavbar } from 'bootstrap-vue';
export default {
  name: 'NavbarComponent',
  components: {
    BNavbar,
  },
};
</script>
