<template>
  <div class="header-content">
    <!-- 左侧 -->
    <div class="l-content">
      <el-button
        @click="collapseChange"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 面包屑 -->
      <span class="head-tap">首页</span>
    </div>
    <!-- 右侧 -->
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="@/assets/user.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    collapseChange() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script>
<style lang="less" scoped>
.header-content {
  padding: 0 20px;
  height: 60px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .head-tap {
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
