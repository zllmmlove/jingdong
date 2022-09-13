import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home/Home";
import LoginView from "../views/login/Login";
import RegisterView from "../views/register/Register";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    }
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
  const { name } = to;
  const isLoginOrRegister = name === "Login" || name === "Register";
  isLogin || isLoginOrRegister ? next() : next({ name: "Login" });
});

export default router;
