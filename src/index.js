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