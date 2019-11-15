<template>
    <div class="datainfo">
        <h5>{{data.title}}</h5>
        <hr>
        <div v-html="data.content"></div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            id:this.$route.params.id,
            data:{}
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$http.get('api/goods/getdesc/'+this.id).then(result=>{
                if(result.body.status==0){
                    this.data=result.body.message[0];
                    
                }
            })
        }
    }
}
</script>
<style>
    .datainfo{
        max-width:350px;
        padding:10px;
    }
    .datainfo h5{
        color:rgb(91, 179, 214);
        text-align:center;
        margin:15px;
    }
    .datainfo img{
        width:100%;
    }
</style>