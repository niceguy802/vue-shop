<template>
  <div class="shop-cart">
    <div class="money-cart">
      <div class="check">
        <input type="checkbox" class="checkbox">全选
      </div>
      <div class="money">
        合计:<span>&yen;{{totalMoney}}</span>
      </div>
      <button type="primary">结算</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "ShopCart-item",
    data() {
      return {
        money: 0
      }
    },
    computed: {
      ...mapGetters([
        'totalMoney'

      ])
    },
    methods: {}
  }
</script>

<style scoped>

  .shop-cart {
    width: 100vw;
  }

  .money-cart {
    position: fixed;
    width: 100%;
    bottom: 49px;
    display: flex;
    justify-items: center;
    /*align-items: center;*/
    line-height: 43px;
    font-size: 16px;
    font-weight: 500;
    padding: 5px 0;
    border-top: 1px solid #e0dede;
    border-bottom: 1px solid #e0dede;
    /*background-color: #e0dede;*/
  }

  .check {
    padding-left: 2vw;
  }

  .money {
    padding-left: 25vw;
  }

  span {
    color: #FF8198;
  }

  button {
    position: absolute;
    width: 100px;
    height: 40px;
    right: 0;
    border: none;
    border-radius: 15px;
    color: #fff;
    background-color: #FF8198;
  }

</style>
