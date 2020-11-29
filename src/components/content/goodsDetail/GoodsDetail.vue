<template>
  <div class="goods-detail">
    <p class="title">【{{shopName}}】{{title}}</p>
    <p class="price"> {{price}}</p>
    <div class="columns">
      <p v-for="item in columns">{{item}}</p>
    </div>
    <hr>
    <div class="services">
      <p v-for="item in services">
        <!--        {{item}}-->
        <img :src="item.icon" alt="">
        {{item.name}}</p>
      <!--       <p><img :src="services[1].icon" alt="">{{services[1].name}}</p>-->
      <!--       <p><img :src="services[1].icon" alt="">{{services[2].name}}</p>-->
      <!--       <p><img :src="services[1].icon" alt="">{{services[3].name}}</p>-->
    </div>
    <div class="shop">
      <div class="shop-logo">
        <div class="shop-img">
          <img :src="shopLogo" alt="">
        </div>
        <p class="shop-shopName">{{shopName}}</p>
      </div>
      <div class="score">
        <div>
          <div>
            <p class="score-num">{{totalSell}}</p>
            <p>总销量</p>
          </div>
          <div class="border">
            <p class="score-num">{{totalGoods}}</p>
            <p>全部宝贝</p>
          </div>
        </div>
        <div>
          <div v-for="item in score">{{item.name}}&nbsp;&nbsp;&nbsp;{{item.score.toFixed(2)}}
            <span v-if="item.score>=4.9" class="score-color-height">高</span>
            <span v-else-if="item.score<=4.5" class="score-color-low">低</span>
            <span v-else class="score-color">平</span>
          </div>
        </div>
      </div>
      <button class="in-shop">进店逛逛</button>
    </div>
    <div class="bottom-button">
      <div>
        <span>客服</span><span>店铺</span><span>收藏</span>
      </div>
      <div class="btn">
        <button class="btn1" @click="addInCart">加入购物车</button>
        <button class="btn2">购买</button>
      </div>
    </div>
    <div>
    </div>
    <img class="detailImage" v-for="item in detailImage" :src="item" alt="">
  </div>
</template>

<script>
  export default {
    name: "GoodsDetail",
    components: {
      // GoodsDetailItem,
      // Swiper
    },
    props: {
      goodsDetail: {
        type: Array,
        // default: {}
      },
      title: null,
      price: null,
      columns: {
        type: Array,
        default: []
      },
      shopName: null,
      services: {
        type: Array,
        default: []
      },
      detailImage: {
        type: Array,
        default: []
      },
      shopLogo: null,
      score: {
        type: Array,
        default: []
      },
      totalSell: null,
      totalGoods: null,
      shopCart: {}
    },
    data() {
      return {
        scoreLevel: '中',
        scoreColor: {
          type: String,
          default: 'green'
        }
      }
    },
    computed() {

    },
    methods: {
      addInCart(){
        this.$store.dispatch('addCart',this.shopCart)
        console.log(this.shopCart)
        console.log('添加')
      }
    },

  }
</script>

<style scoped>
  .title {
    font-size: 20px;
    font-weight: 500;
    font-family: 新宋体;
    padding: 8px 2px;
  }

  .price {
    color: #ff8198;
    font-size: 30px;
    padding: 5px 0;
  }

  .columns, .services {
    display: flex;
    text-align: center;
    padding: 20px 0;
  }

  .columns > p, .services > p {
    flex: 1;
  }

  .services > p {
    line-height: 20px;
    font-size: 13px;
    text-align: center;
    /*display: flex;*/
    /*align-items: center;*/
    /*transform: translateY(-2px);*/
  }

  .services > p > img {
    width: 18%;
  }

  .border > p {
    border-right: 2px solid #ccc;
  }

  .shop {
    width: 100vw;
    height: 40vh;
    text-align: center;
    position: relative;
  }

  .shop-logo {
    display: flex;
    align-items: center;
  }

  .shop-img img {
    width: 100%;
  }

  .shop-img {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 1px #ccc;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
  }

  .shop-shopName {
    padding-left: 10px;
    font-size: 25px;
    font-weight: 500;
  }

  .in-shop {
    border: none;
    line-height: 30px;
    border-radius: 6px;
    width: 140px;
  }

  .score {
    display: flex;
  }

  .score > div:first-child {
    padding-top: 20px;
    display: flex;
    width: 50%;
  }

  .score > div:first-child > div {
    flex: 1;
    text-align: center;
  }

  .score > div:last-child {
    /*padding-top: 20px;*/
    line-height: 35px;
    width: 50%;
    text-align: left;
    /*border-left: 2px solid #ccc;*/
    padding-left: 5px;
  }


  .score-num {
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  .bottom-button {
    height: 49px;
    width: 100vw;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 4;
    display: flex;
    flex-flow: row wrap;
    clear: both;
    text-align: center;
  }

  .bottom-button > div:first-child {
    line-height: 49px;

  }

  span {
    padding: 0 10px;
  }

  button {
    border: none;

  }

  .btn {
    height: 100%;
    position: absolute;
    right: 0;
  }

  .btn1 {
    height: 100%;
    background-color: yellow;
    padding: 0 5px;


  }

  .btn2 {
    height: 100%;
    width: 80px;
    background-color: #ff8198;
  }

  .detailImage {
    width: 100%;
  }

  .score-color-height {
    color: #fff;
    background-color: red;
  }

  .score-color-low {
    color: #fff;
    background-color: green;
  }

  .score-color {
    color: #fff;
    background-color: var(--color-text);
  }
</style>
