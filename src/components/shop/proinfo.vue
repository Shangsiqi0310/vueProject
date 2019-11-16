<template>
    <div class="proinfo-outer">
         <transition   @before-enter="beforeEnter"  @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>
        <div class="mui-card">
        <swiper :turnpic="turnpic" :isfull="false"></swiper>
        </div>
        <div class="mui-card ">
           
			    <div class="mui-card-header">{{promessage.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="messagepri"> 
                            市场价:<span>￥{{promessage.market_price}}</span>
                            销售价:<span>￥{{promessage.sell_price}}</span>
                        </p>
                        <div class="count">购买数量:
                            <input type="button" value="-" @click="minus">
                            <input type="text" v-model="count">
                            <input type="button" value="+" @click="add">
                        </div>
                        
					</div>
                     <mt-button type="primary" size="small">立即购买</mt-button>
			         <mt-button type="danger" size="small" @click="addcart">加入购物车</mt-button>
				</div>
			  

		</div>
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<ul>
                           <li><span> 商品型号:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{promessage.goods_no}}</li>
                            <li><span>库存情况:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{promessage.stock_quantity}}件</li>
                            <li><span>上架时间:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{promessage.add_time}}</li>
                        </ul>

					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="prointro(id)">图文介绍</mt-button>
                    
                    <mt-button type="danger" size="large" plain @click="procomment(id)">商品评论</mt-button>
                   
                </div>
		</div>
    </div>
</template>
<script>
import swiper from '../public/swiper.vue'
export default {
    data(){
        return {
            turnpic:[],
            id:this.$route.params.id,
            promessage:{},
            count:1,
            ballflag:false
        }
    },
    created(){
        this.getproinfoswiper()
        this.getproinfo()
        
    },
    methods:{
        getproinfoswiper(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status==0){
                   result.body.message.forEach(item=>{
                       item.img=item.src;
                   })
                   this.turnpic=result.body.message
                   
                }
            })
        },
        getproinfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                if(result.body.status==0){
                    this.promessage=result.body.message[0];
                }
                
            })
        },
        
        add(){
            if(this.count>=this.promessage.stock_quantity){
               return this.count=this.promessage.stock_quantity
            }
            this.count++;
        },
        minus(){
            if(this.count<=1){
                return this.count=1
            }
            this.count--;
        },
        prointro(id){
            this.$router.push({name:'picword',params:id})
        },
        procomment(id){
            this.$router.push({name:'comment',params:id})
        },
        addcart(){
            this.ballflag=!this.ballflag
           //当点击加入购物车时触发函数,这里只负责将数据拼接
           
            var nowproduct={id:this.id,count:this.count,price:this.promessage.sell_price,selected:true}
                
                this.$store.commit('getCart',nowproduct)
                
            
        },
        beforeEnter(el){
            el.style.transform='translate(0,0)'
        },
        enter(el,done){
            el.offsetWidth;
            var butcart=document.querySelector('#butcart').getBoundingClientRect()
            var ball=this.$refs.ball.getBoundingClientRect()
            var x=butcart.left-ball.left
            var y=butcart.top-ball.top
            el.style.transform=`translate(${x}px,${y}px)`;
            el.style.transition="all 0.5s";
            done()
        },
        afterEnter(el){
            this.ballflag=!this.ballflag
        }
    },
    components:{
        swiper
    }
}
//ref的使用,在vue中主要是数据的处理,很少操纵dom元素但是如果想获取当前组件的dom元素的时候可以在元素上添加ref="xxx"属性
//当想获取这个dom元素时,直接this.$refs.xxx此时得到的是原生的dom元素
</script>
<style scoped>
    .mui-card-content-inner ul{
        margin:0;
        padding:0;
        list-style:none;
        color:#aaa;
        font-size:12px;
    }
    
    .proinfo-outer{
        background-color:#eee;
        overflow:hidden;
        position:relative;
    }
    .messagepri{
        font-size:12px;
    }
    .messagepri :first-child{
        margin-right:100px;
        text-decoration:line-through;
    }
    .messagepri :last-child{
        color:red;
        font-size:16px;
    }
    .count input{
        font-size:12px;
        margin:0;
        padding:0;
        width:24px;
        height:24px;
        line-height:24px;
        text-align:center;
    }
    .mui-card-content .mint-button{
        margin:10px;
    }
    .mui-card-footer .mint-button{
        margin-bottom:10px;
    }
    .mui-card-footer {
        display:block;
        
    }
    
    .ball{
        width:16px;
        height:16px;
        background-color:red;
        position:absolute;
        border-radius:50%;
        left:121px;
        bottom:351px;
        z-index:99;
        line-height:16px;
        text-align:center;
        color:#fff;
    }
    /* 当父元素的display:flex时br是不起作用的 */
</style> 