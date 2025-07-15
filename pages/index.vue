<template>
    <div v-if="!resultSearch" class="w-full h-full flex flex-col items-center justify-center">
        <div class="bg-[#4749e3] w-full flex items-center justify-center">
            <div
                class="lg:grid lg:grid-cols-12 h-[56rem] w-full flex flex-col max-w-[100rem] px-4 pb-8 lg:px-0 gap-4 lg:gap-8">

                <div
                    class="lg:col-span-5 w-full h-full flex flex-col gap-4 items-center justify-center py-4 lg:py-0 px-4 sm:px-6 space-y-2 lg:space-y-8">
                    <p
                        class="text-lg sm:text-xl lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.8rem] text-white font-bold">
                        نگهداری
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
                        <div class="head absolute w-full h-full -z-1 opacity-0.5 -inset-4"></div>
                        <img src="/images/g49.svg" alt="" id="monitor" class="monitor w-full h-full translate-x-[-100%] opacity-0 z-[20]">
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
                            class="absolute w-1/3 left-10 bottom-[20%] bounce">
                    </div>
                </div>

            </div>

        </div>


        <section class="bg-gray-100 w-full flex flex-col items-center justify-center py-8 lg:py-0">
            <div
                class="relative flex flex-col lg:flex-row  max-w-[90rem] h-auto lg:h-48 items-center justify-center gap-10 px-10">
                <div
                    class="bg-white rounded-box border border-gray-200 translate-y-0 lg:-translate-y-1/2 shadow-lg w-full h-full p-8 flex items-center justify-center gap-6">
                    <img src="/public/images/servicees/pencil-folder.png" alt="" class="w-28 h-28">
                    <h2 class="text-sm lg:text-base text-indigo-700 font-bold leading-loose">
                        دسترسی سریع به بیش از 730 سند فرایندی
                    </h2>
                </div>
                <div
                    class="bg-white rounded-box border border-gray-200 translate-y-0 lg:-translate-y-1/2 shadow-lg w-full h-full p-6 flex items-center justify-center gap-6">
                    <img src="/public/images/servicees/magnifier-glass.png" alt="" class="w-28 h-28">
                    <h2 class="text-sm lg:text-base text-indigo-700 font-bold">
                        جستجوی سریع و آسان فایل ها و مستندات فرایندی</h2>
                </div>
                <div
                    class="bg-white rounded-box border border-gray-200 translate-y-0 lg:-translate-y-1/2 shadow-lg w-full h-full p-6 flex items-center justify-center gap-6">
                    <img src="/public/images/servicees/upload-cloud-folder.png" alt="" class="w-28 h-28">
                    <h2 class="text-sm lg:text-base text-indigo-700 font-bold">
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
            <div class="w-full mt-40 bg-gray-800 relative h-[35.8rem] pt-20  flex justify-center">
                <div class="flex px-[20%] w-full">
                    <h2 class="text-white font-bold text-xl lg:text-4xl">معرفی کوتاه انواع مستندات فرایندی</h2>
                </div>
                <div class="w-full absolute top-[30%] px-8 flex items-center justify-center">
                    <define-doc-card></define-doc-card>
                </div>
            </div>
            <div class="w-full flex flex-col gap-4 items-start justify-center relative mt-[20rem] px-8 xl:px-[18rem] ">
                <h2 class="text-md font-bold sm:text-xl lg:text-2xl mb-10 mr-10">سوالات متداول</h2>
                <app-collaps>
                    <template #title>
                        <p class="text-sm font-bold sm:text-md lg:text-lg">اقدام اصلاحی و پیشگیرانه چیست؟</p>
                    </template>
                    <div class="flex flex-col gap-2 w-full text-sm sm:text-md lg:text-lg py-10 ">
                        <p class="">اقدام اصلاحی: اقدامی برای برطرف سازی علت عدم انطباق و یا شرایط نامطلوب بالفعل که
                            به‌منظور
                            جلوگیری از وقوع آن‌ها انجام می‌گیرد .</p>
                        <p class="">اقدام پیشگیرانه: اقدامی برای حذف علل به وجود آورنده عدم انطباق بالقوه و یا سایر
                            شرایط نامطلوب
                            بالقوه و به‌منظور پیشگیری از وقوع مجدد آن‌ها.

                        </p>
                    </div>
                </app-collaps>
                <app-collaps>
                    <template #title>
                        <p class="text-sm font-bold sm:text-md lg:text-lg">اگر فرایند یا زیر فرایند مشخص شده با وظایف
                            ساختار مربوطه مطابقت نداشته باشد چه باید کرد؟</p>
                    </template>
                    <div class="flex flex-col gap-2 w-full text-sm sm:text-md lg:text-lg py-10 ">
                        <p class="">در صورتی که در واحدهای مجری فرایند با بررسی
                            و تحلیل فرایندها، اصلاح یا حذف یک فرایند، ادغام چند فرایند و یا پیشنهاد فرایند جدید را مفید
                            تشخیص دادند
                            ضروری است مسئول فرایند و یا مسئول کنترل کیفیت فرایند(ضمن هماهنگی با مسئول فرآیند ذی‌ربط)،
                            اقدام به تنظیم
                            پیشنهاد درآخرین نسخه فرم اقدام اصلاحی و پیشگیرانه با کد FR-SBD-05 و ارسال آن به اداره کل
                            کیفیت و فرایند
                            نماید. بدین منظور لازم است، هر پیشنهاد در فرمی مجزا از آخرین ویرایش معتبر از فرم اقدام
                            اصلاحی و
                            پیشگیرانه با کد FR-SBD-05 تکمیل و ارسال گردد.
                            در صورت ضرورت اصلاح در شاخص‌ها، معیار اندازه‌گیری، ضوابط امتیاز دهی شاخص‌ها و یا پیشنهاد
                            شاخص جدید، از
                            فرمت خام آخرین نسخه فرم پایش و ارزیابی خروجی فرایند با کد FR-SBD-01 استفاده گردد. این فرم
                            نیز می بایست
                            ضمن هماهنگی با مسئول فرایند و نیز مالک فرایند تنظیم، امضاء و ارسال شود.
                        </p>
                    </div>
                </app-collaps>
                <app-collaps>
                    <template #title>
                        <p class="text-sm font-bold sm:text-md lg:text-lg">آیا بعد از اقدام اصلاحی ارزیابی ها بر اساس
                            تغییرات جدید صورت میگیرد؟</p>
                    </template>
                    <div class="flex flex-col gap-2 w-full text-sm sm:text-md lg:text-lg py-10 ">
                        <p class="">تا زمانیکه اصلاحات و پیشنهادات ارسال شده به اداره کل کیفیت و فرایند به تصویب نرسد،
                            پایش فرایندها
                            و شاخص‌ها بر مبنای مصوبات و توافقات پیشین خواهد بود. </p>
                    </div>
                </app-collaps>
                <app-collaps>
                    <template #title>
                        <p class="text-sm font-bold sm:text-md lg:text-lg">ارزیابی فرایندی بر چه اساسی صورت میگیرد؟</p>
                    </template>
                    <div class="flex flex-col gap-2 w-full text-sm sm:text-md lg:text-lg py-10 ">
                        <p class="">فرایندهای حوز‌ه‌های ستادی، سالانه دو نوبت (مهرماه و فروردین‌ماه) توسط اداره کل کیفیت
                            و فرایند
                            معاونت راهبرد و توسعه کسب‌وکار مورد پایش و ارزیابی قرار خواهد گرفت. دستورالعمل اجرائی پایش فرایندهای حوزه‌های ستادی  به کد فرایندی IN-SBD-11-01 دستورالعمل اجرائی پایش
                            فرایندهای
                            حوزه‌های ستادی، به منظور ایجاد رویه مشترک در حین مراحل مختلف پایش، شفاف کردن مسیر ارزیابی و
                            نیز کاستن از
                            ابهامات و پرسش‌های احتمالی تدوین شده است تا مسئولین فرایندها، مدیران مجری فرایند و کارشناسان
                            حوزه‌های
                            مختلف ستادی با همکاری و تعامل مناسب با مسئولان کنترل کیفیت فرایندها به فراهم‌سازی مستندات و
                            تنظیم دقیق
                            فرم‌ها، مطابق مفاد ذکر شده در این دستورالعمل مبادرت نمایند.</p>

                    </div>
                </app-collaps>
                <app-collaps>
                    <template #title>
                        <p class="text-sm font-bold sm:text-md lg:text-lg">اقدام اصلاحی و پیشگیرانه چیست؟</p>
                    </template>
                    <div class="flex flex-col gap-2 w-full text-sm sm:text-md lg:text-lg py-10 ">
                        <p class="">اقدام اصلاحی: اقدامی برای برطرف سازی علت عدم انطباق و یا شرایط نامطلوب بالفعل که
                            به‌منظور
                            جلوگیری از وقوع آن‌ها انجام می‌گیرد .</p>
                        <p class="">اقدام پیشگیرانه: اقدامی برای حذف علل به وجود آورنده عدم انطباق بالقوه و یا سایر
                            شرایط نامطلوب
                            بالقوه و به‌منظور پیشگیری از وقوع مجدد آن‌ها.

                        </p>
                    </div>
                </app-collaps>
            </div>
            <div class="relative  mt-20 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full">
                    <path fill="#adb5bd" fill-opacity="1"
                        d="M0,192L34.3,202.7C68.6,213,137,235,206,224C274.3,213,343,171,411,165.3C480,160,549,192,617,202.7C685.7,213,754,203,823,176C891.4,149,960,107,1029,90.7C1097.1,75,1166,85,1234,74.7C1302.9,64,1371,32,1406,16L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                    </path>
                </svg>
            </div>
            <div class="bg-[#adb5bd] w-full -mt-1 p-4">
                <div class="flex flex-col gap-10 lg:gap-24 items-center justify-center w-full ">


                </div>

            </div>
        </section>
    </div>
    <div v-else
        class="flex flex-col lg:flex-row justify-center items-start w-full gap-4 px-10 py-20       bg-[#F7F7F7] min-h-screen">
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
import Chart from '~/components/Chart.vue';
import ChartMob from '~/components/ChartMob.vue';
import { useSearchService } from '~/composables/home/home.service';
import { ToastEnum } from '~/types';
import VersionControl from "~~/components/icons/slider/VersionControl.vue"
// const tabItems = [
//     { label: 'ارزیابی سال 1400' },
//     { label: 'ارزیابی سال 1401' },
//     { label: 'ارزیابی سال 1402' },
// ]
// const data1402 = [35, 55, 68, 28, 31, 22, 21, 28, 27, 0]
// const label1402 = ['معاونت شبکه', 'معاونت تنظیم مقررات', 'معاونت توسعه سرمایه انسانی', 'معاونت راهبرد و توسعه کسب و کار','معاونت تجاری و خدمات مشتریان','معاونت فنادری اطلاعات','معاونت پشتیبانی و زنجیره تامین','معاونت مالی', 'اداره کل ارتباطات و امور بین الملل']
// const labelProcess1402 = ['برنامه‌ریزی نیروی انسانی و امور کارکنان', 'توسعه سازمان', 'مدیریت عملکرد و جبران خدمت', 'رفاه و سلامت', 'آموزش و توسعه شایستگی فردی', 'استراتژی بازاریابی و فروش', 'توسعه محصول جدید', 'فروش خانگی', 'فروش عمده', ' فروش تجاری', 'عملیات و پشتیبانی از کانال‌های فروش و خدمات پس از فروش', 'مدیریت تجربه مشتری', 'ارزیابی کیفیت محصولات و خدمات', 'مدیریت صورتحساب و وصول مطالبات', 'مطالعات و برنامه‌ریزی راهبردی', 'مدیریت عملکرد راهبردی', 'مدیریت پروژه', 'برنامه و بودجه', 'کنترل و تضمین درآمد', 'بهره‌برداری از بازار سرمایه و امور سهام', 'حسابداری مالی', 'حسابداری مدیریت', 'خزانه‌داری و تأمین مالی', 'راهبرد و حاکمیت فناوری اطلاعات', 'پشتیبانی سیستم‌های سازمانی', 'پشتیبانی سیستم‌های عملیاتی', 'پشتیبانی سیستم‌های کسب‌وکار', 'درگاه‌ها و خدمات دیجیتال', 'زیرساخت و شبکه فناوری اطلاعات', 'راهبرد و معماری شبکه', 'طراحی شبکه', 'نظارت، آزمایش و تحویل', 'مدیریت عملیات شبکه', 'تضمین کیفیت خدمات شبکه', 'پشتیبانی عملیات شبکه', 'تنظیم مقررات', 'نظارت', 'ارتباط با مجامع و بررسی استاندارد', 'برنامه‌ریزی راهبردی زنجیره تأمین', 'مدیریت معاملات', 'پشتیبانی و مدیریت دارائي‌ها و اموال', 'ارتباطات و امور بین‌الملل']
// const dataProcess1402 = [68, 59, 78, 74, 48, 20, 40, 36, 27, 35, 20, 0, 35, 40, 19, 42, 31, 17.5, 36, 33, 20, 26, 22.5, 0, 11, 49.2, 42.9, 22.6, 12.2, 35, 20, 42, 48, 31, 0, 61, 63, 46, 33, 26, 24, 0]
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
        description: "بیش از 50 دستورالعمل در حوزه های مختلف بازنگری شده است.",
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
    {
        title: "قرارداد ها",
        to: "/procedures",
        description: "حدود 4 قرارداد در حوزه های مختلف بازنگری شده است.",
        image: "/images/slider/undraw_filing_system_re_56h6.svg",
        action: "لیست  قرارداد ها",
        icon: "/images/slider/small-picture/instruction2.svg"
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
    // gsap.set("#monitor",{x: "-100%", opacity:0, zIndex:20})
    tl.to("#monitor", {
        x: 0,
        duration: 2,
        opacity: 1,
        ease: "power4"
    })
//    tl.from("#title", {
    //     x: -100,
    //     duration: 2,
    //     autoAlpha: 0,
    //     ease: "power4"
    // }, "-=1.5").to(".bounce", {
    //     y: 6,
    //     rotate: "0.5deg",
    //     duration: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "power.out"
    // }, 0)
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
// const isLargeScreen = ref()
// const recalculate = () => {
//   isLargeScreen.value = useMediaQuery('(min-width: 1024px)').value
// }
// onMounted(() => {
//   isLargeScreen.value = useMediaQuery('(min-width: 1024px)').value
//   useEventListener("resize", useDebounceFn(()=>{
//     recalculate()
//     console.log("resize", useMediaQuery('(min-width: 1024px)').value)
//   }));
// });
</script>

<style scoped>
.head {
    background-image: url("/public/images/background.png");
    background-size: 100% 100%;

}

.en-font{
    font-family: 'Times New Roman', serif;
}

/* .wave-container {
  position: relative;
}
.wave-container svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px; /* ارتفاع موج */
/* } */
.content {
    padding-top: 80px;
    /* فاصله از موج */
}
</style>