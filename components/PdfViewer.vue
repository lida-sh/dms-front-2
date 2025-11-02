<template>
    <!-- <div class="flex flex-col gap-6"> -->
    
    <div ref="pdfContainer" class="flex flex-col items-center p-6"></div>
     <!-- <iframe :src="path" width="100%" height="1200px"></iframe> -->
  <!-- </div> -->
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'


import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker?url'


pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

// پیکربندی worker PDF.js
// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker as unknown as string

// ✨ نوع‌دهی دقیق props
interface Props {
  path: string             // مسیر فایل PDF
  keyword: string         // کلمه‌ی مورد جستجو برای هایلایت
  pages?: number[]        // شماره صفحات شامل کلمه
}

const props = defineProps<Props>()
const scale = 1.3
// لیست canvasها برای هر صفحه
const pdfContainer = ref<HTMLDivElement | null>(null)

onMounted(async () => {
  if (!process.client || !pdfContainer.value) return

  const loadingTask = pdfjsLib.getDocument(`http://dms-back.test/pdf/${props.path}`)
  const pdf = await loadingTask.promise
  console.log(`✅ PDF loaded with ${pdf.numPages} pages`)

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber)
    const viewport = page.getViewport({ scale })
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!

    canvas.width = viewport.width
    canvas.height = viewport.height
    canvas.style.marginBottom = '20px'
    canvas.style.border = '1px solid #eee'
    pdfContainer.value.appendChild(canvas)

    await page.render({ canvasContext: context, viewport }).promise
  }
})
</script>
<style scoped>

</style>