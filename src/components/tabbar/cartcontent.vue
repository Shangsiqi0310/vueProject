<template>
    <div class="cart-outer">
        <div class="mui-card" v-for="(item,i) in localdata" :key="item.id">
        <div class="mui-card-content">
					<div class="mui-card-content-inner top-card">
						<mt-switch v-model="$store.getters. getisSelected[item.id]" @change="changeSelected(item.id,$store.getters. getisSelected[item.id])"></mt-switch>
                        <img :src='item.thumb_path'>
                        <div >
                            <h4>{{item.title}}</h4>
                            <p>
                                <span class="sell">￥{{item.sell_price}}</span>
                                <input type="button" value="-" @click="minus(i)">
                                <input type="text"  @change="changecount(item.id,this.value)" :value="counts[item.id]" ref="pronum"  >
                                <input type="button" value="+" @click="add(i)">
                                <a href="#" @click.prevent="del(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
		</div>
        </div>
        <div class="mui-card bottom-card">
				
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>总计(不含运费)</p>
                        <p>已购商品:<span>{{totalcount}}</span>件&nbsp;&nbsp;
                        总计:<span>￥{{totalmoney}}</span></p>
                       
					</div>
                     <mt-button type="danger" class="total">去结算</mt-button>
				</div>
				
			</div>

    </div>
</template>

<script >
export default {
    data(){
        return{
            localdata:[],
            counts:this.$store.getters.getCarPro,
            totalcount:0,
            totalmoney:0
        }
    },
    methods:{
        getAllProduct(){
            this.$http.get('api/goods/getshopcarlist/'+this.$store.getters.getProid.join()).then(result=>{
                
                if(result.body.status==0){
                    this.localdata=result.body.message
                    
                }
                
            })
        },
        getNowcount(id,value){
            var procount={id:id,count:value}
        },
        minus(i){
            var count=this.$refs.pronum[i].value
            if(count<=1){
                return count=1
            }
            count--
            this.$refs.pronum[i].value=count
        },
        add(i){
             this.$refs.pronum[i].value=parseInt(this.$refs.pronum[i].value)+1
            
        },
        changecount(id,value){
            console.log(1);
            
           this.$store.commit('changeprocount',{id:id,count:value})
            
        },
        del(id,index){
            this.localdata.splice(index,1)
            this.$store.commit('delPro',{id:id})
        },
        changeSelected(id,isselect){
            this.$store.commit('changeSelected',{id:id,selected:!isselect});
            this.getTotalcount();
            this.gettotalmoney();
        },
        getTotalcount(){
            this.totalcount=this.$store.state.cart.reduce((sum,item)=>{
                if(item.selected){
                    return sum+=item.count
                }
                return sum
            },0)
        },
        gettotalmoney(){
            this.totalmoney=this.$store.state.cart.reduce((sum,item)=>{
                if(item.selected){
                    return sum+=parseInt(item.count)*parseInt(item.price)
                }
                return sum
            },0)
        }
    },
    created(){
        this.getAllProduct()
        this.getTotalcount()
        this.gettotalmoney()
    }
}
//将数组中的元素连接成一个字符串,array.join()//默认用,隔开array.join('-')
//首先要通过ajax获取购物车中物品的进本信息,ids的准备在store中通过getters提供的方法遍历cart中的id把它放到数组中返回,
//在ajax请求的时候用arry.join把数组转化成字符串拼接到url后面,得到了数据,渲染到页面上,每个产品的购买数量,存在于cart中
//每件商品的数量不是从数据库中得到的而是从store中的cart中得到的如何根据当前这个产品的id值得到相应的数量,
//就要在getters封装数据时,把每一个cart中的id值作为key而count作为value放到对象中返回对象就可通过那个产品的id得到count了
//为对象添加属性时不用.而用[item.id]
//当为循环中的元素绑定ref的时候,获取时会得到一个数组通过索引得到当前的元素
</script>

<style scoped>
    .cart-outer{
        background-color:#eee;
        padding-bottom:80px;
        overflow:hidden;
    }
    .cart-outer .mui-card-content-inner img{
        width:50px;
        height:50px;
        margin:4px;
    }
    .top-card{
        display:flex;
        flex-direction:row;
    }
    .top-card h4{
        font-size:12px;
        margin:5px;
        font-weight:600;
    }
    .sell{
        color:red;
    }
    .top-card input{
        margin:0;
        padding:0;
        width:25px;
        height:25px;
        line-height:25px;
        font-size:12px;
        color:#333;
        text-align:center;
    }
    .top-card p a{
        font-size:12px;
    }
    .bottom-card p span{
        color:red;
    }
    .bottom-card .mui-card-content{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:12px;
    }
    .total{
        margin:20px 10px;
    }
    .bottom-card .mui-card-content-inner{
            padding-right:0;
    }
</style>