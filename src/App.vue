<template>
  <div id="app">
    <nav>
      <!-- 头部 -->
      <van-nav-bar title="标题" left-text="返回" left-arrow fixed />
      
      <!-- 路由区域 -->
      <router-view></router-view>
      <!-- 底部导航 -->
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">home</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/friends">friends</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart" badge="5">cart</van-tabbar-item>
        <van-tabbar-item icon="search" to="/search">search</van-tabbar-item>
      </van-tabbar>
    </nav>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        active:'aaa'
      }
    },
    created() {
      
    },
    methods: {
      
    },
  }
</script>
<style lang="less">
  #app{
    margin-top:46px;
    margin-bottom:50px;
  }
  /* 顶部 */
   ::v-deep .van-nav-bar__content{
    top:0px;
  }
  /* 底部 */
  ::v-deep.van-tabbar--fixed{
    margin-top:50px;
  }
</style>