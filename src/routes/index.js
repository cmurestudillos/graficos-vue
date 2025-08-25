import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';
// Componentes
import LineaComponent from '../components/linea/LineaComponent.vue';
import BarraComponent from '../components/barra/BarraComponent.vue';
import DonutComponent from '../components/donut/DonutComponent.vue';
import RadarComponent from '../components/radar/RadarComponent.vue';
import ErrorComponent from '../components/shared/error/ErrorComponent.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/linea' },
  { path: '/linea', component: LineaComponent },
  { path: '/barra', component: BarraComponent },
  { path: '/donut', component: DonutComponent },
  { path: '/radar', component: RadarComponent },
  { path: '*', component: ErrorComponent },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
