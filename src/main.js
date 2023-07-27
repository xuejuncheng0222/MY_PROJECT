import Vue from "vue";
import App from "./App.vue";
//注册路由
import router from "./router";
// 引入vuex
import store from "./store";
//引入组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import * as Sentry from "@sentry/vue";

//引入mock
import "@/api/mock";

Vue.use(ElementUI); //全局引入组件库

Sentry.init({
  Vue,
  // dsn: "https://62f1944b39404d81a258de20c379f924@sentry.msunhis.com:19000/4",
  dsn: "",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
