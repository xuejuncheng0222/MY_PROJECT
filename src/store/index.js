// 配置vuex的内容

import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},

  mutations: {},

  actions: {},
  // 模块化
  modules: {
    tab,
  },
});

export default store;
