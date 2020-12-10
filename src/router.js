import Vue from 'vue';
import Router from 'vue-router';
import home from "./pages/home";
import index from "./pages/index";

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:home,
            redirect:'/index',
            children:[
                {
                    path:'index',
                    name:'index',
                    component:index,
                },{
                    path:'product/:id',
                    name:'product',
                    component:()=>import('./pages/product'),
                },{
                    path:'detail/:id',
                    name:'detail',
                    component:()=>import('./pages/detail'),
                },
            ]
        },
        {
            path:'/login',
            name:'login',
            component:()=>import('./pages/login'),
        },{
            path:'/cart',
            name:'cart',
            component:()=>import('./pages/cart'),
        },{
            path:'/order',
            name:'order',
            component:()=>import('./pages/order'),
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:()=>import('./pages/orderList'),
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:()=>import('./pages/orderConfirm'),
                },{
                    path:'pay',
                    name:'order-pay',
                    component:()=>import('./pages/orderPay'),
                },{
                    path:'alipay',
                    name:'alipay',
                    component:()=>import('./pages/alipay'),
                },
            ]
        },
    ]
})