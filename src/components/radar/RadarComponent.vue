<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'RadarComponent',
  extends: Radar,
  data() {
    return {
      chartData: {
        labels: ['Comer', 'Beber', 'Dormir', 'Jugar', 'Trabajar', 'Bici', 'Correr'],
        datasets: [
          {
            label: 'Hombres',
            data: [65, 59, 90, 81, 56, 55, 40],
            backgroundColor: '#a0d080',
            borderColor: 'green',
            pointBackgroundColor: '#c9fbc2',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#09a330',
          },
          {
            label: 'Mujeres',
            data: [28, 48, 40, 19, 96, 27, 100],
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
      },
    };
  },
  mounted() {
    if (this.$route.path === '/radar') {
      this.generarTitulo();
      this.pintarBoton();
      this.renderChart(this.chartData, this.options);
    }
  },
  methods: {
    // Metodo para generar datos aleatorios en la grafica
    randomize() {
      // Log de seguimiento
      console.log('RadarComponent.vue - Metodo randomize');

      for (let i = 0; i < this.chartData.datasets.length; i++) {
        for (let j = 0; j < this.chartData.datasets[i].data.length; j++) {
          this.chartData.datasets[i].data[j] = this.generateNumber(i);
        }
      }
      this.renderChart(this.chartData, this.options);
    },
    // Metodo para generar los numeros
    generateNumber(i) {
      return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
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
        titulo.innerText = 'Grafico de Radar';
        titulo.id = 'titulo';
        titulo.className = 'm-3';
        grafica = document.getElementById('radar-chart');
        grafica.parentNode.insertBefore(titulo, grafica);
        hr = document.createElement('hr');
        hr.id = 'linea';
        grafica = document.getElementById('radar-chart');
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
        grafica = document.getElementById('radar-chart');
        grafica.parentNode.appendChild(boton, grafica);
      }
    },
  },
};
</script>
