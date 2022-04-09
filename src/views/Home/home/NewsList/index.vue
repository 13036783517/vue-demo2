<template>
    <div class="NewsList">
        <!-- 商品详情 -->
        <van-card v-for="item in newslist" :num="item.aa" :price="item.datas" :desc="item.zhaiyao" :title="item.text"
            :thumb="item.img" :key="item.id" @click="fn(item.id)">
            <div slot="num">{{item.aa}}</div>
            <div slot="price">{{item.datas}}</div>
        </van-card>
    </div>
</template>
<script>
    import { getZixun } from '../../../../api/'
    export default {
        data() {
            return {
                newslist: []
            }
        },
        created() {
            this.getZixun()
        },
        methods: {
            getZixun() {
                getZixun().then(res => {
                    this.newslist = res.data
                })
            },
            fn(id){
                this.$router.push('/home/newslnfo/'+id)
            }
        },
    }
</script>
<style lang="less" scoped>
    .NewsList {
        height: 68px;
        min-height: 68px;

        .van-card {
            padding: 8px, 8px;
        }

        .van-card__title {
            font-size: 12px;
        }

        .van-card__price {
            color: #f00000;

        }
    }

</style>