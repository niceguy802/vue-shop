<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :class="[currentIndex===index?'active':'']" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0,

      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    },
    props: {
      titles: {
        type: Array,
        default:[]
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    background-color: var(--color-background);
  }

  .tab-control-item {
    flex: 1;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }

  span {
    padding-bottom: 3px;

  }

  .active span {
    border-bottom: 2px solid var(--high-light);
    color: var(--high-light);
  }
</style>
