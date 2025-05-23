import { useAuthStore } from "~/composables/auth/Auth.store"
import { isAuthRoute } from "~/helpers/authHelpers";

export default defineNuxtRouteMiddleware((to,from)=>{
     if (process.server) return;
    const authStore = useAuthStore();
    // if(process.client){
        const hasAccess = authStore.isLoggedIn || !isAuthRoute(to.path)
        if(!hasAccess){
             return navigateTo("/auth/login");
             
        }
    // }
})