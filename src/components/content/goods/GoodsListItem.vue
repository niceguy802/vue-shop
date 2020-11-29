<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="">
    <p>{{goodsItem.title}}</p>
    <span class="price">价格:{{goodsItem.price}}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span class="collect">❤{{goodsItem.cfav}}</span>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        defaults: {}
      }
    },
    methods:{
      itemClick(){
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 50vw;
    padding: 5px;
    float: left;
    overflow: hidden;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  img {
    width: 100%;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .price {
    color: #ff8198;
    font-size: 16px;
    font-width: 500;
  }

  .collect {
    font-size: 12px;

  }
</style>
