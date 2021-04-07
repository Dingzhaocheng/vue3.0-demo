
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Layout from "@/layout/Layout.vue"
import NotFound from "@/components/NotFound.vue"
const history = createWebHashHistory();
import useStore from "@/store/store"
const { store, } = useStore()
const router = createRouter({
    history,
    routes: [
        {
            path: '/home',
            name: "Home",
            component: Layout,
            props: { id: 2 },
        },
        {
            path: '/notfound',
            name: "NotFound",
            component: NotFound,
        },
        {

            path: '/login',
            name: "Login",
            component: () => import("@/views/Login.vue")
        },
        { path: '/:pathMatch(.*)*', redirect: '/notfound' },
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