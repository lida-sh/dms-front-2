<template>
    <div class="w-full bg-white rounded-lg shadow-lg p-5 select-none">
        <div class="w-full flex items-start gap-4 justify-between xl:justify-center xl:flex-col xl:items-center">

            <div class="grid grid-cols-1 gap-4 xl:grid xl:grid-cols-12 xl:w-full">
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-1 text-sm xl:text-xs 2xl:text-base font-bold text-gray-500">
                    ردیف</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-1 text-sm xl:text-xs 2xl:text-base font-bold text-gray-500">
                    نوع سند</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-3 text-sm xl:text-xs 2xl:text-base font-bold text-gray-500">
                    نام سند</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-2 text-sm xl:text-xs 2xl:text-base font-bold text-gray-500">
                    کد</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-2 text-sm xl:text-xs 2xl:text-base font-bold text-gray-500">
                    معماری والد</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-2 text-sm xl:text-xs 2xl:text-base font-bold text-gray-500">
                    تاریخ ابلاغ</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-1 text-sm xl:text-xs 2xl:text-base font-bold text-gray-500">
                </div>
            </div>

            <div class="grid grid-cols-1 gap-4 xl:grid xl:grid-cols-12 xl:w-full">
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-1 xl:whitespace-nowrap text-sm xl:text-xs 2xl:text-sm font-medium text-gray-800 dark:text-neutral-200">
                    {{ item.rowNumber || rowNumber }}</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-1 xl:whitespace-nowrap text-sm xl:text-xs 2xl:text-sm font-medium text-gray-800 dark:text-neutral-200">
                    {{ item.type || "فرایند" }}
                </div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-3 xl:whitespace-nowrap text-sm xl:text-xs 2xl:text-sm font-medium text-gray-800 dark:text-neutral-200">
                    {{ item.title }}</div>
                <div
                    class="en flex items-center justify-start xl:justify-center xl:col-span-2 xl:whitespace-nowrap text-sm xl:text-xs 2xl:text-sm font-medium text-gray-800 dark:text-neutral-200">
                    {{ item.code }}</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-2 xl:whitespace-nowrap text-sm xl:text-xs 2xl:text-sm font-medium text-gray-800 dark:text-neutral-200">
                    {{ item.architecture?.title }}</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-2 xl:whitespace-nowrap text-sm xl:text-xs 2xl:text-sm font-medium text-gray-800 dark:text-neutral-200">
                    {{ item.notification_date }}</div>
                <div
                    class="flex items-center justify-start xl:justify-center xl:col-span-1 xl:whitespace-nowrap  text-sm xl:text-xs 2xl:text-sm font-medium">
                    <NuxtLink :to="`/processes/${item.slug}`"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                        جزئیات</NuxtLink>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup lang="ts">

import { ProcessClientDto } from '../composables/processes/process.dto';



const props = defineProps<{ item: ProcessClientDto, rowNumber: number }>()
</script>

<style scoped>
.en {
    font-family: serif;
}
</style>