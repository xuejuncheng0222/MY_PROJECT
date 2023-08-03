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
    this.test(":");
    this.test("：");
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
      //支持输入的字符
      const symbolArr = [
        "!",
        '"',
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "[",
        "\\",
        "]",
        "^",
        "_",
        "`",
        "{",
        "|",
        "}",
        "~",
      ];
      ref.addEventListener("compositionstart", compositionStartHandler);
      ref.addEventListener("keydown", (e) => {
        console.log("keydown", e);
      });
      ref.addEventListener("keyup", (e) => {
        console.log("keyup", e);
      });
      //start处理
      function compositionStartHandler(e) {
        console.log("start", e);
        // keydownOpen();
        oldValue = ref.value;
        keyupOpen();
        keydownOpen();
        compositionendOpen();
      }

      /**********keydown**************/
      function keydownOpen() {
        ref.addEventListener("keydown", keydownHandler);
      }
      function keydownHandler(e) {
        console.log("keydown", e);
        if (e.code.includes("Digit")) {
          getDownMsg += e.code[5];
        }
        if (e.code.includes("Key")) {
          getDownMsg += e.code[3];
        }
        //最后识别enter时，进行合并值
        if (e.code === "Backspace") {
          console.log(getUpMsg, getDownMsg, "------------------");
          //对getDownMsg，getUpMsg进行处理
          getDownMsg = getDownMsg.slice(0, -1);
          getUpMsg = getUpMsg.slice(0, -1);
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
        console.log("keyup", e);
        //处理字符转换逻辑

        //剔除event.key="Process"，和其他键值的情况
        if (
          e.key !== "Process" &&
          (e.code.includes("Digit") || e.code.includes("Key"))
        ) {
          //对数字字母进行提取,通过字符串的长度得到字母或者数字
          if (e.code.length === 6) {
            getUpMsg = getUpMsg + e.code[5];
          } else {
            getUpMsg = getUpMsg + e.code[3];
          }
          console.log(getUpMsg);
        }
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
        ref.value = oldValue + getUpMsg;
        getUpMsg = "";
        getDownMsg = "";
        //取消监控
        stopUp();
        stopKeyDown();
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
    },
    test(props) {
      let arr = ["："];
      if (arr.includes(props)) {
        console.log("yes");
      } else {
        console.log("false");
      }
    },
  },
};
</script>

<style></style>
