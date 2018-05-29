<template>
  <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="/">Homepage</el-menu-item>
    <el-menu-item index="/blog">Blog</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
    };
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>

<style>
.el-menu{width:100%!important;}
.el-menu-item {
  width: 50%;
  text-align: center;
  font-size: 20px!important;
}

li.el-menu-item.is-active {
  border-bottom: 5px solid #20a0ff;
  transition: border-bottom 0.3s;
  -moz-transition: border-bottom 0.3s;
  -webkit-transition: border-bottom 0.3s;
  -o-transition: border-bottom 0.3s;
}
</style>
