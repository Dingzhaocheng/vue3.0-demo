
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
const history = createWebHashHistory();
import useStore from "@/store/store"
const { store, } = useStore()
const router = createRouter({
    history,
    routes: [
        {
            path: '/home',
            name: "Home",
            component: Home,
            props: { id: 2 },
        },
        {

            path: '/login',
            name: "Login",
            component: () => import("@/views/Login.vue")
        },
        { path: '/:pathMatch(.*)*', redirect: '/' },
        {
            path: "/",
            component: Home,
            props: { id: 2 },
            redirect: "/home"
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !store.PIPER_TOKEN) {
        next({ name: "Login" })
    } else {
        next()
    }
})

router.afterEach((to, from, next) => {

})


export default router