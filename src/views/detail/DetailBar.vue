<template>
  <div>
    <NavBar>
      <template v-slot:left>
        <span @click="back">&lt;</span>
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(item,index) in titles" :class="[currentIndex===index?'active':'']" @click="itemClick(index)">
            {{item}}
          </div>
        </div>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";

  export default {
    name: "DetailBar",
    components: {
      NavBar,

    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
      }
    },
    mounted() {},
    methods: {
      back() {
        this.$router.back()
        // console.log('back')
      },
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      },
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    clear: both;
  }

  .title > div {
    flex: 1;
  }

  span {
    text-align: center;
  }

  .active {
    border-bottom: 2px solid var(--high-light);
    color: var(--high-light);
  }

</style>
