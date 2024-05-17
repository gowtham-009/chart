<template>
    <div>
      <canvas ref="myChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  export default {
    mounted() {
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Looping tension',
          data: [65, 59, 80, 81, 26, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
        }]
      };
  
      const config = {
        type: 'line',
        data: data,
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          scales: {
            y: {
              min: 0,
              max: 100
            }
          }
        }
      };
  
      new Chart(this.$refs.myChart, config);
    }
  };
  </script>
  
  <style scoped>
  /* Add any styles you need for your chart component */
  </style>
  