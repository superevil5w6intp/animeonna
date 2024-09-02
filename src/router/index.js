import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/signup",
      name: "signup",

      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/findpw",
      name: "findpw",

      component: () => import("../views/FindpwView.vue"),
    },
    {
      path: "/product/:id",
      name: "detail",

      component: () => import("../views/Product.vue"),
    },
    {
      path: "/buy",
      name: "buy",

      component: () => import("../views/By.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
    },
  ],
});

export default router;
