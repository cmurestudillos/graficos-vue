<template>
  <div class="container">
    <h3 class="m-3 chart-title">Grafico de Donut</h3>
    <hr class="chart-divider" />
    <div class="chart-wrapper">
      <Doughnut id="doughnut-chart" :data="chartData" :options="chartOptions" />
    </div>
    <div class="chart-actions">
      <button class="btn btn-4 w-25" @click="randomize">Aleatorio</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Doughnut } from 'vue-chartjs';

const generateNumber = () => Math.round(Math.random() * 100);

const chartData = ref({
  labels: ['Chorizo', 'Salchichon', 'Mortadela'],
  datasets: [
    {
      data: [35, 45, 100],
      backgroundColor: ['#a0d080', '#d08080', '#61dbfb'],
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
    datasets: chartData.value.datasets.map(dataset => ({
      ...dataset,
      data: dataset.data.map(() => generateNumber()),
    })),
  };
};
</script>
