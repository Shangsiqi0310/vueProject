<template>
    <div class="header">
        <mt-header fixed title="哈哈哈哈,我是头部"> <span  slot="left">
    <mt-button icon="back" @click="back" v-show="flag">返回</mt-button>
  </span>
  <mt-button icon="more" slot="right"></mt-button></mt-header>
		<transition mode="out-in">
        	<router-view ></router-view>
		</transition>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-ccl " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-ccl" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-ccl" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart" ><span class="mui-badge" id="butcart">{{$store.getters.getAllcount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-ccl" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
	data(){
		return{
			flag:false
		}
	},
	methods:{
		back(){
			this.$router.go(-1)
		},
		isHome(){
			if(this.$route.path!="/home"){
				this.flag=true
			}else{
				this.flag=false
			}
		}
	},
	watch:{
		"$route.path":function(newValue,oldValue){
			if(newValue=="/home"){
				console.log(1);
				
				this.flag=false
			}else{
				this.flag=true
			}
		}
	},
	created(){
		this.isHome()
	}
}
//使用watch监听路由的改变,页面刚加载时flag为false不显示组件
//当路由改变时不是/home就显示组件
//但是如果从非首页刷新flag默认就是false,所以在created的时候判断一下路由
</script>

<style scoped>
    .header{
		max-width:750px;
        padding-top:40px;
		padding-bottom:50px;
		background-color:#fff;
		overflow-x:hidden;
		position:absolute
    }
	.v-enter{
		opacity:0;
		transform:translateX(100%)
	}
	.v-leave-to{
		opacity:0;
		transform:translateX(-100%)
	}
	.v-enter-active,
	.v-leave-active{
		transition:all 0.8s;
	}
	.mui-bar-tab .mui-tab-item-ccl.mui-active {
    	color: #007aff;
	}	
	.mui-bar-tab .mui-tab-item-ccl .mui-icon {
    	top: 3px;
    	width: 24px;
    	height: 24px;
    	padding-top: 0;
    	padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item-ccl {
    	display: table-cell;
    	overflow: hidden;
    	width: 1%;
    	height: 50px;
    	text-align: center;
    	vertical-align: middle;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	color: #929292;
	}
	.mui-bar-tab .mui-tab-item-ccl .mui-icon~.mui-tab-label {
    	font-size: 11px;
    	display: block;
    	overflow: hidden;
    	text-overflow: ellipsis;
	}
	.mui-bar-tab{
		z-index:1
	}




</style>
