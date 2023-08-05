<!-- 测试组件传参 -->

<template>
  <div>
    <p :style="sty">这是测试页</p>
    <div @click="changeMeg($event)">{{ Message }}</div>
    <div @click="odiv2()">
      <div @click="odiv1($event)" style="height: 20px; background-color: pink">
        测试点透
      </div>
    </div>
    <!-- 测试按键指定键的监听 -->
    <input type="text"
      @keyup.83="keyLog($event)"
      style="height: 40px; background-color: blue"
    ></input>
    <p>-----------------</p>
    <TestVue msg1="薛俊成" msg2="李梦"></TestVue>
  </div>
</template>

<script>
import TestVue from './testComponents/TestVue.vue'
export default {
  components:{TestVue},
  data() {
    return {
      sty: {
        color: "red",
        fontSize: "120px",
      },
      Message: 13,
      keyL:'o'
    };
  },
  methods: {
    //点击改变mes,并且打印事件对象
    changeMeg(event) {
      console.log(event);
      this.Message++;
    },
    //测试点透
    odiv1(event) {
      console.log("我是里边的div");
      event.stopPropagation();
    },
    odiv2() {
      console.log("我是外边的div");
    },
    //按键事件
    keyLog(e) {
      console.log(e);
    },
  },
};
</script>

<style>
/* div{
  color: red;
  font-size: 30px;
} */
</style>
