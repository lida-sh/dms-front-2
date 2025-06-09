<template>
  <div class="px-[3rem]  pb-[0.2rem] min-h-screen">

    <div class="flex flex-col gap-4">
      <Form 
        class="card p-8 flex flex-col sm:grid sm:grid-cols-6 gap-4 w-full rounded-box shadow-lg bg-white">
        <app-select-input name="architecture_id" :options="architectures!" :label="$t('architecture_id')"
          class="sm:col-span-2" @selectedItem="changeSelectItem"></app-select-input>
        <app-select-input name="process_id" :options="processes!" :label="$t('process_id')" class="sm:col-span-2"
          @selectedItem="(process) => handleFilter({ process_id: process })"></app-select-input>
        <app-select-input name="docType" :options-list="doctypes" :label="$t('docType')"
          @selectedItem="(docType) => handleFilter({ docType: docType })" class="sm:col-span-2"></app-select-input>
        <app-search-input name="search" label="جستجو" v-model="searchWord" class="sm:col-span-2" @input="checkSearchBox"
          @clickSearch="searchWord !== '' && handleFilter({ search: searchWord })"></app-search-input>
        <div class="form-control sm:col-span-2">
          <label class="flex justify-between items-center px-1 pb-1.5" for="status">
            <span class="label-text">{{ $t('status') }}</span>
          </label>
          <select
            class="bg-left-center select-custom focus:ring-0 focus:ring-offset-0 focus:border-gray-300 border-gray-300 rounded-lg h-12 font-normal font-gray-700"
            placeholder="" v-model="status" name="status" @change="handleFilter({ status: status })">
            <option value=""></option>
            <option v-for="(item, index) in items" :key="index" :value="item.value" class="selection:bg-gray-300">{{
              item.title }}</option>
          </select>
        </div>
        <div class="form-control sm:col-span-2">
          <label class="flex justify-between items-center px-1 pb-1.5" for="status">
            <span class="label-text">{{ $t('sortedBy') }}</span>
          </label>
          <select
            class="bg-left-center select-custom focus:ring-0 focus:ring-offset-0 focus:border-gray-300 border-gray-300 rounded-lg h-12 font-normal font-gray-700"
            placeholder="" v-model="sortedBy" name="sortedBy" @change="handleFilter({ sortedBy: sortedBy })">
            <option value=""></option>
            <option v-for="(item, index) in sortItems" :key="index" :value="item.value" class="selection:bg-gray-300">{{
              item.title }}</option>
          </select>
        </div>
        <!-- <app-select-input name="sortedBy" @selectedItem="(sorted_by) => handleFilter({ sortedBy: sorted_by })"
          :label="$t('sortedBy')" :optionsList="sortItems" class=""></app-select-input> -->
      </Form>
      <div v-if="!(data?.procedures && data?.procedures?.length > 0) && !pending" class="">
        <div class="card p-8 w-full h-40 rounded-box shadow-lg bg-white flex items-center justify-center">
          سندی ثبت نشده است.
        </div>
      </div>
      <div v-else class="card p-8 gap-4 w-full rounded-box shadow-lg bg-white">
        <h3 class="text-lg font-bold text-gray-700 mb-5">لیست مستندات سطح چهارم مخابرات ایران</h3>
        <table class="table table-zebra ">
          <thead>
            <tr class="bg-stone-300 rounded-lg text-base">
              <th class="text-center">ردیف</th>
              <th class="text-center">عنوان</th>
              <th class="text-center">کد</th>
              <th class="text-center">معماری والد</th>
              <th class="text-center">فرایند والد</th>
              <th class="text-center">وضعیت</th>
              <th class="text-center">تاریخ ابلاغ</th>
              <th class="text-center">کاربر ثبت کننده</th>
              <th class="text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data?.procedures" class="hover divide-y w-full">
              <td class="text-center">{{ ((data!.meta.current_page - 1) * data!.meta.per_page) + index + 1 }}</td>
              <td class="text-center">{{ item.displayTitle }}</td>
              <td class="text-center">{{ item.code }}</td>
              <td class="text-center">{{ item.architecture.title }}</td>
              <td class="text-center">{{ item.process.title }}</td>
              <td class="text-center">
                <span v-if="item.status == 1" class="text-green-500">فعال</span>
                <span v-if="item.status == 0" class="text-red-500">غیر فعال</span>
              </td>
              <td class="text-center">{{ item.notification_date }}</td>
              <td class="text-center">{{ item.user.fullName }}</td>
              <td class="text-right flex items-center justify-center gap-2 ">

                <NuxtLink :to="`procedures/${item.slug}`"
                  class="btn btn-outline border-sky-700 hover:border-none border-2 btn-sm text-sky-600 text-xs hover:bg-gradient-to-b hover:from-sky-900 hover:to-sky-400 hover:text-white">
                  نمایش
                </NuxtLink>
                <NuxtLink :to="`procedures/edit/${item.id}`"
                  class="btn btn-outline border-amber-700 hover:border-none border-2 btn-sm text-amber-600 text-xs hover:bg-gradient-to-b hover:from-amber-900 hover:to-amber-400 hover:text-white">
                  ویرایش
                </NuxtLink>
                <button @click="deleteProcedureConfirmation(item.id)"
                  class="btn btn-outline border-red-700 hover:border-none border-2 btn-sm text-red-600 text-xs hover:bg-gradient-to-b hover:from-red-900 hover:to-red-400 hover:text-white">حذف</button>
                <!-- <button
                  class="btn btn-outline border-emerald-700 hover:border-none border-2 btn-sm text-emerald-600 text-xs hover:bg-gradient-to-b hover:from-emerald-900 hover:to-emerald-400 hover:text-white">ارتقا</button> -->
              </td>
            </tr>

          </tbody>
        </table>

      </div>
      <div class="join flex items-center justify-center mt-5" v-if="data?.meta.total > data?.meta?.per_page!">
        <button v-for="(link, index) in data?.meta.last_page" :key="index" @click="handleFilter({ page: link })"
          class="join-item btn" :class="{ 'btn-active': data?.meta.current_page == link }">{{ link }}</button>
      </div>
    </div>
    <app-modal v-model="deleteConfirmation">
      <template #title>
        <h3 class="text-sm xl:text-base font-bold text-blue-800">تایید حذف سند</h3>
      </template>
      <div class="flex flex-col overflow-visible justify-center gap-10 mt-8">
        <h3 class="text-sm xl:text-base">آیا از حذف سند مورد نظر مطمئن هستید؟</h3>
      </div>
      <template #actions>
        <div class="flex justify-between items-center w-full">
          <app-button :loading="loading"
            class="btn border-2 border-[#4749e3] text-[#4749e3] hover:bg-[#4749e3] hover:text-white hover:border-[#4749e3]"
            @click="deleteProcedureconfirmed()">حذف
            سند</app-button>
          <button
            class="btn border-2 border-[#4749e3] text-[#4749e3] hover:bg-[#4749e3] hover:text-white hover:border-[#4749e3]"
            @click="deleteConfirmation = false">بازگشت به
            لیست
            سندها</button>
        </div>
      </template>

    </app-modal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin"
})

import { useGetBaseArchitecturesService } from "~/composables/architectures/useArchitecture.service";
import { useGetBaseProcessesService, useGetProcessesService } from '~/composables/processes/useProcess.service';
import { useSubProcessFilter } from '~/composables/sub-processes/useSubProcess.validation';
import { Form } from "vee-validate";
import { useGetSubProcessesService } from '~/composables/sub-processes/useSubProcess.service';
import type { ProcessBaseDto } from '~/composables/processes/process.dto';
import { useGetProceduresService } from "~/composables/procetures/useProcedure.service";
import { useDeleteProcedureService } from "~/composables/procetures/useProcedure.service";
import { ToastEnum, ButtonVariantEnum } from "~/types";
const loading = ref(false)
const query = ref<any>({})
const { schema } = useSubProcessFilter()
const searchWord = ref("")
const status = ref(null)
const sortedBy = ref(null)
const route = useRoute()
const router = useRouter()
router.push({ query: {} })
const items = [
  { title: 'فعال', value: "1" },
  { title: 'غیر فعال', value: "-1" },
]
const doctypes = [
  {
    title: "روش اجرایی",
    value: "procedures"
  },
  {
    title: "دستورالعمل",
    value: "instruction"
  },
  {
    title: "قرارداد",
    value: "contract"
  },
  {
    title: "فرم",
    value: "form"
  },
  {
    title: "آئین نامه",
    value: "regulation"
  },
]
const sortItems = [
  { title: 'جدیدترین', value: "newest" },
  { title: 'قدیمی ترین', value: "oldest" },
]
const { showToast } = useToast();
const processes = ref<ProcessBaseDto[]>([])
const deleteConfirmation = ref(false)
const getProcedures = useGetProceduresService()
const { data, pending, error, refresh } = await useAsyncData('procedures', () => getProcedures(query.value), { server: false })
// useErrorHandler(error)
const getArchitectures = useGetBaseArchitecturesService()
const { data: architectures } = await useLazyAsyncData('architectures', () => getArchitectures(), {
  server: false
})
const getProcesses = useGetBaseProcessesService();
const changeSelectItem = async (selectedItemId) => {
  const data = await getProcesses(selectedItemId, { toastError: true })
  if (data !== undefined) {
    processes.value = data
  }
  handleFilter({ architecture_id: selectedItemId })
}

const handleFilter = (link) => {
  query.value = { ...route.query, ...link }
  router.push({ query: query.value })
  refresh()
}
function checkSearchBox(element) {
  console.log(element.target.value)
  if (element.target.value == '') {
    if (query.value.hasOwnProperty('search')) {
      delete query.value.search
    }

    router.push({ query: query.value })
    refresh()
  }
}
const procedureIdForDelete = ref<number>(-1)
const deleteProcedureConfirmation = (id: number) => {
  deleteConfirmation.value = true
  procedureIdForDelete.value = id
}
const deleteProcedure = useDeleteProcedureService()
const deleteProcedureconfirmed = () => {
  loading.value = true
  deleteProcedure(procedureIdForDelete.value).then((res)=>{
    if(res !== undefined){
      refresh()
      showToast({ message: "سند مورد نظر حذف شد.", type: ToastEnum.success })
    }
  }).finally(()=>{
    loading.value = false
    deleteConfirmation.value = false
  })
}
</script>

<style scoped></style>