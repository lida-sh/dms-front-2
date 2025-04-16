<template>
    <div class="px-[3rem]  pb-[0.2rem] min-h-screen">

        <div class="flex flex-col gap-4">

            
            <div v-if="data" class="card p-8 gap-4 w-full rounded-box shadow-lg bg-white">
                <h3 class="text-lg font-bold text-gray-700 mb-5">لیست کاربران</h3>
                <table class="table table-zebra ">
                    <thead>
                        <tr class="bg-stone-300 rounded-lg text-base lg:grid lg:grid-cols-12">
                            <th class="text-center lg:col-span-1">ردیف</th>
                            <th class="text-right lg:col-span-2">نام</th>
                            <th class="text-right lg:col-span-2">نام خانوادگی</th>
                            <th class="text-right lg:col-span-2">ایمیل</th>
                            <th class="text-right lg:col-span-2">نقش ها</th>
                            <th class="text-center lg:col-span-2">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in data?.users" class="hover divide-y w-full lg:grid lg:grid-cols-12">
                            <td class="text-center lg:col-span-1">{{ ((data!.meta.current_page - 1) * data!.meta.per_page) + index + 1
                                }}</td> 
                            <td class="text-right lg:col-span-2">{{ item.first_name }}</td> 
                            <td class="text-right lg:col-span-2">{{ item.last_name }}</td>
                            <td class="text-right lg:col-span-2">{{ item.email }}</td>
                            <td class="text-right lg:col-span-2">{{ item.roles }}</td>
                            <td class="text-right flex items-center justify-center gap-2 lg:col-span-3">
                                <NuxtLink 
                                    class="btn btn-outline border-sky-700 hover:border-none border-2 btn-sm text-sky-600 text-xs hover:bg-sky-700 hover:text-white">
                                    نمایش
                                </NuxtLink>
                                <NuxtLink 
                                    class="btn btn-outline border-amber-700 hover:border-none border-2 btn-sm text-amber-600 text-xs hover:bg-amber-700 hover:text-white">
                                    ویرایش
                                </NuxtLink> 
                                <button
                                    class="btn btn-outline border-red-700 hover:border-none border-2 btn-sm text-red-600 text-xs hover:bg-red-700 hover:text-white">حذف</button> 
                                
                            </td>
                        </tr>

                    </tbody> 
                </table>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin"
})
import { useGetUsersService } from '~/composables/users/useUser.service';

const getUsers = useGetUsersService()
// const data =  getUsers()
const { data, pending } = await useAsyncData("users", () => getUsers(), {server: false})
console.log("data",data.value)
</script>

<style scoped></style>