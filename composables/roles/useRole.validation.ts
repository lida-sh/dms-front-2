import { object, string } from "yup";

export const useRoleValidation = ()=>{
    const {$t} = useNuxtApp();
    const schema = object({
        "role_name": string().required().label($t("role_name")),
        "role_display_name": string().required().label($t("role_display_name")),
    })
    return {schema}
}