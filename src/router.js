import VueRouter from "vue-router";
import home from './components/tabbar/homecontent.vue'
import member from './components/tabbar/membercontent.vue'
import cart from './components/tabbar/cartcontent.vue'
import search from './components/tabbar/searchcontent.vue'
import news from './components/news/news.vue'
import newdetail from './components/news/newdetail.vue'
import piclist from './components/pictures/piclist.vue'
import picinfo from './components/pictures/picinfo.vue'
import shoplist from './components/shop/shoplist.vue'
import shopinfo from './components/shop/proinfo.vue'
import picword from './components/shop/picword.vue'
import comment from './components/shop/procomment.vue'


var router = new VueRouter({
    routes: [

        { path: '/home', component: home },
        { path: '/', redirect: '/home' },
        { path: '/member', component: member },
        { path: '/cart', component: cart },
        { path: '/search', component: search },
        { path: '/home/news', component: news },
        { path: '/home/detail/:id', component: newdetail },
        { path: '/home/piclist', component: piclist },
        { path: '/home/picinfo/:id', component: picinfo },
        { path: '/home/shoplist', component: shoplist },
        { path: '/home/shopinfo/:id', component: shopinfo },
        { path: '/home/picword/:id', component: picword, name: 'picword' },
        { path: '/home/comment/:id', component: comment, name: 'comment' },



    ],
    linkActiveClass: 'mui-active'

})
export default router