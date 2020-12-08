<template>
  <div class="boxxx">
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
      <div class="container">
        <div class="pro-title">
          {{ title }}
        </div>
        <div class="pro-param">
          <a href="javascript:;">概述</a><span>|</span>
          <a href="javascript:;">参数</a><span>|</span>
          <a href="javascript:;">用户评价</a>
          <slot name="buy"></slot>
        </div>
      </div>
    </div>
    <div class="blank" :class="{'is_fixed':isFixed}">
  </div>

  </div>
</template>

<script>
export default {
  name: "ProductParam",
  props:{
    title:String
  },
  data(){
    return {
      isFixed: false,

    }
  },
  mounted(){
    window.addEventListener('scroll', this.initHeight,false);
  },
  methods:{
    initHeight(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop > 152;
    },
    destroyed(){
      window.removeEventListener('scroll',this.initHeight,false);
    }
  }
}
</script>

<style lang="scss">
  @import "./../assets/scss/config";
  @import "./../assets/scss/mixin";
  .blank{
    height: 0;
    &.is_fixed{
      height: 70px;
    }
  }
  .nav-bar{
    z-index: 9;
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background-color: #fff;
    &.is_fixed{
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px #cccccc;
    }
    .container{
      @include flex();
      .pro-title{
        font-size: 18px;
        color: #333333;
        font-weight: bold;
      }
      .pro-param{
        //box-sizing: border-box;
        font-size: 14px;
        span{
          margin:0 10px;
        }
        a{
          color: #666666;
        }
      }
    }
  }
</style>