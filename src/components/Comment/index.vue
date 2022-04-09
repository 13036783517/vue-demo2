<template>
  <div calss="comments">
    <header>
      <h1 class="fabiao">发表评论</h1>
    </header>
    <div>
      <textarea name="" id="" cols="30" rows="10" class="neirong" placeholder="请输入内容" autofocus></textarea>
      <van-button type="danger" block>提交</van-button>
    </div>
   
    <ul v-for="item in aaa" :kay="item.id"  class="comments-list">
      <li class="comments-item">
        <header class="comments-header">
          <span>{{item.di}}</span>
          <span>{{item.name}}</span>
          <span>{{item.add}}</span>
        </header>
        <p>{{item.text}}</p>
      </li>
    </ul>
    <van-button type="danger" block class="jiazai-bottom">加载更多</van-button>
  </div>
</template>
<script>
  import { getname } from '@/api'
  export default {
    data() {
      return {
        aaa:'',
      }
    },
    props:["idname"],
    created() {
      this.getname()
      console.log(this.idname)
    },
    methods: {
      getname() {
        getname().then(res => {
          this.aaa=res.data.find((item)=>item.id==this.idname).name
          console.log(this.aaa)
        })
      },
    },
  }
</script>
<style lang="less" scoped>
  .fabiao {
    font-weight: 600;
    border-bottom: 2px solid #c9c5c5;
    margin: 0 auto;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .neirong {
    width: 100%;
    height: 150px;
    margin: 0 -4px;
  }

  .comments-list {
    font-size:15px;
    .comments-item {
      span {
        margin-right: 10px;
      }
    }
  }

  .comments-header {
    border-bottom: 2px solid #c9c5c5;
  }

  .jiazai-bottom {
    color: #f00000;
    background: rgb(255, 255, 255)
  }
</style>