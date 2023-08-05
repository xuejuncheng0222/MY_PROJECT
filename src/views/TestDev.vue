<template>
  <div>
    <input ref="oinput" type="text" v-model="msg" />
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
    this.addLisen1(this.$refs.oo);
  },
  data() {
    return {
      msg: "",
      trueMsg: "",
    };
  },
  methods: {
    // addLisen(ref) {
    //   let getNum = "";
    //   //start开启
    //   ref.addEventListener("compositionstart", compositionStartHandler);
    //   //start处理
    //   function compositionStartHandler(e) {
    //     console.log("start", e);
    //     keydownOpen();
    //     compositionendOpen();
    //   }

    //   //keydown开启
    //   function keydownOpen() {
    //     ref.addEventListener("keydown", keydownHandler);
    //   }

    //   //compositionend开启
    //   function compositionendOpen() {
    //     ref.addEventListener("compositionend", compositionendHandler);
    //   }
    //   //keydown处理
    //   function keydownHandler(e) {
    //     console.log("keydown", e);
    //     //获取中文输入法下输入的选词数字
    //     if (e.code.includes("Digit")) {
    //       getNum += e.code[5];
    //     }
    //   }
    //   //keyend处理
    //   function compositionendHandler(e) {
    //     console.log("end", e);
    //     //将数组的数字进行导出,处理身份证X问题
    //     if (e.data === "x" || e.data === "X") {
    //       ref.value = ref.value + getNum;
    //     } else {
    //       ref.value = getNum;
    //     }

    //     //取消监控
    //     stopCompositionEnd();
    //     stopCompositionDown();
    //     //清空getNum
    //     getNum = "";
    //   }
    //   //取消end
    //   function stopCompositionEnd() {
    //     ref.removeEventListener("compositionend", compositionendHandler);
    //   }
    //   //取消down
    //   function stopCompositionDown() {
    //     ref.removeEventListener("keydown", keydownHandler);
    //   }
    // },

    // addLisen(ref) {
    //   ref.addEventListener("compositionstart", (e) => {
    //     console.log("start", e);
    //   });
    //   ref.addEventListener("compositionupdate", (e) => {
    //     console.log("update", e);
    //   });
    //   ref.addEventListener("compositionend", (e) => {
    //     console.log("end", e);
    //   });
    //   ref.addEventListener("keyup", (e) => {
    //     console.log("keyup", e);
    //   });
    //   ref.addEventListener("keydown", (e) => {
    //     console.log("keydown", e);
    //   });
    //   ref.addEventListener("keypress", (e) => {
    //     console.log("keypress", e);
    //   });
    // },12
    /***终期修改***/
    addLisen(ref) {
      //start开启
      let oldValue = "";
      let getUpMsg = "";
      let getDownMsg = "";
      let trueValue = "";

      ref.addEventListener("compositionstart", compositionStartHandler);
      // ref.addEventListener("keydown", (e) => {
      //   console.log("keydown", e);
      // });
      // ref.addEventListener("keyup", (e) => {
      //   console.log("keyup", e);
      // });
      keyupOpen();
      keydownOpen();
      //start处理
      function compositionStartHandler(e) {
        getUpMsg = "";
        getDownMsg = "";
        oldValue = ref.value;
        // keyupOpen();
        // keydownOpen();
        compositionendOpen();
      }

      /**********keydown**************/
      function keydownOpen() {
        ref.addEventListener("keydown", keydownHandler);
      }
      function keydownHandler(e) {
        console.log("down", e);
        if (e.code.includes("Digit")) {
          getDownMsg += e.code[5];
        }
        if (e.code.includes("Key")) {
          getDownMsg += e.code[3];
        }
        // console.log("getDownMsg", getDownMsg);
        if (e.code === "Backspace") {
          //对getDownMsg，getUpMsg进行处理
          getDownMsg = getDownMsg.slice(0, -1);
          getUpMsg = getUpMsg.slice(0, -1);
        }
        if (e.code === "Enter") {
          // console.log(trueValue);
          ref.value = trueValue;
          // console.log(ref.value, "=======");
          trueValue = "";
        }
      }
      function stopKeyDown() {
        ref.removeEventListener("keydown", keydownHandler);
      }

      /********up*********/
      function keyupOpen() {
        ref.addEventListener("keyup", keyupHandler);
      }
      function keyupHandler(e) {
        console.log("keyup", e, trueValue);
        console.log(trueValue);
        //剔除event.key="Process"，和其他键值的情况
        if (
          e.key !== "Process" &&
          (e.code.includes("Digit") || e.code.includes("Key"))
        ) {
          //对数字字母进行提取,通过字符串的长度得到字母或者数字
          if (e.code.length === 6) {
            getUpMsg = getUpMsg + e.code[5];
            trueValue = trueValue + e.code[5];
          } else {
            getUpMsg = getUpMsg + e.code[3];
            trueValue = trueValue + e.code[3];
          }
        }
        //处理冒号
        if (e.key === ";") {
          // console.log("------------------------------------");
          ref.value = ref.value + ":";
          trueValue = trueValue + ":";
        }
        // console.log("getUpMsg", getUpMsg);
      }
      function stopUp() {
        ref.removeEventListener("keyup", keyupHandler);
      }

      /**********compositionend**********/
      //compositionend开启
      function compositionendOpen() {
        ref.addEventListener("compositionend", compositionendHandler);
      }
      function compositionendHandler(e) {
        console.log("end", e, getUpMsg);
        if (
          getDownMsg.length > 1 &&
          !isNaN(getDownMsg[getDownMsg.length - 1])
        ) {
          getUpMsg += getDownMsg[getDownMsg.length - 1];
        }
        if (getDownMsg.length === 1 && !isNaN(getDownMsg)) {
          getUpMsg += getDownMsg;
        }
        ref.value = oldValue + getUpMsg;
        getUpMsg = "";
        getDownMsg = "";
        //取消监控
        // stopUp();
        // stopKeyDown();
        stopCompositionEnd();
      }
      function stopCompositionEnd() {
        ref.removeEventListener("compositionend", compositionendHandler);
      }
    },
    addLisen1(ref) {
      ref.addEventListener("keydown", (e) => {
        console.log("keydown", e);
      });
      ref.addEventListener("keyup", (e) => {
        console.log("keyup", e);
      });
      // ref.addEventListener("keyup", (e) => {
      //   console.log("可以二次绑定");
      // });
    },
  },
};
</script>

<style></style>
