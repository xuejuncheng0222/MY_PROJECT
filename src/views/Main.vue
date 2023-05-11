<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <home-aside />
      </el-aside>
      <el-container>
        <el-header>
          <home-header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
//用组件的形式封装这个功能
import HomeAside from "../components/HomeAside.vue";
import HomeHeader from "../components/HomeHeader.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  props: {},
  components: {
    HomeAside,
    HomeHeader,
  },
};
</script>
<style scoped>
.el-header {
  padding: 0;
}
.el-aside {
  transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -moz-transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -o-transition: width 0.15s;
}
</style>
