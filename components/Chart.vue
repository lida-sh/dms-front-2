<template>
    <div ref="chartContainer" class="min-h-[600px] px-10 w-full lg:w-[30rem] xl:w-[50rem]">
    <Bar v-if="showChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';
// const ctx = document.getElementById('myChart');
// const myChart = ref(null)
// let chartInstance: Chart | null = null
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

import { Bar } from 'vue-chartjs'
import { useIntersectionObserver } from '@vueuse/core'
const showChart = ref(false)
const chartContainer = ref(null)
// ثبت کامپوننت‌ها و ماژول‌های موردنیاز
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
// onMounted(()=>{
//     if (myChart.value) {
//     chartInstance = new Chart(myChart.value, {
//     type: 'bar',
//     data: {
//       labels: ['معاونت شبکه', 'تنظیم مقررات', 'معاونت تجاری و خدمات مشتریان', 'معاونت راهبرد و توسعه کسب و کار', 'معاونت مالی', 'معاونت زنجیره تامین'],
//       datasets: [{
//         label: '# ارزیابی',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
//  }

// })

const props = defineProps<{data: number[]}>()
 const chartData = {
  labels: ['معاونت شبکه', 'معاونت تنظیم مقررات', 'معاونت توسعه سرمایه انسانی', 'معاونت راهبرد و توسعه کسب و کار','معاونت تجاری و خدمات مشتریان','معاونت فنادری اطلاعات','معاونت پشتیبانی و زنجیره تامین','معاونت مالی', 'اداره کل ارتباطات و امور بین الملل'],
  datasets: [
    {
      label: 'نمره از 100',
      font: {
          size: 10,
          family: 'siteFont', // یا هر فونت دلخواه
          weight: 'bold',
        },
      data: props.data,
      backgroundColor: '#4749e3',
      barThickness: 20
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 13,
          family: 'siteFont', // یا هر فونت دلخواه
          weight: 'bold',
        },
      },
    },
    title: {
      display: true,
      text: 'نمودار ارزیابی فرایندی حوزه های ستادی سال 1402 ',
      font: {
          size: 18,
          family: 'siteFont', // یا هر فونت دلخواه
          weight: 'bold',
        },
    },
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0,0,0,0.7)',  // رنگ پس‌زمینه تولتیپ
      titleFont: {
        family: 'siteFont',
        size: 14,
        weight: 'bold',
      },
      bodyFont: {
        family: 'siteFont',
        size: 12,
        weight: 'normal',
      },
      footerFont: {
        family: 'siteFont',
        size: 10,
        weight: 'normal',
      },
      titleColor: '#fff',
      bodyColor: '#fff',
      footerColor: '#ddd',
    },
  },
  maintainAspectRatio: false,
  animation: {
    duration: 1000, // مدت زمان انیمیشن به میلی‌ثانیه (اینجا: ۱ ثانیه)
    easing: 'easeOutQuart',
    delay: (context) => {
      const index = context.dataIndex
      const datasetIndex = context.datasetIndex
      return index * 200 // هر میله با فاصله 200ms ظاهر بشه
    },
  },
   scales: {
    x: {
       
      ticks: {
        maxRotation: 0,  // ❗️جلوگیری از چرخش برچسب‌ها
        minRotation: 55,
        font: {
        family: 'siteFont', // فونت دلخواه
        size: 12,            // اندازه فونت
        weight: 'bold',    // ضخامت
      },
      },
      
    },
    y: {
    beginAtZero: true,
    max: 100,  // <-- اینجا مقدار max رو بذار
    ticks: {
      font: {
        family: 'siteFont',
        size: 12,
        weight: 'bold',
      },
    },
  },
  },
} 
useIntersectionObserver(chartContainer, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    showChart.value = true
  }
}, {
  threshold: 0.3,
})
// onMounted(() => {
//   const observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//       showChart.value = true
//       observer.disconnect() // فقط یک‌بار اجرا بشه
//     }
//   }, {
//     threshold: 0.3, // وقتی ۳۰٪ چارت توی دید بود
//   })

//   if (chartContainer.value) {
//     observer.observe(chartContainer.value)
//   }
// })
</script>

<style scoped></style>