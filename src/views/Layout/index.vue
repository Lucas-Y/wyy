<template>
  <div id="layout">
    <van-nav-bar :title="$route.meta.title" fixed />

    <router-view></router-view>

    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style scoped>
#layout {
  padding-top: 46px;
}
</style>
