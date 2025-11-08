<template>
  <div>
    <ClientOnly fallback="در حال بارگذاری...">
      
      <PdfViewer6 :pdfUrl="filePath" :highlightWord="keyword" :highlightPages="[1, 2, 4]" :page-number="page"/>
      <!-- <PdfViewer7 :pdfUrl="`http://dms-back.test/pdf/${filePath}`" :keyword="keyword" :highlightPages="[1, 2, 4]" :page-number="page"/> -->
    </ClientOnly>
    <!-- <PdfViewer :path="filePath" :keyword="keyword" :pages="pages" /> -->
    <!-- <PdfViewer2 :pdfUrl="filePath" /> -->
    <!-- <PdfViewer3 :pdfUrl="filePath" /> -->

  </div>
</template>

<script setup lang="ts">

const route = useRoute()

const filePath = route.query.path as string
const keyword = route.query.keyword as string
const pages = JSON.parse(route.query.pages as string)
const fileName = route.query.name as string
const page = Array.isArray(pages) ? pages[0] : parseInt(pages)
</script>

<style scoped></style>