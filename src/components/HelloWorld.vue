<template>
  <div>
    <p>xuejuncehng</p>
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <div>
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="100" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
    <p style="color: brown">123</p>
    <a href="www.baidu.com">baidu</a>
    <img src="" alt="" />
    <ul>
      <li>列表1</li>
      <li>列表2</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
