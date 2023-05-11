export default {
  state: {
    isCollapse: false,
  },
  getters: {},
  mutations: {
    //修改菜单展开与否
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
  actions: {},
};
