<template>
  <div>
    <p>只是测试vue组件</p>
    <input type="text" />
    <p>传过来的值是{{ msg1 }}+{{ msg2 }}</p>
    <p>这是测试组件传参的驼峰{{ newProps }}</p>
  </div>
</template>

<script>
export default {
  // props: ["msg1", "msg2", "newProps"],
  props: {
    msg1: String,
    msg2: String,
    newProps: Number,
  },
};
</script>

<style></style>
