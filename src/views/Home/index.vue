<template>
    <div class="home">
        <!-- 路由渲染 -->
        <router-view></router-view>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in lunbolist" :key="item.id">
                <img :src="item.img" alt="aaa">
            </van-swipe-item>
        </van-swipe>
        <!-- 九宫格 -->
        <van-grid :column-num="3">
            <van-grid-item
              v-for="item in tupianlist"
              :key="item.id"
              :icon="item.img"
              :text="item.text"
              :to="item.to"
            />
          </van-grid>
    </div>
</template>
<script>
    import { getLunbo } from '../../api/'
    import { getTupian } from '../../api/'
    export default {
        data() {
            return {
                lunbolist: [],
                tupianlist:[]
            }
        },
        created() {
            // axios.get('http://127.0.0.1:3000/log').then(res=>{
            //     console.log(res)
            // })
            this.getLunbo()
            this.getTupian()
            // console.log(this.reas)

        },
        methods: {
            getLunbo() {
                try {
                    getLunbo().then(res => {
                    // this.lunbolist=res
                    // this.reas=res.data  
                    // console.log(this.lunbolist)
                    this.lunbolist = res.data
                    console.log(this.lunbolist);

                })
                } catch (error) {
                    console.log("请求失败")
                }
            },
            getTupian(){
                try {
                    getTupian().then(res => {
                    this.tupianlist = res.data
                    console.log(this.tupianlist);

                })
                } catch (error) {
                    console.log("请求失败")
                }
            }
        },
    }
</script>
<style lang="less" scoped>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }

    .my-swipe {
        height: 200px;
    }
    .my-swipe img {
        width: 100%;
        height: 100%;
    }
    ::v-deep .van-icon__image{
        width:60px;
        height:60px;
    }
</style> 