import Vue from "vue";
import VueRouter from "vue-router";
//引入用到的页面到路由中
import HelloWorld from "../components/HelloWorld.vue";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: "主页",
      path: "/",
      component: Main,
      children: [
        {
          name: "欢迎",
          path: "/hello",
          component: HelloWorld,
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
      ],
    },
  ],
});
