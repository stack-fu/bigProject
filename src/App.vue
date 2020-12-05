<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      res:{},
    }
  },
  components: {
  },
  mounted() {
    // jicheng api
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // })
  }
}
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/button.scss";

/*@import "./";*/
</style>
