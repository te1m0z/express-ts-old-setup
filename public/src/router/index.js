import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import PostView from "@/views/PostView.vue";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/category",
        redirect: "/",
    },
    {
        path: "/post",
        redirect: "/",
    },
    {
        path: "/category/:category",
        name: "CategoryView",
        component: CategoryView,
    },
    {
        path: "/post/:post",
        name: "PostView",
        component: PostView,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const routerOptions = {
    history: createWebHistory(),
    routes,
};

const router = createRouter(routerOptions);

export default router;
