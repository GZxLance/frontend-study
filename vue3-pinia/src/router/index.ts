import { createRouter, createWebHistory } from "vue-router";

import Counter from "../views/Counter.vue";
import Todo from "../views/Todo.vue";
import Account from "../views/Account.vue";

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
        component: Account,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;