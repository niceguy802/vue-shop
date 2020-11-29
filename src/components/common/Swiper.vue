<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <slot name="slot-swiper"></slot>
  </div>
</div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    props:{
      banner:{
        type:Array,
        default:[]
      }
    },
    updated() {
      var mySwiper=new Swiper('.swiper-container',{
        autoplay:true,
        loop:true
      })
    },
    computed:{}

  }
</script>

<style scoped>
  .swiper-container{
    width:100%;
    /*height:300px*/
    margin-top: 44px;
  }
.swiper-container img{width: 100%}
</style>
