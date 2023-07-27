<template>
  <div>
    这是一个用户页
    <p>{{ xue }}----{{ sex }}</p>
    <input v-model="num" type="text" />
    <div v-if="xue">这个可不可见</div>
    <button @click="isNo">可见不可见</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xue: true,
      num: 123,
      sex: "男",
    };
  },
  methods: {
    isNo() {
      this.xue = !this.xue;
      this.isChange();
    },
    isChange() {
      this.sex = "女";
    },
  },
  props: {},
};
</script>

<style scoped></style>
