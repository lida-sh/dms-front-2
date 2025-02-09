<template>
    <div class="relative flex justify-between items-center px-10 py-2.5 shadow-lg min-h-[4.25rem] bg-white">
        <section>
            <button class="block lg:hidden" @click="openMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div ref="target"
                class="z-10 flex flex-col lg:flex-row lg:w-auto absolute lg:static bg-white inset-x-10 h-0 lg:h-auto invisible lg:visible lg:bg-transparent lg:space-x-1 xl:space-x-2 lg:space-x-reverse rounded-box lg:rounded-none border lg:border-none shadow-lg lg:shadow-none mt-1 lg:mt-0 divide-y divide-gray-200 lg:divide-none">
                <div class="py-3 w-full  group flex xl:flex-row flex-col xl:px-3"
                    v-for="(item, index) in links" :key="`menu-${index}`">
                    <router-link :to="item.to" class=" text-sm lg:text-base">
                        <div class="w-auto xl: hover:text-blue-600"
                            :class="{ 'text-blue-800  xl:bg-transparent': menu[index] }">
                            <div class="flex items-center gap-[0.8rem] px-[1.243rem] xl:px-0 py-3">
                                <div class="text-sm whitespace-nowrap">
                                    {{ item.title }}
                                </div>
                                <div v-if="item.child">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2.5" stroke="currentColor" class="size-3 group-hover:rotate-90 transition-all duration-300">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <div
                        class="relative xl:absolute self-stretch xl:top-full max-h-0 group-hover:max-h-96 xl:h-auto overflow-hidden transition-all duration-300 ">
                        <div :id="`menu-${index}`"
                            class="xl:right-0 w-full bg-white overflow-hidden xl:rounded-b-[0.625rem] z-50 divide-y border">
                            <template v-for="(subMenuItem, i) in item.subMenu" :key="`sub-menu-${subMenuItem.title}`">
                                <div>
                                    <NuxtLink :to="subMenuItem.to"
                                        class="w-full block h-12 bg-white px-[1.6rem] py-3 bg-opacity-50 backdrop-blur-xl hover:bg-gray-100 text-sm hover:text-blue-600">
                                        {{ subMenuItem.title }}
                                    </NuxtLink>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const links = [
    //   { title: "صفحه اصلی", to: "/" },
    {
        title: "معماری سازمانی", to: "/", child: true,
        subMenu: [
            { title: "معاونت راهبرد و توسعه کسب و کار ", to: "/" },
            { title: "معاونت تجاری و خدمات مشتریان", to: "/architectures/تجاری-و-خدمات-مشتریان" },
            { title: "معاونت شبکه", to: "/" },
            { title: "معاونت پشتیبانی و زنجیره تامین", to: "/" },
            { title: "معاونت توسعه سرمایه انسانی", to: "/" },
            { title: "معاونت تنظیم مقررات", to: "/" },
        ],
    },
    { title: "مستندات درون سازمانی", to: "/" },
    { title: "مستندات برون سازمانی", to: "/" },
    { title: "اقدام اصلاحی", to: "/" },
    { title: "گزارش ها", to: "/" },
    { title: "سوابق  مطالعاتی", to: "/" },
    { title: "راهنمای سامانه", to: "/" },
];
const menu = ref<boolean[]>([]);
const toggleSubMenu = (index: number) => {
    if (menu.value[index] === false) {
        for (let i = 0; i <= 4; i++) {
            menu.value[i] = false;
        }
        menu.value[index] = true;
    } else {
        for (let i = 0; i <= 4; i++) {
            menu.value[i] = false;
        }
    }
};
const { target, openMenu } = useMenu()
</script>

<style scoped></style>