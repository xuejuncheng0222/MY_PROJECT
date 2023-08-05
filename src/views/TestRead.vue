<template>
  <div>
    <input ref="oinput" type="text" />
    <div style="height: 300px"></div>
    <input ref="oo" type="text" v-model="trueMsg" />
    <div>{{ msg }}</div>
    <div>-------------------------------</div>
    <div>{{ trueMsg }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.addLisen(this.$refs.oinput);
    // this.addLisen1(this.$refs.oo);
  },
  data() {
    return {
      msg: "",
      trueMsg: "",
    };
  },
  methods: {
    addLisen(ref) {
      let upDate = ""; //混合输入up数据
      let downDate = ""; //混合输入down数据
      let oldValue = ""; //老数据获取
      let completevalue = ""; //读卡数据
      let isStart = false; //判断是否进入中文输入
      let isChinese = false; //是否在中文输入法待选模式下
      //添加混合输入监听
      ref.addEventListener("compositionstart", compositionStartHandler);
      ref.addEventListener("keyup", keyUp);
      ref.addEventListener("keydown", keyDown);

      function compositionStartHandler(e) {
        isStart = true;
        isChinese = true;
        oldValue = ref.value;
        keyupOpen();
        keydownOpen();
        compositionendOpen();
      }
      function keyUp(e) {
        if (ref.value === "") {
          console.log("清空");
          completevalue = "";
        }
        if (!isNaN(e.key) && e.code.includes("Digit")) {
          completevalue += e.code[5];
        }
        if (e.key === "Process" && e.code.includes("Key")) {
          completevalue += e.code[3];
        }
        if (e.key == ";") {
          completevalue += ":";
        }
        if (e.key === "Backspace") {
          console.log("删除");
          if (!isChinese) {
            completevalue = ref.value;
          } else {
            completevalue = completevalue.slice(0, -1);
          }
        }
        if (e.key === "Enter") {
          ref.value = "";
          isStart = false;
        }
      }
      function keyDown(e) {
        if (e.key === "Enter") {
          if (isStart && !/[a-z]/.test(ref.value)) {
            ref.value = completevalue;
          }
          console.log("发送数据", ref.value);
          completevalue = "";
        }
      }

      function keyupOpen() {
        ref.addEventListener("keyup", keyupHandler);
      }
      function keydownOpen() {
        ref.addEventListener("keydown", keydownHandler);
      }
      function compositionendOpen() {
        ref.addEventListener("compositionend", compositionendHandler);
      }

      function keyupHandler(e) {
        if (!isNaN(e.key) && e.code.includes("Digit")) {
          upDate += e.code[5];
        }
        if (e.key !== "Process" && e.code.includes("Key")) {
          upDate += e.code[3];
        }
      }
      function keydownHandler(e) {
        if (e.key === "Process" && e.code.includes("Digit")) {
          downDate += e.code[5];
        }
        if (e.key === "Process" && e.code.includes("Key")) {
          downDate += e.code[3];
        }
        if (e.code === "Backspace") {
          if (downDate.length == 0) {
            upDate = "";
          }
          downDate = downDate.slice(0, -1);
        }
      }
      function compositionendHandler() {
        isChinese = false;
        ref.value = oldValue + upDate[0] + downDate;
        if (upDate.length == 0) {
          ref.value = oldValue + downDate;
        }
        upDate = "";
        downDate = "";
        keyupStop();
        keydownStop();
        CompositionendStop();
      }

      function keyupStop() {
        ref.removeEventListener("keyup", keyupHandler);
      }
      function keydownStop() {
        ref.removeEventListener("keydown", keydownHandler);
      }
      function CompositionendStop() {
        ref.removeEventListener("compositionend", compositionendHandler);
      }
    },
  },
};
</script>

<style></style>
