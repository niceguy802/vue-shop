<template>
  <div>
    <DetailBar></DetailBar>
    <Swiper>
      <template v-slot:slot-swiper>
        <div class="swiper-slide" v-for="item in bannerList">
          <a href="#">
            <img :src="item" alt="">
          </a>
        </div>
      </template>
    </Swiper>
    <GoodsDetail :goodsDetail="message"
                 :title="title"
                 :price="price"
                 :columns="columns"
                 :services="services"
                 :shopName="shopName"
                 :detailImage="detailImage"
                 :shopLogo="shopLogo"
                 :score="score"
                 :totalSell="totalSell"
                 :totalGoods="totalGoods"
                 :shopCart="shopCart"></GoodsDetail>
  </div>
</template>

<script>
  import {getDetailMessage} from '@/network/detail'
  import GoodsDetail from '@/components/content/goodsDetail/GoodsDetail'
  import Swiper from '@/components/common/Swiper'
  import DetailBar from "./DetailBar";

  export default {
    name: "Detail",
    components: {
      DetailBar,
      GoodsDetail,
      Swiper
    },
    data() {
      return {
        iid: null,
        message: [],
        bannerList: null,
        detailImage: [],
        title: null,
        price: null,
        columns: [],
        shopName: null,
        services: [],
        shopLogo: null,
        score: [],
        totalSell: null,
        totalGoods: null,
        shopCart: {}
      }
    },
    created() {
      this.iid = this.$route.params.iid
      this.getDetailMessage(this.iid)
      this.tabBar()
      // console.log(this.$route.params.iid)
    },

    methods: {
      getDetailMessage(iid) {
        getDetailMessage(iid).then(res => {
          this.message = res.result.itemInfo.topImages
          this.bannerList = res.result.itemInfo.topImages
          this.title = res.result.itemInfo.title
          this.price = res.result.itemInfo.price
          this.columns = res.result.columns
          this.shopName = res.result.shopInfo.name
          this.services = res.result.shopInfo.services
          this.shopLogo = res.result.shopInfo.shopLogo
          this.score = res.result.shopInfo.score
          this.totalSell = res.result.shopInfo.cSells
          this.totalGoods = res.result.shopInfo.cGoods
          this.detailImage = res.result.detailInfo.detailImage[0].list

          //传入购物车的数据
          // this.shopCart.iid=res.iid
          this.shopCart.iid = res.iid;
          this.shopCart.title = res.result.itemInfo.title;
          this.shopCart.img = res.result.itemInfo.topImages[0];
          this.shopCart.name = res.result.shopInfo.name
          this.shopCart.num = 0;
          this.shopCart.price = res.result.itemInfo.lowNowPrice
          console.log(this.shopCart)
          // console.log(res.result.detailInfo.detailImage[0].list)
          // console.log(res)
        })
      },

      tabBar() {
        this.$store.commit('tabBarIsChange', false)
      }

    }
  }
</script>

<style scoped>
  .swiper-slide {
    margin-top: 5px;
    height: 50vh;
    overflow: hidden;
  }

  img {
    width: 100%;
    /*height: 40vh;*/
  }
</style>
