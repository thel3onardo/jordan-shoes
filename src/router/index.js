import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Product.vue";

const routes = [
    {
        path: "/",
        //name é tipo um identifier.
        name: "Home",
        component: Home,
    },
    {
        path: "/product/:id",
        name: "Products",
        component: Products,
    },
    // {
    //     path: "/about",
    //     name: "About",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ "../views/About.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
