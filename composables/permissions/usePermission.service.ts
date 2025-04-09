import type { InferType } from "yup"
import { useFetchApi } from "../api/useFetchApi"
import { usePermissionValidation } from "./usePernission.validation"
import type { FetchCustomConfig } from "../api/FetchCustomConfig"

export const useCreatePermissionService = ()=>{

    const fetchData = useFetchApi()
    const {schema} = usePermissionValidation()
    return ({display_name, name}:InferType<typeof schema>, customConfig:FetchCustomConfig={})=>fetchData("/admin/permissions/create",{method: "post", body: {display_name, name}},{setToken:true, ...customConfig})
}