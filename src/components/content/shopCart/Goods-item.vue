<template>
  <div class="goods-item">
    <div class="item" v-for="(item,index) in cartList">
      <div>
        <p class="clear-fix">{{item.name}}&nbsp;></p>
        <div class="cart">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="right">
            <span class="title">{{item.title}}</span>
            <p class="price">{{item.price}}</p>

            <div class="btn">
              <button @click="decrementNum(index)">-</button>
              <span class="num">x{{item.num}}</span>
              <button @click="incrementNum(index)">+</button>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "Goods-item",
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'cartList',

      ])
    },
    methods: {
      decrementNum(newNum) {
        console.log('--')
        return this.$store.commit('decrement', newNum)
      },
      incrementNum(newNum) {
        console.log('++')
        console.log(newNum)
        return this.$store.commit('increment', newNum)
      },
    }
  }
</script>

<style scoped>
  .goods-item {
    /*width: 90vw;*/
    margin-top: 48px;
    /*margin: 0 auto;*/

  }

  p {
    font-size: 16px;
    font-weight: 600;
    font-family: "微软雅黑 Light";
    padding: 5px 2px;
  }

  .item {
    width: 95vw;
    height: 155px;
    border-radius: 10px;
    margin: 5px auto 0;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #ccc, -1px -1px -1px #ccc;
  }

  img {
    width: 100%;
  }

  button {
    width: 30px;
    height: 22px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ccc;
  }

  .cart {
    display: flex;
  }

  .img {
    width: 50vw;
    padding: 2px 5px;
    border-radius: 15px;
    overflow: hidden;
  }

  .title {
    text-overflow: ellipsis;
    /*white-space: nowrap*/
  }

  .price {
    color: #ff8198;

  }

  .right {
    position: relative;
  }

  .btn {
    position: absolute;
    right: 15px;
  }

  .num {
    padding: 0 5px;
  }
</style>
