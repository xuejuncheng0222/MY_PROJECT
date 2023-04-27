import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)


export default new VueRouter({
    routes:[{
        name:'欢迎',
        path:'/hello',
        component:()=>import('@/components/HelloWorld')
    }]
})