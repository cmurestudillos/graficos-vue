<template>
  <div class="container">
    <h3 class="m-3 chart-title">Grafico de Lineas</h3>
    <hr class="chart-divider" />
    <div class="chart-wrapper">
      <Line id="line-chart" :data="chartData" :options="chartOptions" />
    </div>
    <div class="chart-actions">
      <button class="btn btn-4 w-25" @click="randomize">Aleatorio</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Line } from 'vue-chartjs';

const generateNumber = i => Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);

const chartData = ref({
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
      yAxisID: 'y1',
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true },
  },
  scales: {
    y: { type: 'linear', display: true, position: 'left' },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: { color: 'green' },
      ticks: { color: 'green' },
    },
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
