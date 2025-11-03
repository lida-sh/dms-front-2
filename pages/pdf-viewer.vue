<template>
    <div>
     <!-- <PdfViewer :path="filePath" :keyword="keyword" :pages="pages" /> -->
      <!-- <PdfViewer2 :pdfUrl="filePath" /> -->
      <!-- <PdfViewer3 :pdfUrl="filePath" /> -->
      <PdfViewer :pdfUrl="filePath" :highlightWord="keyword" :highlightPages="[1, 2, 4]"/>
  </div>
</template>

<script setup lang="ts">
import PdfViewer2 from '~/components/PdfViewer2.vue'
const route = useRoute()

const filePath = route.query.path as string
const keyword = route.query.keyword as string
const pages = JSON.parse(route.query.pages as string)
const fileName = route.query.name as string
</script>

<style scoped>

</style>