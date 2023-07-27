<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    try {
      // 模拟一个错误
      throw new Error("这是一个错误");
    } catch (error) {
      // 发送错误日志到 Sentry
      this.$sentry.captureException("error", {
        extra: { error }, // 附带的数据
        level: "warning", // 错误等级，警告还是报错由你决定
      });
    }
  },
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
