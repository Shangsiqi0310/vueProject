<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea maxlength='120' placeholder="请输入评论,最多不超过120字" v-model="newcontent"></textarea>
        <mt-button type="primary" size="large" class="uibutt" @click="commitcomment">发表评论</mt-button>
        <div class="cmt-body">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户:{{item.user_name}}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    发表时间{{item.add_time|sillyDatetime}}
                </div>
                <div class="cmt-content">
                    {{item.content=='undefined'||''?'此人很懒,神魔都没写':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" plain size="large" class="uibutt" @click="addmore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
    export default {
        data(){
            return{
                comments:[],
                pageindex:1,
                newcontent:''
            }
        },
        created(){
            this.getNowcomment()
        },
        methods:{
            getNowcomment(){
                this.$http.get('api/getcomments/'+this.artid+'?pageindex='+this.pageindex).then(result=>{
                    console.log(result);
                    
                    if(result.body.status==0){
                        this.comments=this.comments.concat(result.body.message)
                    }else{
                        Toast("失败")
                    }
                })
            },
            addmore(){
                this.pageindex++;
                this.getNowcomment()
            },
            commitcomment(){
                this.$http.post('api/postcomment/'+this.artid,{content:this.newcontent}).then(result=>{
                  
                    if(result.body.status==0){
                        this.getNowcomment()
                        this.comments.unshift({user_name:'匿名用户',add_time:Date.now(),content:this.newcontent})
                        this.newcontent=""
                    }
                    
                })
            }
        },
        props:['artid']
    } 
    //点击加载更多,就是加载下一页内容,但是也要包含第一页内容,不将数组中的值替换而是使用数组原型对象中的concat方法进行数组的拼接
    //重新ajax请求,将请求到的数据拼接在一起

    //发表评论,在表单处双向绑定数据,为button添加点击事件,点击后ajax请求post提交到后台,并自己手动插入数据到页面
</script>
<style>
    textarea{
        height:150px;
    }
    .cmt-body{
        margin:10px 0;
    }
    .cmt-title{
        background-color:#aaa;
        line-height:50px;
        padding-left:6px;
        
    }
    .cmt-content{
        height:50px;
        line-height:50px;
        padding-left:6px;
    }
    .uibutt{
        height:60px;
        font-size:22px!important;
    }
</style>