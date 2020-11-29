<template>
<div class="popular">
  <h2>{{clickValue}}</h2>
</div>
</template>

<script>
  import {getCategorydata} from "@/network/category";

  export default {
    name: "Popular",
    data(){
      return{
        clickValue:null
      }
    },
    created() {
      getCategorydata().then(res=>{
        console.log(res)
        console.log(window.location.href)
        console.log(this.refererCode = this.$route.query.refererCode)
      })
    },
    methods:{

    }

  }
</script>

<style scoped>
.popular{
  width: 100%;
  background-color: lightblue;
}
</style>
