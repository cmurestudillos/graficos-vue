import Vue from 'vue';
// Rutas
import VueRouter from 'vue-router';
// Componentes
import LineaComponent from '../components/linea/LineaComponent.vue';
import BarraComponent from '../components/barra/BarraComponent.vue';
import ErrorComponent from '../components/shared/error/ErrorComponent.vue';

// ---------------------------------------------------------------//
// Configuracion del enrutamiento                                 //
// ---------------------------------------------------------------//
Vue.use(VueRouter);

const routes = [
    {path: '/linea', component: LineaComponent},
    {path: '/barra', component: BarraComponent},
    {path: '*', component: ErrorComponent }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;