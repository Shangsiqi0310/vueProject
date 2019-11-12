<template>
<div class="detail">
    <h3>{{detailmessage.title}}</h3>
    <p>
        <span>发表时间:{{detailmessage.add_time|sillyDatetime}}</span>
        <span>点击:{{detailmessage.click}}次</span>
    </p>
    <hr>
    <div v-html="detailmessage.content" class="content"></div>
    <comment :artid="id"></comment>
    </div>
</template>
<script>
import comment from './comment.vue'
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            detailmessage:{},
            id:this.$route.params.id
        }
    },
    created(){
        this.getmessage()
    },
    methods:{
        getmessage(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                console.log(result);
                
                if(result.body.status==0){
                    this.detailmessage=result.body.message[0]
                    console.log(result.body.message[0]);
                    
                    Toast('获取新闻成功')
                }else{
                    Toast('获取新闻失败')
                }
            })
        }
    },
    components:{
        comment:comment
    }
}

</script>

<style scoped>
    .detail{
        margin:10px;
        
        width:100%;
        
    }
    .detail h3{
        font-size:16px;
        color:red;
        text-align:center;
        width:100%;
    }
    .detail p{
        display:flex;
        justify-content:space-between;
        font-size:12px;
        margin-top:15px;
        color:skyblue;
    }
    .detail p span:nth-child(1){
        margin-right:340px;
    }
    .content img {
        width:100%;
    }
</style>