import { useFetchApi } from "../api/useFetchApi"


export const useGetUsersService = ()=>{
    const fetchData = useFetchApi();
    return ()=>fetchData("/admin/users", {}, {toastError:true,setToken:true})
}