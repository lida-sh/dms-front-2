import { useFetchApi } from "../api/useFetchApi"
import { useRoleValidation } from "./useRole.validation";
import type { InferType } from "yup";
import type {FetchCustomConfig} from "../api/FetchCustomConfig"

export const useCreateRoleService = ()=>{
    const fetchData = useFetchApi();
    const {schema} = useRoleValidation()
    return ({role_name, role_display_name, permissions}: InferType<typeof schema>, customConfig:FetchCustomConfig={})=>fetchData("/admin/roles", {method: "post", body: {role_name, role_display_name, permissions}}, {setToken:true, ...customConfig})
}  
export const useGetRolesService = () => {
  const fetchData = useFetchApi();
  return (customConfig: FetchCustomConfig = {}) =>
    fetchData("admin/roles", {}, { setToken: true,toastError: true, ...customConfig });
}