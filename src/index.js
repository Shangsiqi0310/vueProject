import h from './app.vue'
import Vue from 'vue'

//mint-ui的引入
import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'; //引入包
Vue.component(Header.name, Header); //注册header

Vue.component(Swipe.name, Swipe); //轮播图
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Button.name, Button); //按钮


//mui的引入
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//路由的导入
import vueRouter from 'vue-router'
Vue.use(vueRouter)
import router from './router.js'

//ajax vue-resource的导入
import vueResource from 'vue-resource'
Vue.use(vueResource)

//设置ajax请求的跟路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

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
    router: router
})