import { createRouter, createWebHistory } from 'vue-router';
import LineaComponent from '../components/linea/LineaComponent.vue';
import BarraComponent from '../components/barra/BarraComponent.vue';
import DonutComponent from '../components/donut/DonutComponent.vue';
import RadarComponent from '../components/radar/RadarComponent.vue';
import ErrorComponent from '../components/shared/error/ErrorComponent.vue';

const routes = [
  { path: '/', redirect: '/linea' },
  { path: '/linea', component: LineaComponent },
  { path: '/barra', component: BarraComponent },
  { path: '/donut', component: DonutComponent },
  { path: '/radar', component: RadarComponent },
  { path: '/:pathMatch(.*)*', component: ErrorComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
