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
    component: LoginView,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    }
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
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  isLogin || to.name === "Login" ? next() : next({ name: "Login" });
});

export default router;
