<template>
  <div>
    <input ref="oinput" type="text" />
    <div style="height: 300px"></div>
    <input ref="oo" type="text" v-model="trueMsg" />
    <!-- <div>{{ msg }}</div> -->
    <div>-------------------------------</div>
    <!-- <div>{{ trueMsg }}</div> -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.addLisen(this.$refs.oinput);
    this.addLisen1(this.$refs.oo);
  },
  data() {
    return {
      msg: "",
      trueMsg: "",
    };
  },
  methods: {
    addLisen1(ref) {
      ref.addEventListener("keyup", keyUp1);
      ref.addEventListener("keydown", keyDown1);
      function keyUp1(e) {
        console.log("keyUp1", e);
      }
      function keyDown1(e) {
        console.log("keyDown1", e);
      }
    },
    addLisen(ref) {
      let completevalue = ""; //读卡数据
      let isChinese = false; //判断是中文待选的状态
      let isPressShift = false; //判断按了shift
      //添加混合输入监听
      ref.addEventListener("compositionstart", compositionStartHandler);
      ref.addEventListener("keyup", keyUp);
      ref.addEventListener("keydown", keyDown);

      function compositionStartHandler(e) {
        console.log("start", e);
        compositionendOpen();
      }
      function keyUp(e) {
        console.log("keyUp", e);
        // if (e.key === "Shift") {
        //   isPressShift = true;
        // }
        // if (ref.value === "") {
        //   //空框按压shift识别是不是切换输入法
        //   console.log("清空");
        //   completevalue = "";
        //   isPressShift = false;
        // }
        // if (!isNaN(e.key) && e.code.includes("Digit")) {
        //   completevalue += e.code[5];
        //   ref.value = completevalue;
        // }
        // if (e.key !== "Process" && e.code.includes("Key")) {
        //   if (isPressShift) {
        //     completevalue += e.code[3];
        //     isPressShift = false;
        //   } else {
        //     completevalue += e.key;
        //   }
        //   ref.value = completevalue;
        // }
        // //兼容标点符号
        // if (e.key === ";") {
        //   if (isPressShift) {
        //     completevalue += ":";
        //     isPressShift = false;
        //   } else {
        //     completevalue += ";";
        //   }
        //   ref.value = completevalue;
        // }
        // if (e.key === "/") {
        //   completevalue += "/";
        //   ref.value = completevalue;
        // }
        // if (e.key === "-") {
        //   if (isPressShift) {
        //     completevalue += "_";
        //     isPressShift = false;
        //   } else {
        //     completevalue += "-";
        //   }
        //   ref.value = completevalue;
        // }
        // if (e.key === ".") {
        //   completevalue += ".";
        //   ref.value = completevalue;
        // }

        // if (e.key === "Backspace") {
        //   console.log("删除");
        //   //判断进入了中文否
        //   if (!isChinese) {
        //     completevalue = ref.value;
        //   } else {
        //     completevalue = completevalue.slice(0, -1);
        //   }
        // }
        if (e.code === "Enter") {
          ref.value = completevalue;
          // ref.value = "";
          completevalue = "";
          // console.log("ref", ref.value);
        }
      }
      function keyDown(e) {
        console.log("前", completevalue);
        console.log("keyDown", e);
        if (e.key === "Shift" || e.code.includes("Shift")) {
          isPressShift = true;
        }
        if (ref.value === "") {
          //空框按压shift识别是不是切换输入法
          console.log("清空");
          completevalue = "";
          isPressShift = false;
        }
        if (e.code.includes("Digit") || e.code.includes("Numpad")) {
          completevalue += e.code[e.code.length - 1];
          console.log("12", completevalue);
          ref.value = "121";
          console.log("13", ref.value);
        }
        if (e.code.includes("Key")) {
          if (isPressShift) {
            completevalue += e.code[3];
            isPressShift = false;
          } else {
            completevalue += e.code[3].toLowerCase();
          }
          ref.value = completevalue;
        }
        //兼容标点符号
        if (e.code === "Semicolon") {
          if (isPressShift) {
            completevalue += ":";
            isPressShift = false;
          } else {
            completevalue += ";";
          }
          ref.value = completevalue;
        }
        if (e.code === "Slash") {
          completevalue += "/";
          ref.value = completevalue;
        }
        if (e.code === "Minus") {
          if (isPressShift) {
            completevalue += "_";
            isPressShift = false;
          } else {
            completevalue += "-";
          }
          ref.value = completevalue;
        }
        if (e.code === "Period") {
          completevalue += ".";
          ref.value = completevalue;
        }
        if (e.key === "Backspace") {
          console.log("删除");
          //判断进入了中文否
          if (!isChinese) {
            completevalue = ref.value;
          } else {
            completevalue = completevalue.slice(0, -1);
          }
        }

        if (e.code === "Enter") {
          ref.value = completevalue;
          console.log("发送数据", ref.value);
        }
        // ref.value = completevalue;
        console.log("后", completevalue);
      }
      function compositionendOpen() {
        ref.addEventListener("compositionend", compositionendHandler);
      }
      function compositionendHandler(e) {
        console.log("end", e);
        ref.value = completevalue;
        CompositionendStop;
      }
      function CompositionendStop() {
        ref.removeEventListener("compositionend", compositionendHandler);
      }
    },
  },
};
</script>

<style></style>
