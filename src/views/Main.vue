<template>
  <div>
    <el-container>
      <el-aside width="210px">
        <home-aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
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
export default {
  data() {
    return {};
  },
  methods: {},
  props: {},
  components: {
    HomeAside,
  },
};
</script>
<style scoped></style>
