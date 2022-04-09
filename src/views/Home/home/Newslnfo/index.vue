<template>
    <div class="Newslnfo">
    <!-- 头部 -->
        <header>
            <h3 class="biaoti">
                {{newsinfo.title}}
            </h3>
            <div class="shijian">
                <span class="shijian1">{{newsinfo.datas}}</span>
                <span>{{newsinfo.aa}}</span>
            </div>
        </header>
        <!-- 内容 -->
        <p class="zhaiyao">{{newsinfo.zhaiyao}}</p>
        <!-- 评论区 -->
        <Comments :idname="id"></Comments>

    </div>
</template>
<script>
    import Comments from '@/components/Comment'
    import { getXiangqing } from '@/api/'
    export default {
        data() {
            return {
                id: "",
                newsinfo: []
            }
        },
        methods: {
            getXiangqing() {
                getXiangqing().then(res => {
                    this.newsinfo = res.data[this.id - 1]
                    console.log(this.newsinfo)
                })
            },
        },
        components:{
            Comments
        },
        created() {
            this.id = this.$route.params.id
            console.log(this.$route.params.id);
            this.getXiangqing()
            console.log(this.id)
        },
    }
</script>
<style lang="less" scoped>
    .Newslnfo{
        padding:0px 7px;
    }
   header{
       height:50px;
       border-bottom:2px solid #c9c5c5;
    .biaoti {
        color: #f00000;
        text-align: center;
        margin: 4px 0px;
    }

    .shijian {
        font-size: 12px;
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .shijian1{
            color:rgb(70, 112, 208);
        }
    }

   }
   .zhaiyao{
       text-indent: 25px;
       font-size:15px;
   }

</style>