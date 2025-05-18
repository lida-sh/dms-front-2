<template>
    <div>

    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "admin"
})

import { useGetProcedureBySlugService } from '~/composables/procetures/useProcedure.service';

const route = useRoute()
const showImage = ref<boolean>(false)
const getProcedure = useGetProcedureBySlugService()
const { data, pending, error } = useAsyncData('architecture' + route.params.slug, () => getProcedure(route.params.slug as string, {}), { server: false })
const clickDownload =async (fileName: string, filePath: string) => {
    const link = document.createElement('a')
    link.href = filePath
    link.setAttribute('download', fileName)  // نام دلخواه برای ذخیره فایل
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

}
</script>

<style scoped>

</style>