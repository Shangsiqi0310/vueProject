import h from './app.vue'
import Vue from 'vue'

//mint-ui的引入
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui' //引入包
Vue.use(MintUI)

//mui的引入
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//vue中的缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//路由的导入
import vueRouter from 'vue-router'
Vue.use(vueRouter)
import router from './router.js'

//ajax vue-resource的导入
import vueResource from 'vue-resource'
Vue.use(vueResource)

//全局配置ajax的post请求,参数
Vue.http.options.emulateHTTP = true;

//设置ajax请求的跟路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

//vuex注册
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state: { //this.$store.state.***
        cart: JSON.parse(localStorage.getItem('cart') || '[]')
    },
    mutations: { //this.$store.commit
        getCart(state, proitem) {
            var cartitems = state.cart //从ocalStorage中取过来的数据有可能不存在
            var flag = true //是否可以push
            cartitems.some(item => { //遍历数组查看是否有相同的商品,如果有直接加数量即可
                if (item.id == proitem.id) {
                    item.count += proitem.count
                    flag = false
                    return true
                }
            })
            if (flag) {
                cartitems.push(proitem)
            }
            state.cart = cartitems
            localStorage.setItem('cart', JSON.stringify(cartitems))
        },
        changeprocount(state, obj) {
            state.cart.some(item => {
                if (item.id == obj.id) {
                    item.count = parseInt(obj.count)
                    return true;
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        delPro(state, obj) {
            state.cart.some((item, i) => {
                if (item.id == obj.id) {
                    state.cart.splice(i, 1)
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        changeSelected(state, obj) {
            state.cart.some(item => {
                if (item.id == obj.id) {
                    item.selected = obj.selected
                    return true
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    getters: {
        getAllcount(state) {
            return state.cart.reduce((sum, item) => {
                return sum += item.count
            }, 0)
        },
        getCarPro(state) {
            var carpros = {}
            state.cart.forEach((item, i) => {
                carpros[item.id] = parseInt(item.count)
            })
            return carpros;
        },
        getProid(state) {
            var ids = []
            state.cart.forEach(item => {
                ids.push(item.id)
            })
            return ids
        },
        getisSelected(state) {
            var isselect = {}
            state.cart.forEach(item => {
                isselect[item.id] = item.selected
            })

            return isselect
        },

    }
})

//设置全局过滤器,时间格式化
import {
    format,
    fromNow
} from 'silly-datetime';
Vue.filter('sillyDatetime', function(date, partten = 'YYYY-MM-DD HH:mm:ss') {
    return format(date, partten)
})


var vm = new Vue({
    el: '#app',
    render: cEle => cEle(h),
    router,
    store
})