<template>
<div>
    <swiper :turnpic="turnpic" :isfull="true"></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/home/news'>
		                    <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/home/piclist'>
		                    <img src="../../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/home/shoplist'>
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
import swiper from '../../components/public/swiper.vue'
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
                this.$http.get('api/getlunbo').then(result=>{
                    console.log(result);
                    
                    if(result.body.status==0){
                        this.turnpic=result.body.message
                    }
                })
            }
        },
        components:{
            swiper:swiper
        }
    }
    //轮播图的整体结构通过mint-ui实现,轮播图中的数据通过ajax请求得到数据,将得到的数据赋值给data中的数值
    //在页面中使用v-for进行循环,vue组件中的v-for必须要有key
</script>

<style scoped >
   
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