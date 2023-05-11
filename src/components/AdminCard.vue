<!-- admin卡片 -->
<template>
  <el-card class="box-card" shadow="hover">
    <div class="user">
      <img src="@/assets/user.png" alt="" />
      <div class="userinfo">
        <p class="name">Admin</p>
        <p class="access">超级管理员</p>
      </div>
    </div>
    <div class="login-info">
      <p>上次登录时间：<span>2021-7-19</span></p>
      <p>上次登录地点：<span>武汉</span></p>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  width: 400px;
}
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  text-align: left;
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
