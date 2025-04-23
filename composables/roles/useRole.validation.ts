import { object, string, array } from "yup";

export const useRoleValidation = ()=>{
    const {$t} = useNuxtApp();
    const schema = object({
        "role_name": string().required().label($t("role_name")),
        "role_display_name": string().required().label($t("role_display_name")),
        "permissions": array().required().min(1, 'حداقل یک مجوز باید انتخاب شود')
    })
    return {schema}
}