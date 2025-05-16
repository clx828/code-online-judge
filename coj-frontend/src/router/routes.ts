import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";
import Forbidden from "@/views/Forbidden.vue";
import ACCESS_ENUM from "@/access/accessEnum";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
    meta: {
      access: ACCESS_ENUM.NOT_LOGIN,
    },
  },
  {
    path: "/admin/questions",
    name: "题目管理",
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/404",
    name: "页面不存在",
    component: NotFound,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/403",
    name: "无权限访问",
    component: Forbidden,
    meta: {
      hideInMenu: true,
    },
  },
];
