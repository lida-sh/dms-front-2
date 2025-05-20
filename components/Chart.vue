<template>
    <div class="w-full">
        <canvas ref="myChart" ></canvas>
    </div>
</template>

<script setup lang="ts">
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
// const ctx = document.getElementById('myChart');
const myChart = ref(null)
let chartInstance: Chart | null = null
 
onMounted(()=>{
    if (myChart.value) {
    chartInstance = new Chart(myChart.value, {
    type: 'bar',
    data: {
      labels: ['معاونت شبکه', 'تنظیم مقررات', 'معاونت تجاری و خدمات مشتریان', 'معاونت راهبرد و توسعه کسب و کار', 'معاونت مالی', 'معاونت زنجیره تامین'],
      datasets: [{
        label: '# ارزیابی',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
 }

})
  
</script>

<style scoped></style>