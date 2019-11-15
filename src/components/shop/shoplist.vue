<template>
    <div class="goodslist">
        <div class="good-item" v-for="item in allProduct" :key="item.id" @click="toproinfo(item.id)">
            <img :src="item.img_url" alt="">
            <div class="prodetail"> 
            <h3>{{item.title}}</h3>
            <p>
                <span>￥{{item.sell_price}}</span>
                <span>￥{{item.market_price}}</span>
            </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>

    </div>
</template>
<script>
export default {
    data(){
        return {
            pageindex:1,
            allProduct:[]
        }
    },
    methods:{
        getAllproduct(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                console.log(result);
                if(result.body.status==0){
                    this.allProduct=this.allProduct.concat(result.body.message)
                }
                
            })
        },
        getmore(){
            this.pageindex++;
            this.getAllproduct();
        },
        toproinfo(id){
            this.$router.push('/home/shopinfo/'+id)
        }

    },
    created(){
        this.getAllproduct()
    }
}
//点击加载更多功能,不是覆盖之前的列表所以要进行数组的拼接,把产品一起显示
//点击触发事件调用方法,将页面数加一,并调用方法再次请求数据
</script>
<style scoped>
    .goodslist{
        display:flex;
        flex-wrap:wrap;
        background-color:#eee;
        padding-left:10px;
    }
    .good-item{
        margin:5px;
        width:48%;
        min-height:250px;
        background-color:#fff;
        box-shadow:2px 2px 10px #bbb;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        padding:2px;
    }
    .good-item img{
        width:100%;
        flex:1;
    }
    .good-item p{
        display:flex;
        justify-content:space-between;
    }
    .good-item p :first-child{
        color:red;
        font-weight:700;
        font-size:18px;
    }
    .good-item p :last-child{
        text-decoration:line-through;
    }
    .prodetail{
        padding:8px;
        background-color:rgba(0,0,0,.2)

    }
</style>