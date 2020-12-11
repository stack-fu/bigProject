<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机&nbsp;电话卡</a>
              <div class="children">
                <!--if real need to change the v-for ul!!-->
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,ind) in item" :key="ind">
                    <a :href="sub?'/#/product/'+sub.id:'/#/product/30'">
                      <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                      <span>
                        {{ sub?sub.name:'小米9' }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 显示器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>

            <li class="menu-item">
              <a href="javascript:;">耳机 音箱</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-blue" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-blue" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item, index) in adsList" :key="index">
          <img v-lazy="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item, index) in phoneList" :key="index">
              <div class="item" v-for="(j, i) in item" :key="i" @click="goToProductPage(j.id)">
                <span :class="{'new-pro':Math.floor(Math.random()*10)%2==0}">新品</span>
                <div class="item-img">
                  <img v-lazy="j.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{ j.name }}</h3>
                  <p>{{ j.subtitle }}</p>
                  <p class="price" @click.stop="addCart(j.id)">{{ j.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <service-bar></service-bar>
    <modal title="提示"
           sureText="查看购物车"
           btnType="1"
           modalType="middle"
           :showModal="showModal"
           @submit="goToCart"
           @cancel="showModal=false"
           >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import Modal from "./../components/Modal";
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'
export default {
  name: "index",
  components:{
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  data(){
    return {
      swiperOptions:{
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay:true,
        effect:'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList:[
        {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'42',
          img:'/imgs/slider/slide-4.jpg'
        },{
          id:'42',
          img:'/imgs/slider/slide-5.jpg'
        }
      ],
      menuList:[
          [
            {
              id:30,
              img:'/imgs/item-box-1.png',
              name:'小米CC9'
            },
            {
              id:31,
              img:'/imgs/item-box-2.png',
              name:'小米8 青春版'
            },
            {
              id:32,
              img:'/imgs/item-box-3.jpg',
              name:'Redmi K20 Pro'
            },
            {
              id:33,
              img:'/imgs/item-box-4.jpg',
              name:'移动4G+专区'
            },
          ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      adsList:[
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },
        {
          id:48,
          img:'/imgs/ads/ads-2.jpg'
        },
        {
          id:45,
          img:'/imgs/ads/ads-3.png'
        },
        {
          id:47,
          img:'/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList:[],
      showModal:false,

      }
    },
  mounted() {
    this.init();
  },
  methods:{
    init(){
      this.axios.get('/products', {
        params:{
          categoryId:100012,
          pageSize:14
        }
      }).then((res)=>{
        res.list = res.list.slice(6,14);
        this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];
      })
    },
    addCart(id){
      this.axios.post('/carts',{
        productId:id,
        selected:true,
      }).then((res={cartTotalQuantity:0})=>{
        this.showModal = true;
        this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
      }).catch(()=>{this.showModal = true})
    },
    goToCart(){
      this.$router.push('/cart');
    },
    goToProductPage(id){
      this.$router.push(`/product/${id}`);
    }
  }
  }

</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        box-sizing: border-box;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background-color: #55585a7a;
        .menu-wrap{
          .menu-item{
            height: 50px;
            line-height: 50px;
            a{
              display: block;
              position: relative;
              font-size: 16px;
              color: #ffffff;
              padding-left: 30px;
              &:after{
                content: '';
                position: absolute;
                right: 30px;
                top: 17.5px;
                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
              }
            }
            &:hover{
              background-color: #FF6600;
              .children{
                display: block;
              }
            }
            .children{
              display: none;
              width: 962px;
              height: 451px;
              background-color: #ffffff;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                  z-index: 10;
                  img{
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                  a{
                    color: #333333;
                    font-size: 14px;

                  }
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height: 451px;
        .swiper-slide {
          background-position: center;
          background-size: cover;
        }
        .swiper-button-prev{
          padding-left: 264px;
        }
        img{
          width: 100%;
          //height: 100%;
        }
      }
    }
    .ads-box{
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a{
        width: 296px;
        height: 167px;
      }
    }
    .banner{
      margin-bottom: 50px;
    }
    .product-box{
      background-color: #F5F5F5;
      padding: 30px 0 50px;
      h2{
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: #333333;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        margin-right: 16px;
        .banner-left{
          img{
            width: 224px;
            height: 619px;
          }
        }
        .list-box{
          margin-left: 15px;
          .list{
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child{
              margin-bottom: 0px;
            }
            .item{
              width: 236px;
              height: 302px;
              background-color: #ffffff;
              text-align: center;
              span{
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: #ffffff;
                //border-radius: 12px;
                &.new-pro{
                  background-color: #7ecf68;
                }
                &.kill-pro{
                  background-color: #e82626;
                }
              }

              .item-img{
                width: 196px;
                height: 196px;
                margin: 0 auto;
                img{
                  heigh-t: 196px;
                  width: 100%;
                  objectfit: cover;
                }
              }
              .item-info{
                h3{
                  color: #333333;
                  font-size: 14px;
                  line-height: 14px;
                  font-weight: bold;
                }
                p{
                  color: #999999;
                  line-height: 14px;
                  margin: 6px auto 13px;
                }
                .price{
                  color: #f20a0a;
                  font-size: 14px;
                  font-weight: bold;
                  cursor: pointer;
                  &:after{
                    content: '';
                    @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                    margin-left: 5px;
                    vertical-align: middle;
                  }
                }
              }
              cursor: pointer;
              transition: all .3s;
              &:hover{
                box-shadow: 3px 6px 6px 6px rgba(0,0,0,0.05);
                margin-top: -2px;
              }
            }
          }
        }
      }
    }
  }
</style>