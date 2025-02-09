<template>
    <div class="flex flex-col lg:flex-row justify-center items-start w-full gap-4 px-10 py-14 bg-[#F7F7F7]">
        <section class="px-4 py-10 rounded-lg bg-white shadow-lg w-[30rem] ">
            <h3 class="text-lg font-bold">فیلترها</h3>
            <Form :validation-schema="schema" class="flex flex-col items-center justify-center w-full" @submit="submit">
                <div class="divide-y w-full">
                    <div class="p-3">
                        <app-select-input name="architecture_id" :options="architectures!"
                            :label="$t('architecture_id')" class="w-full"
                            @selectedItem="changeSelectItem"></app-select-input>
                    </div>
                    <div class="p-3">
                        <app-select-input name="docType" :options-list="doctypes" :label="$t('docType')" class="w-full"
                            @selectedItem="changeDocTypeItem"></app-select-input>
                    </div>
                    <div class="p-3">
                        <app-select-input name="itemSearch" :options-list="itemsInSearch" :label="$t('itemSearch')"
                            class="w-full"></app-select-input>
                    </div>
                    <div v-if="showProceeeSelect" class="p-3">
                        <app-select-input name="process_id" :options="processes!" :label="$t('process_id')"
                            class="w-full"></app-select-input>
                    </div>
                    <!-- <div class="p-3">
                        <app-select-input name="itemSearch" :options-list="itemsInSearch" :label="$t('itemSearch')"
                            class="w-full" @selectedItem="changeDocTypeItem"></app-select-input>
                    </div> -->
                    <div class="p-3">
                        <app-text-input name="wordSearch" :label="$t('wordSearch')" class="w-full"></app-text-input>
                    </div>

                    <app-button type="button" :loading="loading"
                        class="bg-indigo-600 btn w-full h-10 text-white text-sm text-bold hover:bg-indigo-500">جستجو</app-button>


                </div>
            </Form>
        </section>
        <section class="w-full h-full flex">
            <div v-if="!searchOnced" class=""></div>
            <div v-else class="w-full h-full flex flex-col">
                <div class="px-4 w-full h-full flex flex-col items-start gap-4"
                    v-if="(data?.subProcesses?.length !== (0 || undefined) || data?.processes?.length !== (0 || undefined) || data?.procedures?.length !== (0 || undefined))">
                    <h1 class="font-sm xl:text-base font-bold mb-4 mr-4">نتایج جستجو:</h1>
                    <sub-process-result-search v-if="data?.subProcesses" v-for="(itemDoc, index) in data?.subProcesses"
                        :key="index" :item="itemDoc"
                        :row-number="((data!.meta.current_page - 1) * data!.meta.per_page) + index + 1"></sub-process-result-search>
                    <process-result-search v-if="data?.processes" v-for="(itemDoc, index) in data?.processes"
                        :key="index" :item="itemDoc"
                        :row-number="((data!.meta.current_page - 1) * data!.meta.per_page) + index + 1"></process-result-search>
                    <procedure-result-search v-if="data?.procedures" v-for="(itemDoc, index) in data?.procedures"
                        :key="index" :item="itemDoc"
                        :row-number="((data!.meta.current_page - 1) * data!.meta.per_page) + index + 1"></procedure-result-search>
                </div>
                <!-- <div v-else-if="(data?.subProcesses?.length === 0 && data?.processes?.length === 0 && data?.procedures?.length === 0)"
                    class="font-sm xl:text-base font-bold mb-4 mr-4">موردی یافت نشد.</div> -->
                <div class="join flex items-center justify-center mt-5" v-if="data?.meta.total > data?.meta?.per_page!">
                    <button v-for="(link, index) in data?.meta.last_page" :key="index"
                        @click="handleFilter({ page: link })" class="join-item btn"
                        :class="{ 'btn-active': data?.meta.current_page == link }">{{ link }}</button>
                </div>
            </div>

        </section>




    </div>
</template>

<script setup lang="ts">
import type { ArchitectureBaseDto } from '~/composables/architectures/architecture.dto';
import { useAdvancedSearchService, useGetBaseArchitecturesService, useGetBaseProcessesService } from '~/composables/home/home.service';
import { useAdvancedSearchValidation } from '~/composables/home/home.validation';
import type { ProcessBaseDto } from '~/composables/processes/process.dto';
import { ButtonVariantEnum } from '~/types';
import { Form } from "vee-validate"
const doctypes = [
    {
        title: "فرایند",
        value: "process"
    },
    {
        title: "زیر فرایند",
        value: "subProcess"
    },
    {
        title: "روش اجرایی",
        value: "procedure"
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
const itemsInSearch = [
    {
        title: "عنوان",
        value: "title"
    },
    {
        title: "کد",
        value: "code"
    },
    {
        title: "فایل های شناسنامه ",
        value: "code"
    },
]
const query = ref({})
const route = useRoute()
const router = useRouter()
const searchOnced = ref(false)
const loading = ref(false)
const data = ref<any>()
const architectures = ref<ArchitectureBaseDto[]>([]);
const processes = ref<ProcessBaseDto[]>([])
const showProceeeSelect = ref(false)
const getArchitectures = useGetBaseArchitecturesService()
const getProcesses = useGetBaseProcessesService();
const { schema } = useAdvancedSearchValidation()

getArchitectures().then((response) => {
    if (response !== undefined) {
        architectures.value = response
    }
})

const changeSelectItem = async (selectedItemId) => {
    const data = await getProcesses(selectedItemId, {})
    if (data !== undefined) {
        processes.value = data
    }
}
const changeDocTypeItem = (selectedItemId) => {
    if (selectedItemId === "process") {
        showProceeeSelect.value = false
    }
    else {
        showProceeeSelect.value = true
    }
}
const doSearch = useAdvancedSearchService();
const submit = (values) => {
    loading.value = true
    query.value = { ...values }
    router.push({ query: query.value })
    doSearch(values).then((response) => {
        if (response !== undefined) {
            console.log(response)
            data.value = response

        }

    }).finally(() => {
        loading.value = false
        searchOnced.value = true
    })

}
const handleFilter = (link) => {
    doSearch({ ...query.value, ...link }).then((response) => {
        if (response !== undefined) {
            console.log(response)
            data.value = response

        }

    }).finally(() => {
        loading.value = false
        searchOnced.value = true
    })
}
</script>

<style scoped></style>