<template>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/detail/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                            <span>发表时间:{{item.add_time|sillyDatetime}}</span>
                            <span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
</template>

<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(result=>{
                
                if(result.body.status==0){
                    this.newsList=result.body.message
                }
            })
        }
    }
}
//点击新闻资讯,router-link上的to找到router.js中路由对应组件显示组件,就是当前组件,书写页面结构
//获取资源,通过vue-resource这个插件,先安装vue-resource然后import到入口文件中 之后Vue.use()
//此时可以直接使用ajax,去请求页面数据,把请求回来的数据放在页面中,页面中的时间需要格式化,使用全局过滤器进行过滤
//使用silly-datetime插件格式化,不要忘记return过滤的结果
</script>

<style scoped>
    .mui-media h1{
        font-size:16px;
    }
    .mui-table-view{
        width:100%;
    }
    .mui-ellipsis{
        display:flex;
        justify-content:space-between;
        
        font-size:12px;
        color:rgb(58, 134, 221)
    }
    
</style>