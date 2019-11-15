<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in turnpic" :key="item.id">
           <img :src='item.img' :class="{isfull:isfull}">
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{},
    props:['turnpic','isfull']
}
//将轮播图这一组件抽离出来,方便公共使用,图片的资源来自引入它的父组件
//将组件引入相应页面,注册到私有组件上,再引用
</script>
<style scoped>
    .mint-swipe{
        text-align:center;
       height:200px;
   }
   .mint-swipe .mint-swipe-item img{
      
       height:100%;
   }
   .isfull{
        width:100%;
   }
</style>