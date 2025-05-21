import NotFound from "@/page/NotFound.vue";
import Forbidden from "@/page/Forbidden.vue";
import ACCESS_ENUM from "@/access/accessEnum.ts";
import HelloWorld from '@/components/HelloWorld.vue'
import type { RouteRecordRaw } from 'vue-router'
import UserLayout from '@/layout/UserLayout.vue'
import UserLoginView from '@/components/user/UserLoginView.vue'
import UserRegisterView from '@/components/user/UserRegisterView.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path:'/user',
    name:'用户',
    component:UserLayout,
    meta: {
      hideInMenu: true,
    },
    children:[
      {
        path:'/user/login',
        name:'登录',
        component:UserLoginView
      },
      {
        path:'/user/register',
        name:'注册',
        component:UserRegisterView
      }
    ]
  },
  {
    path: "/",
    name: "首页",
    component: HelloWorld,
    meta: {
      access: ACCESS_ENUM.NOT_LOGIN,
    },
  },
  {
    path: "/admin/questions",
    name: "题目管理",
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
