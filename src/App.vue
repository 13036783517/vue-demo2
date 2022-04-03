<template>
  <div id="app">
    <nav>
      <!-- 头部 -->
      <van-nav-bar title="标题" left-text="返回" left-arrow/>
      
      <!-- 路由区域 -->
      <router-view></router-view>
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
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
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>