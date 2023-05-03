<template>
  <div class="header-content">
    <!-- 左侧 -->
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑 -->
    </div>
    <!-- 右侧 -->
    <div class="r-content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
}
</style>
