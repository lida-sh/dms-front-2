<template>
    <div>
        <div class="px-[3rem]  pb-[0.2rem]">
            <div class="bg-white shadow-lg rounded-2xl p-4 sm:p-[5rem]">
                <h3 class="mb-3 text-lg text-gray-600 font-bold">ایجاد نقش جدید</h3>
                <hr class="mb-5 sm:mb-10">
                <Form :validation-schema="schema" @submit="submit">
                    <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
                        <app-text-input name="role_display_name" :label="$t('role_display_name')"
                            class=" sm:col-span-1"></app-text-input>
                        <app-text-input name="role_name" :label="$t('role_name')"
                            class="sm:col-span-1"></app-text-input>
                        <ClientOnly>
                            <div class="flex flex-col w-full sm:col-span-2 my-4">
                                <app-collaps-permission>
                                    <template #title>
                                        <h6 class="text-[11px] lg:text-[14px] font-medium">
                                            مجوزها
                                        </h6>
                                    </template>
                                    <div v-if="permissions"
                                        class="text-base leading-7 font-light py-8 grid grid-cols-2 lg:grid-cols-4">
                                        <template class="" v-for="(item, index) in permissions" :key="index">
                                            <div class="justify-start">
                                                <input type="checkbox" :value="item.name" name="permissions" as="input"
                                                    :id="item.name" class="ml-2 focus:ring-0 focus:ring-offset-0 "/>
                                                <!-- <input :id="item.name" type="checkbox"
                                                    class="ml-2 focus:ring-0 focus:ring-offset-0 " :name="item.name"
                                                    :value="item.name"> -->
                                                <label :for="item.name" class="">{{ item.display_name }}</label>
                                            </div>
                                        </template>
                                        <label class="flex items-center min-h-[1.4rem] px-1">
                                            <span class="label-text-alt leading-3 text-error text-2xs">{{ errorMessage
                                                }}</span>
                                        </label>
                                    </div>
                                </app-collaps-permission>
                            </div>
                        </ClientOnly>
                        <app-button type="submit" :loading="loading"
                            class="btn btn-block h-8 sm:col-span-2 bg-indigo-800 hover:bg-indigo-500 text-white hover:text-base mt-2">{{
                                $t('submit')
                            }}</app-button>
                    </div>

                </Form>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Form, Field, useField } from "vee-validate"
import type { FormActions } from 'vee-validate';
import { useCreateRoleService } from '~/composables/roles/useRole.service';
import { useRoleValidation } from '~/composables/roles/useRole.validation';
import { ToastEnum } from '~/types';
import { useGetPermissionsService } from "~/composables/permissions/usePermission.service"
definePageMeta({
    layout: "admin"
})
const {
    value: inputValue,
    errorMessage,
    handleChange,
    handleBlur,
    meta,
    setValue,
} = useField("permissions", undefined, {
    // initialValue: props.modelValue,
    validateOnValueUpdate: false,
});
const loading = ref(false);
// const permissions = ref<{ name: string, display_name: string }[]>([])
const { showToast } = useToast();
const { schema } = useRoleValidation();
const createRole = useCreateRoleService()
const getPermissions = useGetPermissionsService()
const { target, toggleMenu, closeMenu, openMenu } = useMenu();
const { data: permissions, pending } = await useAsyncData("permissions", () => getPermissions(), { server: false })
// permissions = await getPermissions()
// onMounted(() => {
// getPermissions().then((res) => {
//     if (res !== undefined) {
//         permissions.value = res
//     }
//     console.log(permissions.value)
// })
// })
const submit = (values, { setErrors, resetForm }) => {
    loading.value = true
    console.log("values", values)
    // createRole({ ...values }, { setErrors }).then((res) => {
    //     if (res !== undefined) {
    //         showToast({ message: "مجوز جدید ایجاد شد.", type: ToastEnum.success })
    //         resetForm()
    //         // navigateTo("/admin/roles")
    //     }
    // }).finally(() => {
    //     loading.value = false
    // })
}
</script>

<style scoped></style>