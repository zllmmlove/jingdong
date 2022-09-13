import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home/Home";
import LoginView from "../views/login/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  }
  // {
  //   path: "/about",
  //   name: "about"
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
