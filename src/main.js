import Vue from 'vue'
import App from './App.vue'
//注册路由
import router from './router'
//引入组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);//全局引入组件库

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
