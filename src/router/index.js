import Vue from "vue";
import VueRouter from "vue-router";
//引入用到的页面到路由中
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";
import Mall from "../views/MyMall.vue";
import OtherPageOne from "../views/OtherPageOne.vue";
import OtherPageTwo from "../views/OtherPageTwo.vue";
import Test from "../views/Test.vue";
import TestDev from "../views/TestDev.vue";
import TestRead from "../views/TestRead.vue";
import TestReadtest from "../views/TestReadtest.vue";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: "主页",
      path: "/",
      component: Main,
      redirect: "/home", //解决重定项问题
      children: [
        {
          name: "商品管理",
          path: "/mall",
          component: Mall,
        },
        {
          name: "首页",
          path: "/home",
          component: Home,
        },
        {
          name: "用户",
          path: "/user",
          component: User,
        },
        {
          name: "页面1",
          path: "/page1",
          component: OtherPageOne,
        },
        {
          name: "页面2",
          path: "/page2",
          component: OtherPageTwo,
        },
      ],
    },
    {
      name: "test",
      path: "/test",
      component: Test,
    },
    {
      name: "testDev",
      path: "/testDev",
      component: TestDev,
    },
    {
      name: "testRead",
      path: "/testRead",
      component: TestRead,
    },
    {
      name: "testRead1",
      path: "/testRead1",
      component: TestReadtest,
    },
  ],
});
