学习技巧
1。在多个值影响一个或者需要首次加载的时候要用到计算属性，计算数学就是数据，可以直接使用，不是函数
2.v-for属性要有key,动态属性要加冒号，拼接字符串用模板字符串的形式"`----${}`"
3.vue中用到的数据要双花括号
4.跳转路由。this.router.push(path)
5.route和router的区别，route为当前的路由信息，router是整个路由实例的有push
6.登录界面逻辑，当输入账号密码，后端判断，返回一个token，然后我们将token保存在cookie中，从cookie有一个插件js-cookie，引入import Cookie from 'js-cookie'里面有set get move,然后我们可以利用cookie来进行不同页面间的通信，通过判断cookie来判断是否登陆成功。
逻辑：如果没有token就说明当前用户为未登录状态，要返回到登录页面，如果当前就在login界面，则不跳转，token存在此时跳转到首页，但是此时不能够让用户在此到login页，因此可以把token存在和页面为login进行同步判断。

7.导航守卫。全局前置导航守卫，每次导航触发都会引起拦截。进行判断有没有token，路由是在main.js中定义，在这里边加前置路由导航，用到cookie，引入cookie插件

8.对于vuex的数据刷新浏览器回进行数据刷新的，所以导航栏的固定数据可以存在cookie中

9.动态路由的注册

10.在vue.config.js进行配置跨越处理，进行访问数据。
