<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'LineaComponent',
  extends: Line,
  data() {
    return {
      chartData: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [
          {
            label: 'Pizza',
            data: [650, 590, 800, 810, 560, 550, 400],
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          },
          {
            label: 'Spaguetti',
            data: [280, 480, 400, 190, 860, 270, 900],
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
          },
          {
            label: 'Macarrones',
            data: [180, 480, 770, 90, 1000, 270, 400],
            backgroundColor: '#a0d080',
            borderColor: 'green',
            pointBackgroundColor: '#c9fbc2',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#09a330',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              id: 'y-axis-0',
              position: 'left',
            },
            {
              id: 'y-axis-1',
              position: 'right',
              gridLines: {
                color: 'green',
              },
              ticks: {
                fontColor: 'green',
              },
            },
          ],
          xAxes: [{}],
        },
        legend: {
          display: true,
        },
        responsive: true,
      },
    };
  },
  mounted() {
    if (this.$route.path === '/linea') {
      this.generarTitulo();
      this.pintarBoton();
      this.renderChart(this.chartData, this.options);
    }
  },
  methods: {
    // Metodo para generar datos aleatorios en la grafica
    randomize() {
      // Log de seguimiento
      console.log('LineaComponent.vue - Metodo randomize');

      for (var i = 0; i < this.chartData.datasets.length; i++) {
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
        titulo.innerText = 'Grafico de Lineas';
        titulo.id = 'titulo';
        titulo.className = 'm-3';
        grafica = document.getElementById('line-chart');
        grafica.parentNode.insertBefore(titulo, grafica);
        hr = document.createElement('hr');
        hr.id = 'linea';
        grafica = document.getElementById('line-chart');
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
        grafica = document.getElementById('line-chart');
        grafica.parentNode.appendChild(boton, grafica);
      }
    },
  },
};
</script>
