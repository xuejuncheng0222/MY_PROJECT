import { InputCSS } from "./inputCss.js";

class Btn extends HTMLElement {
  constructor() {
    super();

    //
    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;
  }

  h(el) {
    return document.createElement(el);
  }
  connectedCallback() {
    //钩子函数：首次插入DOM时加载
    //获取传进来的属性
    let a = "width:200px; height:200px;border:1px solid red";
    const shaDom = this.attachShadow({ mode: "open" }); //虚拟dom
    this.div = this.h("div");
    this.div.innerHTML = `<input type='text'></input>
    <button>点击</button><div>这是</div>`;
    this.div.setAttribute("style", a);
    this.div.classList.add("div1");
    shaDom.appendChild(this.div);
    //设置css样式引入
    let DIYstyle = document.createElement("style");
    DIYstyle.innerHTML = InputCSS();
    document.head.appendChild(DIYstyle);
  }
}

customElements.define("man-btn", Btn); //抛出元素，和元素引用的类
