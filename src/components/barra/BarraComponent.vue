<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'BarraComponent',
  extends: Bar,
  data() {
    return {
      chartData: {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [
          {
            label: 'Chocolate',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: '#a0d080',
            borderColor: 'green',
            pointBackgroundColor: '#c9fbc2',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#09a330',
          },
          {
            label: 'Azucar',
            data: [28, 48, 40, 19, 86, 27, 90],
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
        scales: { yAxes: [{}], xAxes: [{}] },
        legend: {
          display: true,
        },
        responsive: true,
      },
    };
  },
  mounted() {
    if (this.$route.path === '/barra') {
      this.generarTitulo();
      this.pintarBoton();
      this.renderChart(this.chartData, this.options);
    }
  },
  methods: {
    // Metodo para generar datos aleatorios en la grafica
    randomize() {
      // Log de seguimiento
      console.log('BarraComponent.vue - Metodo randomize');

      const data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];

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
        titulo.innerText = 'Grafico de Barras';
        titulo.id = 'titulo';
        titulo.className = 'm-3';
        grafica = document.getElementById('bar-chart');
        grafica.parentNode.insertBefore(titulo, grafica);
        hr = document.createElement('hr');
        hr.id = 'linea';
        grafica = document.getElementById('bar-chart');
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
        grafica = document.getElementById('bar-chart');
        grafica.parentNode.appendChild(boton, grafica);
      }
    },
  },
};
</script>
