import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/tourSchedules",
    name: "TourSchedule",
    component: () => import("../views/TourSchedule.vue"),
  },
  {
    path: "/tourSchedules/:id",
    name: "TourScheduleById",
    component: () => import("../views/TourScheduleById.vue"),
  },
  {
    path: "/addTourSchedules",
    name: "AddTourSchedules",
    component: () => import("../views/AddTourSchedule.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token");

  switch (to.name) {
    case "Login":
      access_token ? next({ name: "Home" }) : next();
      break;
    case "Register":
      access_token ? next({ name: "Home" }) : next();
      break;
    case "TourSchedule":
      !access_token ? next({ name: "Home" }) : next();
      break;
    default:
      next();
  }
});

export default router;
