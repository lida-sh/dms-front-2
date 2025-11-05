<template>
  <ClientOnly>
    <div class="pdf-viewer">
      <div v-if="loading" class="text-gray-500 text-center py-6">
        📄 در حال بارگذاری PDF...
      </div>

      <div v-else-if="error" class="text-red-600 text-center py-6 bg-red-50 rounded-md">
        ❌ {{ error }}
      </div>

      <div v-else class="pdf-container">
        <div ref="viewerContainer" class="relative flex justify-center">
          <canvas ref="canvas"></canvas>
          <div ref="textLayer" class="absolute inset-0 pointer-events-none"></div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import * as pdfjsLib from "pdfjs-dist"
import "pdfjs-dist/web/pdf_viewer.css"
import { ref, onMounted, nextTick, watch } from "vue"

// ✅ استفاده از worker داخلی (بدون خطای MIME)

import { ref, watch, nextTick, onMounted } from 'vue'


pdfjsLib.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.min.js'
// 🧩 Props از والد
const props = defineProps({
  pdfUrl: { type: String, required: true },
  pageNumber: { type: Number, default: 1 },
  keyword: { type: String, default: "" },
})

const loading = ref(true)
const error = ref("")
const pdfDoc = ref(null)
const canvas = ref(null)
const textLayer = ref(null)
let rendering = false

// ✨ تابع هایلایت
function highlightKeyword(keyword) {
  if (!keyword) return

  const spans = textLayer.value.querySelectorAll("span")
  const regex = new RegExp(keyword, "gi")

  spans.forEach((span) => {
    const text = span.textContent
    if (regex.test(text)) {
      span.innerHTML = text.replace(regex, (match) => {
        return `<mark class="bg-yellow-300 text-black rounded-sm px-1">${match}</mark>`
      })
    }
  })
}

// ✨ رندر صفحه خاص
async function renderPage(num) {
  if (!pdfDoc.value) return
  rendering = true

  const page = await pdfDoc.value.getPage(num)
  const scale = 1.5
  const viewport = page.getViewport({ scale })

  const ctx = canvas.value.getContext("2d")
  canvas.value.height = viewport.height
  canvas.value.width = viewport.width

  // رندر PDF در canvas
  await page.render({ canvasContext: ctx, viewport }).promise

  // استخراج متن برای textLayer
  const textContent = await page.getTextContent()
  const textLayerDiv = textLayer.value
  textLayerDiv.innerHTML = ""

  await pdfjsLib.renderTextLayer({
    textContent,
    container: textLayerDiv,
    viewport,
    textDivs: [],
  }).promise

  // بعد از رندر کامل، هایلایت کن
  highlightKeyword(props.keyword)
  rendering = false
}

// ✨ لود PDF
async function loadPdf() {
  try {
    loading.value = true
    error.value = ""

    const pdf = await pdfjsLib.getDocument(props.pdfUrl).promise
    pdfDoc.value = pdf
    console.log(`✅ PDF لود شد: ${pdf.numPages} صفحه`)
    await nextTick()
    await renderPage(props.pageNumber)
  } catch (err) {
    console.error(err)
    error.value = "خطا در بارگذاری PDF"
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await nextTick()
  if (props.pdfUrl) await loadPdf()
})

watch(() => props.pageNumber, async (newPage) => {
  if (pdfDoc.value) await renderPage(newPage)
})
</script>

<style scoped>
.pdf-viewer {
  direction: rtl;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.pdf-container {
  position: relative;
  display: inline-block;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
canvas {
  border: 1px solid #ddd;
  border-radius: 6px;
  max-width: 100%;
  height: auto;
}
.textLayer {
  text-align: right;
  direction: rtl;
  font-family: sans-serif;
  line-height: 1;
}
mark {
  background-color: #ffe26b;
}
</style>
