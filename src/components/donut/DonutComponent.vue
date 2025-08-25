<script>
import { Doughnut } from 'vue-chartjs';

export default {
  name: 'DonutComponent',
  extends: Doughnut,
  data() {
    return {
      chartData: {
        labels: ['Chorizo', 'Salchichon', 'Mortadela'],
        datasets: [
          {
            data: [35, 45, 100],
            backgroundColor: ['#a0d080', '#d08080', '#61dbfb'],
          },
        ],
      },
    };
  },
  mounted() {
    if (this.$route.path === '/donut') {
      this.generarTitulo();
      this.pintarBoton();
      this.renderChart(this.chartData, this.options);
    }
  },
  methods: {
    // Metodo para generar datos aleatorios en la grafica
    randomize() {
      // Log de seguimiento
      console.log('DonutComponent.vue - Metodo randomize');

      const data = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)];

      this.chartData.datasets[0].data = data;
      this.renderChart(this.chartData, this.options);
    },
    generarTitulo() {
      var titulo, hr, grafica;
      if (titulo) {
        titulo = document.getElementById('titulo');
        titulo.remove();
        hr = document.getElementById('linea');
        hr.remove();
      } else {
        titulo = document.createElement('h3');
        titulo.innerText = 'Grafico de Donut';
        titulo.id = 'titulo';
        titulo.className = 'm-3';
        grafica = document.getElementById('doughnut-chart');
        grafica.parentNode.insertBefore(titulo, grafica);
        hr = document.createElement('hr');
        hr.id = 'linea';
        grafica = document.getElementById('doughnut-chart');
        grafica.parentNode.insertBefore(hr, grafica);
      }
    },
    pintarBoton() {
      var boton, grafica;
      if (boton) {
        boton = document.getElementById('aleatorio');
        boton.remove();
      } else {
        boton = document.createElement('button');
        boton.innerText = 'Aleatorio';
        boton.id = 'aleatorio';
        boton.className = 'btn ';
        boton.className += 'btn-4 ';
        boton.className += 'btn-block ';
        boton.className += 'w-25 ';
        boton.className += 'text-center';
        boton.addEventListener('click', this.randomize);
        grafica = document.getElementById('doughnut-chart');
        grafica.parentNode.appendChild(boton, grafica);
      }
    },
  },
};
</script>
