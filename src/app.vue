<template>
    <div class="header">
        <mt-header fixed title="哈哈哈哈,我是头部"></mt-header>
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
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart" ><span class="mui-badge" id="butcart">0</span></span>
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
