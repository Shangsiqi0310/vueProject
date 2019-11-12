import VueRouter from "vue-router";
import home from './components/tabbar/homecontent.vue'
import member from './components/tabbar/membercontent.vue'
import cart from './components/tabbar/cartcontent.vue'
import search from './components/tabbar/searchcontent.vue'
import news from './components/news/news.vue'
import newdetail from './components/news/newdetail.vue'

var router = new VueRouter({
    routes: [

        { path: '/home', component: home },
        { path: '/', redirect: '/home' },
        { path: '/member', component: member },
        { path: '/cart', component: cart },
        { path: '/search', component: search },
        { path: '/home/news', component: news },
        { path: '/home/detail/:id', component: newdetail }
    ],
    linkActiveClass: 'mui-active'

})
export default router