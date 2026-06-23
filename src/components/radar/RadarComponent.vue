<template>
  <div class="container">
    <h3 class="m-3 chart-title">Grafico de Radar</h3>
    <hr class="chart-divider" />
    <div class="chart-wrapper">
      <Radar id="radar-chart" :data="chartData" :options="chartOptions" />
    </div>
    <div class="chart-actions">
      <button class="btn btn-4 w-25" @click="randomize">Aleatorio</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Radar } from 'vue-chartjs';

const generateNumber = i => Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);

const chartData = ref({
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
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true },
  },
};

const randomize = () => {
  chartData.value = {
    ...chartData.value,
    datasets: chartData.value.datasets.map((dataset, i) => ({
      ...dataset,
      data: dataset.data.map(() => generateNumber(i)),
    })),
  };
};
</script>
