<template>
<div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in turnpic" :key="item.id">
           <img :src='item.img'>
        </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/home/news'>
		                    <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to=''>
		                    <img src="../../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to=''>
		                    <img src="../../images/menu3.png">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to=''>
		                    <img src="../../images/menu4.png">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to=''>
		                    <img src="../../images/menu5.png">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to=''>
		                    <img src="../../images/menu6.png">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 
</div>
</template>

<script >
    export default {
        data(){
            return {
                turnpic:[]
            }
        },
        created(){
            this.getLubotu()
        },
        methods:{
            getLubotu(){
                this.$http.get('api/getlunbo').then(function(result){
                    console.log(reslut);
                    
                    if(result.body.status==0){
                        this.turnpic=result.body.message
                    }
                })
            }
        }
    }
    //轮播图的整体结构通过mint-ui实现,轮播图中的数据通过ajax请求得到数据,将得到的数据赋值给data中的数值
    //在页面中使用v-for进行循环,vue组件中的v-for必须要有key
</script>

<style scoped >
   .mint-swipe{
       height:200px;
   }
   .mint-swipe .mint-swipe-item img{
       width:100%;
       height:100%;
   }
   .mui-grid-view.mui-grid-9 img{
       height:100%;
       width:100%;
   }
   .mui-grid-view.mui-grid-9{
       background-color:#fff;
       border:none;
   }
   .mui-grid-view.mui-grid-9 li{
       border:none;
   }
  
</style>