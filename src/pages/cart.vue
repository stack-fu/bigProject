<template>
  <div>
    cart
    <order-header></order-header>

    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from "@/components/NavFooter";
import OrderHeader from "@/components/OrderHeader";
export default {
  name: "cart",
  components:{
    OrderHeader,
    NavFooter
  }
}

</script>

<style scoped>

</style>