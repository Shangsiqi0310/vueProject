<template>
<div>
    <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="item in imgcategorylist" :key="item.id" @click.prevent="getpics(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>
            <ul class="pic-box">
                <router-link class="pic-item" v-for="item in picslist" :key="item.id" :to="'/home/picinfo/'+item.id" tag="li">
                    <img v-lazy="item.img_url" alt="">
                    <div class="info-content" >
                     <h1>{{item.title}}</h1>
                     <p>
                         <span>{{item.zhaiyao}}</span>
                     </p>
                     </div>
                </router-link>
               
                
            </ul>
</div>
</template>
<script>
import '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return {
            imgcategorylist:[],
            picslist:[]
        }
    },
    methods:{
        getimgcategory(){
            this.$http.get('api/getimgcategory').then(result=>{
                console.log(result);
                if(result.body.status==0){
                    this.imgcategorylist=result.body.message
                    this.imgcategorylist.unshift({ title:'全部', id:0 })
                }
                
            }) 
        },
        getpics(id){
            this.$http.get('api/getimages/'+id).then(result=>{
                if(result.body.status==0){
                    this.picslist=result.body.message
                }
                
            })
        }
    },
    created(){
        this.getimgcategory()
        this.getpics(0)
    }
    
    
    
}
//图片懒加载,使用mint-ui进行图片懒加载不引入部分的mint-ui引入全部,在需要懒加载的图片上使用v-lazy代替src,
//引入懒加载的图片样式
</script>
<style scoped>
    
   img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
   }
   .pic-box li{
       list-style:none;
       margin-bottom:6px;
       background-color:#ccc;
   }
   .pic-item img{
       width:100%;
       vertical-align:middle;
   }
   .info-content{
       background-color:rgba(0,0,0,.4);
       position:absolute;
       bottom:4px;
       color:#fff;
       padding:6px;
   }
   .info-content h1{
       font-size:26px;
       font-weight:400; 
       margin-bottom:10px;
   }
   .info-content span{
       color:#fff;
   }
   .pic-item{
       position:relative;
   }
   .pic-box{
       
       padding:0;
       margin-left:15px;
   }
</style>