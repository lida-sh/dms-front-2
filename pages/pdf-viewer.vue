<template>
    <div>
     <PdfViewer :path="filePath" :keyword="keyword" :pages="pages" />
  </div>
</template>

<script setup lang="ts">
import PdfViewer from '~/components/PdfViewer.vue'
const route = useRoute()

const filePath = route.query.path as string
const keyword = route.query.keyword as string
const pages = JSON.parse(route.query.pages as string)
const fileName = route.query.name as string
</script>

<style scoped>

</style>