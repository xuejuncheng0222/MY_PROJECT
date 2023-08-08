<template>
  <div>
    <input ref="oinput" type="text" />
    <div style="height: 300px"></div>
    <input ref="oo" type="text" v-model="trueMsg" />
    <div>这是测试的页面</div>
    <div>-------------------------------</div>
    <div>{{ trueMsg }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.addLisen(this.$refs.oinput);
  },
  data() {
    return {
      msg: "",
      trueMsg: "",
    };
  },
  methods: {
    addLisen(ref) {
      let completevalue = ""; //读卡数据
      let isChinese = false; //判断是中文待选的状态
      let isPressShift = false; //判断按了shift
      let isPressCtrl = false; //判断按下ctrl
      //添加混合输入监听
      ref.addEventListener("compositionstart", compositionStartHandler);
      ref.addEventListener("keyup", keyUp);
      ref.addEventListener("keydown", keyDown);

      function compositionStartHandler(e) {
        isChinese = true;
        console.log("start", e);
        compositionendOpen();
      }
      function keyUp(e) {
        console.log("keyUp", e);
        if (e.key === "Shift") {
          isPressShift = true;
        }
        if (ref.value === "") {
          //空框按压shift识别是不是切换输入法
          console.log("清空");
          completevalue = "";
          isPressShift = false;
        }
        if (!isNaN(e.key) && e.code.includes("Digit")) {
          completevalue += e.code[5];
        }
        if (e.key !== "Process" && e.code.includes("Key") && !isPressCtrl) {
          if (isPressShift) {
            completevalue += e.code[3];
            isPressShift = false;
          } else {
            completevalue += e.key;
          }
        }
        if (isPressCtrl && e.code === "KeyV") {
          //复制操作
          completevalue = ref.value;
        }
        //兼容标点符号
        if (e.key === ";") {
          if (isPressShift) {
            completevalue += ":";
            isPressShift = false;
          } else {
            completevalue += ";";
          }
          ref.value = completevalue;
        }
        if (e.key === "/") {
          completevalue += "/";
          ref.value = completevalue;
        }
        if (e.key === "-") {
          if (isPressShift) {
            completevalue += "_";
            isPressShift = false;
          } else {
            completevalue += "-";
          }
          ref.value = completevalue;
        }
        if (e.key === ".") {
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
          ref.value = "";
          completevalue = "";
        }
        //兼容ctrl等操作
        if (e.key === "Control") {
          //定时事件
          isPressCtrl = true;
          const isControl = setTimeout(() => {
            isPressCtrl = false;
            clearTimeout(isControl);
            console.log("回填");
          }, 200);
        }
      }
      function keyDown(e) {
        console.log("keyDown", e);
        if (e.code === "Enter") {
          ref.value = completevalue;
          console.log("发送数据", ref.value);
        }
      }
      function compositionendOpen() {
        ref.addEventListener("compositionend", compositionendHandler);
      }
      function compositionendHandler(e) {
        console.log("end", e);
        ref.value = completevalue;
        isChinese = false;
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
