<template>
<div class="info-outer">
    <div class="picinfo-box">
        <h4 class="title-picinfo">{{nowinfo.title}}</h4>
        <p class="subtitle">
            <span>发布时间:{{nowinfo.add_time|sillyDatetime}}</span>
            <span>点击:{{nowinfo.click}}次</span>
        </P>
        <hr>
        <div class=thumbs>
         <vue-preview :slides="shortpic" ></vue-preview>
         </div>
        <div v-html="nowinfo.content" class="info-content"></div>
    </div>
    <comment :artid='id'></comment>
</div>
</template>
<script>
import comment from '../news/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            nowinfo:{},
            shortpic:[]
        }
    },
    methods:{
        getinfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{

                if(result.body.status==0){
                this.nowinfo=result.body.message[0];
                }
                
            })
        },
        getshortpic(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                console.log(result.body.message);
                
                if(result.body.status==0){
                    this.shortpic=result.body.message
                    this.shortpic.forEach(item=>{
                        item.msrc=item.src;
                        item.w=600;
                        item.h=400
                    })
                }
            })
        }  
    },
    created(){
        this.getinfo()
        this.getshortpic()
    },
    components:{
        comment:comment
    }
}
//当前的详细信息的id从路径得来的,this.$route.params.id获取当前的的路径的id
//缩略图的制作,首先安装vue-preview,在入口文件中对他进行配置,在页面中需要放缩略图的地方,放入指定标签,
</script>
<style>
    .picinfo-box{
        min-width:350px;
        margin:5px;
    }
    .picinfo-box p{
        display:flex;
        margin:10px;
    }   
    .title-picinfo{
        display:block;
        color:skyblue;
        text-align:center;
    }
    .subtitle{
        font-size:12px;
        justify-content:space-between;
    }
    .info-content{
        line-height:25px;
    }
    .thumbs{
        margin-bottom:10px;
    }
    .thumbs img{
        height:200px;
    }
    .thumbs .my-gallery{
        display:flex;
        flex-wrap:wrap;
    }
    .thumbs .my-gallery figure {
        margin:5px;
        width:30%;
        
    }
</style>