import Vue from 'vue';
import App from './App.vue';
import Style from './App.css';
import Responsive from './responsive.css';
import GoogleFonts from './assets/fonts/googlefonts.css';
// Rutas
import router from './routes/index';
// Bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Graficos
import VueCharts from 'vue-chartjs';

// ---------------------------------------------------------------//
// Configuracion para test/produccion                             //
// ---------------------------------------------------------------//
Vue.config.productionTip = false;
// ---------------------------------------------------------------//
// BootstrapVue                                                   //
// ---------------------------------------------------------------//
Vue.use(BootstrapVue);
// ---------------------------------------------------------------//
// ChartsVue                                                      //
// ---------------------------------------------------------------//
Vue.use(VueCharts);

new Vue({
  router,
  render: h => h(App, Style, Responsive, GoogleFonts),
}).$mount('#app');
