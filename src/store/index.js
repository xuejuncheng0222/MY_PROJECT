// 配置vuex的内容

import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tabArray: ["首页"],
  },
  getters: {},

  mutations: {
    changeTab(state, val) {
      if (
        !state.tabArray.includes(val) &&
        !state.tabArray.includes(`/ ${val}`)
      ) {
        state.tabArray.push(`/ ${val}`);
      }
    },
  },

  actions: {},
  // 模块化
  modules: {
    tab,
  },
});

export default store;
