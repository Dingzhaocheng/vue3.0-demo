
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
const history = createWebHashHistory();
import useStore from "@/store/store"
const { store, } = useStore()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home,
            props: { id: 2 },
        },
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
        { path: '/:pathMatch(.*)*', redirect: '/' }
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