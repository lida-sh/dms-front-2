<template>
  <div class="flex w-full items-center justify-center">
    <ClientOnly fallback="در حال بارگذاری...">
      
      <PdfViewer6 :pdfUrl="filePath" :highlightWord="keyword" :highlightPages="[1, 2, 4]" :page-number="page"/>
      <!--<PdfViewerWithTextLayer 
            :pdfUrl="filePath" 
            :positions="positions"
            :pageNumber="getFirstPage(positions)"
          /> -->
    </ClientOnly>
    <!-- <PdfViewer :path="filePath" :keyword="keyword" :pages="pages" /> -->
    <!-- <PdfViewer2 :pdfUrl="filePath" /> -->
    <!-- <PdfViewer3 :pdfUrl="filePath" /> -->

  </div>
</template>

<script setup lang="ts">

const route = useRoute()
const searchResults = ref([])

const getFirstPage = (positions) => {
  if (!positions || positions.length === 0) return 1
  return Math.min(...positions.map(p => p.page))
}
const filePath = route.query.path as string
const keyword = route.query.keyword as string
const pages = JSON.parse(route.query.pages as string)
const positions = JSON.parse(route.query.positions as string)
const fileName = route.query.name as string
const page = Array.isArray(pages) ? pages[0] : parseInt(pages)
</script>

<style scoped></style>