<template>
    <div v-if="pending" class="flex flex-col items-center justify-center min-h-screen">
        <span class="loading loading-spinner text-neutral"></span>
    </div>
    <div v-else class="flex flex-col items-center justify-center px-[3rem] pb-[0.2rem]">
        <div class="bg-white shadow-lg rounded-2xl p-10 sm:p-[5rem] w-full min-h-screen flex flex-col gap-4">
            <h1 class="text-xl font-bold ">زیر فرایند <span class="text-blue-700">{{ data?.title }}</span></h1>
            <div class="flex flex-col sm:flex-row justify-between items-center">
                <h6 class="text-base font-medium"> کد زیر فرایند: {{ data?.code }}</h6>
                <a class="btn btn-success" href="/sub-processes">بازگشت به لیست زیرفرایندها</a>
            </div>
            <h6 class="text-base font-medium">زیر مجموعه:
                <span v-if="data?.architecture.type == 'assistance'" class="text-blue-700">معاونت </span>
                <span v-else-if="data?.architecture.type == 'administration'" class="text-blue-700">اداره کل
                </span><span class="text-blue-700"> {{
                    data?.architecture.title }}</span>
                <span class=""> فرایند </span><span class="text-blue-700">{{ data?.process.title }}</span>
            </h6>
            <p class="text-sm font-normal mb-4"><span class="text-base font-medium">توضیحات:</span> {{ data?.description
                }}
            </p>
            <div class="flex flex-col sm:flex-row items-center gap-8 mb-6">
                <template v-for="file in data?.files" :key="index">
                    <div
                        class="relative flex flex-col items-center gap-4 justify-center px-2 py-3 w-40 shadow-lg rounded-lg">
                        <type-file-display :file-name="file.fileName"></type-file-display>
                        <button @click="clickDownload(file.fileName, file.filePath)"
                            class="btn btn-outline border-purple-700 hover:border-none border-2 btn-sm text-purple-600 text-xs hover:bg-gradient-to-b hover:from-purple-900 hover:to-purple-400 hover:text-white">دانلود
                            فایل</button>
                        
                    </div>
                </template>
            </div>
            <div class="flex flex-col gap-4">
                <template v-for="file in data?.files">
                    <div class="w-full aspect-w-40 aspect-h-21"
                        v-if="file.fileName && (file.fileName.split('.').pop().toLowerCase() == 'png') || (file.fileName.split('.').pop().toLowerCase() == 'jpg') || (file.fileName.split('.').pop().toLowerCase() == 'jpeg')">
                        <img :src="file.filePath" :alt="file.fileName" class="w-full h-full">
                    </div>
                </template>
            </div>
            <div class="flex flex-col gap-4">
                <template v-for="file in data?.files">
                    <div class="pdf-container"
                        v-if="file.fileName && (file.fileName.split('.').pop().toLowerCase() == 'pdf')">
                        <a :href="file.filePath" target="_blank"
                            class="btn btn-outline border-purple-700 hover:border-none border-2 btn-sm text-purple-600 text-xs hover:bg-gradient-to-b hover:from-purple-900 hover:to-purple-400 hover:text-white mb-4">بازکردن
                            در تب جدید</a>
                        <iframe :src="file.filePath" width="100%" height="1200px"></iframe>
                    </div>
                </template>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { useGetSubProcessClientBySlugService } from '~/composables/home/useSubProcess.service';


const route = useRoute();

const getSubProcess = useGetSubProcessClientBySlugService();
const {data, pending, error} = useAsyncData('sub-process'+ route.params.slug, ()=>getSubProcess(route.params.slug as string, {}), {})
</script>

<style scoped>
.en {
    font-family: serif;
}
</style>