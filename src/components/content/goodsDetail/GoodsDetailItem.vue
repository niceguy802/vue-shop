<template>
  <div>
<!--    <Swiper :banner="goodsDetailItem.result.itemInfo.topImages"></Swiper>-->
<!--        <h2>{{goodsDetailItem.itemInfo}}</h2>-->
    <div>
<!--      <h4>{{goodsDetailItem.result.iid}}</h4>-->
<!--      <p>￥{{goodsDetailItem.result.skuInfo.defaultPrice}}</p>-->
    </div>
  </div>
</template>

<script>
  import Swiper from '@/components/common/Swiper'
  import {getDetailMessage} from '@/network/detail'

  export default {
    name: "GoodsDetailItem",
    components: {
      Swiper
    },
    data() {
      return {

      }
    },
    props: {
      goodsDetailItem: {
        type:Object,
        default:{}
      }
    },
  }
</script>

<style scoped>

</style>
