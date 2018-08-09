<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
          <div class="swiper-slide" v-for="slider in recommendList">
            <a :href="slider.linkUrl">
              <img :src="slider.picUrl" alt="">
            </a>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "slider",
    props:{
      recommendList:Array
    },
    data() {
      return {
        swiperOption: {
          autoplay:{
            disableOnInteration:false,
            delay:2000
          },
          speed:800,
          loop:true,
          direction : 'horizontal',
          pagination:{
            el: '.swiper-pagination',
            clickable:true
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  }
</script>

<style lang="stylus">
.swiper-slide a
  display: block
  img
    width: 100%
.swiper-pagination
  bottom:10px
  z-index: 9999;
  .swiper-pagination-bullet-active
    width:20px
    border-radius 5px
    opacity 1!important
  .swiper-pagination-bullet
    opacity .8
    background: #eee
    margin 0 5px


</style>