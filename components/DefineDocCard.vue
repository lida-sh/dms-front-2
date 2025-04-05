<template>
    <div class="card w-[80rem] flex bg-[#4749e3] h-[30rem] rounded-t-3xl pr-20 pt-16 text-white  ">
        <div class="hidden lg:flex gap-4">
            <button
                class="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-20 w-12 h-12 bg-[#5c5d74] text-white rounded-xl  items-center justify-center border border-gray-500 border-opacity-70"
                @click="clickPrev">
                <div classs="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </button>
            <button
                class="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-20 w-12 h-12 bg-[#5c5d74] text-white rounded-xl  items-center justify-center border border-gray-500 border-opacity-70"
                @click="clickNext">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </button>


        </div>
        <div class="hidden lg:block absolute top-14 text-yellow-500 left-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
            </svg>

        </div>
        <h1 class="text-3xl font-bold mb-12"><span class="">{{ docTypes[0].title }}</span> (<span class="en">{{docTypes[0].latinTitle}}</span>) :</h1>
        <p class="text-lg font-bold mb-4">{{ docTypes[0].description }}</p>
        <p class="text-lg font-bold">کد هر {{ docTypes[0].title }} با {{ docTypes[0].code }} شروع می شود</p>
    </div>
</template>

<script setup lang="ts">
const docTypes = [
    {
        title: "فرایند",
        latinTitle: "Process",
        description: "مجموعه ای از  زیرفرایندهای مرتبط به که هم یا متعامل که جهت ارائه نتیجه موردنظر از دروندادها استفاده می کند.",
        code: "Pr",
        icon: "",
    },
    {
        title: "",
        description: "",
        icon: "",
    },
    {
        title: "",
        description: "",
        icon: "",
    },
]
</script>

<style scoped>
.en {
    font-family: serif;
}
</style>