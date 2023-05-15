<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse-transition="false"
    >
      <h3 class="el-menu-h3" v-if="!isCollapse">通用后台管理系统</h3>
      <h3 class="el-menu-h3" v-else></h3>
      <el-menu-item
        v-for="val in noChildren"
        :key="val.name"
        :index="val.name"
        @click="checkMenu(val)"
      >
        <i :class="`el-icon-${val.icon}`"></i>
        <span slot="title" v-if="!isCollapse">{{ val.label }}</span>
      </el-menu-item>
      <el-submenu v-for="val in hasChildren" :key="val.name" :index="val.name">
        <template slot="title">
          <i :class="`el-icon-${val.icon}`"></i>
          <span slot="title" v-if="!isCollapse">{{ val.label }}</span>
        </template>
        <el-menu-item-group
          v-for="val in val.children"
          :key="val.name"
          :index="val.name"
        >
          <el-menu-item :index="val.name" @click="checkMenu(val)">{{
            val.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo {
  // width: 200px;
  min-height: 400px;
  text-align: left;
  height: 100vh;
  cursor: pointer;
  border-right-width: 0px;
  .el-menu-h3 {
    font-size: 18px;
    text-align: center;
    color: #fff;
    padding: 0 20px;
    height: 30px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击跳转相应界面
    checkMenu(val) {
      //去除双击出现报错问题
      if (
        this.$route.path !== val.path &&
        !(this.$route.path === "/home" && val.path === "/")
      ) {
        this.$router.push(val.path);
      }
      //点击添加面包屑
      this.$store.commit("changeTab", `${val.label}`);
      //点击颜色变化
    },
  },
  //计算属性
  //判断是不是有子菜单进行渲染的函数（当多个数据变化都会引起一个数据变化的时候采用计算属性）
  computed: {
    // 没有子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    //接收标签是否收起
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>
