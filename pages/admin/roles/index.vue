<template>
  <div class="px-[3rem] pb-[0.2rem] min-h-screen">
    <div class="flex flex-col gap-4">
      <div
        v-if="(data&&data.length>0)&&!pending"
        class="card p-8 gap-4 w-full rounded-box shadow-lg bg-white"
      >
        <h3 class="text-lg font-bold text-gray-700 mb-5">لیست نقش ها</h3>
        <table class="table table-zebra">
          <thead>
            <tr
              class="bg-stone-300 rounded-lg text-base lg:grid lg:grid-cols-6"
            >
              <th class="text-center lg:col-span-1">ردیف</th>
              <th class="text-center lg:col-span-2">نام</th>
              <th class="text-center lg:col-span-1">نام نمایشی</th>
              <th class="text-center lg:col-span-1">مجوزها</th>
              <th class="text-center lg:col-span-1">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in data" :key="index"
              class="hover divide-y w-full lg:grid lg:grid-cols-6"
            >
              <td class="text-center lg:col-span-1">{{ index + 1 }}</td>
              <td class="text-center lg:col-span-2">{{ item.name }}</td>
              <td class="text-center lg:col-span-1">{{ item.display_name }}</td>
              <td class="text-center lg:col-span-1">{{ item.display_name }}</td>
              <td
                class="text-right flex items-center justify-center gap-2 lg:col-span-1"
              >
                <NuxtLink
                  class="btn btn-outline border-amber-700 hover:border-none border-2 btn-sm text-amber-600 text-xs hover:bg-amber-700 hover:text-white"
                >
                  ویرایش
                </NuxtLink>
                <button
                  class="btn btn-outline border-red-700 hover:border-none border-2 btn-sm text-red-600 text-xs hover:bg-red-700 hover:text-white"
                >
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else-if="(data.length == 0)&&!pending" class="">
      <div class="card p-8 w-full h-40 rounded-box shadow-lg bg-white flex items-center justify-center">
          نقشی ثبت نشده است.
        </div>
      </div>
      <div v-else  class="flex items-center justify-center w-full bg-[#F7F7F7] non-select h-screen">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    </div>
  </div>
</template>
<script setup type="script">
import { useGetRolesService } from "~/composables/roles/useRole.service";
definePageMeta({
  layout: "admin",
});
const getroles = useGetRolesService();
const { data, pending } = useAsyncData("roles", () => getroles(), {
  server: false,
});
</script>
