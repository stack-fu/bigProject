import Vue from 'vue';
import Router from 'vue-router';
import home from "./pages/home";
import index from "./pages/index";
import product from "./pages/product";
import detail from "./pages/detail";
import cart from "./pages/cart";
import order from "./pages/order";
import orderList from "./pages/orderList";
import orderConfirm from "./pages/orderConfirm";
import orderPay from "./pages/orderPay";
import alipay from "@/pages/alipay";
//@ => . ?

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
                    component:product,
                },{
                    path:'detail/:id',
                    name:'detail',
                    component:detail,
                },
            ]
        },{
            path:'/cart',
            name:'cart',
            component:cart,
        },{
            path:'/order',
            name:'order',
            component:order,
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:orderList,
                },{
                    path:'confirm',
                    name:'order-confirm',
                    component:orderConfirm,
                },{
                    path:'pay',
                    name:'order-pay',
                    component:orderPay,
                },{
                    path:'alipay',
                    name:'alipay',
                    component:alipay,
                },


            ]
        },

    ]
})