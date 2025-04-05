<template>
    <div v-if="!resultSearch" class="w-full h-full flex flex-col items-center justify-center">
        <div class="bg-[#0077b6] w-full flex items-center justify-center">
            <div
                class="lg:grid lg:grid-cols-12 h-[56rem] w-full flex flex-col max-w-[100rem] px-4 py-8 lg:px-0 gap-4 lg:gap-8">

                <div
                    class="lg:col-span-5 w-full h-full flex flex-col gap-4 items-center justify-center py-4 lg:py-0 px-4 sm:px-6 space-y-2 lg:space-y-8">
                    <p class="text-xl lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.8rem] text-white font-bold">نگهداری
                        و دسترسی سریع به اسناد فرایندی با</p>
                    <h1 class="text-3xl lg:text-[2rem] xl:text-[3.25rem] text-white font-bold">سامانه مدیریت اسناد</h1>
                    <Form @submit="submitSearch" class="w-full">
                        <the-search-input name="search" class="w-full" :loading="loading"></the-search-input>
                    </Form>
                    <nuxt-link to="advanced-search"
                        class="bg-red-600 h-14 text-white text-lg px-8 py-4 rounded-lg border border-red-800">جستجوی
                        دقیق</nuxt-link>
                </div>
                <div class="lg:col-span-7 w-full h-full flex items-center lg:justify-end justify-center">
                    <div class="relative w-full">
                        <img src="/images/g49.svg" alt="" id="monitor" class="monitor w-full h-full invisible">
                        <img src="/images/character 13.svg" alt="" id="man"
                            class="absolute h-[40%] right-[5%] bottom-[5%] invisible">
                        <img src="/images/user4.svg" alt="" id="user4"
                            class="users absolute  w-[6%] right-[20%] top-[20%] invisible">
                        <img src="/images/user3.svg" alt="" id="user3"
                            class="users absolute  w-[6%] right-[20%] top-[20%] invisible">
                        <img src="/images/g140.svg" alt="" id="user2"
                            class="users absolute w-[6%] right-[20%] top-[20%] invisible">
                        <img src="/images/g102.svg" alt="" id="user1"
                            class="users absolute w-[6%] right-[20%] top-[20%] invisible">
                        <img src="/images/title-app.svg" alt="" id="title"
                            class="absolute w-1/3 left-10 bottom-[20%] bounce invisible">
                    </div>
                </div>

            </div>

        </div>


        <section class="bg-gray-100 w-full flex flex-col items-center justify-center py-8 lg:py-0">
            <div
                class="relative flex flex-col lg:flex-row  max-w-[90rem] h-auto lg:h-48 items-center justify-center gap-10 px-10">
                <div
                    class="bg-white rounded-box border border-gray-200 translate-y-0 lg:-translate-y-1/2 shadow-lg w-full h-full p-6 flex items-center justify-center gap-6">
                    <img src="/public/images/servicees/pencil-folder.png" alt="" class="w-28 h-28">
                    <h2 class="text-sm lg:text-lg text-indigo-700 font-bold leading-loose">
                        دسترسی سریع به بیش از 730 سند فرایندی
                    </h2>
                </div>
                <div
                    class="bg-white rounded-box border border-gray-200 translate-y-0 lg:-translate-y-1/2 shadow-lg w-full h-full p-6 flex items-center justify-center gap-6">
                    <img src="/public/images/servicees/magnifier-glass.png" alt="" class="w-28 h-28">
                    <h2 class="text-sm lg:text-lg text-indigo-700 font-bold">
                        جستجوی سریع و آسان فایل ها و مستندات فرایندی</h2>
                </div>
                <div
                    class="bg-white rounded-box border border-gray-200 translate-y-0 lg:-translate-y-1/2 shadow-lg w-full h-full p-6 flex items-center justify-center gap-6">
                    <img src="/public/images/servicees/upload-cloud-folder.png" alt="" class="w-28 h-28">
                    <h2 class="text-sm lg:text-lg text-indigo-700 font-bold">
                        بروز رسانی و انتشار فایل ها و مستندات و گزارشات</h2>
                </div>
            </div>

            <div class="w-full flex max-w-[100rem]">
                <div class="p-10 overflow-hidden">
                    <app-slider :items="items">
                        <template #item="{ item }">
                            <card :item="item"></card>
                        </template>
                    </app-slider>
                </div>
            </div>
            <div class="w-full mt-40 bg-gray-800 p-40 flex flex-col gap-8 justify-center">
                <div class="flex px-[10%]">
                    <h2 class="text-white font-bold text-4xl">معرفی کوتاه انواع مستندات فرایندی</h2>
                </div>
                <div class="w-full w-80rem flex items-center justify-center">
                    <define-doc-card></define-doc-card>
                </div>
            </div>
        </section>
    </div>
    <div v-else
        class="flex flex-col lg:flex-row justify-center items-start w-full gap-4 px-10 py-14 bg-[#F7F7F7] h-screen">
        <section class="px-4 w-full h-full flex flex-col items-start gap-4 max-w-[100rem]">
            <h1 class=" font-sm xl:text-base font-bold mb-4 mr-4">نتایج جستجو:</h1>
            <process-result-search v-if="data?.processes || data?.data?.processes"
                v-for="(itemDoc, index) in data?.data?.processes || data?.processes" :key="index"
                :item="itemDoc"></process-result-search>
            <sub-process-result-search v-if="data?.subProcesses || data?.data?.subProcesses"
                v-for="(itemDoc, index) in data?.data?.subProcesses || data?.subProcesses" :key="index"
                :item="itemDoc"></sub-process-result-search>
            <procedure-result-search v-if="data?.procedures || data?.data?.procedures"
                v-for="(itemDoc, index) in data?.data?.procedures || data?.procedures" :key="index"
                :item="itemDoc"></procedure-result-search>
            <app-button @click="backToHome"
                class="btn btn-info rounded-lg border border-transparent bg-blue-600 hover:bg-blue-800 text-white">بازگشت
                به
                صفحه اصلی</app-button>
        </section>

    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { Form } from "vee-validate"
import { useSearchService } from '~/composables/home/home.service';
import { ToastEnum } from '~/types';
import VersionControl from "~~/components/icons/slider/VersionControl.vue"
const resultSearch = ref(false)
const items = [
    {
        title: "روش های اجرایی",
        to: "/procedures",
        description: "بیش از 524 روش اجرایی در حوزه های مختلف مخابرات تدوین شده است.",
        image: "/images/slider/undraw_version_control_re_mg66.svg",
        action: "لیست روش های اجرایی",
        icon: "/images/slider/small-picture/workflow.svg"
    },
    {
        title: "فرایندها",
        to: "/processes",
        description: "بیش از 120 فرایند در حوزه های مختلف بازنگری شده است.",
        image: "/images/slider/undraw_thought_process_re_om58.svg",
        action: "لیست  فرایندها",
        icon: "/images/slider/small-picture/process1.svg"
    },
    {
        title: "زیر فرایندها",
        to: "/sub-processes",
        description: "بیش از 120 زیر فرایند در حوزه های مختلف بازنگری شده است.",
        image: "/images/slider/undraw_detailed_analysis_re_tk6j.svg",
        action: "لیست  زیر فرایندها",
        icon: "/images/slider/small-picture/process.svg"
    },
    {
        title: "دستورالعمل ها",
        to: "/procedures",
        description: "بیش از 50 دستوذالعمل در حوزه های مختلف بازنگری شده است.",
        image: "/images/slider/undraw_folder_files_re_2cbm.svg",
        action: "لیست  دستورالعمل ها",
        icon: "/images/slider/small-picture/instruction2.svg"
    },
    {
        title: "آئین نامه ها",
        to: "/procedures",
        description: "بیش از 20 آئین نامه در حوزه های مختلف بازنگری شده است.",
        image: "/images/slider/undraw_folder_re_apfp(1).svg",
        action: "لیست  آئین نامه ها",
        icon: "/images/slider/small-picture/instruction1.svg"
    },

]
const docDefItems = [
    {
        title: "فرایند",
        description: "مجموعه ای از  زیرفرایندهای مرتبط به¬هم یا متعامل که جهت ارائه نتیجه موردنظر از دروندادها استفاده می کند.",
        eng_title: "Process"
    },
    {
        title: "زیر فرایند",
        description: "مجموعه ای از  فعالیت های مرتبط به¬هم یا متعامل که جهت ارائه نتیجه موردنظر از دروندادها استفاده می کند.",
        eng_title: "Sub Process"
    },
    {
        title: "روش اجرایی",
        description: "مستندی که طریقه مشخص برای انجام یک فعالیت یا فرآیند را بیان می کند.",
        eng_title: "Procedure"
    },
    {
        title: "آیین نامه ",
        description: "مقرراتی است که توسط مقامات صلاحیت دار وضع و در معرض اجرا قرار می گیرند. در واقع مجموعه  قوانینی است که در جهت رسیدن به اهداف سازمان برای اجرای فعالیت¬ها تدوین می گردد. این سند یا داخلی است که توسط مقام ارشد سازمان (مدیرعامل و اعضای هیئت مدیره) تصویب می شود و یا خارجی است که از سازمان های بالا دستی ابلاغ می گردد. ",
        eng_title: "Regulation"
    },
    {
        title: "قرارداد",
        description: "توافق تعهدآور",
        eng_title: "Contract"
    },
    {
        title: "فرم",
        description: "جدول تنظیم شده از موارد خاص مورد نیاز جهت درخواست یا اقدامات",
        eng_title: "Form"
    },
]
const loading = ref(false)
const data = ref<any>()
onMounted(() => {
    let tl = gsap.timeline();
    tl.from("#monitor", {
        x: -100,
        duration: 2,
        autoAlpha: 0,
        ease: "power4"
    }).from("#title", {
        x: -100,
        duration: 2,
        autoAlpha: 0,
        ease: "power4"
    }, "-=1.5").to(".bounce", {
        y: 6,
        rotate: "0.5deg",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power.out"
    }, 0)
    tl.from("#man", {
        x: 100,
        duration: 2,
        autoAlpha: 0,
        ease: "power4",
    }, "-=1.5");
    tl.fromTo(".users", {
        right: "20%",
        top: "20%",
        autoAlpha: 0,
        ease: "power4",
    }, {
        right: "5%",
        top: "-20%",
        autoAlpha: 1,
        ease: "power4",
        duration: 1
    }, "-=1.5");
    tl.to("#user2", {
        x: "-60%",
        ease: "power4",
        duration: 0.5
    }).to("#user3", {
        x: "-120%",
        ease: "power4",
        duration: 0.5
    }).to("#user4", {
        x: "-180%",
        ease: "power4",
        duration: 0.5
    }).to(".users", {
        y: 6,
        rotate: "2deg",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.out"
    })

})
const { showToast } = useToast()
const getResultSearch = useSearchService()
const submitSearch = (values, { resetForm }) => {
    loading.value = true
    getResultSearch(values).then((response) => {
        if (response !== undefined) {
            data.value = response
            console.log("result", data?.value)
            if (data?.value.processes?.length !== (0 || undefined) || data?.value.subProcesses?.length !== (0 || undefined) || data?.value.procedures?.length !== (0 || undefined) || data?.value.data?.processes?.length !== (0 || undefined) || data?.value.data?.subProcesses?.length !== (0 || undefined) || data?.value.data?.procedures?.length !== (0 || undefined)) {
                resultSearch.value = true
            } else {
                showToast({ message: "موردی یافت نشد.", type: ToastEnum.error })
            }

        }
        resetForm()
    }).finally(() => {
        loading.value = false
    })
}
const backToHome = () => {
    resultSearch.value = false
}
</script>

<style scoped>
.head {
    background-image: url("/public/images/back.png");
    background-size: 100% 100%;

}
</style>