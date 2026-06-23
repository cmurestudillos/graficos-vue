<template>
  <div class="container">
    <h3 class="m-3 chart-title">Grafico de Barras</h3>
    <hr class="chart-divider" />
    <div class="chart-wrapper">
      <Bar id="bar-chart" :data="chartData" :options="chartOptions" />
    </div>
    <div class="chart-actions">
      <button class="btn btn-4 w-25" @click="randomize">Aleatorio</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';

const generateNumber = i => Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);

const chartData = ref({
  labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  datasets: [
    {
      label: 'Chocolate',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: '#a0d080',
      borderColor: 'green',
    },
    {
      label: 'Azucar',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
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
    x: {},
    y: {},
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
