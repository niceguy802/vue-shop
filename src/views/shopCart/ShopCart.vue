<template>
  <div>
    <NavBar class="shopCart-nav">
      <template v-slot:center>
        购物车({{cartLength}})
      </template>
    </NavBar>
    <GoodsItem></GoodsItem>
    <ShopCartItem></ShopCartItem>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import ShopCartItem from '@/components/content/shopCart/ShopCart-item'
  import GoodsItem from '@/components/content/shopCart/Goods-item'
  import {mapGetters} from 'vuex'
  export default {
    name: "ShopCart",
    components: {
      NavBar,
      ShopCartItem,
      GoodsItem
    },
    data() {
      return {
        number: 0
      }
    },
    computed:{
      //直接获取到getters里面的函数
      ...mapGetters([
        'cartLength'
      ])
      // cartLength(){
      //   return this.$store.getters.cartLength
      // }
    }
  }
</script>

<style scoped>
.shopCart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
