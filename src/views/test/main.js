class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: "open" });
    //样式，使用函数传参数进行获得，// 创建一个 <style> 标签并将样式添加到其中
    const styles = `
    .my-div-style {
      color: blue;
      font-size: 16px;
      font-weight: bold;
      padding: 10px;
      border: 1px solid blue;
      background-color: #f0f0f0;
    }
    `;
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    shadowRoot.appendChild(styleElement);

    //测试代码

    //测试代码

    // 创建一个 <div> 标签并为其添加样式
    const div = document.createElement("div");
    div.innerHTML = "This is a div with a class!";
    // 添加一个样式类
    div.classList.add("my-div-style");
    shadowRoot.appendChild(div);
  }
}

// 定义自定义元素
customElements.define("my-element", MyElement);
