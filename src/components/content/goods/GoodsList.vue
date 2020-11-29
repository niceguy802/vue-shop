<template>
  <div class="goods-item" >
  <GoodsListItem v-for="item in goods" :goodsItem="item"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default:[]
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
