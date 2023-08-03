<template>
  <div>
    <p>只是测试vue组件</p>
    <input type="text" />
    <p>传过来的值是{{ msg1 }}+{{ msg2 }}</p>
  </div>
</template>

<script>
export default {
  props: ["msg1", "msg2"],
};
</script>

<style></style>
