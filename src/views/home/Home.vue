<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <Swiper>
      <template v-slot:slot-swiper>
        <div class="swiper-slide" v-for="item in bannerList">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </div>
      </template>
    </Swiper>
    <!--    <推荐></推荐>-->
    <TabControl :titles="titles" class="tab-control" @tabClick="tabClick"></TabControl>
    <!--    <tab-control></tab-control>-->
    <GoodsList :goods="goods[currentType].list"></GoodsList>

  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import {getHomeMultidata, getHomeGoods} from "@/network/home";
  import Swiper from "@/components/common/Swiper";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper,
      TabControl,
      GoodsList
    },
    data() {
      return {
        //轮播图片
        bannerList: null,
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop'
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      this.tabBar()
      console.log(this.goods)

    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res)
          console.log('1212')
          this.bannerList = res.data.banner.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list = res.data.list
          console.log(res)

          // this.goods[type].list.push(...res.data.list)
        })
      },
      tabClick(index) {
        this.currentType = ['pop', 'new', 'sell'][index]
        console.log(this.currentType)
      },
      tabBar() {
        this.$store.commit('tabBarIsChange', true)
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: #fff;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  img {
    width: 100%;
  }
</style>
