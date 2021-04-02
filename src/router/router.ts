
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
const history = createWebHashHistory();


export default createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home,
            props:{id:2},
        },
        {
           
            path: '/login',
            name:"Login",
            component: () => import("@/views/Login.vue")
        }
    ]
})