import { createRouter, createWebHistory } from "vue-router";

import Counter from "../views/Counter.vue";

const routes = [
    {
        path:"/",
        name: "Home",
        redirect: "/counter",
    },
    {
        path: "/counter",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/todo",
        name: "Todo",
        component: () => import("../views/Todo.vue"),
    },
    {
        path: "/account",
        name: "Account",
        component: () => import("../views/Account.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/profile.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;